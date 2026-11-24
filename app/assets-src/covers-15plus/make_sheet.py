"""Build one numbered contact sheet per book from the generated cover options."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).parent
W, H = 512, 768
PAD = 40


def sheet(prefix, out):
    files = sorted(HERE.glob(prefix + "*.png"))
    if not files:
        return None
    canvas = Image.new("RGB", (PAD + len(files) * (W + PAD), H + PAD * 3), "#FBF6EE")
    draw = ImageDraw.Draw(canvas)
    try:
        font = ImageFont.truetype("arialbd.ttf", 56)
    except OSError:
        font = ImageFont.load_default()
    for i, f in enumerate(files):
        img = Image.open(f).convert("RGB").resize((W, H), Image.LANCZOS)
        x = PAD + i * (W + PAD)
        canvas.paste(img, (x, PAD * 2))
        draw.ellipse((x + 12, PAD * 2 + 12, x + 92, PAD * 2 + 92), fill="#24364B")
        draw.text((x + 52, PAD * 2 + 52), str(i + 1), font=font, fill="white", anchor="mm")
    canvas.save(HERE / out, quality=88)
    return HERE / out


for p, o in (("a", "sheet-twenty-seconds.jpg"), ("b", "sheet-yes-two-seconds.jpg")):
    print(sheet(p, o))
