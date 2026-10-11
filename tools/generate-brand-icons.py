"""Generate CareSense browser and device icons from the canonical mark geometry."""
from pathlib import Path
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parents[1] / "assets" / "branding"
SCALE = 4


def draw_mark(size: int) -> Image.Image:
    canvas = size * SCALE
    image = Image.new("RGBA", (canvas, canvas), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    factor = canvas / 40

    def box(values):
        return tuple(round(v * factor) for v in values)

    draw.rounded_rectangle(box((0, 0, 40, 40)), radius=round(11 * factor), fill="#0d1b24")
    centre = (round(20 * factor), round(20 * factor))
    nodes = [
        ((9, 9), "#0c8fa3"),
        ((31, 9), "#0f9483"),
        ((9, 31), "#6c54d6"),
        ((31, 31), "#c96a2e"),
    ]
    for (x, y), colour in nodes:
        point = (round(x * factor), round(y * factor))
        draw.line((centre, point), fill=colour, width=max(1, round(1.4 * factor)))
        r = 3 * factor
        draw.ellipse((point[0] - r, point[1] - r, point[0] + r, point[1] + r), fill=colour)

    r = 7.5 * factor
    draw.ellipse((centre[0] - r, centre[1] - r, centre[0] + r, centre[1] + r), fill="#0b8fa0")
    pulse = [(13, 20), (16.4, 20), (18, 16), (20.4, 24), (22, 20), (26, 20)]
    draw.line([(round(x * factor), round(y * factor)) for x, y in pulse], fill="#ffffff",
              width=max(1, round(1.6 * factor)), joint="curve")
    return image.resize((size, size), Image.Resampling.LANCZOS)


OUT.mkdir(parents=True, exist_ok=True)
for icon_size, filename in [
    (16, "favicon-16x16.png"),
    (32, "favicon-32x32.png"),
    (180, "apple-touch-icon.png"),
    (192, "android-chrome-192x192.png"),
    (512, "android-chrome-512x512.png"),
]:
    draw_mark(icon_size).save(OUT / filename, optimize=True)

draw_mark(256).save(OUT / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print(f"Generated CareSense icons in {OUT}")
