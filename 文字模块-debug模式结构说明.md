# 瓦当设计器文字模块 debug 模式结构说明

本文只梳理 `index.html?debug=true` 下的文字瓦当部分，目的是在提交 GitHub 前把结构、数据流和可维护边界说明清楚。图片浮雕、AI 解说、发布到博览等能力只在与文字链路相交时提及。

> 注意：调试入口参数是 `debug=true`，不是 `debug=ture`。

## 1. 入口与模式切换

### 1.1 页面入口

- 主页面：`index.html`
- 调试入口：`index.html?debug=true`
- 简化入口：`index.html`

页面默认在 `<body>` 上带有 `simplified-ui`。`app.js` 启动时读取 URL 参数：

```js
const SEARCH_PARAMS = new URLSearchParams(window.location.search);
const DEBUG_UI_MODE = SEARCH_PARAMS.get("debug") === "true";
```

当 `debug=true` 时：

- 移除 `simplified-ui`
- 添加 `debug-ui`
- 显示完整参数面板、调试控件、导出按钮、日志和统计信息

对应样式主要在 `styles.css` 中由以下类控制：

- `.simplified-ui`
- `.debug-ui`
- `.simplified-only`
- `.debug-only`
- `.advanced-only`
- `.hidden-controls`

### 1.2 关键 DOM 图层

文字模块核心画布是 `#ringSvg`：

- `#ringGuides`：参考线、网格、轨道
- `#textLayer`：文字、边界、纹样、乳钉等正式导出内容
- `#debugLayer`：角度命中区和角度辅助线，导出时会被移除

调试日志写入 `#debugLog`，由 `logDebug(message, data)` 统一追加。

## 2. 文件职责

### `index.html`

负责页面结构和控件声明：

- 输入文字、槽位、字体、排版、边界、装饰、浮雕、导出等控件
- 平面预览 / 3D 预览 / 拓片预览视窗
- `#ringSvg` 与三层 SVG 图层
- 调试模式下可见的网格、字形网格、角度调试等开关

### `styles.css`

负责 UI 和 SVG 图层表现：

- 简化模式与调试模式的显示差异
- 参数面板布局
- SVG 字形、边界、辅助线、调试网格样式
- `#debugLog` 日志区域样式

### `app.js`

文字模块的主要逻辑全部集中在这里：

- 状态读取与约束：`readState()`
- 字体注册、加载和 TTF 解析
- 槽位、阅读顺序、单格方向、中心字
- 瓦当几何：`buildWatangGeometry(state)`
- 文字排版：`layoutRadialRing(state)` 等
- SVG 绘制：`appendGlyphPath(...)`
- 组件化导出：`RELIEF_COMPONENTS`
- 高度图、OBJ、STL、Three.js 预览

### JSON 配置

默认配置为：

- `ring-text-layout-3.json`

调试模式下也可加载其他 JSON 配置。配置文件本质上保存的是控件状态、槽位状态和局部参数，加载后会重新进入 `readState() -> render()`。

## 3. 状态模型

所有文字瓦当主链路都从 `readState()` 收口。

### 3.1 文字与槽位

核心字段：

- `gridCount`：外环格数
- `cells`：每个外环格子的文字
- `cellOrder`：阅读顺序
- `cellSettings`：单格方向，目前主要是 `flow`
- `centerCell`：中心字，只在 `centerDecorationMode === "centerText"` 时参与
- `text`：按 `cellOrder` 从 `cells` 拼出来的阅读文本

这里的设计原则是“字和格绑定”：

- 改阅读顺序只影响读法，不改变格号
- 清空某格不会让后面的字自动前移
- 中心字不参与外环格数和外环重排

### 3.2 字体与字形参数

核心字段：

- `fontKey`
- `fontSize`
- `fontHeightScale`
- `fontWidthScale`
- `centerCellHeightScale`
- `centerCellWidthScale`
- `glyphStrokeWidth`
- `tracking`

外环字和中心字的宽高控制已经拆开：

- 外环使用 `fontHeightScale / fontWidthScale`
- 中心字使用 `centerCellHeightScale / centerCellWidthScale`

### 3.3 排版与几何参数

核心字段：

- `centerRadius`
- `startAngle`
- `rotationAngle`
- `cellFillMode`
- `cellInsetMargin`
- `ringOrientation`
- `alternateFlow`

当前主模式是 `radialRing`，老模式仍保留用于调试或兼容：

- `flatDebug`
- `tangentBaseline`
- `radialBaseline`
- `radialRing`

### 3.4 边界、装饰和高度组件

文字瓦当不是只导出文字，而是把成品拆成多个可独立控制的高度组件：

- `text`
- `boundary`
- `pattern`
- `outerBorder`
- `centerNail`
- `surroundNail`

对应常量为 `RELIEF_COMPONENTS`。高度图生成时会逐组件渲染遮罩，再分别套用高度和倒角参数。

## 4. 渲染链路

### 4.1 总入口

`render()` 是平面 SVG 的主入口：

1. 调用 `readState()` 汇总控件状态
2. 清空 `#textLayer`、`#debugLayer` 和动态裁剪定义
3. 检查字体是否已解析
4. 按排版模式调用布局函数
5. 绘制参考线和边界装饰
6. 更新统计、提示和调试信息

### 4.2 瓦当几何

`buildWatangGeometry(state)` 负责把控件参数转为统一几何：

- 单格角度 `slotAngle`
- 分隔线角度 `dividerAngles`
- 文字中心半径 `layoutRadius`
- 边界内外半径
- 首条分隔线标记角 `markerAngle`

