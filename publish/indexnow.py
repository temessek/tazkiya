"""Tell the IndexNow search engines (Bing, Yandex and the others that share it) that the site's pages changed.
Run after a deploy:  python outputs/publish/indexnow.py
It reads the live sitemap, so it sends exactly the pages that are published. The key file sits at the site root.
"""
import glob, json, os, re, sys, urllib.request

SITE = "https://tazkiya.family"
APP = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "app")
keys = [os.path.basename(p)[:-4] for p in glob.glob(os.path.join(APP, "*.txt")) if re.fullmatch(r"[0-9a-f]{32}\.txt", os.path.basename(p))]
if len(keys) != 1: sys.exit(f"indexnow: expected one key file in app/, found {len(keys)}")
key = keys[0]

req = urllib.request.Request(SITE + "/sitemap.xml", headers={"User-Agent": "tazkiya-indexnow"})
urls = re.findall(r"<loc>(.*?)</loc>", urllib.request.urlopen(req, timeout=30).read().decode("utf-8"))
if not urls: sys.exit("indexnow: the live sitemap lists no pages")

body = json.dumps({"host": "tazkiya.family", "key": key, "keyLocation": f"{SITE}/{key}.txt", "urlList": urls}).encode("utf-8")
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=body, method="POST",
                             headers={"Content-Type": "application/json; charset=utf-8", "User-Agent": "tazkiya-indexnow"})
try:
    r = urllib.request.urlopen(req, timeout=30)
    print(f"indexnow: {r.status} for {len(urls)} pages")
except urllib.error.HTTPError as e:
    sys.exit(f"indexnow: HTTP {e.code} {e.read().decode('utf-8', 'replace')[:300]}")
