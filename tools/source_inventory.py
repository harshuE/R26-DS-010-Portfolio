from __future__ import annotations

import json
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

import fitz
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
NS = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}


def pdf_info(path: Path) -> dict:
    doc = fitz.open(path)
    return {
        "path": str(path.relative_to(ROOT)),
        "bytes": path.stat().st_size,
        "pages": len(doc),
        "title": doc.metadata.get("title") or "",
        "page_samples": [
            " ".join(doc[i].get_text("text").split())[:280]
            for i in range(min(5, len(doc)))
        ],
    }


def pptx_info(path: Path) -> dict:
    with zipfile.ZipFile(path) as archive:
        slides = sorted(
            (name for name in archive.namelist() if name.startswith("ppt/slides/slide") and name.endswith(".xml")),
            key=lambda name: int(Path(name).stem.replace("slide", "")),
        )
        slide_text = []
        for slide in slides:
            root = ET.fromstring(archive.read(slide))
            texts = [node.text or "" for node in root.findall(".//a:t", NS)]
            slide_text.append(" ".join(texts))
    return {
        "path": str(path.relative_to(ROOT)),
        "bytes": path.stat().st_size,
        "slides": len(slides),
        "slide_text": slide_text,
    }


def image_info(path: Path) -> dict:
    with Image.open(path) as image:
        return {
            "path": str(path.relative_to(ROOT)),
            "bytes": path.stat().st_size,
            "width": image.width,
            "height": image.height,
            "format": image.format,
        }


inventory = {
    "pdfs": [pdf_info(p) for p in sorted((ROOT / "Caresense Doc").glob("*.pdf"))],
    "presentations": [pptx_info(p) for p in sorted((ROOT / "Caresense Doc").glob("*.pptx"))],
    "images": [image_info(p) for p in sorted((ROOT / "Photos").glob("*")) if p.is_file()],
}
print(json.dumps(inventory, indent=2, ensure_ascii=False))
