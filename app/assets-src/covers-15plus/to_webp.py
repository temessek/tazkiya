"""Colour-to-alpha the chosen cover options against the cream paper, crop and save as small WebP."""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

HERE = Path(__file__).parent
OUT = HERE.parent.parent / "assets" / "vignettes"
PAIRS = {"a2-hourglass.png": "book-monkey-adult.webp", "b2-pizza-fractions.png": "book-human-adult.webp"}


def convert(src, dst, width=320):
    src_im = Image.open(src).convert("RGB")
    rgb = np.asarray(src_im).astype(np.float32)
    h, w, _ = rgb.shape
    # local paper colour: the lightest tone nearby (max filter on a small copy), smoothed
    small = src_im.resize((w // 8, h // 8), Image.BOX).filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(6))
    bg = np.asarray(small.resize((w, h), Image.BILINEAR)).astype(np.float32)
    diff = np.minimum(rgb - bg, 0)  # only what is darker than the paper is paint
    span = np.where(diff > 0, 255 - bg, bg)
    alpha = np.max(np.abs(diff) / np.maximum(span, 1), axis=2)
    alpha = np.clip((alpha - 0.08) / 0.92, 0, 1)  # drop paper grain
    a = np.maximum(alpha, 1e-3)[..., None]
    col = np.clip(bg + diff / a, 0, 255)
    rgba = np.dstack([col, alpha * 255]).astype(np.uint8)
    im = Image.fromarray(rgba)
    soft = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(12))
    box = soft.point(lambda v: 255 if v > 30 else 0).getbbox()
    x0, y0, x1, y1 = box
    im = im.crop((max(0, x0 - 24), max(0, y0 - 24), min(w, x1 + 24), min(h, y1 + 24)))
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    for q in (72, 64, 56, 48):
        im.save(dst, "WEBP", quality=q, method=4)
        if dst.stat().st_size <= 40_000:
            break
    print(dst.name, im.size, dst.stat().st_size, "q", q)


for s, d in PAIRS.items():
    convert(HERE / s, OUT / d)
