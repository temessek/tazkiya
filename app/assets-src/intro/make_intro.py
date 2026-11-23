"""Builds the intro's web images from the Codex frames (run from anywhere: python make_intro.py).
Scenes -> assets/intro/s*.webp (900 px squares). Symbol layers -> assets/intro/ov-*.webp with the cream paper keyed to
transparency, so they can drift over the hand."""
import os
from PIL import Image, ImageFilter
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "..", "assets", "intro"))
VIG = os.path.normpath(os.path.join(HERE, "..", "vignettes"))
os.makedirs(OUT, exist_ok=True)
SIZE = 900


def scene(src, dst, fix=None):
    im = Image.open(os.path.join(HERE, src)).convert("RGB")
    if fix: im = fix(im)
    im = im.resize((SIZE, SIZE), Image.LANCZOS)
    im.save(os.path.join(OUT, dst), "WEBP", quality=78, method=6)


def clean_child(im):
    # f2-shadows.png: the approved clean child hand with two small sample symbols left of its fingertips; cover them
    # with empty paper from above, in rectangles that stop short of the fingertips, feathered so the grain continues
    a = np.asarray(im).copy()
    out = a.copy()
    mask = Image.new("L", im.size, 0)
    for x0, y0, x1, y1 in [(70, 392, 199, 532), (80, 532, 200, 702), (196, 555, 222, 662), (196, 438, 218, 478)]:
        h = y1 - y0
        out[y0:y1, x0:x1] = a[40:40 + h, x0:x1]
        mask.paste(255, (x0, y0, x1, y1))
    mask = mask.filter(ImageFilter.GaussianBlur(3))
    return Image.composite(Image.fromarray(out), im, mask)


def layer(src, dst, crop_pad=24, maxw=520, strength=1.0):
    im = Image.open(src).convert("RGB")
    a = np.asarray(im).astype(np.float32)
    # paper colour: the median of the border
    b = np.concatenate([a[:16].reshape(-1, 3), a[-16:].reshape(-1, 3), a[:, :16].reshape(-1, 3), a[:, -16:].reshape(-1, 3)])
    paper = np.median(b, axis=0)
    d = np.sqrt(((a - paper) ** 2).sum(axis=2))
    alpha = np.clip((d - 10) / 55, 0, 1) * strength
    # un-mix the paper: colour = paper + (pixel - paper) / alpha, so washes keep their hue when laid over the hand
    al = np.maximum(alpha, 1e-3)[..., None]
    rgb = np.clip(paper + (a - paper) / al, 0, 255)
    rgba = np.dstack([rgb, alpha * 255]).astype(np.uint8)
    img = Image.fromarray(rgba)
    bbox = Image.fromarray((alpha > 0.06).astype(np.uint8) * 255).getbbox()
    x0, y0, x1, y1 = bbox
    img = img.crop((max(0, x0 - crop_pad), max(0, y0 - crop_pad), min(im.width, x1 + crop_pad), min(im.height, y1 + crop_pad)))
    if img.width > maxw:
        img = img.resize((maxw, round(img.height * maxw / img.width)), Image.LANCZOS)
    img.save(os.path.join(OUT, dst), "WEBP", quality=80, method=6)
    return img.size


scene("f1-fitra.png", "s1-fitra.webp")
scene("f2b-toddler.png", "s2-toddler.webp")
scene("f2-shadows.png", "s3-child.webp", clean_child)
scene("f3-guidance-v2.png", "s4-guide.webp")
print("mist", layer(os.path.join(HERE, "ov-mist.png"), "ov-mist.webp", maxw=560))
print("plate", layer(os.path.join(VIG, "sym-pig-greed-a.png"), "ov-plate.webp"))
print("knot", layer(os.path.join(VIG, "sym-monkey.png"), "ov-knot.webp"))
for f in sorted(os.listdir(OUT)):
    print(f, os.path.getsize(os.path.join(OUT, f)) // 1024, "KB")
