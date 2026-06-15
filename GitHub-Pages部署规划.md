# 瓦当设计器文字版依赖与 GitHub Pages 部署规划

本文面向“只发布文字瓦当设计器”的版本，不包含图片浮雕、DA3、ML-SHARP、SAM3、DeepSeek 解说和作品发布后台。

## 1. 能否单独运行

可以。文字版有两种运行方式：

### 1.1 本地轻服务

使用新增的轻服务：

```bash
python3 瓦当设计器/text_only_server.py 8004 127.0.0.1
```

访问：

```text
http://127.0.0.1:8004/index.html?debug=true
```

也可以先进入目录再启动：

```bash
cd 瓦当设计器
python3 text_only_server.py 8004 127.0.0.1
```

`text_only_server.py` 会固定以脚本所在的 `瓦当设计器/` 目录作为静态资源根目录，所以从父目录启动也不会打开到错误目录。

这个服务只提供：

- 静态文件
- `/__list-layouts`
- `/__save-default-layout`
- `/__network-info`

它不加载、不调用：

- `ai_models/`
- Depth-Anything-3
- ML-SHARP
- SAM3
- DeepSeek API
- 瓦当博览知识库
- 发布作品包和预约制作目录

### 1.2 纯静态 Pages 版

GitHub Pages 可以直接托管前端文件。可用能力：

- `index.html?debug=true`
- 字体加载
- 文字排版
- SVG 平面预览
- 3D 预览
- 拓片预览
- SVG / PNG / OBJ / STL 浏览器端导出
- 手动导入 JSON 配置
- 另存 JSON 配置

Pages 上不可用或需要改造的能力：

- `/__list-layouts`：GitHub Pages 没有目录扫描接口
- `/__save-default-layout`：Pages 不能写回仓库文件
- `/__network-info`：Pages 不需要局域网二维码接口
- `/__publish-wadang4`
- `/__publish-wadang-ugc`
- `/__reserve-wadang-making`
- `/__deepseek-wadang-message`
- `/__image-relief-da3`

## 2. 文字版依赖清单

### 2.1 浏览器运行依赖

无需 npm 构建。当前是原生 HTML/CSS/JavaScript。

必须文件：

- `index.html`
- `styles.css`
- `app.js`
- `ring-text-layout-3.json`
- `vendor/three.module.js`
- `vendor/OrbitControls.js`
- `汉仪篆书繁.TTF`

3D 预览资产：

- `assets/materials/clay001/Clay001_1K-PNG_Color.png`
- `assets/materials/clay001/Clay001_1K-PNG_AmbientOcclusion.png`
- `assets/materials/clay001/Clay001_1K-PNG_Roughness.png`
- `assets/materials/clay001/Clay001_1K-PNG_NormalGL.png`
- `assets/materials/clay001/Clay001_1K-PNG_Displacement.png`
- `assets/hdr/studio_small_08_panorama_2k.jpg`

可选配置示例：

- `watang-layout.json`
- `watang-layout-4.json`
- `长乐未央.json`
- `长乐未央2.json`
- `明德求是日新自强.json`

### 2.2 本地轻服务依赖

只依赖 Python 标准库：

- `http.server`
- `json`
- `pathlib`
- `socket`
- `sys`

入口：

- `text_only_server.py`

### 2.3 完整本地服务依赖

完整服务入口：

- `start_service.py`
- `dev_server.py`

标准库依赖：

- `http.server`
- `base64`
- `datetime`
- `json`
- `os`
- `pathlib`
- `re`
- `socket`
- `ssl`
- `subprocess`
- `sys`
- `urllib.parse`
- `urllib.request`

增强功能的外部依赖不是文字版必需项：

- Depth-Anything-3
- ML-SHARP
- SAM3
- DeepSeek API key
- 瓦当博览本地服务

## 3. 建议仓库结构

如果只发布文字版，建议 GitHub 仓库保留：

