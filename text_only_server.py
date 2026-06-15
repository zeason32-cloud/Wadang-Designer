#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial
import json
from pathlib import Path
import socket
import sys


PROJECT_ROOT = Path(__file__).resolve().parent
DEFAULT_LAYOUT_CANDIDATES = [
    PROJECT_ROOT / "ring-text-layout-3.json",
]
LAYOUT_DIR_CANDIDATES = [
    PROJECT_ROOT,
]
SERVER_HOST = "127.0.0.1"
SERVER_PORT = 8004
DISABLED_STATIC_PATHS = {
    "/image-relief",
    "/image-relief/",
    "/image-relief.html",
    "/image-relief.css",
    "/image-relief.js",
    "/prep-flow.css",
    "/prep-flow.js",
}
DISABLED_API_PATHS = {
    "/__deepseek-page-intro",
    "/__deepseek-wadang-message",
    "/__image-relief-da3",
    "/__da3-native-reconstruction",
    "/__da3-gaussian-splat",
    "/__ml-sharp-gaussian",
    "/__sam3-subject-mask",
    "/__save-mounted-wadang",
    "/__publish-wadang-ugc",
    "/__reserve-wadang-making",
    "/__publish-wadang4",
}


def resolve_default_layout_path() -> Path:
    for candidate in DEFAULT_LAYOUT_CANDIDATES:
        if candidate.exists():
            return candidate
    return DEFAULT_LAYOUT_CANDIDATES[0]


def get_lan_ip() -> str | None:
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
            sock.connect(("8.8.8.8", 80))
            return sock.getsockname()[0]
    except OSError:
        return None


def make_placeholder_qr_svg(text: str) -> str:
    escaped = (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="局域网访问地址">'
        '<rect width="240" height="240" rx="18" fill="#fffdf7"/>'
        '<rect x="20" y="20" width="200" height="200" rx="12" fill="none" stroke="#1d1b18" stroke-width="4"/>'
        '<text x="120" y="108" text-anchor="middle" font-size="18" fill="#1d1b18">Text only</text>'
        f'<text x="120" y="136" text-anchor="middle" font-size="11" fill="#6d6258">{escaped}</text>'
        "</svg>"
    )


class TextOnlyHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path in DISABLED_STATIC_PATHS:
            self.send_error(404, "Disabled in text-only service")
            return
        if path == "/__list-layouts":
            self.handle_list_layouts()
            return
        if path == "/__network-info":
            self.handle_network_info()
            return
        super().do_GET()

    def do_HEAD(self):
        path = self.path.split("?", 1)[0]
        if path in DISABLED_STATIC_PATHS:
            self.send_error(404, "Disabled in text-only service")
            return
        super().do_HEAD()

    def do_POST(self):
        path = self.path.split("?", 1)[0]
        if path == "/__save-default-layout":
            self.handle_save_default_layout()
            return
        if path in DISABLED_API_PATHS:
            self.send_json(404, {"ok": False, "error": "文字版轻服务已禁用该功能"})
            return
        self.send_json(404, {"ok": False, "error": "文字版轻服务不提供该接口"})

    def send_json(self, status: int, payload: dict):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json;charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_list_layouts(self):
        try:
            default_path = resolve_default_layout_path().resolve()
            items = []
            seen = set()
            for directory in LAYOUT_DIR_CANDIDATES:
                for path in sorted(directory.glob("*.json"), key=lambda item: (item.name != "ring-text-layout-3.json", item.name)):
                    resolved = path.resolve()
                    if resolved in seen:
                        continue
                    seen.add(resolved)
                    relative_url = f"./{path.name}"
                    items.append(
                        {
                            "name": path.name,
                            "url": relative_url,
                            "isDefault": resolved == default_path,
                        }
                    )
            self.send_json(200, {"ok": True, "items": items})
        except Exception as error:
            self.send_json(500, {"ok": False, "error": str(error)})

    def handle_network_info(self):
        try:
            lan_ip = get_lan_ip()
            local_url = f"http://127.0.0.1:{SERVER_PORT}/index.html"
            lan_url = f"http://{lan_ip}:{SERVER_PORT}/index.html" if lan_ip else None
            current_url = f"http://{self.headers.get('Host', f'127.0.0.1:{SERVER_PORT}')}/index.html"
            lan_exposed = bool(lan_url and SERVER_HOST in ("", "0.0.0.0", "::", lan_ip))
            preferred_url = lan_url if lan_exposed else current_url
            self.send_json(
                200,
                {
                    "ok": True,
                    "bindHost": SERVER_HOST,
                    "port": SERVER_PORT,
                    "localUrl": local_url,
                    "lanIp": lan_ip,
                    "lanUrl": lan_url,
                    "lanExposed": lan_exposed,
                    "currentUrl": current_url,
                    "preferredUrl": preferred_url,
                    "qrSvg": make_placeholder_qr_svg(preferred_url),
                },
            )
        except Exception as error:
            self.send_json(500, {"ok": False, "error": str(error)})

    def handle_save_default_layout(self):
        try:
            length = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(length)
            data = json.loads(body.decode("utf-8-sig"))
            resolve_default_layout_path().write_text(
                "\ufeff" + json.dumps(data, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
            self.send_json(200, {"ok": True})
        except Exception as error:
            self.send_json(400, {"ok": False, "error": str(error)})


def main() -> int:
    global SERVER_HOST, SERVER_PORT
    SERVER_PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8004
    SERVER_HOST = sys.argv[2] if len(sys.argv) > 2 else "127.0.0.1"
    handler = partial(TextOnlyHandler, directory=str(PROJECT_ROOT))
    server = ThreadingHTTPServer((SERVER_HOST, SERVER_PORT), handler)
    display_host = "127.0.0.1" if SERVER_HOST in ("", "0.0.0.0") else SERVER_HOST
    print(f"Serving 瓦当设计器文字版 at http://{display_host}:{SERVER_PORT}/index.html?debug=true")
    print("仅提供静态文件、配置列表、默认配置保存和局域网信息；不加载 AI/图片浮雕/发布服务。")
    server.serve_forever()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