`buildWatangCellPlacements(state)` 在几何基础上生成每个格子的排版信息：

- `slotIndex`
- `sourceIndex`
- `char`
- `flow`
- `slotStartAngle`
- `slotCenterAngle`
- `slotEndAngle`

### 4.3 字形绘制

文字绘制核心是 `appendGlyphPath(...)`。

流程：

1. 从当前字体取 glyph
2. 根据字号、宽高倍数、笔画宽度计算局部坐标
3. 可选绘制字形网格和精度网格
4. 对 glyph contour 采样
5. 通过 `mapPoint(glyphX, glyphY)` 映射到瓦当坐标
6. 写入 `#textLayer`，并标记 `data-component="text"`

### 4.4 环向成环

当前主排版函数是 `layoutRadialRing(state)`。

它支持两种填字方式：

- `polarWarp`
  - 字形随环形极坐标变形
  - 使用 `getRadialRingMapPoint(...)`
- `uprightFit`
  - 字形保持直立
  - 使用格内轮廓裁剪
  - 适合希望文字更像“盖章进格子”的效果

当开启 `showAngleDebug` 时，每个格子会生成可点击的 `angle-hit-area`。点击后 `showCharacterAngles(...)` 会在 `#debugLayer` 绘制起止角辅助线。

## 5. debug=true 下新增可见能力

调试模式不是另一套算法，只是把简化模式隐藏的控制和检查工具显示出来。

主要可见项：

- 排版方案切换
- 格数与逐格输入
- 快捷配置列表
- 导入 / 另存 / 保存配置
- SVG / 高度图 / OBJ / STL 导出
- 字形网格 `showGlyphGrid`
- 全局极坐标网格 `showGrid`
- 字符角度调试 `showAngleDebug`
- 排版统计
- 调试日志

导出时会自动清理调试层：

- `#ringGuides`
- `#debugLayer`
- `.glyph-debug-grid`
- `.glyph-precision-grid`
- `.angle-hit-area`
- `.angle-debug-line`
- 其他辅助线和命中区域

所以 `debug=true` 可以用于排查布局，但不会污染正式 SVG、高度图和 3D 导出。

## 6. 高度图与 3D 链路

文字模块的 3D 链路从当前 SVG 成品反推高度图。

### 6.1 组件遮罩

`createComponentExportSvgClone(state, componentKey)` 会克隆当前 SVG，并只保留目标组件：

- 文字组件：`[data-component='text']`
- 边界组件：`[data-component='boundary']`
- 纹样组件：`[data-component='pattern']`
- 外边界组件：`[data-component='outerBorder']`
- 中心乳钉组件：`[data-component='centerNail']`
- 环绕乳钉组件：`[data-component='surroundNail']`

### 6.2 高度图生成

`buildHeightmapCanvas(state, size)` 负责：

1. 按组件生成 alpha 遮罩
2. alpha 转二值 mask
3. mask 做闭运算补洞
4. 根据组件高度和倒角参数生成高度场
5. 多组件取最大高度合成
6. 应用做旧风化
7. 输出灰度高度图

### 6.3 OBJ / STL / 3D 预览

后续导出与预览都使用同一套高度场：

- `downloadReliefObj()`
- `downloadReliefStl()`
- `previewReliefModel(...)`

这保证了浏览器内看到的 3D 预览与最终导出的 STL/OBJ 在结构上是一致的。

## 7. 本地服务相关边界

文字模块本身可以作为前端静态逻辑阅读，但完整调试和保存需要本地服务：

- `dev_server.py`
  - 静态文件服务
  - 默认配置写回
  - 配置列表扫描
  - 发布作品包
  - 预约制作
  - AI 解说与图片浮雕接口
- `start_service.py`
  - 推荐启动入口

文字模块直接依赖的本地接口主要是：

- `/__list-layouts`
- `/__save-default-layout`
- `/__network-info`
- `/__save-mounted-wadang`
- `/__publish-wadang4`
- `/__publish-wadang-ugc`
- `/__reserve-wadang-making`

如果只提交“文字设计器核心”，图片浮雕相关 Python 模型和大体积生成数据不应算进必需依赖。

## 8. GitHub 提交建议

### 8.1 建议保留的核心文件

文字瓦当核心最小集合：

- `index.html`
- `styles.css`
- `app.js`
- `ring-text-layout-3.json`
- `start_service.py`
- `dev_server.py`
- `汉仪篆书繁.TTF`
- `vendor/three.module.js`
- `vendor/OrbitControls.js`
- `assets/materials/clay001/` 中 3D 预览实际使用的贴图
- `assets/hdr/` 中 3D 预览实际使用的环境图
- `README.md`
- `算法逻辑说明.md`
- `文字模块-debug模式结构说明.md`

### 8.2 建议暂不放进核心提交的内容

这些更像生成物、实验数据或重型模型依赖，建议单独处理：

- `ai_models/`
- `published_wadang_ugc/`
- `published_wadang_mounts/`
- `published_sharp_gaussians/`
- `代制作文件夹/`
- 大体积 `.ply`、`.stl`、`.glb`、生成预览图
- 本地 API key 文件，例如 `.deepseek_api_key`

### 8.3 提交前检查

建议提交前至少检查：

1. `index.html?debug=true` 能打开完整参数面板。
2. `showGrid / showGlyphGrid / showAngleDebug` 能正常显示和隐藏。
3. 修改文字、格数、方向后，`render()` 没有控制台报错。
4. SVG 导出不包含 `#debugLayer` 和调试辅助线。
5. 高度图、STL、3D 预览使用的是同一套当前状态。
6. Git 状态里没有误加入模型权重、生成作品包、API key。