```text
瓦当设计器/
  index.html
  styles.css
  app.js
  ring-text-layout-3.json
  text_only_server.py
  vendor/
    three.module.js
    OrbitControls.js
  assets/
    hdr/studio_small_08_panorama_2k.jpg
    materials/clay001/Clay001_1K-PNG_Color.png
    materials/clay001/Clay001_1K-PNG_AmbientOcclusion.png
    materials/clay001/Clay001_1K-PNG_Roughness.png
    materials/clay001/Clay001_1K-PNG_NormalGL.png
    materials/clay001/Clay001_1K-PNG_Displacement.png
  README.md
  算法逻辑说明.md
  文字模块-debug模式结构说明.md
  GitHub-Pages部署规划.md
.gitignore
README.md
```

如果希望 GitHub Pages 根路径直接打开设计器，可额外把 `瓦当设计器/` 内容放到仓库根目录，或用 GitHub Actions 发布到 `dist/`。

## 4. GitHub Pages 部署方案

### 方案 A：直接从仓库目录发布

适合不想引入构建流程。

步骤：

1. 新建 GitHub 仓库。
2. 提交文字版核心文件。
3. 在仓库 Settings -> Pages 中选择：
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/root` 或 `/docs`
4. 如果保留 `瓦当设计器/` 子目录，则访问：

```text
https://<user>.github.io/<repo>/瓦当设计器/index.html?debug=true
```

注意：中文路径可以工作，但分享链接会被 URL 编码。对外展示更建议使用英文目录名，例如 `designer/`。

### 方案 B：使用 `docs/` 目录发布

适合保留当前工程结构，又想 Pages URL 干净一点。

规划：

```text
docs/
  index.html
  styles.css
  app.js
  ring-text-layout-3.json
  vendor/
  assets/
```

Pages 设置：

- Branch: `main`
- Folder: `/docs`

访问：

```text
https://<user>.github.io/<repo>/index.html?debug=true
```

### 方案 C：GitHub Actions 发布 `dist/`

适合后续自动筛选文件、排除本地服务和生成物。

流程：

1. 源码仍保留在 `瓦当设计器/`
2. Actions 将核心文件复制到 `dist/`
3. 上传 `dist/` 到 Pages artifact

这个方案最适合当前项目，因为仓库里同时存在博览、图片浮雕、AI 模型和生成数据。

## 5. Pages 版需要的小改造

建议做一个 `STATIC_DEPLOY` 分支或配置开关，处理以下点：

1. 快捷配置列表
   - 当前依赖 `/__list-layouts`
   - Pages 版建议改为静态清单，例如 `layouts-manifest.json`

2. 保存默认配置
   - 当前 `保存` 会 POST `/__save-default-layout`
   - Pages 版应隐藏“保存”，保留“另存 JSON”

3. 发布与预约
   - Pages 版隐藏 `发布`、`发布到博览`、`预约制作`
   - 或改成下载本地作品包

4. AI 寄语
   - Pages 不能安全保存 API key
   - 建议隐藏，或接入单独后端服务

5. 图片浮雕
   - 文字版 Pages 不发布 `image-relief.html/js/css` 和 DA3 Python 服务
   - 导航中的“图片浮雕”入口应隐藏或移除

6. 路径
   - 确认所有资源使用相对路径
   - 当前 Three.js、字体、贴图路径已经基本符合 Pages 静态托管

## 6. 提交前检查清单

- `python3 text_only_server.py 8004 127.0.0.1` 能启动
- `http://127.0.0.1:8004/index.html?debug=true` 能打开
- 默认配置 `ring-text-layout-3.json` 能加载
- 默认字体 `汉仪篆书繁.TTF` 能加载并解析
- `3D 预览` 能生成
- `SVG / 高度图 / OBJ / STL` 能导出
- `git status --ignored` 确认模型和生成物被忽略
- Pages 版没有提交 `.deepseek_api_key`、模型权重、生成作品包
