"""The adult share page (outputs/app/adult/index.html) is the app itself: a copy of index.html with the adult
edition's title and preview tags and <base href="/">, so every file is the same cached file and there is no
redirect. app.js reads the edition from the /adult/ path. build_public.py runs this before copying; run it
directly after editing index.html (the smoke test checks that the two pages load the same files).
"""
import os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app")

ADULT_META = """<title>تزكية للكبار</title>
<meta name="description" content="تزكية للكبار: مسار للارتقاء بالسلوك والأخلاق، من الغفلة إلى السبق بالخيرات، بأمثلة من العمل والبيت والعبادة. Tazkiya for adults: a path of growth in behaviour and character.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="تزكية · Tazkiya">
<meta property="og:title" content="تزكية للكبار · Tazkiya for adults">
<meta property="og:description" content="من الغفلة إلى السبق بالخيرات، بأمثلة من العمل والبيت والعبادة. From heedlessness to racing ahead in good.">
<meta property="og:url" content="https://tazkiya.pages.dev/adult/">
<meta property="og:image" content="https://tazkiya.pages.dev/assets/og-image-adult.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="يد مرسومة بالألوان المائية: تزكية للكبار · A watercolour hand: Tazkiya for adults">
<meta property="og:locale" content="ar_AR">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="تزكية للكبار · Tazkiya for adults">
<meta name="twitter:description" content="من الغفلة إلى السبق بالخيرات، بأمثلة من العمل والبيت والعبادة. From heedlessness to racing ahead in good.">
<meta name="twitter:image" content="https://tazkiya.pages.dev/assets/og-image-adult.jpg">
"""

def adult_html(index_html):
    h = index_html
    # the block from <title> to the last twitter: tag is the kids' preview; replace it whole
    m = re.search(r"<title>.*?</title>\n(?:<meta (?:name=\"description\"|property=\"og:|name=\"twitter:)[^\n]*\n)+", h, re.S)
    if not m: raise SystemExit("adult_page: preview block not found in index.html")
    h = h[:m.start()] + ADULT_META + h[m.end():]
    if "<base " in h: raise SystemExit("adult_page: index.html already has a <base>")
    h = h.replace('<meta charset="utf-8">\n', '<meta charset="utf-8">\n<base href="/">\n', 1)
    return h

def write():
    src = open(os.path.join(APP, "index.html"), encoding="utf-8").read()
    out = adult_html(src)
    p = os.path.join(APP, "adult", "index.html")
    old = open(p, encoding="utf-8").read() if os.path.exists(p) else ""
    if old != out:
        open(p, "w", encoding="utf-8", newline="\n").write(out)
    return p

if __name__ == "__main__":
    print("written:", write())
