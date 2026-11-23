"""Build the public web-app folder (outputs/public-dist) from outputs/app.
Copies only what the app loads; never docs, tests, sources, screenshots or *.pre-*.js.
Deploy (wrangler pinned to its major version, so a new release is never fetched unasked):
  npx wrangler@4 pages deploy outputs/public-dist --project-name tazkiya --branch main --commit-dirty=true
"""
import os, re, shutil, subprocess, sys
try: sys.stdout.reconfigure(errors="replace")
except Exception: pass
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP, OUT, PUB = os.path.join(ROOT, "app"), os.path.join(ROOT, "public-dist"), os.path.join(ROOT, "publish")
sys.path.insert(0, PUB)
import adult_page  # the adult page is generated from index.html (D3)
adult_page.write()

CANON = "https://tazkiya.family/"
FILES = ["index.html", "404.html", "boot.js", "styles.css", "app.js", "fx.js", "intro.js", "fallback.js", "sw.js", "manifest.json",
         "content/content.js", "content/content-adult.js", "content/books.js", "adult/index.html", "parents/index.html"]
MINIFY = ["app.js", "fx.js", "intro.js", "styles.css"]  # minified on publish only; the source stays readable with no build step

# QR codes for the two public links, drawn once here (no request to any service) and shown in the share sheet
def qr_svgs():
    import qrcode, qrcode.image.svg
    for ed, url in (("kids", CANON), ("adult", CANON + "adult/")):
        q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=10, border=2)
        q.add_data(url); q.make(fit=True)
        m = q.get_matrix(); n = len(m)
        path = "".join(f"M{x} {y}h1v1h-1z" for y, row in enumerate(m) for x, v in enumerate(row) if v)
        svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges">'
               f'<rect width="{n}" height="{n}" fill="#fff"/><path fill="#24364b" d="{path}"/></svg>\n')
        p = os.path.join(APP, "assets", f"qr-{ed}.svg")
        if not os.path.exists(p) or open(p, encoding="utf-8").read() != svg:
            open(p, "w", encoding="utf-8", newline="\n").write(svg)
qr_svgs()

def clear(d):
    # a folder held open by another program (an editor, a preview) must not stop the build: empty what can be emptied
    if not os.path.isdir(d): return
    try: shutil.rmtree(d)
    except OSError:
        shutil.rmtree(d, ignore_errors=True)
clear(OUT)
os.makedirs(OUT, exist_ok=True)
for f in FILES:
    os.makedirs(os.path.dirname(os.path.join(OUT, f)) or OUT, exist_ok=True)
    shutil.copy2(os.path.join(APP, f), os.path.join(OUT, f))
shutil.copytree(os.path.join(APP, "assets"), os.path.join(OUT, "assets"), dirs_exist_ok=True)

# G1.1: minify with a pinned esbuild; if it is not available the plain files stay (the build never fails for this)
def minify():
    npx = shutil.which("npx") or shutil.which("npx.cmd")
    if not npx: print("minify: npx not found, plain files kept"); return
    saved = 0
    for f in MINIFY:
        src, dst = os.path.join(APP, f), os.path.join(OUT, f)
        try:
            r = subprocess.run([npx, "-y", "esbuild@0.24.2", src, "--minify", "--legal-comments=none", "--charset=utf8", "--outfile=" + dst],
                               capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=180)
            if r.returncode != 0: raise RuntimeError(r.stderr.strip()[:300])
            saved += os.path.getsize(src) - os.path.getsize(dst)
        except Exception as e:
            shutil.copy2(src, dst); print(f"minify: {f} kept plain ({e})")
    print(f"minify: {saved // 1024} KB saved before compression")
minify()

# security headers for a static site (Cloudflare Pages). The app has no inline scripts and loads everything from
# its own origin; inline style attributes are used by the views, hence 'unsafe-inline' for styles only.
CSP = "; ".join([
    "default-src 'self'", "script-src 'self'", "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob:",
    "font-src 'self'", "connect-src 'self'", "manifest-src 'self'", "worker-src 'self'", "media-src 'self'",
    "object-src 'none'", "base-uri 'self'", "form-action 'none'", "frame-ancestors 'none'", "upgrade-insecure-requests"])
PERM = "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), hid=(), midi=(), display-capture=(), magnetometer=(), gyroscope=(), accelerometer=()"
# "! Access-Control-Allow-Origin" removes Cloudflare's default "*", so other sites cannot read the files from script (A5)
HEADERS = f"""/*
  ! Access-Control-Allow-Origin
  X-Robots-Tag: noindex, nofollow
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
  Content-Security-Policy: {CSP}
  Permissions-Policy: {PERM}
  X-Frame-Options: DENY
  Cross-Origin-Opener-Policy: same-origin
  Strict-Transport-Security: max-age=31536000
/sw.js
  Cache-Control: no-cache
/index.html
  Cache-Control: no-cache
/
  Cache-Control: no-cache
/manifest.json
  Cache-Control: no-cache
  Content-Type: application/manifest+json
/adult/*
  Cache-Control: no-cache
/parents/*
  Cache-Control: no-cache
/assets/*
  Cache-Control: public, max-age=604800
"""
open(os.path.join(OUT, "_headers"), "w", encoding="utf-8").write(HEADERS)
# search engines stay out (with noindex on every page); link-preview fetchers may read the page so a shared link shows its card
ROBOTS = """User-agent: facebookexternalhit
User-agent: Facebot
User-agent: Twitterbot
User-agent: WhatsApp
User-agent: TelegramBot
User-agent: Slackbot-LinkExpanding
User-agent: LinkedInBot
User-agent: Discordbot
Allow: /

User-agent: *
Disallow: /
"""
open(os.path.join(OUT, "robots.txt"), "w", encoding="utf-8").write(ROBOTS)

# privacy gate: no private names, paths or contacts in the public build. Extra private terms (names that must never
# appear) come from publish/private-terms.txt, a local file that is never published (A4)
TERMS = os.path.join(PUB, "private-terms.txt")
extra = [l.strip() for l in open(TERMS, encoding="utf-8") if l.strip() and not l.lstrip().startswith("#")] if os.path.exists(TERMS) else []
# generic patterns here; owner and family terms live only in the private terms file
bad = re.compile(r"[A-Z]:\\Users|/Users/|@gmail\.com" +"".join("|" + re.escape(x) for x in extra), re.I)
hits = []
for d, _, fs in os.walk(OUT):
    for f in fs:
        p = os.path.join(d, f)
        if f.endswith((".js", ".html", ".json", ".css", ".txt", ".svg")) or f == "_headers":
            t = open(p, encoding="utf-8").read()
            hits += [f"{f}: {m.group(0)}" for m in bad.finditer(t)]
        elif f.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            # images: no EXIF or XMP (camera, place, author, software paths)
            from PIL import Image
            with Image.open(p) as im:
                if len(im.getexif()) or "xmp" in im.info or "XML:com.adobe.xmp" in im.info or "exif" in im.info:
                    hits.append(f"{f}: image metadata (EXIF/XMP)")
if hits: sys.exit("privacy gate failed: " + "; ".join(hits[:10]))
n = sum(len(fs) for _, _, fs in os.walk(OUT))
print(f"public-dist ready: {n} files ({len(extra)} private terms checked)")
