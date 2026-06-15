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

This repository is deployed from the repository root by `.github/workflows/pages.yml`.

Pages URL:

```text
https://zeason32-cloud.github.io/Wadang-Designer/
```

Debug URL:

```text
https://zeason32-cloud.github.io/Wadang-Designer/index.html?debug=true
```

## Scope

This repository keeps only the text-layout designer surface. Image relief, rubbing, AI reconstruction, publishing, and reservation endpoints are disabled in the standalone service.
