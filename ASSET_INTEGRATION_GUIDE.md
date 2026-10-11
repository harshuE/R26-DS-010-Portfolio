# Asset Integration Guide

The site has one content source, `js/content.js`, and package-safe assets are copied into `dist/` by `tools/build.ps1`.

## Add a photograph

1. Keep the original in `Photos/`.
2. Create a publication-approved copy in `assets/images/` with a descriptive lowercase filename.
3. Add its `src`, title and caption to `CARE.gallery` in `js/content.js`.
4. Update `ASSET_MANIFEST.md`, rebuild, and test the lightbox and mobile crop.

## Add a video

1. Put a compressed poster in `assets/video-posters/` and a caption file in `assets/media/`.
2. Prefer a package-safe MP4 only if the complete `dist/` remains under 20 MB.
3. Add a semantic `<video controls poster="…"><track kind="captions" …></video>` block to the relevant renderer in `js/app.js`.
4. Never label illustrative stock media as CareSense research footage.

## Add a PDF or presentation

1. Keep the source document in `Caresense Doc/`.
2. Copy the approved publication version into `publications/` with a descriptive filename.
3. Add or update the item in `CARE.documents` in `js/content.js`.
4. Rebuild and confirm that every `Open` link returns the correct file.

## Update a research result

1. Compare the new source with the revised paper and PP2.
2. Update the component `metric`, `metricLabel`, `result` and `limits` fields in `js/content.js` together.
3. Record the source and discrepancy decision in `CONTENT_AUDIT.md`.
4. Do not replace a value when the new result uses a different dataset or protocol; present both with their conditions.

## Add an architecture diagram

Use editable HTML/SVG in the component renderer when the source flow is unambiguous. Put image-only diagrams in `assets/diagrams/`, supply descriptive alternative text, and label reconstructions. Rebuild with `powershell -ExecutionPolicy Bypass -File .\tools\build.ps1`.
