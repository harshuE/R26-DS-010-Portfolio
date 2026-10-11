import pathlib

import fitz
from PIL import Image, ImageDraw

pdf_path = pathlib.Path("Website.pdf")
output_dir = pathlib.Path("tmp/pdfs/website-guide")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(pdf_path)
print(f"pages {len(document)}")
thumbs = []
for page_number, page in enumerate(document, start=1):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(0.45, 0.45), alpha=False)
    image_path = output_dir / f"page-{page_number:03}.png"
    pixmap.save(image_path)
    thumbs.append((page_number, Image.open(image_path).convert("RGB")))

sheet_width = 900
cell_width = 300
cell_height = max(image.height for _, image in thumbs) + 34
row_count = (len(thumbs) + 2) // 3
sheet = Image.new("RGB", (sheet_width, row_count * cell_height), "white")
draw = ImageDraw.Draw(sheet)
for index, (page_number, image) in enumerate(thumbs):
    x = (index % 3) * cell_width
    y = (index // 3) * cell_height
    sheet.paste(image, (x, y + 24))
    draw.text((x + 8, y + 5), f"Page {page_number}", fill="black")

sheet.save(output_dir / "contact-sheet.jpg", quality=88)
