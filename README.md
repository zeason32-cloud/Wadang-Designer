# Wadang Designer

Text-only Wadang designer for the `debug=true` workflow.

## Run Locally

```bash
python3 text_only_server.py 8004 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8004/index.html?debug=true
```

## GitHub Pages

This repository is deployed from the repository root of the `main` branch.

Pages URL:

```text
https://zeason32-cloud.github.io/Wadang-Designer/
```

Debug URL:

```text
https://zeason32-cloud.github.io/Wadang-Designer/index.html?debug=true
```

## Features

- Ring text layout with live 2D preview and Three.js 3D relief preview.
- Unified in-flow action bar (match text · auto-match · export resolution · export STL) shared by the simplified and debug views — no floating controls.
- Per-character glyph proportion: each ring slot has its own width / height scale (0.5–4×) on top of the global scale, applied to the 2D preview, 3D relief, and STL export.
- Browser-side STL export of the generated relief.
- Import / save JSON layout configs (per-character settings are persisted).

## Scope

This repository keeps only the text-layout designer surface. Image relief, rubbing, AI reconstruction, publishing, and reservation endpoints are disabled in the standalone service.
