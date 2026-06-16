const artboard = document.querySelector("#artboard");
const svg = document.querySelector("#ringSvg");
const guidesLayer = document.querySelector("#ringGuides");
const textLayer = document.querySelector("#textLayer");
const debugLayer = document.querySelector("#debugLayer");
const modeSummary = document.querySelector("#modeSummary");
const debugLog = document.querySelector("#debugLog");
const reliefPreviewPanel = document.querySelector("#reliefPreviewPanel");
const reliefPreviewCanvas = document.querySelector("#reliefPreviewCanvas");
const rubbingPreviewCanvas = document.querySelector("#rubbingPreviewCanvas");
const previewViewports = [...document.querySelectorAll("input[name='previewViewport']")];
const simpleAutoMatchText = document.querySelector("#simpleAutoMatchText");
const simpleAutoMatchLayout = document.querySelector("#simpleAutoMatchLayout");
const lanShareUrl = document.querySelector("#lanShareUrl");
const lanShareQr = document.querySelector("#lanShareQr");
const publishMessagePage = document.querySelector("#publishMessagePage");
const publishTitleText = document.querySelector("#publishTitleText");
const publishMessageText = document.querySelector("#publishMessageText");
const publishMessageStatus = document.querySelector("#publishMessageStatus");
const publishMessageBack = document.querySelector("#publishMessageBack");
const publishMessageAi = document.querySelector("#publishMessageAi");
const publishMessageConfirm = document.querySelector("#publishMessageConfirm");
const reserveMakingPage = document.querySelector("#reserveMakingPage");
const reserveTitleText = document.querySelector("#reserveTitleText");
const reserveContactText = document.querySelector("#reserveContactText");
const reserveNoteText = document.querySelector("#reserveNoteText");
const reserveMakingStatus = document.querySelector("#reserveMakingStatus");
const reserveMakingBack = document.querySelector("#reserveMakingBack");
const reserveMakingConfirm = document.querySelector("#reserveMakingConfirm");

const controls = {
  sourceText: document.querySelector("#sourceText"),
  cellInputs: document.querySelector("#cellInputs"),
  layoutMode: [...document.querySelectorAll("input[name='layoutMode']")],
  fontFamily: document.querySelector("#fontFamily"),
  fontFile: document.querySelector("#fontFile"),
  boardZoom: document.querySelector("#boardZoom"),
  centerRadius: document.querySelector("#centerRadius"),
  innerRadius: document.querySelector("#innerRadius"),
  outerRadius: document.querySelector("#outerRadius"),
  boundaryInnerRadius: document.querySelector("#boundaryInnerRadius"),
  boundaryOuterRadius: document.querySelector("#boundaryOuterRadius"),
  ornamentStrokeWidth: document.querySelector("#ornamentStrokeWidth"),
  outerBorderRadius: document.querySelector("#outerBorderRadius"),
  outerBorderStrokeWidth: document.querySelector("#outerBorderStrokeWidth"),
  innerOuterBorderEnabled: document.querySelector("#innerOuterBorderEnabled"),
  innerOuterBorderRadius: document.querySelector("#innerOuterBorderRadius"),
  innerOuterBorderStrokeWidth: document.querySelector("#innerOuterBorderStrokeWidth"),
  outerPatternType: document.querySelector("#outerPatternType"),
  outerPatternRingCount: document.querySelector("#outerPatternRingCount"),
  outerPatternAngleDivisions: document.querySelector("#outerPatternAngleDivisions"),
  outerPatternStrokeWidth: document.querySelector("#outerPatternStrokeWidth"),
  outerPatternJumpSpan: document.querySelector("#outerPatternJumpSpan"),
  centerDecorationMode: document.querySelector("#centerDecorationMode"),
  surroundDecorationMode: document.querySelector("#surroundDecorationMode"),
  surroundPatternType: document.querySelector("#surroundPatternType"),
  surroundPatternBandWidth: document.querySelector("#surroundPatternBandWidth"),
  surroundPatternRingCount: document.querySelector("#surroundPatternRingCount"),
  surroundPatternAngleDivisions: document.querySelector("#surroundPatternAngleDivisions"),
  surroundPatternStrokeWidth: document.querySelector("#surroundPatternStrokeWidth"),
  surroundPatternJumpSpan: document.querySelector("#surroundPatternJumpSpan"),
  centerCellHeightScale: document.querySelector("#centerCellHeightScale"),
  centerCellWidthScale: document.querySelector("#centerCellWidthScale"),
  exportResolution: document.querySelector("#exportResolution"),
  exportDiameterMm: document.querySelector("#exportDiameterMm"),
  baseThickness: document.querySelector("#baseThickness"),
  weatheringStrength: document.querySelector("#weatheringStrength"),
  rubbingKernelRadius: document.querySelector("#rubbingKernelRadius"),
  rubbingInkStrength: document.querySelector("#rubbingInkStrength"),
  rubbingLowThreshold: document.querySelector("#rubbingLowThreshold"),
  rubbingHighThreshold: document.querySelector("#rubbingHighThreshold"),
  textReliefHeight: document.querySelector("#textReliefHeight"),
  textReliefBevelProfile: document.querySelector("#textReliefBevelProfile"),
  textReliefBevelSize: document.querySelector("#textReliefBevelSize"),
  boundaryReliefHeight: document.querySelector("#boundaryReliefHeight"),
  boundaryReliefBevelProfile: document.querySelector("#boundaryReliefBevelProfile"),
  boundaryReliefBevelSize: document.querySelector("#boundaryReliefBevelSize"),
  patternReliefHeight: document.querySelector("#patternReliefHeight"),
  patternReliefBevelProfile: document.querySelector("#patternReliefBevelProfile"),
  patternReliefBevelSize: document.querySelector("#patternReliefBevelSize"),
  outerBorderReliefHeight: document.querySelector("#outerBorderReliefHeight"),
  outerBorderReliefBevelProfile: document.querySelector("#outerBorderReliefBevelProfile"),
  outerBorderReliefBevelSize: document.querySelector("#outerBorderReliefBevelSize"),
  centerNailReliefHeight: document.querySelector("#centerNailReliefHeight"),
  centerNailReliefBevelProfile: document.querySelector("#centerNailReliefBevelProfile"),
  centerNailReliefBevelSize: document.querySelector("#centerNailReliefBevelSize"),
  surroundNailReliefHeight: document.querySelector("#surroundNailReliefHeight"),
  surroundNailReliefBevelProfile: document.querySelector("#surroundNailReliefBevelProfile"),
  surroundNailReliefBevelSize: document.querySelector("#surroundNailReliefBevelSize"),
  glyphStrokeWidth: document.querySelector("#glyphStrokeWidth"),
  centerNailRadius: document.querySelector("#centerNailRadius"),
  centerNailBoundaryEnabled: document.querySelector("#centerNailBoundaryEnabled"),
  centerNailBoundaryRadius: document.querySelector("#centerNailBoundaryRadius"),
  centerNailBoundaryStrokeWidth: document.querySelector("#centerNailBoundaryStrokeWidth"),
  surroundNailRadius: document.querySelector("#surroundNailRadius"),
  surroundNailSize: document.querySelector("#surroundNailSize"),
  surroundNailCount: document.querySelector("#surroundNailCount"),
  dividerStyle: document.querySelector("#dividerStyle"),
  dividerStrokeWidth: document.querySelector("#dividerStrokeWidth"),
  gridCount: document.querySelector("#gridCount"),
  cellFillMode: document.querySelector("#cellFillMode"),
  cellInsetMargin: document.querySelector("#cellInsetMargin"),
  ringOrientation: document.querySelector("#ringOrientation"),
  rotationAngle: document.querySelector("#rotationAngle"),
  startAngle: document.querySelector("#startAngle"),
  sweepAngle: document.querySelector("#sweepAngle"),
  fontSize: document.querySelector("#fontSize"),
  fontHeightScale: document.querySelector("#fontHeightScale"),
  fontWidthScale: document.querySelector("#fontWidthScale"),
  tracking: document.querySelector("#tracking"),
  lineGap: document.querySelector("#lineGap"),
  padding: document.querySelector("#padding"),
  showGuides: document.querySelector("#showGuides"),
  showGrid: document.querySelector("#showGrid"),
  showGlyphGrid: document.querySelector("#showGlyphGrid"),
  showAngleDebug: document.querySelector("#showAngleDebug"),
  showOrnamentRings: document.querySelector("#showOrnamentRings"),
  alternateFlow: document.querySelector("#alternateFlow"),
  autoRing: document.querySelector("#autoRing"),
  smartBalance: document.querySelector("#smartBalance"),
  centerRing: document.querySelector("#centerRing"),
  clearLog: document.querySelector("#clearLog"),
  loadLayout: document.querySelector("#loadLayout"),
  layoutPresetSelect: document.querySelector("#layoutPresetSelect"),
  refreshLayouts: document.querySelector("#refreshLayouts"),
  autoMatchText: document.querySelector("#autoMatchText"),
  autoMatchLayout: document.querySelector("#autoMatchLayout"),
  layoutFile: document.querySelector("#layoutFile"),
  saveLayoutAs: document.querySelector("#saveLayoutAs"),
  saveLayout: document.querySelector("#saveLayout"),
  downloadSvg: document.querySelector("#downloadSvg"),
  downloadGrayscale: document.querySelector("#downloadGrayscale"),
  downloadReliefObj: document.querySelector("#downloadReliefObj"),
  downloadReliefStl: document.querySelector("#downloadReliefStl"),
  resultExportStl: document.querySelector("#resultExportStl"),
  resultPublish: document.querySelector("#resultPublish"),
  publishWadang4: document.querySelector("#publishWadang4"),
  renderRubbing: document.querySelector("#renderRubbing"),
  downloadRubbing: document.querySelector("#downloadRubbing"),
  previewRelief: document.querySelector("#previewRelief"),
};

const fontStatus = document.querySelector("#fontStatus");

const stats = {
  placed: document.querySelector("#placedCount"),
  overflow: document.querySelector("#overflowCount"),
  tracks: document.querySelector("#trackCount"),
};

let selectedAngleDebug = null;
let availableLayouts = [];
let activePreviewViewport = "flat";
let reliefPreviewDirty = true;

// 图片浮雕（debug）：上传图片→DA3 后端→仅外边界内的圆形浮雕高度场。
const imageReliefControls = {
  file: document.querySelector("#imageReliefFile"),
  depthWeight: document.querySelector("#imgDepthWeight"),
  detailWeight: document.querySelector("#imgDetailWeight"),
  smooth: document.querySelector("#imgSmooth"),
  depthWeightValue: document.querySelector("#imgDepthWeightValue"),
  detailWeightValue: document.querySelector("#imgDetailWeightValue"),
  smoothValue: document.querySelector("#imgSmoothValue"),
  clear: document.querySelector("#imageReliefClear"),
  status: document.querySelector("#imageReliefStatus"),
};
// active: 是否用图片浮雕替代文字瓦当；field: {values:Float32Array[0..1], size}; colorField: {data:Uint8ClampedArray, size}
let imageReliefState = { active: false, dataUrl: "", field: null, colorEnabled: false, colorField: null, busy: false };
let rubbingPreviewDirty = true;
let reliefPreview = {
  three: null,
  scene: null,
  camera: null,
  renderer: null,
  controls: null,
  meshObject: null,
  baseObject: null,
  environmentMap: null,
  clayTextures: null,
  assetsPromise: null,
  animationFrame: 0,
};

const NS = "http://www.w3.org/2000/svg";
const CENTER = 450;
const DEFAULT_LAYOUT_URL = "ring-text-layout-3.json";
const DEFAULT_LAYOUT_URL_CANDIDATES = ["../ring-text-layout-3.json", "ring-text-layout-3.json"];
const STATIC_LAYOUT_PRESETS = [
  { name: "ring-text-layout-3.json", url: "./ring-text-layout-3.json", isDefault: true },
  { name: "watang-layout-4.json", url: "./watang-layout-4.json", isDefault: false },
  { name: "watang-layout.json", url: "./watang-layout.json", isDefault: false },
  { name: "明德求是日新自强.json", url: "./明德求是日新自强.json", isDefault: false },
  { name: "长乐未央.json", url: "./长乐未央.json", isDefault: false },
  { name: "长乐未央2.json", url: "./长乐未央2.json", isDefault: false },
];
const SAVE_LAYOUT_URL = "/__save-default-layout";
const LIST_LAYOUTS_URL = "/__list-layouts";
const NETWORK_INFO_URL = "/__network-info";
const SAVE_MOUNTED_WADANG_URL = "/__save-mounted-wadang";
const PUBLISH_WADANG4_URL = "/__publish-wadang4";
const PUBLISH_WADANG_UGC_URL = "/__publish-wadang-ugc";
const RESERVE_WADANG_MAKING_URL = "/__reserve-wadang-making";
const DEEPSEEK_WADANG_MESSAGE_URL = "/__deepseek-wadang-message";
const EXPORT_CLEANUP_SELECTOR = [
  ".glyph-debug-grid",
  ".glyph-precision-grid",
  ".glyph-center-line",
  ".char-boundary",
  ".first-divider-marker",
  ".angle-hit-area",
  ".angle-debug-line",
  ".guide-ring",
  ".guide-edge",
  ".guide-track",
  ".ring-grid",
  ".ring-grid-arc",
  ".ring-grid-spoke",
].join(", ");
const RELIEF_BASE_THICKNESS = 44;
const RELIEF_BASE_SEGMENTS = 160;
const THREE_MODULE_URL = "./vendor/three.module.js";
const THREE_ORBIT_CONTROLS_URL = "./vendor/OrbitControls.js";
const CLAY_TEXTURES = {
  color: "./assets/materials/clay001/Clay001_1K-PNG_Color.png",
  ao: "./assets/materials/clay001/Clay001_1K-PNG_AmbientOcclusion.png",
  roughness: "./assets/materials/clay001/Clay001_1K-PNG_Roughness.png",
  normal: "./assets/materials/clay001/Clay001_1K-PNG_NormalGL.png",
  bump: "./assets/materials/clay001/Clay001_1K-PNG_Displacement.png",
};
const STUDIO_ENVIRONMENT_URL = "./assets/hdr/studio_small_08_panorama_2k.jpg";
const RESOLUTION_OPTIONS = [320, 480, 720, 1080, 1440, 2048];
const SEARCH_PARAMS = new URLSearchParams(window.location.search);
const DEBUG_UI_MODE = SEARCH_PARAMS.get("debug") === "true";
const INSPECT_MODE = SEARCH_PARAMS.get("inspect") === "1";
const INSPECT_SILHOUETTE_WIDTH = SEARCH_PARAMS.has("inspectWidth")
  ? Number(SEARCH_PARAMS.get("inspectWidth"))
  : SEARCH_PARAMS.has("inspectExpand")
    ? Number(SEARCH_PARAMS.get("inspectExpand"))
    : null;

if (DEBUG_UI_MODE) {
  document.body.classList.remove("simplified-ui");
  document.body.classList.add("debug-ui");
}
const LIMITS = {
  innerRadius: { min: 0, max: 430 },
  centerRadius: { min: 20, max: 430 },
  outerRadius: { min: 40, max: 445 },
  boundaryInnerRadius: { min: 0, max: 430 },
  boundaryOuterRadius: { min: 40, max: 445 },
  ornamentStrokeWidth: { min: 1, max: 24 },
  outerBorderRadius: { min: 40, max: 445 },
  outerBorderStrokeWidth: { min: 0, max: 80 },
  innerOuterBorderRadius: { min: 40, max: 445 },
  innerOuterBorderStrokeWidth: { min: 0.5, max: 24 },
  outerPatternRingCount: { min: 1, max: 24 },
  outerPatternAngleDivisions: { min: 3, max: 96 },
  outerPatternStrokeWidth: { min: 0.5, max: 12 },
  outerPatternJumpSpan: { min: 1, max: 8 },
  surroundPatternBandWidth: { min: 4, max: 120 },
  surroundPatternRingCount: { min: 1, max: 16 },
  surroundPatternAngleDivisions: { min: 3, max: 72 },
  surroundPatternStrokeWidth: { min: 0.5, max: 12 },
  surroundPatternJumpSpan: { min: 1, max: 6 },
  centerCellHeightScale: { min: 0.5, max: 4 },
  centerCellWidthScale: { min: 0.5, max: 4 },
  weatheringStrength: { min: 0, max: 100 },
  rubbingKernelRadius: { min: 1, max: 32 },
  rubbingInkStrength: { min: 10, max: 140 },
  rubbingLowThreshold: { min: 0, max: 100 },
  rubbingHighThreshold: { min: 0, max: 100 },
  textReliefHeight: { min: 0.1, max: 20 },
  textReliefBevelSize: { min: 0, max: 12 },
  boundaryReliefHeight: { min: 0.1, max: 20 },
  boundaryReliefBevelSize: { min: 0, max: 12 },
  patternReliefHeight: { min: 0.1, max: 20 },
  patternReliefBevelSize: { min: 0, max: 12 },
  outerBorderReliefHeight: { min: 0.1, max: 20 },
  outerBorderReliefBevelSize: { min: 0, max: 12 },
  centerNailReliefHeight: { min: 0.1, max: 20 },
  centerNailReliefBevelSize: { min: 0, max: 12 },
  surroundNailReliefHeight: { min: 0.1, max: 20 },
  surroundNailReliefBevelSize: { min: 0, max: 12 },
  glyphStrokeWidth: { min: 0, max: 10 },
  centerNailRadius: { min: 0, max: 90 },
  centerNailBoundaryRadius: { min: 0, max: 140 },
  centerNailBoundaryStrokeWidth: { min: 0.5, max: 24 },
  surroundNailRadius: { min: 0, max: 180 },
  surroundNailSize: { min: 0, max: 40 },
  surroundNailCount: { min: 0, max: 24 },
  dividerStrokeWidth: { min: 1, max: 24 },
  gridCount: { min: 1, max: 12 },
  cellInsetMargin: { min: 0, max: 40 },
  rotationAngle: { min: -180, max: 180 },
  fontSize: { min: 4, max: 120 },
  fontHeightScale: { min: 0.5, max: 4 },
  fontWidthScale: { min: 0.5, max: 4 },
  tracking: { min: -20, max: 80 },
  lineGap: { min: 0, max: 120 },
  padding: { min: 0, max: 120 },
  startAngle: { min: -1440, max: 1440 },
};
const SYSTEM_FONT_STACK = 'Inter, ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif';
const FONT_REGISTRY = new Map([
  ["system", { label: "系统默认", family: SYSTEM_FONT_STACK }],
  [
    "HuiwenMincho",
    {
      label: "汇文明朝体",
      familyName: "Huiwen-mincho",
      family: '"Huiwen-mincho", "Songti SC", "PingFang SC", "Microsoft YaHei", serif',
      source: "汇文明朝体（PS显示字体名称：Huiwen-mincho）.ttf",
      format: "truetype",
    },
  ],
  [
    "HanyiZhuanshuFan",
    {
      label: "汉仪篆书繁",
      familyName: "HanyiZhuanshuFan",
      family: '"HanyiZhuanshuFan", "Huiwen-mincho", "PingFang SC", "Microsoft YaHei", sans-serif',
      source: "汉仪篆书繁.TTF",
      format: "truetype",
    },
  ],
]);
const DEFAULT_FONT_KEY = "HanyiZhuanshuFan";
const SECRET_FONT_KEY = "HanyiZhuanshuFan";
const SECRET_FONT_TAP_COUNT = 15;
const SECRET_FONT_TAP_WINDOW_MS = 3000;
let secretFontUnlocked = false;
let secretFontTapTimes = [];
let lastSecretFontTapAt = 0;

const summaries = {
  flatDebug: "无：显示变形前的平面字符排布与字体网格，用于校验算法。",
  tangentBaseline: "方案一：文字垂直方向沿径向，基线平行于环，字形会随圆环发生扭曲。",
  radialBaseline: "方案二：文字垂直方向平行于环，像竖排文字一样优先沿环向排列。",
  radialRing: "环形四字瓦当：文字按单环等分槽位排列，并显示瓦当边界。",
};

const RELIEF_COMPONENTS = [
  { key: "text", selector: "[data-component='text']" },
  { key: "boundary", selector: "[data-component='boundary']" },
  { key: "pattern", selector: "[data-component='pattern']" },
  { key: "outerBorder", selector: "[data-component='outerBorder']" },
  { key: "centerNail", selector: "[data-component='centerNail']" },
  { key: "surroundNail", selector: "[data-component='surroundNail']" },
];

let equalRingSpacing = false;
let previousRotationAngle = 0;
let renderCount = 0;
let cellValues = [];
let cellSettings = [];
let cellOrder = [];
let centerCellValue = "";
const LOG_LIMIT = 120;

function logDebug(message, data = null) {
  if (!debugLog) return;
  const now = new Date();
  const time = now.toLocaleTimeString("zh-CN", { hour12: false });
  const detail = data === null ? "" : ` ${JSON.stringify(data)}`;
  const line = `[${time}] ${message}${detail}`;
  const lines = debugLog.textContent ? debugLog.textContent.split("\n") : [];
  lines.push(line);
  debugLog.textContent = lines.slice(-LOG_LIMIT).join("\n");
  debugLog.scrollTop = debugLog.scrollHeight;
}

function setLayoutPresetOptions(items, selectedUrl = "") {
  if (!controls.layoutPresetSelect) return;
  availableLayouts = Array.isArray(items) ? items.slice() : [];
  controls.layoutPresetSelect.replaceChildren();
  controls.layoutPresetSelect.appendChild(new Option(availableLayouts.length ? "选择快捷配置..." : "未找到可用配置", ""));
  availableLayouts.forEach((item) => {
    controls.layoutPresetSelect.appendChild(new Option(item.isDefault ? `${item.name} · 默认` : item.name, item.url));
  });
  controls.layoutPresetSelect.value = selectedUrl && availableLayouts.some((item) => item.url === selectedUrl) ? selectedUrl : "";
  controls.layoutPresetSelect.disabled = availableLayouts.length === 0;
}

async function refreshLayoutPresetList(preferredUrl = "") {
  if (!controls.layoutPresetSelect) return [];
  try {
    const response = await fetch(LIST_LAYOUTS_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const items = Array.isArray(payload.items) ? payload.items : [];
    setLayoutPresetOptions(items, preferredUrl);
    if (!items.length) {
      fontStatus.textContent = "当前没有可用的快捷配置，可继续使用底部导入按钮载入 JSON。";
    }
    logDebug("刷新主目录配置列表", { count: items.length });
    return items;
  } catch (error) {
    setLayoutPresetOptions(STATIC_LAYOUT_PRESETS, preferredUrl);
    fontStatus.textContent = "已使用静态配置列表；保存默认配置需启动本地服务。";
    logDebug("刷新主目录配置列表失败，改用静态配置", { error: error.message, count: STATIC_LAYOUT_PRESETS.length });
    return STATIC_LAYOUT_PRESETS.slice();
  }
}

async function loadNetworkShareInfo() {
  if (!document.body.classList.contains("simplified-ui") || !lanShareUrl || !lanShareQr) return;
  try {
    const response = await fetch(NETWORK_INFO_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (!payload.ok || !payload.preferredUrl || !payload.qrSvg) throw new Error(payload.error || "无可用局域网地址");
    lanShareUrl.textContent = payload.preferredUrl;
    lanShareUrl.href = payload.preferredUrl;
    lanShareQr.innerHTML = payload.qrSvg;
    lanShareQr.removeAttribute("aria-hidden");
    if (payload.bindHost === "127.0.0.1" && payload.lanUrl) {
      lanShareUrl.title = "当前服务绑定在 127.0.0.1，如需手机访问请用 start_service.py 以 0.0.0.0 启动。";
    }
  } catch (error) {
    lanShareUrl.textContent = "无法读取局域网地址";
    lanShareUrl.removeAttribute("href");
    lanShareQr.textContent = "";
    logDebug("局域网二维码加载失败", { error: error.message });
  }
}

async function applyLayoutFromUrl(url, label = url, options = {}) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const text = await response.text();
  applyLayoutConfig(JSON.parse(text.replace(/^\uFEFF/, "")));
  if (controls.layoutPresetSelect && availableLayouts.some((item) => item.url === url)) {
    controls.layoutPresetSelect.value = url;
  }
  fontStatus.textContent = `已加载配置 ${label}`;
  logDebug("加载配置", { label, url });
  if (options.render !== false) render();
  return true;
}

async function handleLayoutPresetChange() {
  const url = controls.layoutPresetSelect?.value;
  if (!url) return;
  const item = availableLayouts.find((entry) => entry.url === url);
  try {
    await applyLayoutFromUrl(url, item?.name || url);
    modeSummary.textContent = `已通过快捷配置加载 ${item?.name || url}`;
  } catch (error) {
    fontStatus.textContent = `无法加载配置 ${item?.name || url}`;
    logDebug("快捷加载配置失败", { url, error: error.message });
  }
}

function setPreviewViewport(viewport, options = {}) {
  activePreviewViewport = viewport === "relief" ? "relief" : viewport === "rubbing" ? "rubbing" : "flat";
  document.querySelectorAll("[data-viewport]").forEach((node) => {
    node.classList.toggle("is-active", node.getAttribute("data-viewport") === activePreviewViewport);
  });
  previewViewports.forEach((input) => {
    input.checked = input.value === activePreviewViewport;
  });
  if (activePreviewViewport === "relief" && options.generate !== false) {
    previewReliefModel({ force: reliefPreviewDirty }).catch((error) => {
      logDebug("切换到 3D 视窗失败", { error: error.message });
    });
  }
  if (activePreviewViewport === "rubbing" && options.generate !== false) {
    previewRubbing({ force: rubbingPreviewDirty }).catch((error) => {
      logDebug("切换到拓片视窗失败", { error: error.message });
    });
  }
}

function getCellTextValues() {
  if (!controls.cellInputs) return cellValues.slice();
  return [...controls.cellInputs.querySelectorAll(".cell-input")].map((input) => input.dataset.committed || "");
}

function syncSourceTextFromCells() {
  cellValues = Array.from({ length: Math.max(1, Math.round(Number(controls.gridCount.value) || 1)) }, (_, index) => cellValues[index] || "");
  const text = cellValues.filter(Boolean).join("");
  controls.sourceText.value = text;
  return text;
}

function firstGrapheme(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "grapheme" });
    const [first] = segmenter.segment(trimmed);
    return first ? first.segment : "";
  }
  return [...trimmed][0] || "";
}

function getGraphemes(value) {
  const trimmed = String(value || "").replace(/\s+/g, "");
  if (!trimmed) return [];
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "grapheme" });
    return [...segmenter.segment(trimmed)].map((item) => item.segment).filter(Boolean);
  }
  return [...trimmed].filter(Boolean);
}

function getReliefProfileValue(control) {
  return control?.value === "round"
    ? "round"
    : control?.value === "bevel45"
      ? "bevel45"
      : control?.value === "log"
        ? "log"
        : "none";
}

function getPatternTypeValue(control) {
  return control?.value === "mesh" ? "mesh" : control?.value === "star" ? "star" : "none";
}

function ensureCellArrays(gridCount) {
  cellValues = Array.from({ length: gridCount }, (_, index) => cellValues[index] || "");
  cellSettings = Array.from({ length: gridCount }, (_, index) => ({
    flow: cellSettings[index]?.flow === "ccw" ? "ccw" : "cw",
    widthScale: clampCellScale(cellSettings[index]?.widthScale ?? 1),
    heightScale: clampCellScale(cellSettings[index]?.heightScale ?? 1),
    strokeWidth: getCellStrokeWidth(index),
  }));
  const validOrder = cellOrder.filter((index) => index >= 0 && index < gridCount);
  const missingOrder = Array.from({ length: gridCount }, (_, index) => index).filter((index) => !validOrder.includes(index));
  cellOrder = [...validOrder, ...missingOrder];
}

function getCellFlow(index) {
  return cellSettings[index]?.flow === "ccw" ? "ccw" : "cw";
}

function getCellFlowSign(indexOrFlow) {
  return indexOrFlow === "ccw" || getCellFlow(indexOrFlow) === "ccw" ? -1 : 1;
}

function clampCellScale(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 1;
  return clamp(n, 0.5, 4);
}

function getCellWidthScale(index) {
  return clampCellScale(cellSettings[index]?.widthScale ?? 1);
}

function getCellHeightScale(index) {
  return clampCellScale(cellSettings[index]?.heightScale ?? 1);
}

// 逐字描边：返回该格的绝对描边值；null/undefined 表示继承全局。
function getCellStrokeWidth(index) {
  const raw = cellSettings[index]?.strokeWidth;
  return raw == null || !Number.isFinite(Number(raw)) ? null : clamp(Number(raw), 0, 10);
}

// 在全局字形比例的基础上叠加单个槽位的宽/高倍数与（可选）逐字描边，得到该字专用的渲染状态。
function getCellScaledState(state, sourceIndex) {
  const setting = state.cellSettings?.[sourceIndex];
  const w = Number(setting?.widthScale) || 1;
  const h = Number(setting?.heightScale) || 1;
  const rawStroke = setting?.strokeWidth;
  const hasStroke = rawStroke != null && Number.isFinite(Number(rawStroke));
  if (w === 1 && h === 1 && !hasStroke) return state;
  return {
    ...state,
    fontWidthScale: (state.fontWidthScale || 1) * w,
    fontHeightScale: (state.fontHeightScale || 1) * h,
    ...(hasStroke ? { glyphStrokeWidth: clamp(Number(rawStroke), 0, 10) } : {}),
  };
}

// 智能均衡：按每个字的自然视觉大小，自动计算 uniform 逐字比例，使各字视觉大小趋于一致。
function smartBalanceCellScales() {
  const state = readState();
  const font = getVectorFont(state);
  if (!font) {
    modeSummary.textContent = "当前字体尚未解析为矢量轮廓，无法智能均衡。";
    return;
  }
  const baseState = { ...state, fontWidthScale: 1, fontHeightScale: 1 };
  const gridCount = getRadialRingGridCount(state);
  const extents = Array.from({ length: gridCount }, (_, index) => {
    const char = state.cells?.[index];
    if (!char) return null;
    const metrics = getGlyphVisualMetrics(font.getGlyph(char), font, baseState);
    const extent = Math.max(metrics.width, metrics.height);
    return extent > 0 ? extent : null;
  });
  const valid = extents.filter((extent) => extent);
  if (!valid.length) {
    modeSummary.textContent = "没有可均衡的字。";
    return;
  }
  const target = valid.reduce((sum, extent) => sum + extent, 0) / valid.length;
  let count = 0;
  extents.forEach((extent, index) => {
    if (!extent) return;
    const factor = clampCellScale(target / extent);
    cellSettings[index] = { ...cellSettings[index], widthScale: factor, heightScale: factor };
    count += 1;
  });
  buildCellInputs();
  render();
  modeSummary.textContent = `已按字形大小智能均衡 ${count} 个字。`;
  logDebug("智能均衡", { target: Number(target.toFixed(2)), count });
}

function commitCellInput(input, index, moveNext = false) {
  const value = firstGrapheme(input.value);
  cellValues[index] = value;
  input.value = value;
  input.dataset.committed = value;
  const text = syncSourceTextFromCells();
  logDebug("提交格字", { index, value, cells: cellValues, text });
  render();

  if (moveNext) {
    const orderIndex = cellOrder.indexOf(index);
    const nextSlotIndex = cellOrder[orderIndex + 1];
    const nextInput = controls.cellInputs.querySelector(`.cell-input[data-index="${nextSlotIndex}"]`);
    if (nextInput) {
      nextInput.focus();
      nextInput.select();
    }
  }
}

function moveCellOrder(fromSlotIndex, toSlotIndex) {
  if (fromSlotIndex === toSlotIndex) return;
  const fromOrderIndex = cellOrder.indexOf(fromSlotIndex);
  const toOrderIndex = cellOrder.indexOf(toSlotIndex);
  if (fromOrderIndex < 0 || toOrderIndex < 0) return;

  const [moved] = cellOrder.splice(fromOrderIndex, 1);
  cellOrder.splice(toOrderIndex, 0, moved);
  logDebug("拖拽重排阅读顺序", { cellOrder: cellOrder.map((index) => index + 1) });
  buildCellInputs();
  render();
}

function buildCellInputs() {
  if (!controls.cellInputs) return;

  const gridCount = Math.max(1, Math.round(Number(controls.gridCount.value) || 1));
  const existingValues = cellValues.length ? cellValues.slice() : getCellTextValues();
  const sourceChars = [...controls.sourceText.value.replace(/\s+/g, "")];
  const values = Array.from({ length: gridCount }, (_, index) => existingValues[index] ?? sourceChars[index] ?? "");
  cellValues = values.slice();
  ensureCellArrays(gridCount);
  controls.cellInputs.replaceChildren();

  cellOrder.forEach((slotIndex) => {
    const value = values[slotIndex] || "";
    const label = document.createElement("label");
    label.className = "cell-input-label";
    label.draggable = true;
    label.dataset.slotIndex = String(slotIndex);
    label.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", String(slotIndex));
      event.dataTransfer.effectAllowed = "move";
      label.classList.add("is-dragging");
    });
    label.addEventListener("dragend", () => {
      label.classList.remove("is-dragging");
    });
    label.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      label.classList.add("is-drop-target");
    });
    label.addEventListener("dragleave", () => {
      label.classList.remove("is-drop-target");
    });
    label.addEventListener("drop", (event) => {
      event.preventDefault();
      label.classList.remove("is-drop-target");
      moveCellOrder(Number(event.dataTransfer.getData("text/plain")), slotIndex);
    });

    const span = document.createElement("span");
    span.textContent = `${slotIndex + 1}`;

    const input = document.createElement("input");
    input.className = "cell-input";
    input.type = "text";
    input.inputMode = "text";
    input.value = value;
    input.dataset.index = String(slotIndex);
    input.dataset.committed = value;
    input.setAttribute("aria-label", `第 ${slotIndex + 1} 格文字`);
    input.addEventListener("compositionstart", () => {
      input.dataset.composing = "true";
    });
    input.addEventListener("compositionend", () => {
      input.dataset.composing = "false";
    });
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      if (input.dataset.composing === "true") return;
      event.preventDefault();
      commitCellInput(input, slotIndex, true);
    });
    input.addEventListener("blur", () => {
      commitCellInput(input, slotIndex, false);
    });

    const directionSelect = document.createElement("select");
    directionSelect.className = "cell-direction";
    directionSelect.setAttribute("aria-label", `第 ${slotIndex + 1} 格方向`);
    [
      ["cw", "顺时针"],
      ["ccw", "逆时针"],
    ].forEach(([value, labelText]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = labelText;
      directionSelect.appendChild(option);
    });
    directionSelect.value = getCellFlow(slotIndex);
    directionSelect.addEventListener("change", () => {
      cellSettings[slotIndex] = { ...cellSettings[slotIndex], flow: directionSelect.value };
      logDebug("单字方向", { index: slotIndex, flow: cellSettings[slotIndex].flow });
      render();
    });

    const scaleRow = document.createElement("div");
    scaleRow.className = "cell-scale-row";
    const makeScaleField = (axis, labelText, value) => {
      const field = document.createElement("label");
      field.className = "cell-scale-field";
      const cap = document.createElement("small");
      cap.textContent = labelText;
      const num = document.createElement("input");
      num.type = "number";
      num.min = "0.5";
      num.max = "4";
      num.step = "0.05";
      num.value = String(value);
      num.className = "cell-scale-input";
      num.setAttribute("aria-label", `第 ${slotIndex + 1} 格${labelText}比例`);
      num.draggable = false;
      num.addEventListener("pointerdown", (event) => event.stopPropagation());
      num.addEventListener("change", () => {
        const next = clampCellScale(num.value);
        num.value = String(next);
        const key = axis === "width" ? "widthScale" : "heightScale";
        cellSettings[slotIndex] = { ...cellSettings[slotIndex], [key]: next };
        logDebug("单字比例", { index: slotIndex, axis, value: next });
        render();
      });
      field.append(cap, num);
      return field;
    };
    // 描边：空 = 继承全局；填值 = 该字绝对描边（0–10）。
    const makeStrokeField = () => {
      const field = document.createElement("label");
      field.className = "cell-scale-field";
      const cap = document.createElement("small");
      cap.textContent = "描边";
      const num = document.createElement("input");
      num.type = "number";
      num.min = "0";
      num.max = "10";
      num.step = "0.05";
      const current = getCellStrokeWidth(slotIndex);
      num.value = current == null ? "" : String(current);
      num.placeholder = `继承 ${Number(controls.glyphStrokeWidth?.value || 0)}`;
      num.className = "cell-scale-input";
      num.setAttribute("aria-label", `第 ${slotIndex + 1} 格描边`);
      num.draggable = false;
      num.addEventListener("pointerdown", (event) => event.stopPropagation());
      num.addEventListener("change", () => {
        const trimmed = num.value.trim();
        const next = trimmed === "" ? null : clamp(Number(trimmed), 0, 10);
        num.value = next == null ? "" : String(next);
        cellSettings[slotIndex] = { ...cellSettings[slotIndex], strokeWidth: next };
        logDebug("单字描边", { index: slotIndex, value: next });
        render();
      });
      field.append(cap, num);
      return field;
    };
    scaleRow.append(
      makeScaleField("width", "宽", getCellWidthScale(slotIndex)),
      makeScaleField("height", "高", getCellHeightScale(slotIndex)),
      makeStrokeField(),
    );

    label.append(span, input, directionSelect, scaleRow);
    controls.cellInputs.appendChild(label);
  });

  if (controls.centerDecorationMode?.value === "centerText") {
    const label = document.createElement("label");
    label.className = "cell-input-label";
    label.dataset.slotIndex = "c";

    const span = document.createElement("span");
    span.textContent = "c";

    const input = document.createElement("input");
    input.className = "cell-input";
    input.type = "text";
    input.inputMode = "text";
    input.value = centerCellValue;
    input.dataset.index = "c";
    input.dataset.committed = centerCellValue;
    input.setAttribute("aria-label", "中心格文字");
    input.addEventListener("compositionstart", () => {
      input.dataset.composing = "true";
    });
    input.addEventListener("compositionend", () => {
      input.dataset.composing = "false";
    });
    const commitCenterInput = () => {
      const value = firstGrapheme(input.value);
      centerCellValue = value;
      input.value = value;
      input.dataset.committed = value;
      logDebug("提交中心格字", { value });
      render();
    };
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      if (input.dataset.composing === "true") return;
      event.preventDefault();
      commitCenterInput();
    });
    input.addEventListener("blur", commitCenterInput);

    label.append(span, input);
    controls.cellInputs.appendChild(label);
  }

  const text = syncSourceTextFromCells();
  logDebug("重建填字格", { gridCount, text, centerCellValue, centerDecorationMode: controls.centerDecorationMode?.value });
}

function getCurrentFillCapacity() {
  const gridCount = Math.max(1, Math.round(Number(controls.gridCount.value) || 1));
  const hasCenterCell = controls.centerDecorationMode?.value === "centerText";
  return {
    gridCount,
    hasCenterCell,
    total: gridCount + (hasCenterCell ? 1 : 0),
  };
}

function getLayoutFillCapacity(layout) {
  const parameters = layout?.parameters || {};
  const cells = Array.isArray(layout?.cells) ? layout.cells : Array.isArray(parameters.cells) ? parameters.cells : [];
  const gridCount = Number.isFinite(Number(parameters.gridCount))
    ? Math.max(1, Math.round(Number(parameters.gridCount)))
    : Math.max(1, cells.length || 1);
  const centerMode = layout?.centerDecorationMode ?? parameters.centerDecorationMode;
  const hasCenterCell = centerMode === "centerText";
  return {
    gridCount,
    hasCenterCell,
    total: gridCount + (hasCenterCell ? 1 : 0),
  };
}

function fillCharactersIntoCurrentLayout(graphemes) {
  const gridCount = Math.max(1, Math.round(Number(controls.gridCount.value) || 1));
  ensureCellArrays(gridCount);
  const orderedSlots = cellOrder.filter((index) => index >= 0 && index < gridCount);
  cellValues = Array.from({ length: gridCount }, () => "");
  orderedSlots.forEach((slotIndex, orderIndex) => {
    cellValues[slotIndex] = graphemes[orderIndex] || "";
  });
  centerCellValue = controls.centerDecorationMode?.value === "centerText" ? graphemes[orderedSlots.length] || "" : "";
  const text = syncSourceTextFromCells();
  buildCellInputs();
  render();
  logDebug("自动匹配填字完成", {
    text,
    centerCellValue,
    orderedSlots: orderedSlots.map((index) => index + 1),
  });
}

async function findMatchingLayoutCandidate(textLength) {
  const currentCapacity = getCurrentFillCapacity();
  if (currentCapacity.total === textLength) {
    return {
      type: "current",
      label: "当前配置",
      capacity: currentCapacity,
    };
  }

  const items = availableLayouts.length ? availableLayouts : await refreshLayoutPresetList(controls.layoutPresetSelect?.value || "");
  if (!items.length) return null;

  const candidates = (
    await Promise.all(
    items.map(async (item) => {
      try {
        const response = await fetch(item.url, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const layout = JSON.parse((await response.text()).replace(/^\uFEFF/, ""));
        const capacity = getLayoutFillCapacity(layout);
        return {
          type: "preset",
          item,
          layout,
          capacity,
        };
      } catch (error) {
        logDebug("自动匹配读取配置失败", { url: item.url, error: error.message });
        return null;
      }
    }),
    )
  )
    .filter(Boolean)
    .filter((candidate) => candidate.capacity.total === textLength);

  if (!candidates.length) return null;
  return candidates[Math.floor(Math.random() * candidates.length)] || null;
}

function getAutoMatchTextValue() {
  const candidates = [controls.autoMatchText, simpleAutoMatchText].filter(Boolean);
  const visible = candidates.find((input) => input.offsetParent !== null);
  return (visible || candidates[0])?.value || "";
}

function syncAutoMatchTextInputs(value) {
  [controls.autoMatchText, simpleAutoMatchText].forEach((input) => {
    if (input && input.value !== value) input.value = value;
  });
}

async function runAutoMatcher(sourceValue = null) {
  const rawText = sourceValue === null ? getAutoMatchTextValue() : sourceValue;
  syncAutoMatchTextInputs(rawText);
  const graphemes = getGraphemes(rawText);
  if (!graphemes.length) {
    modeSummary.textContent = "请输入要自动匹配的文字。";
    return;
  }

  const matched = await findMatchingLayoutCandidate(graphemes.length);
  if (!matched) {
    modeSummary.textContent = `未找到可容纳 ${graphemes.length} 字的现有配置，请先新增相应模板。`;
    logDebug("自动匹配失败", { textLength: graphemes.length });
    return;
  }

  if (matched.type === "preset") {
    applyLayoutConfig(matched.layout);
    if (controls.layoutPresetSelect) controls.layoutPresetSelect.value = matched.item.url;
    await ensureSelectedFontParsed({ render: false });
  }

  fillCharactersIntoCurrentLayout(graphemes);
  modeSummary.textContent = `已匹配 ${matched.label || matched.item?.name || "配置"}，并按顺序填入 ${graphemes.length} 个字。`;
  if (activePreviewViewport === "relief") {
    previewReliefModel({ force: true }).catch((error) => {
      logDebug("自动匹配后刷新 3D 失败", { error: error.message });
    });
  }
  if (activePreviewViewport === "rubbing") {
    previewRubbing({ force: true }).catch((error) => {
      logDebug("自动匹配后刷新拓片失败", { error: error.message });
    });
  }
}

function readState() {
  const gridCount = Math.max(1, Math.round(Number(controls.gridCount.value)));
  const rubbingLowThreshold = clamp(Number(controls.rubbingLowThreshold?.value || 8), 0, 100);
  const rubbingHighThreshold = Math.max(
    rubbingLowThreshold,
    clamp(Number(controls.rubbingHighThreshold?.value || 55), 0, 100),
  );
  const cells = Array.from({ length: gridCount }, (_, index) => cellValues[index] || "");
  const cellsSettings = Array.from({ length: gridCount }, (_, index) => ({
    flow: getCellFlow(index),
    widthScale: getCellWidthScale(index),
    heightScale: getCellHeightScale(index),
    strokeWidth: getCellStrokeWidth(index),
  }));
  const readingOrder = cellOrder.filter((index) => index >= 0 && index < gridCount);
  const readingText = readingOrder.map((index) => cells[index] || "").filter(Boolean).join("");
  const values = {
    text: readingText,
    cells,
    cellSettings: cellsSettings,
    cellOrder: readingOrder,
    centerCell: centerCellValue,
    mode: controls.layoutMode.find((input) => input.checked).value,
    fontKey: controls.fontFamily.value,
    fontFamily: getSelectedFontFamily(),
    boardZoom: Number(controls.boardZoom.value),
    centerRadius: Number(controls.centerRadius.value),
    innerRadius: Number(controls.innerRadius.value),
    outerRadius: Number(controls.outerRadius.value),
    boundaryInnerRadius: Number(controls.boundaryInnerRadius.value),
    boundaryOuterRadius: Number(controls.boundaryOuterRadius.value),
    ornamentStrokeWidth: Number(controls.ornamentStrokeWidth.value),
    outerBorderRadius: Number(controls.outerBorderRadius.value),
    outerBorderStrokeWidth: Number(controls.outerBorderStrokeWidth.value),
    innerOuterBorderEnabled: controls.innerOuterBorderEnabled.checked,
    innerOuterBorderRadius: Number(controls.innerOuterBorderRadius.value),
    innerOuterBorderStrokeWidth: Number(controls.innerOuterBorderStrokeWidth.value),
    outerPatternType: getPatternTypeValue(controls.outerPatternType),
    outerPatternRingCount: Math.max(1, Math.round(Number(controls.outerPatternRingCount.value) || 4)),
    outerPatternAngleDivisions: Math.max(3, Math.round(Number(controls.outerPatternAngleDivisions.value) || 24)),
    outerPatternStrokeWidth: Number(controls.outerPatternStrokeWidth.value),
    outerPatternJumpSpan: Math.max(1, Math.round(Number(controls.outerPatternJumpSpan.value) || 1)),
    centerDecorationMode: controls.centerDecorationMode?.value === "centerText" ? "centerText" : "ornaments",
    surroundDecorationMode: controls.surroundDecorationMode?.value === "pattern" ? "pattern" : "nails",
    surroundPatternType: getPatternTypeValue(controls.surroundPatternType),
    surroundPatternBandWidth: Math.max(4, Number(controls.surroundPatternBandWidth.value) || 24),
    surroundPatternRingCount: Math.max(1, Math.round(Number(controls.surroundPatternRingCount.value) || 3)),
    surroundPatternAngleDivisions: Math.max(3, Math.round(Number(controls.surroundPatternAngleDivisions.value) || 12)),
    surroundPatternStrokeWidth: Number(controls.surroundPatternStrokeWidth.value),
    surroundPatternJumpSpan: Math.max(1, Math.round(Number(controls.surroundPatternJumpSpan.value) || 1)),
    centerCellHeightScale: Number(controls.centerCellHeightScale?.value || 1),
    centerCellWidthScale: Number(controls.centerCellWidthScale?.value || 1),
    exportResolution: RESOLUTION_OPTIONS.includes(Number(controls.exportResolution.value))
      ? Number(controls.exportResolution.value)
      : 320,
    exportDiameterMm: Math.max(0, Number(controls.exportDiameterMm?.value || 0)),
    baseThickness: Math.max(1, Number(controls.baseThickness?.value || RELIEF_BASE_THICKNESS)),
    weatheringStrength: Number(controls.weatheringStrength?.value || 0),
    rubbingKernelRadius: Math.max(1, Math.round(Number(controls.rubbingKernelRadius?.value || 4))),
    rubbingInkStrength: Number(controls.rubbingInkStrength?.value || 92),
    rubbingLowThreshold,
    rubbingHighThreshold,
    textReliefHeight: Number(controls.textReliefHeight.value),
    textReliefBevelProfile: getReliefProfileValue(controls.textReliefBevelProfile),
    textReliefBevelSize: Number(controls.textReliefBevelSize.value),
    boundaryReliefHeight: Number(controls.boundaryReliefHeight.value),
    boundaryReliefBevelProfile: getReliefProfileValue(controls.boundaryReliefBevelProfile),
    boundaryReliefBevelSize: Number(controls.boundaryReliefBevelSize.value),
    patternReliefHeight: Number(controls.patternReliefHeight.value),
    patternReliefBevelProfile: getReliefProfileValue(controls.patternReliefBevelProfile),
    patternReliefBevelSize: Number(controls.patternReliefBevelSize.value),
    outerBorderReliefHeight: Number(controls.outerBorderReliefHeight.value),
    outerBorderReliefBevelProfile: getReliefProfileValue(controls.outerBorderReliefBevelProfile),
    outerBorderReliefBevelSize: Number(controls.outerBorderReliefBevelSize.value),
    centerNailReliefHeight: Number(controls.centerNailReliefHeight.value),
    centerNailReliefBevelProfile: getReliefProfileValue(controls.centerNailReliefBevelProfile),
    centerNailReliefBevelSize: Number(controls.centerNailReliefBevelSize.value),
    surroundNailReliefHeight: Number(controls.surroundNailReliefHeight.value),
    surroundNailReliefBevelProfile: getReliefProfileValue(controls.surroundNailReliefBevelProfile),
    surroundNailReliefBevelSize: Number(controls.surroundNailReliefBevelSize.value),
    glyphStrokeWidth: Number(controls.glyphStrokeWidth.value),
    centerNailRadius: Number(controls.centerNailRadius.value),
    centerNailBoundaryEnabled: controls.centerNailBoundaryEnabled.checked,
    centerNailBoundaryRadius: Number(controls.centerNailBoundaryRadius.value),
    centerNailBoundaryStrokeWidth: Number(controls.centerNailBoundaryStrokeWidth.value),
    surroundNailRadius: Number(controls.surroundNailRadius.value),
    surroundNailSize: Number(controls.surroundNailSize.value),
    surroundNailCount: Math.max(0, Math.round(Number(controls.surroundNailCount.value))),
    dividerStyle:
      controls.dividerStyle.value === "parallelDouble"
        ? "parallelDouble"
        : controls.dividerStyle.value === "radialDouble"
          ? "radialDouble"
          : "single",
    dividerStrokeWidth: Number(controls.dividerStrokeWidth.value),
    gridCount,
    cellFillMode: controls.cellFillMode?.value === "uprightFit" ? "uprightFit" : "polarWarp",
    cellInsetMargin: Number(controls.cellInsetMargin.value),
    ringOrientation: controls.ringOrientation?.value === "horizontal" ? "horizontal" : "vertical",
    rotationAngle: Number(controls.rotationAngle.value),
    startAngle: Number(controls.startAngle.value),
    sweepAngle: Number(controls.sweepAngle.value),
    fontSize: Number(controls.fontSize.value),
    fontHeightScale: Number(controls.fontHeightScale.value),
    fontWidthScale: Number(controls.fontWidthScale.value),
    tracking: Number(controls.tracking.value),
    lineGap: Number(controls.lineGap.value),
    padding: Number(controls.padding.value),
    showGuides: controls.showGuides.checked,
    showGrid: controls.showGrid.checked,
    showGlyphGrid: controls.showGlyphGrid.checked,
    showAngleDebug: controls.showAngleDebug.checked,
    showOrnamentRings: controls.showOrnamentRings.checked,
    alternateFlow: controls.alternateFlow.checked,
    equalRingSpacing,
  };

  if (values.innerRadius > values.outerRadius - 8) {
    values.innerRadius = Math.max(0, values.outerRadius - 8);
    controls.innerRadius.value = String(values.innerRadius);
  }

  if (values.boundaryInnerRadius > values.boundaryOuterRadius - 8) {
    values.boundaryInnerRadius = Math.max(0, values.boundaryOuterRadius - 8);
    controls.boundaryInnerRadius.value = String(values.boundaryInnerRadius);
  }

  if (values.outerBorderRadius < values.boundaryOuterRadius) {
    values.outerBorderRadius = values.boundaryOuterRadius;
    controls.outerBorderRadius.value = String(values.outerBorderRadius);
  }

  if (values.innerOuterBorderRadius > values.outerBorderRadius) {
    values.innerOuterBorderRadius = values.outerBorderRadius;
    controls.innerOuterBorderRadius.value = String(values.innerOuterBorderRadius);
  }

  if (values.innerOuterBorderRadius < values.boundaryOuterRadius) {
    values.innerOuterBorderRadius = values.boundaryOuterRadius;
    controls.innerOuterBorderRadius.value = String(values.innerOuterBorderRadius);
  }

  if (values.centerNailBoundaryRadius < values.centerNailRadius) {
    values.centerNailBoundaryRadius = values.centerNailRadius;
    controls.centerNailBoundaryRadius.value = String(values.centerNailBoundaryRadius);
  }

  if (values.surroundDecorationMode === "pattern" && !values.centerNailBoundaryEnabled) {
    values.centerNailBoundaryEnabled = true;
    controls.centerNailBoundaryEnabled.checked = true;
  }

  if (values.outerPatternType === "star" && values.outerPatternAngleDivisions % 2 === 1) {
    values.outerPatternAngleDivisions = Math.max(4, values.outerPatternAngleDivisions + 1);
    controls.outerPatternAngleDivisions.value = String(values.outerPatternAngleDivisions);
  }

  if (values.surroundPatternType === "star" && values.surroundPatternAngleDivisions % 2 === 1) {
    values.surroundPatternAngleDivisions = Math.max(4, values.surroundPatternAngleDivisions + 1);
    controls.surroundPatternAngleDivisions.value = String(values.surroundPatternAngleDivisions);
  }

  return values;
}

function getSelectedFontFamily() {
  const font = FONT_REGISTRY.get(controls.fontFamily.value);
  return font ? font.family : SYSTEM_FONT_STACK;
}

function getSelectedFontFaceCss() {
  const font = FONT_REGISTRY.get(controls.fontFamily.value);
  if (!font || !font.source || !font.familyName) return "";

  return `@font-face { font-family: "${font.familyName}"; src: url("${font.source}") format("${font.format}"); font-display: swap; }`;
}

function updateOutputs(state) {
  const outputMap = {
    boardZoom: `${state.boardZoom}%`,
    centerRadius: `${state.centerRadius}`,
    innerRadius: `${state.innerRadius}`,
    outerRadius: `${state.outerRadius}`,
    boundaryInnerRadius: `${state.boundaryInnerRadius}`,
    boundaryOuterRadius: `${state.boundaryOuterRadius}`,
    ornamentStrokeWidth: `${state.ornamentStrokeWidth}`,
    outerBorderRadius: `${state.outerBorderRadius}`,
    outerBorderStrokeWidth: `${state.outerBorderStrokeWidth}`,
    innerOuterBorderRadius: `${state.innerOuterBorderRadius}`,
    innerOuterBorderStrokeWidth: `${state.innerOuterBorderStrokeWidth.toFixed(1)}`,
    outerPatternType:
      state.outerPatternType === "mesh" ? "渔网纹" : state.outerPatternType === "star" ? "放射星纹" : "无",
    outerPatternRingCount: `${state.outerPatternRingCount}`,
    outerPatternAngleDivisions: `${state.outerPatternAngleDivisions}`,
    outerPatternStrokeWidth: `${state.outerPatternStrokeWidth.toFixed(1)}`,
    outerPatternJumpSpan: `${state.outerPatternJumpSpan}`,
    centerDecorationMode: state.centerDecorationMode === "centerText" ? "中心填字" : "传统装饰",
    surroundDecorationMode: state.surroundDecorationMode === "pattern" ? "纹样填充" : "环绕钉",
    surroundPatternType:
      state.surroundPatternType === "mesh" ? "渔网纹" : state.surroundPatternType === "star" ? "放射星纹" : "无",
    surroundPatternBandWidth: `${state.surroundPatternBandWidth.toFixed(0)}`,
    surroundPatternRingCount: `${state.surroundPatternRingCount}`,
    surroundPatternAngleDivisions: `${state.surroundPatternAngleDivisions}`,
    surroundPatternStrokeWidth: `${state.surroundPatternStrokeWidth.toFixed(1)}`,
    surroundPatternJumpSpan: `${state.surroundPatternJumpSpan}`,
    centerCellHeightScale: `${state.centerCellHeightScale.toFixed(2)}`,
    centerCellWidthScale: `${state.centerCellWidthScale.toFixed(2)}`,
    exportResolution: `${state.exportResolution}`,
    weatheringStrength: `${Math.round(state.weatheringStrength)}%`,
    rubbingKernelRadius: `${state.rubbingKernelRadius} px`,
    rubbingInkStrength: `${Math.round(state.rubbingInkStrength)}%`,
    rubbingLowThreshold: `${Math.round(state.rubbingLowThreshold)}%`,
    rubbingHighThreshold: `${Math.round(state.rubbingHighThreshold)}%`,
    textReliefHeight: `${state.textReliefHeight.toFixed(2)}`,
    textReliefBevelProfile:
      state.textReliefBevelProfile === "round"
        ? "圆角"
        : state.textReliefBevelProfile === "bevel45"
          ? "45度倒角"
          : state.textReliefBevelProfile === "log"
            ? "对数倒角"
            : "无",
    textReliefBevelSize: `${state.textReliefBevelSize.toFixed(2)}`,
    boundaryReliefHeight: `${state.boundaryReliefHeight.toFixed(2)}`,
    boundaryReliefBevelProfile:
      state.boundaryReliefBevelProfile === "round"
        ? "圆角"
        : state.boundaryReliefBevelProfile === "bevel45"
          ? "45度倒角"
          : state.boundaryReliefBevelProfile === "log"
            ? "对数倒角"
          : "无",
    boundaryReliefBevelSize: `${state.boundaryReliefBevelSize.toFixed(2)}`,
    patternReliefHeight: `${state.patternReliefHeight.toFixed(2)}`,
    patternReliefBevelProfile:
      state.patternReliefBevelProfile === "round"
        ? "圆角"
        : state.patternReliefBevelProfile === "bevel45"
          ? "45度倒角"
          : state.patternReliefBevelProfile === "log"
            ? "对数倒角"
          : "无",
    patternReliefBevelSize: `${state.patternReliefBevelSize.toFixed(2)}`,
    outerBorderReliefHeight: `${state.outerBorderReliefHeight.toFixed(2)}`,
    outerBorderReliefBevelProfile:
      state.outerBorderReliefBevelProfile === "round"
        ? "圆角"
        : state.outerBorderReliefBevelProfile === "bevel45"
          ? "45度倒角"
          : state.outerBorderReliefBevelProfile === "log"
            ? "对数倒角"
            : "无",
    outerBorderReliefBevelSize: `${state.outerBorderReliefBevelSize.toFixed(2)}`,
    centerNailReliefHeight: `${state.centerNailReliefHeight.toFixed(2)}`,
    centerNailReliefBevelProfile:
      state.centerNailReliefBevelProfile === "round"
        ? "圆角"
        : state.centerNailReliefBevelProfile === "bevel45"
          ? "45度倒角"
          : state.centerNailReliefBevelProfile === "log"
            ? "对数倒角"
            : "无",
    centerNailReliefBevelSize: `${state.centerNailReliefBevelSize.toFixed(2)}`,
    surroundNailReliefHeight: `${state.surroundNailReliefHeight.toFixed(2)}`,
    surroundNailReliefBevelProfile:
      state.surroundNailReliefBevelProfile === "round"
        ? "圆角"
        : state.surroundNailReliefBevelProfile === "bevel45"
          ? "45度倒角"
          : state.surroundNailReliefBevelProfile === "log"
            ? "对数倒角"
            : "无",
    surroundNailReliefBevelSize: `${state.surroundNailReliefBevelSize.toFixed(2)}`,
    glyphStrokeWidth: `${state.glyphStrokeWidth.toFixed(2)}`,
    centerNailRadius: `${state.centerNailRadius}`,
    centerNailBoundaryRadius: `${state.centerNailBoundaryRadius}`,
    centerNailBoundaryStrokeWidth: `${state.centerNailBoundaryStrokeWidth.toFixed(1)}`,
    surroundNailRadius: `${state.surroundNailRadius}`,
    surroundNailSize: `${state.surroundNailSize}`,
    surroundNailCount: `${state.surroundNailCount}`,
    dividerStyle:
      state.dividerStyle === "parallelDouble"
        ? "平行双线"
        : state.dividerStyle === "radialDouble"
          ? "径向双线"
          : "单线",
    dividerStrokeWidth: `${state.dividerStrokeWidth}`,
    gridCount: `${state.gridCount}`,
    cellFillMode: state.cellFillMode === "uprightFit" ? "原方向适应填充" : "极坐标变形",
    cellInsetMargin: `${state.cellInsetMargin.toFixed(1)}`,
    ringOrientation: state.ringOrientation === "horizontal" ? "横向成环" : "竖向成环",
    rotationAngle: `${state.rotationAngle}°`,
    startAngle: `${state.startAngle}°`,
    sweepAngle: `${state.sweepAngle}°`,
    fontSize: `${state.fontSize}`,
    fontHeightScale: `${state.fontHeightScale.toFixed(2)}`,
    fontWidthScale: `${state.fontWidthScale.toFixed(2)}`,
    tracking: `${state.tracking}`,
    lineGap: `${state.lineGap}`,
    padding: `${state.padding}`,
  };

  Object.entries(outputMap).forEach(([key, value]) => {
    const output = controls[key]?.nextElementSibling;
    if (output && output.tagName === "OUTPUT") output.value = value;
  });
}

function applyBoardZoom(state) {
  artboard.style.width = `${state.boardZoom}%`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getExportResolution(state) {
  const requested = Number(state?.exportResolution);
  return RESOLUTION_OPTIONS.includes(requested) ? requested : 320;
}

function getReliefComponentSettings(state, componentKey) {
  const prefix =
    componentKey === "outerBorder"
      ? "outerBorder"
      : componentKey === "boundary"
        ? "boundary"
        : componentKey === "pattern"
          ? "pattern"
          : componentKey === "centerNail"
            ? "centerNail"
            : componentKey === "surroundNail"
              ? "surroundNail"
            : "text";
  const heightKey = `${prefix}ReliefHeight`;
  const bevelProfileKey = `${prefix}ReliefBevelProfile`;
  const bevelSizeKey = `${prefix}ReliefBevelSize`;
  const legacyHeight = Number(state?.reliefMaxHeight);
  const legacyBevelSize = Number(state?.reliefBevelSize);
  const legacyNailHeight = Number(state?.nailReliefHeight);
  const legacyNailBevelSize = Number(state?.nailReliefBevelSize);
  const heightRequested = Number(state?.[heightKey]);
  const bevelSizeRequested = Number(state?.[bevelSizeKey]);
  const useLegacyNailSettings = componentKey === "centerNail" || componentKey === "surroundNail";
  return {
    height: Number.isFinite(heightRequested)
      ? clamp(heightRequested, LIMITS[heightKey].min, LIMITS[heightKey].max)
      : useLegacyNailSettings && Number.isFinite(legacyNailHeight)
        ? clamp(legacyNailHeight, LIMITS[heightKey].min, LIMITS[heightKey].max)
      : Number.isFinite(legacyHeight)
        ? clamp(legacyHeight, LIMITS[heightKey].min, LIMITS[heightKey].max)
        : 3,
    bevelProfile:
      state?.[bevelProfileKey] === "round"
        ? "round"
        : state?.[bevelProfileKey] === "bevel45"
          ? "bevel45"
          : state?.[bevelProfileKey] === "log"
            ? "log"
            : useLegacyNailSettings && state?.nailReliefBevelProfile === "round"
              ? "round"
              : useLegacyNailSettings && state?.nailReliefBevelProfile === "bevel45"
                ? "bevel45"
                : useLegacyNailSettings && state?.nailReliefBevelProfile === "log"
                  ? "log"
          : state?.reliefBevelProfile === "round"
            ? "round"
            : state?.reliefBevelProfile === "bevel45"
              ? "bevel45"
              : state?.reliefBevelProfile === "log"
                ? "log"
              : "none",
    bevelSize: Number.isFinite(bevelSizeRequested)
      ? clamp(bevelSizeRequested, LIMITS[bevelSizeKey].min, LIMITS[bevelSizeKey].max)
      : useLegacyNailSettings && Number.isFinite(legacyNailBevelSize)
        ? clamp(legacyNailBevelSize, LIMITS[bevelSizeKey].min, LIMITS[bevelSizeKey].max)
      : Number.isFinite(legacyBevelSize)
        ? clamp(legacyBevelSize, 0, 12)
        : 0,
  };
}

function getMaxReliefHeight(state) {
  return Math.max(...RELIEF_COMPONENTS.map((component) => getReliefComponentSettings(state, component.key).height));
}

function setRangeValue(key, value) {
  const limits = LIMITS[key];
  const nextValue = limits ? clamp(value, limits.min, limits.max) : value;
  controls[key].value = String(Number(nextValue.toFixed(2)));
}

function setControlNumber(key, value) {
  if (!Number.isFinite(Number(value)) || !controls[key]) return;
  setRangeValue(key, Number(value));
}

function normalizeAngle(angle) {
  let nextAngle = angle;
  while (nextAngle > LIMITS.startAngle.max) nextAngle -= 360;
  while (nextAngle < LIMITS.startAngle.min) nextAngle += 360;
  return Number(nextAngle.toFixed(2));
}

function setStartAngle(value) {
  const nextAngle = Number(value.toFixed(2));
  controls.startAngle.value = String(nextAngle);
  controls.startAngle.nextElementSibling.value = `${nextAngle}°`;
  return nextAngle;
}

function applyRotationAngleChange() {
  const nextRotationAngle = Number(controls.rotationAngle.value);
  const delta = nextRotationAngle - previousRotationAngle;
  previousRotationAngle = nextRotationAngle;
  const startAngleBefore = Number(controls.startAngle.value);
  const startAngleAfter = setStartAngle(startAngleBefore + delta);
  logDebug("旋转角变化", {
    rotationAngle: nextRotationAngle,
    delta: Number(delta.toFixed(2)),
    startAngleBefore,
    startAngleAfter,
  });
}

function enforceEvenOuterPatternAngleDivisions() {
  if (!controls.outerPatternType || !controls.outerPatternAngleDivisions) return;
  if (controls.outerPatternType.value !== "star") return;
  let value = Math.max(4, Math.round(Number(controls.outerPatternAngleDivisions.value) || 4));
  if (value % 2 === 1) value += 1;
  controls.outerPatternAngleDivisions.value = String(value);
}

function enforceEvenSurroundPatternAngleDivisions() {
  if (!controls.surroundPatternType || !controls.surroundPatternAngleDivisions) return;
  if (controls.surroundPatternType.value !== "star") return;
  let value = Math.max(4, Math.round(Number(controls.surroundPatternAngleDivisions.value) || 4));
  if (value % 2 === 1) value += 1;
  controls.surroundPatternAngleDivisions.value = String(value);
}

function updateDecorationControlState() {
  const useCenterText = controls.centerDecorationMode?.value === "centerText";
  const usePattern = controls.surroundDecorationMode?.value === "pattern";
  if (!useCenterText && usePattern && controls.centerNailBoundaryEnabled && !controls.centerNailBoundaryEnabled.checked) {
    controls.centerNailBoundaryEnabled.checked = true;
  }
  document.querySelectorAll("[data-center-decoration]").forEach((node) => {
    const matches = node.getAttribute("data-center-decoration") === (useCenterText ? "centerText" : "ornaments");
    node.hidden = !matches;
    node.querySelectorAll("input, select").forEach((control) => {
      control.disabled = !matches;
    });
  });
  document.querySelectorAll("[data-surround-mode]").forEach((node) => {
    const matches = !useCenterText && node.getAttribute("data-surround-mode") === (usePattern ? "pattern" : "nails");
    node.hidden = !matches;
    node.querySelectorAll("input, select").forEach((control) => {
      control.disabled = !matches;
    });
  });
  document.querySelectorAll("[data-surround-relief]").forEach((node) => {
    const matches = !useCenterText && node.getAttribute("data-surround-relief") === (usePattern ? "pattern" : "nails");
    node.hidden = !matches;
    node.querySelectorAll("input, select").forEach((control) => {
      control.disabled = !matches;
    });
  });
  document.querySelectorAll("[data-center-nail-boundary]").forEach((node) => {
    const matches = !useCenterText && controls.centerNailBoundaryEnabled?.checked;
    node.hidden = !matches;
    node.querySelectorAll("input, select").forEach((control) => {
      control.disabled = !matches;
    });
  });
}

function updateBoundaryControlState() {
  const enabled = controls.innerOuterBorderEnabled?.checked;
  document.querySelectorAll("[data-inner-outer-border]").forEach((node) => {
    node.hidden = !enabled;
    node.querySelectorAll("input, select").forEach((control) => {
      control.disabled = !enabled;
    });
  });
}

function setLayoutMode(mode) {
  if (!mode) return;
  const target = controls.layoutMode.find((input) => input.value === mode);
  if (!target) return;
  controls.layoutMode.forEach((input) => {
    input.checked = input === target;
  });
}

function applyLayoutConfig(layout) {
  if (!layout || typeof layout !== "object") return;

  const parameters = layout.parameters || {};
  if (Array.isArray(layout.cells)) {
    cellValues = layout.cells.map((value) => String(value || "").trim().slice(0, 1));
    controls.sourceText.value = cellValues.filter(Boolean).join("");
  } else if (Array.isArray(parameters.cells)) {
    cellValues = parameters.cells.map((value) => String(value || "").trim().slice(0, 1));
    controls.sourceText.value = cellValues.filter(Boolean).join("");
  } else if (typeof layout.text === "string") {
    cellValues = [...layout.text.replace(/\s+/g, "")];
    controls.sourceText.value = layout.text;
  }
  const savedCellSettings = Array.isArray(layout.cellSettings) ? layout.cellSettings : parameters.cellSettings;
  if (Array.isArray(savedCellSettings)) {
    cellSettings = savedCellSettings.map((settings) => ({
      flow: settings?.flow === "ccw" || Number(settings?.direction || 0) === 180 ? "ccw" : "cw",
      widthScale: clampCellScale(settings?.widthScale ?? 1),
      heightScale: clampCellScale(settings?.heightScale ?? 1),
      strokeWidth:
        settings?.strokeWidth == null || !Number.isFinite(Number(settings.strokeWidth))
          ? null
          : clamp(Number(settings.strokeWidth), 0, 10),
    }));
  }
  const savedCellOrder = Array.isArray(layout.cellOrder) ? layout.cellOrder : parameters.cellOrder;
  if (Array.isArray(savedCellOrder)) {
    cellOrder = savedCellOrder.map((index) => Number(index)).filter(Number.isInteger);
  }
  centerCellValue = firstGrapheme(layout.centerCell ?? parameters.centerCell ?? "");
  setLayoutMode(layout.mode);
  if (layout.fontKey && FONT_REGISTRY.has(layout.fontKey)) {
    controls.fontFamily.value = layout.fontKey === SECRET_FONT_KEY && !secretFontUnlocked
      ? DEFAULT_FONT_KEY
      : layout.fontKey;
  }

  [
    "boardZoom",
    "centerRadius",
    "innerRadius",
    "outerRadius",
    "boundaryInnerRadius",
    "boundaryOuterRadius",
    "ornamentStrokeWidth",
    "outerBorderRadius",
    "outerBorderStrokeWidth",
    "innerOuterBorderRadius",
    "innerOuterBorderStrokeWidth",
    "outerPatternRingCount",
    "outerPatternAngleDivisions",
    "outerPatternStrokeWidth",
    "outerPatternJumpSpan",
    "surroundPatternBandWidth",
    "surroundPatternRingCount",
    "surroundPatternAngleDivisions",
    "surroundPatternStrokeWidth",
    "surroundPatternJumpSpan",
    "centerCellHeightScale",
    "centerCellWidthScale",
    "exportResolution",
    "exportDiameterMm",
    "baseThickness",
    "weatheringStrength",
    "rubbingKernelRadius",
    "rubbingInkStrength",
    "rubbingLowThreshold",
    "rubbingHighThreshold",
    "textReliefHeight",
    "textReliefBevelSize",
    "boundaryReliefHeight",
    "boundaryReliefBevelSize",
    "patternReliefHeight",
    "patternReliefBevelSize",
    "outerBorderReliefHeight",
    "outerBorderReliefBevelSize",
    "centerNailReliefHeight",
    "centerNailReliefBevelSize",
    "surroundNailReliefHeight",
    "surroundNailReliefBevelSize",
    "glyphStrokeWidth",
    "centerNailRadius",
    "centerNailBoundaryRadius",
    "centerNailBoundaryStrokeWidth",
    "surroundNailRadius",
    "surroundNailSize",
    "surroundNailCount",
    "dividerStrokeWidth",
    "gridCount",
    "cellInsetMargin",
    "rotationAngle",
    "startAngle",
    "sweepAngle",
    "fontSize",
    "fontHeightScale",
    "fontWidthScale",
    "tracking",
    "lineGap",
    "padding",
  ].forEach((key) => setControlNumber(key, parameters[key]));

  if (parameters.glyphStrokeWidth === undefined) {
    if (parameters.reliefSilhouetteWidth !== undefined) {
      setControlNumber("glyphStrokeWidth", parameters.reliefSilhouetteWidth);
    } else if (parameters.reliefClampHeight !== undefined) {
      setControlNumber("glyphStrokeWidth", parameters.reliefClampHeight);
    }
  }

  [
    ["textReliefBevelProfile", "text"],
    ["boundaryReliefBevelProfile", "boundary"],
    ["patternReliefBevelProfile", "pattern"],
    ["outerBorderReliefBevelProfile", "outerBorder"],
    ["centerNailReliefBevelProfile", "centerNail"],
    ["surroundNailReliefBevelProfile", "surroundNail"],
  ].forEach(([key]) => {
    const value =
      parameters[key] ??
      (typeof parameters.reliefBevelProfile === "string" ? parameters.reliefBevelProfile : null);
    if (!controls[key] || typeof value !== "string") return;
    controls[key].value = value === "round" ? "round" : value === "bevel45" ? "bevel45" : value === "log" ? "log" : "none";
  });

  if (parameters.centerNailReliefBevelProfile === undefined && typeof parameters.nailReliefBevelProfile === "string") {
    ["centerNailReliefBevelProfile", "surroundNailReliefBevelProfile"].forEach((key) => {
      if (!controls[key]) return;
      controls[key].value =
        parameters.nailReliefBevelProfile === "round"
          ? "round"
          : parameters.nailReliefBevelProfile === "bevel45"
            ? "bevel45"
            : parameters.nailReliefBevelProfile === "log"
              ? "log"
              : "none";
    });
  }

  if (parameters.textReliefHeight === undefined && parameters.reliefMaxHeight !== undefined) {
    [
      "textReliefHeight",
      "boundaryReliefHeight",
      "patternReliefHeight",
      "outerBorderReliefHeight",
      "centerNailReliefHeight",
      "surroundNailReliefHeight",
    ].forEach((key) => setControlNumber(key, parameters.reliefMaxHeight));
  }

  if (parameters.textReliefBevelSize === undefined && parameters.reliefBevelSize !== undefined) {
    [
      "textReliefBevelSize",
      "boundaryReliefBevelSize",
      "patternReliefBevelSize",
      "outerBorderReliefBevelSize",
      "centerNailReliefBevelSize",
      "surroundNailReliefBevelSize",
    ].forEach((key) => setControlNumber(key, parameters.reliefBevelSize));
  }

  if (parameters.centerNailReliefHeight === undefined && parameters.nailReliefHeight !== undefined) {
    ["centerNailReliefHeight", "surroundNailReliefHeight"].forEach((key) =>
      setControlNumber(key, parameters.nailReliefHeight),
    );
  }

  if (parameters.centerNailReliefBevelSize === undefined && parameters.nailReliefBevelSize !== undefined) {
    ["centerNailReliefBevelSize", "surroundNailReliefBevelSize"].forEach((key) =>
      setControlNumber(key, parameters.nailReliefBevelSize),
    );
  }

  if (typeof parameters.dividerStyle === "string" && controls.dividerStyle) {
    controls.dividerStyle.value =
      parameters.dividerStyle === "parallelDouble"
        ? "parallelDouble"
        : parameters.dividerStyle === "radialDouble" || parameters.dividerStyle === "double"
          ? "radialDouble"
          : "single";
  }

  if (typeof parameters.cellFillMode === "string" && controls.cellFillMode) {
    controls.cellFillMode.value = parameters.cellFillMode === "uprightFit" ? "uprightFit" : "polarWarp";
  }

  if (typeof parameters.outerPatternType === "string" && controls.outerPatternType) {
    controls.outerPatternType.value = getPatternTypeValue({ value: parameters.outerPatternType });
  }

  if (typeof parameters.centerDecorationMode === "string" && controls.centerDecorationMode) {
    controls.centerDecorationMode.value = parameters.centerDecorationMode === "centerText" ? "centerText" : "ornaments";
  }

  if (typeof parameters.innerOuterBorderEnabled === "boolean" && controls.innerOuterBorderEnabled) {
    controls.innerOuterBorderEnabled.checked = parameters.innerOuterBorderEnabled;
  }

  if (typeof parameters.surroundDecorationMode === "string" && controls.surroundDecorationMode) {
    controls.surroundDecorationMode.value = parameters.surroundDecorationMode === "pattern" ? "pattern" : "nails";
  }

  if (typeof parameters.centerNailBoundaryEnabled === "boolean" && controls.centerNailBoundaryEnabled) {
    controls.centerNailBoundaryEnabled.checked = parameters.centerNailBoundaryEnabled;
  }

  if (typeof parameters.surroundPatternType === "string" && controls.surroundPatternType) {
    controls.surroundPatternType.value = getPatternTypeValue({ value: parameters.surroundPatternType });
  }

  if (parameters.outerPatternRingCount === undefined && parameters.outerPatternDensity !== undefined) {
    setControlNumber("outerPatternAngleDivisions", parameters.outerPatternDensity);
  }

  if (controls.ringOrientation) {
    controls.ringOrientation.value = parameters.ringOrientation === "horizontal" ? "horizontal" : "vertical";
  }

  if (parameters.centerRadius === undefined) {
    const legacyCenterRadius =
      Number(controls.innerRadius.value) + Number(controls.padding.value) + Number(controls.fontSize.value) / 2;
    setRangeValue("centerRadius", clamp(Math.round(legacyCenterRadius), LIMITS.centerRadius.min, LIMITS.centerRadius.max));
  }

  [
    "alternateFlow",
    "showGuides",
    "showGrid",
    "showGlyphGrid",
    "showAngleDebug",
    "showOrnamentRings",
  ].forEach((key) => {
    if (typeof parameters[key] === "boolean") controls[key].checked = parameters[key];
  });

  if (typeof parameters.equalRingSpacing === "boolean") equalRingSpacing = parameters.equalRingSpacing;
  if (!Number.isFinite(Number(parameters.gridCount))) {
    setRangeValue("gridCount", Math.max(1, [...controls.sourceText.value.replace(/\s+/g, "")].length || 4));
  }
  previousRotationAngle = Number(controls.rotationAngle.value) || 0;
  updateDecorationControlState();
  updateBoundaryControlState();

  setLayoutMode("radialRing");
  buildCellInputs();
}

function polarToPoint(radius, angleDeg) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

function describeArc(radius, startAngle, sweepAngle) {
  if (Math.abs(sweepAngle) >= 360) {
    const midAngle = startAngle + 180 * Math.sign(sweepAngle || 1);
    const endAngle = startAngle + 360 * Math.sign(sweepAngle || 1);
    const start = polarToPoint(radius, startAngle);
    const mid = polarToPoint(radius, midAngle);
    const end = polarToPoint(radius, endAngle);
    const sweep = sweepAngle >= 0 ? 1 : 0;
    return [
      `M ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 1 ${sweep} ${mid.x} ${mid.y}`,
      `A ${radius} ${radius} 0 1 ${sweep} ${end.x} ${end.y}`,
    ].join(" ");
  }

  const endAngle = startAngle + sweepAngle;
  const start = polarToPoint(radius, startAngle);
  const end = polarToPoint(radius, endAngle);
  const largeArc = Math.abs(sweepAngle) > 180 ? 1 : 0;
  const sweep = sweepAngle >= 0 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`;
}

function describeRingSector(innerRadius, outerRadius, startAngle, sweepAngle) {
  if (Math.abs(sweepAngle) >= 360) {
    const direction = Math.sign(sweepAngle || 1);
    const sweep = sweepAngle >= 0 ? 1 : 0;
    const reverseSweep = sweep ? 0 : 1;
    const outerStart = polarToPoint(outerRadius, startAngle);
    const outerMid = polarToPoint(outerRadius, startAngle + 180 * direction);
    const outerEnd = polarToPoint(outerRadius, startAngle + 360 * direction);
    const innerStart = polarToPoint(innerRadius, startAngle);
    const innerMid = polarToPoint(innerRadius, startAngle + 180 * direction);
    const innerEnd = polarToPoint(innerRadius, startAngle + 360 * direction);

    return [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${outerRadius} ${outerRadius} 0 1 ${sweep} ${outerMid.x} ${outerMid.y}`,
      `A ${outerRadius} ${outerRadius} 0 1 ${sweep} ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 1 ${reverseSweep} ${innerMid.x} ${innerMid.y}`,
      `A ${innerRadius} ${innerRadius} 0 1 ${reverseSweep} ${innerStart.x} ${innerStart.y}`,
      "Z",
    ].join(" ");
  }

  const endAngle = startAngle + sweepAngle;
  const outerStart = polarToPoint(outerRadius, startAngle);
  const outerEnd = polarToPoint(outerRadius, endAngle);
  const innerEnd = polarToPoint(innerRadius, endAngle);
  const innerStart = polarToPoint(innerRadius, startAngle);
  const largeArc = Math.abs(sweepAngle) > 180 ? 1 : 0;
  const sweep = sweepAngle >= 0 ? 1 : 0;
  const reverseSweep = sweep ? 0 : 1;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArc} ${sweep} ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArc} ${reverseSweep} ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function createSvgElement(name, attrs = {}) {
  const node = document.createElementNS(NS, name);
  Object.entries(attrs).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
  return node;
}

function getGlyphFill(index) {
  if ((index + 1) % 11 === 0) return "#bb3e4a";
  if ((index + 1) % 7 === 0) return "#0a5f62";
  return "#172026";
}

function parseTtfFont(buffer) {
  const view = new DataView(buffer);
  const u16 = (offset) => view.getUint16(offset, false);
  const i16 = (offset) => view.getInt16(offset, false);
  const u32 = (offset) => view.getUint32(offset, false);
  const tag = (offset) =>
    String.fromCharCode(
      view.getUint8(offset),
      view.getUint8(offset + 1),
      view.getUint8(offset + 2),
      view.getUint8(offset + 3),
    );
  const tableMap = new Map();
  const tableCount = u16(4);

  for (let index = 0; index < tableCount; index += 1) {
    const offset = 12 + index * 16;
    tableMap.set(tag(offset), {
      offset: u32(offset + 8),
      length: u32(offset + 12),
    });
  }

  const table = (name) => {
    const value = tableMap.get(name);
    if (!value) throw new Error(`缺少 ${name} 字体表`);
    return value.offset;
  };

  const head = table("head");
  const hhea = table("hhea");
  const maxp = table("maxp");
  const cmap = table("cmap");
  const glyf = table("glyf");
  const loca = table("loca");
  const hmtx = table("hmtx");
  const unitsPerEm = u16(head + 18);
  const indexToLocFormat = i16(head + 50);
  const glyphCount = u16(maxp + 4);
  const metricCount = u16(hhea + 34);
  const advances = [];

  for (let index = 0; index < glyphCount; index += 1) {
    const metricIndex = Math.min(index, metricCount - 1);
    advances[index] = u16(hmtx + metricIndex * 4);
  }

  const glyphOffsets = [];
  for (let index = 0; index <= glyphCount; index += 1) {
    glyphOffsets[index] =
      indexToLocFormat === 0 ? u16(loca + index * 2) * 2 : u32(loca + index * 4);
  }

  const cmapLookup = parseCmapTable(view, cmap);
  const glyphCache = new Map();

  function parseGlyph(glyphId, depth = 0) {
    if (glyphCache.has(glyphId)) return glyphCache.get(glyphId);
    if (depth > 12) return { contours: [], advance: advances[glyphId] || unitsPerEm * 0.5 };

    const start = glyf + glyphOffsets[glyphId];
    const end = glyf + glyphOffsets[glyphId + 1];
    if (start >= end) {
      const empty = { contours: [], advance: advances[glyphId] || unitsPerEm * 0.5 };
      glyphCache.set(glyphId, empty);
      return empty;
    }

    const contourCount = i16(start);
    let glyph;
    if (contourCount >= 0) {
      glyph = parseSimpleGlyph(view, start, contourCount, advances[glyphId] || unitsPerEm * 0.5);
    } else {
      glyph = parseCompoundGlyph(view, start, advances[glyphId] || unitsPerEm * 0.5, parseGlyph, depth);
    }

    glyphCache.set(glyphId, glyph);
    return glyph;
  }

  return {
    unitsPerEm,
    getGlyph(char) {
      const glyphId = cmapLookup(char.codePointAt(0)) || 0;
      return parseGlyph(glyphId);
    },
  };
}

function parseCmapTable(view, cmapOffset) {
  const u16 = (offset) => view.getUint16(offset, false);
  const i16 = (offset) => view.getInt16(offset, false);
  const u32 = (offset) => view.getUint32(offset, false);
  const encodingCount = u16(cmapOffset + 2);
  let format12 = 0;
  let format4 = 0;

  for (let index = 0; index < encodingCount; index += 1) {
    const record = cmapOffset + 4 + index * 8;
    const platformId = u16(record);
    const encodingId = u16(record + 2);
    const subtable = cmapOffset + u32(record + 4);
    const format = u16(subtable);
    if (format === 12 && (platformId === 3 || platformId === 0)) format12 = subtable;
    if (format === 4 && platformId === 3 && (encodingId === 1 || encodingId === 10)) format4 = subtable;
    if (format === 4 && !format4) format4 = subtable;
  }

  if (format12) {
    const groupCount = u32(format12 + 12);
    return (codePoint) => {
      for (let index = 0; index < groupCount; index += 1) {
        const group = format12 + 16 + index * 12;
        const startChar = u32(group);
        const endChar = u32(group + 4);
        if (codePoint >= startChar && codePoint <= endChar) {
          return u32(group + 8) + codePoint - startChar;
        }
      }
      return 0;
    };
  }

  if (!format4) throw new Error("未找到可用 cmap 字符映射");
  const segCount = u16(format4 + 6) / 2;
  const endCodes = format4 + 14;
  const startCodes = endCodes + segCount * 2 + 2;
  const idDeltas = startCodes + segCount * 2;
  const idRangeOffsets = idDeltas + segCount * 2;

  return (codePoint) => {
    if (codePoint > 0xffff) return 0;

    for (let index = 0; index < segCount; index += 1) {
      const endCode = u16(endCodes + index * 2);
      const startCode = u16(startCodes + index * 2);
      if (codePoint < startCode || codePoint > endCode) continue;

      const rangeOffset = u16(idRangeOffsets + index * 2);
      const delta = i16(idDeltas + index * 2);
      if (rangeOffset === 0) return (codePoint + delta) & 0xffff;

      const glyphOffset = idRangeOffsets + index * 2 + rangeOffset + (codePoint - startCode) * 2;
      const glyphIndex = u16(glyphOffset);
      return glyphIndex === 0 ? 0 : (glyphIndex + delta) & 0xffff;
    }

    return 0;
  };
}

function parseSimpleGlyph(view, offset, contourCount, advance) {
  const u8 = (index) => view.getUint8(index);
  const u16 = (index) => view.getUint16(index, false);
  const i16 = (index) => view.getInt16(index, false);
  const endPoints = [];

  for (let index = 0; index < contourCount; index += 1) {
    endPoints.push(u16(offset + 10 + index * 2));
  }

  const pointCount = endPoints[endPoints.length - 1] + 1;
  let cursor = offset + 10 + contourCount * 2;
  const instructionLength = u16(cursor);
  cursor += 2 + instructionLength;

  const flags = [];
  while (flags.length < pointCount) {
    const flag = u8(cursor);
    cursor += 1;
    flags.push(flag);
    if (flag & 8) {
      const repeat = u8(cursor);
      cursor += 1;
      for (let index = 0; index < repeat; index += 1) flags.push(flag);
    }
  }

  const xs = [];
  let x = 0;
  for (let index = 0; index < pointCount; index += 1) {
    const flag = flags[index];
    if (flag & 2) {
      const value = u8(cursor);
      cursor += 1;
      x += flag & 16 ? value : -value;
    } else if (!(flag & 16)) {
      x += i16(cursor);
      cursor += 2;
    }
    xs.push(x);
  }

  const ys = [];
  let y = 0;
  for (let index = 0; index < pointCount; index += 1) {
    const flag = flags[index];
    if (flag & 4) {
      const value = u8(cursor);
      cursor += 1;
      y += flag & 32 ? value : -value;
    } else if (!(flag & 32)) {
      y += i16(cursor);
      cursor += 2;
    }
    ys.push(y);
  }

  const contours = [];
  let startPoint = 0;
  endPoints.forEach((endPoint) => {
    const contour = [];
    for (let index = startPoint; index <= endPoint; index += 1) {
      contour.push({ x: xs[index], y: ys[index], on: Boolean(flags[index] & 1) });
    }
    contours.push(contour);
    startPoint = endPoint + 1;
  });

  return { contours, advance };
}

function parseCompoundGlyph(view, offset, advance, parseGlyph, depth) {
  const u16 = (index) => view.getUint16(index, false);
  const i16 = (index) => view.getInt16(index, false);
  const contours = [];
  let cursor = offset + 10;
  let more = true;

  while (more) {
    const flags = u16(cursor);
    const glyphId = u16(cursor + 2);
    cursor += 4;

    let arg1;
    let arg2;
    if (flags & 1) {
      arg1 = i16(cursor);
      arg2 = i16(cursor + 2);
      cursor += 4;
    } else {
      arg1 = view.getInt8(cursor);
      arg2 = view.getInt8(cursor + 1);
      cursor += 2;
    }

    let a = 1;
    let b = 0;
    let c = 0;
    let d = 1;
    if (flags & 8) {
      a = d = i16(cursor) / 16384;
      cursor += 2;
    } else if (flags & 64) {
      a = i16(cursor) / 16384;
      d = i16(cursor + 2) / 16384;
      cursor += 4;
    } else if (flags & 128) {
      a = i16(cursor) / 16384;
      b = i16(cursor + 2) / 16384;
      c = i16(cursor + 4) / 16384;
      d = i16(cursor + 6) / 16384;
      cursor += 8;
    }

    const dx = flags & 2 ? arg1 : 0;
    const dy = flags & 2 ? arg2 : 0;
    const component = parseGlyph(glyphId, depth + 1);
    component.contours.forEach((contour) => {
      contours.push(
        contour.map((point) => ({
          x: point.x * a + point.y * c + dx,
          y: point.x * b + point.y * d + dy,
          on: point.on,
        })),
      );
    });

    more = Boolean(flags & 32);
  }

  return { contours, advance };
}

function getVectorFont(state) {
  const font = FONT_REGISTRY.get(state.fontKey);
  return font && font.parsed ? font.parsed : null;
}

function getScaledFontHeight(state) {
  return state.fontSize * (state.fontHeightScale || 1);
}

function getScaledFontWidth(state) {
  return state.fontSize * (state.fontWidthScale || 1);
}

function getGlyphScale(font, state) {
  const baseScale = state.fontSize / font.unitsPerEm;
  return {
    x: baseScale * (state.fontWidthScale || 1),
    y: baseScale * (state.fontHeightScale || 1),
  };
}

function getGlyphAdvance(font, char, state) {
  if (!font) return Math.max(4, getScaledFontWidth(state) + state.tracking);
  return (font.getGlyph(char).advance / font.unitsPerEm) * state.fontSize * (state.fontWidthScale || 1) + state.tracking;
}

function getRunAdvance(chars, font, state) {
  return chars.reduce((sum, char) => sum + getGlyphAdvance(font, char, state), 0);
}

function contourToSegments(contour) {
  if (!contour.length) return [];

  const points = contour.slice();
  let first = points[0];
  let last = points[points.length - 1];
  let start;

  if (first.on) {
    start = first;
  } else if (last.on) {
    start = last;
    points.unshift(points.pop());
  } else {
    start = { x: (first.x + last.x) / 2, y: (first.y + last.y) / 2, on: true };
    points.unshift(start);
  }

  const segments = [];
  let current = start;
  for (let index = 1; index <= points.length; index += 1) {
    const point = points[index % points.length];
    if (point.on) {
      segments.push({ type: "line", p0: current, p1: point });
      current = point;
      continue;
    }

    const next = points[(index + 1) % points.length];
    const end = next.on ? next : { x: (point.x + next.x) / 2, y: (point.y + next.y) / 2, on: true };
    segments.push({ type: "quad", p0: current, p1: point, p2: end });
    current = end;
    if (next.on) index += 1;
  }

  return segments;
}

function sampleContour(contour, scale, offsetX, mapPoint, offsetY = 0) {
  const segments = contourToSegments(contour);
  const points = [];

  segments.forEach((segment) => {
    const steps =
      segment.type === "line"
        ? Math.max(2, Math.ceil(distance(segment.p0, segment.p1) * Math.max(scale.x, scale.y) / 8))
        : Math.max(
            5,
            Math.ceil((distance(segment.p0, segment.p1) + distance(segment.p1, segment.p2)) * Math.max(scale.x, scale.y) / 7),
          );

    for (let step = 0; step <= steps; step += 1) {
      if (points.length && step === 0) continue;
      const t = step / steps;
      const source =
        segment.type === "line"
          ? lerpPoint(segment.p0, segment.p1, t)
          : quadPoint(segment.p0, segment.p1, segment.p2, t);
      points.push(mapPoint(offsetX + source.x * scale.x, offsetY - source.y * scale.y));
    }
  });

  return points;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function lerpPoint(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function quadPoint(a, b, c, t) {
  const mt = 1 - t;
  return {
    x: mt * mt * a.x + 2 * mt * t * b.x + t * t * c.x,
    y: mt * mt * a.y + 2 * mt * t * b.y + t * t * c.y,
  };
}

function pointsToPath(points) {
  if (points.length < 2) return "";
  const [first, ...rest] = points;
  return [
    `M ${first.x.toFixed(2)} ${first.y.toFixed(2)}`,
    ...rest.map((point) => `L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`),
    "Z",
  ].join(" ");
}

function vectorAngleDegrees(prev, current, next) {
  const ax = prev.x - current.x;
  const ay = prev.y - current.y;
  const bx = next.x - current.x;
  const by = next.y - current.y;
  const al = Math.hypot(ax, ay);
  const bl = Math.hypot(bx, by);
  if (al < 0.01 || bl < 0.01) return 180;
  const dot = clamp((ax * bx + ay * by) / (al * bl), -1, 1);
  return (Math.acos(dot) * 180) / Math.PI;
}

function pointToward(from, to, distanceValue) {
  const length = Math.max(0.001, distance(from, to));
  const t = Math.min(1, Math.max(0, distanceValue / length));
  return {
    x: from.x + (to.x - from.x) * t,
    y: from.y + (to.y - from.y) * t,
  };
}

function pointsToLocallyRoundedPath(points, options = {}) {
  if (points.length < 2) return "";

  const maxAngle = Number(options.maxAngleDeg) || 30;
  const radius = Math.max(0, Number(options.radius) || 0);
  if (points.length < 4 || radius <= 0) return pointsToPath(points);

  const segments = [];
  for (let index = 0; index < points.length; index += 1) {
    const prev = points[(index - 1 + points.length) % points.length];
    const current = points[index];
    const next = points[(index + 1) % points.length];
    const angle = vectorAngleDegrees(prev, current, next);
    const prevLength = distance(current, prev);
    const nextLength = distance(current, next);
    const roundDistance = Math.min(radius, prevLength * 0.35, nextLength * 0.35);

    if (angle < maxAngle && roundDistance > 0.25) {
      segments.push({
        type: "round",
        start: pointToward(current, prev, roundDistance),
        control: current,
        end: pointToward(current, next, roundDistance),
      });
    } else {
      segments.push({ type: "line", point: current });
    }
  }

  let firstSegment = segments[0];
  let d;
  if (firstSegment.type === "round") {
    d = `M ${firstSegment.start.x.toFixed(2)} ${firstSegment.start.y.toFixed(2)} Q ${firstSegment.control.x.toFixed(2)} ${firstSegment.control.y.toFixed(2)} ${firstSegment.end.x.toFixed(2)} ${firstSegment.end.y.toFixed(2)}`;
  } else {
    d = `M ${firstSegment.point.x.toFixed(2)} ${firstSegment.point.y.toFixed(2)}`;
  }

  for (let index = 1; index < segments.length; index += 1) {
    const segment = segments[index];
    if (segment.type === "round") {
      d += ` L ${segment.start.x.toFixed(2)} ${segment.start.y.toFixed(2)} Q ${segment.control.x.toFixed(2)} ${segment.control.y.toFixed(2)} ${segment.end.x.toFixed(2)} ${segment.end.y.toFixed(2)}`;
    } else {
      d += ` L ${segment.point.x.toFixed(2)} ${segment.point.y.toFixed(2)}`;
    }
  }
  return `${d} Z`;
}

function openPointsToPath(points) {
  if (points.length < 2) return "";
  const [first, ...rest] = points;
  return [
    `M ${first.x.toFixed(2)} ${first.y.toFixed(2)}`,
    ...rest.map((point) => `L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`),
  ].join(" ");
}

function getGlyphBounds(glyph) {
  const points = glyph.contours.flat();
  if (!points.length) return null;

  return points.reduce(
    (bounds, point) => ({
      minX: Math.min(bounds.minX, point.x),
      maxX: Math.max(bounds.maxX, point.x),
      minY: Math.min(bounds.minY, point.y),
      maxY: Math.max(bounds.maxY, point.y),
    }),
    {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity,
    },
  );
}

function getGlyphVisualMetrics(glyph, font, state) {
  const bounds = getGlyphBounds(glyph);
  const scale = getGlyphScale(font, state);
  if (!bounds) {
    const advance = (glyph.advance / font.unitsPerEm) * state.fontSize * (state.fontWidthScale || 1) + state.tracking;
    return {
      bounds: null,
      scale,
      width: advance,
      height: state.fontSize * (state.fontHeightScale || 1),
      centerX: advance / 2,
      centerY: 0,
      offsetX: -advance / 2,
      offsetY: 0,
    };
  }

  const centerX = ((bounds.minX + bounds.maxX) / 2) * scale.x;
  const centerY = ((bounds.minY + bounds.maxY) / 2) * scale.y;
  return {
    bounds,
    scale,
    width: (bounds.maxX - bounds.minX) * scale.x,
    height: (bounds.maxY - bounds.minY) * scale.y,
    centerX,
    centerY,
    offsetX: -centerX,
    offsetY: centerY,
  };
}

function getGlyphMappedCenterAngle(glyph, font, state, baseAngle, radius, offsetY = 0) {
  const metrics = getGlyphVisualMetrics(glyph, font, state);
  const localCenterY = offsetY - metrics.centerY;
  return baseAngle + (localCenterY * 180) / (Math.PI * Math.max(1, radius));
}

function sampleLocalLine(start, end, scale, offsetX, mapPoint, offsetY = 0) {
  const pixelLength = Math.hypot((end.x - start.x) * scale.x, (end.y - start.y) * scale.y);
  const steps = Math.max(6, Math.ceil(pixelLength / 7));
  const points = [];

  for (let index = 0; index <= steps; index += 1) {
    const t = index / steps;
    const source = lerpPoint(start, end, t);
    points.push(mapPoint(offsetX + source.x * scale.x, offsetY - source.y * scale.y));
  }

  return points;
}

function appendGlyphGrid(glyph, font, state, offsetX, mapPoint, offsetY = 0, parent = textLayer) {
  if (!state.showGlyphGrid) return;

  const bounds = getGlyphBounds(glyph);
  if (!bounds) return;

  const scale = getGlyphScale(font, state);
  const gridStep = font.unitsPerEm / 4;
  const minX = Math.floor(Math.min(0, bounds.minX) / gridStep) * gridStep;
  const maxX = Math.ceil(Math.max(glyph.advance, bounds.maxX) / gridStep) * gridStep;
  const minY = Math.floor(bounds.minY / gridStep) * gridStep;
  const maxY = Math.ceil(bounds.maxY / gridStep) * gridStep;
  const d = [];

  for (let x = minX; x <= maxX + 0.1; x += gridStep) {
    d.push(openPointsToPath(sampleLocalLine({ x, y: minY }, { x, y: maxY }, scale, offsetX, mapPoint, offsetY)));
  }

  for (let y = minY; y <= maxY + 0.1; y += gridStep) {
    d.push(openPointsToPath(sampleLocalLine({ x: minX, y }, { x: maxX, y }, scale, offsetX, mapPoint, offsetY)));
  }

  parent.appendChild(
    createSvgElement("path", {
      class: "glyph-debug-grid",
      d: d.filter(Boolean).join(" "),
    }),
  );
}

function appendGlyphPrecisionGrid(glyph, font, state, offsetX, mapPoint, offsetY = 0, parent = textLayer) {
  if (!state.showGlyphGrid) return;

  const metrics = getGlyphVisualMetrics(glyph, font, state);
  if (!metrics.bounds) return;

  const minX = offsetX + metrics.bounds.minX * metrics.scale.x;
  const maxX = offsetX + metrics.bounds.maxX * metrics.scale.x;
  const minY = offsetY - metrics.bounds.maxY * metrics.scale.y;
  const maxY = offsetY - metrics.bounds.minY * metrics.scale.y;
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const gridStep = Math.max(6, Math.min(maxX - minX, maxY - minY) / 4);

  for (let x = minX; x <= maxX + 0.1; x += gridStep) {
    appendOpenPathTo(parent, sampleLayoutLine({ x, y: minY }, { x, y: maxY }, mapPoint), "glyph-precision-grid");
  }
  for (let y = minY; y <= maxY + 0.1; y += gridStep) {
    appendOpenPathTo(parent, sampleLayoutLine({ x: minX, y }, { x: maxX, y }, mapPoint), "glyph-precision-grid");
  }
  appendMappedRectTo(parent, minX, minY, maxX, maxY, mapPoint, "char-boundary");
  appendOpenPathTo(parent, sampleLayoutLine({ x: centerX, y: minY }, { x: centerX, y: maxY }, mapPoint), "glyph-center-line");
  appendOpenPathTo(parent, sampleLayoutLine({ x: minX, y: centerY }, { x: maxX, y: centerY }, mapPoint), "glyph-center-line");
}

function appendOpenPath(points, className) {
  return appendOpenPathTo(textLayer, points, className);
}

function appendOpenPathTo(parent, points, className) {
  const d = openPointsToPath(points);
  if (!d) return;

  parent.appendChild(
    createSvgElement("path", {
      class: className,
      d,
    }),
  );
}

function appendMappedRect(minX, minY, maxX, maxY, mapPoint, className) {
  return appendMappedRectTo(textLayer, minX, minY, maxX, maxY, mapPoint, className);
}

function appendMappedRectTo(parent, minX, minY, maxX, maxY, mapPoint, className) {
  const edges = [
    [{ x: minX, y: minY }, { x: maxX, y: minY }],
    [{ x: maxX, y: minY }, { x: maxX, y: maxY }],
    [{ x: maxX, y: maxY }, { x: minX, y: maxY }],
    [{ x: minX, y: maxY }, { x: minX, y: minY }],
  ];

  edges.forEach(([start, end]) => {
    appendOpenPathTo(parent, sampleLayoutLine(start, end, mapPoint), className);
  });
}

function mappedRectPath(minX, minY, maxX, maxY, mapPoint) {
  const edges = [
    [{ x: minX, y: minY }, { x: maxX, y: minY }],
    [{ x: maxX, y: minY }, { x: maxX, y: maxY }],
    [{ x: maxX, y: maxY }, { x: minX, y: maxY }],
    [{ x: minX, y: maxY }, { x: minX, y: minY }],
  ];

  return edges
    .map(([start, end]) => openPointsToPath(sampleLayoutLine(start, end, mapPoint)))
    .filter(Boolean)
    .join(" ");
}

function appendDividerMarker(angle, radius, strokeWidth) {
  const tip = polarToPoint(radius + 18 + strokeWidth, angle);
  const tail = polarToPoint(radius + 48 + strokeWidth, angle);
  const angleRad = ((angle - 90) * Math.PI) / 180;
  const tangentX = -Math.sin(angleRad);
  const tangentY = Math.cos(angleRad);
  const wingBase = polarToPoint(radius + 28 + strokeWidth, angle);
  const wingSize = 8 + strokeWidth * 0.35;

  textLayer.appendChild(
    createSvgElement("line", {
      class: "first-divider-marker",
      x1: tail.x,
      y1: tail.y,
      x2: tip.x,
      y2: tip.y,
    }),
  );
  textLayer.appendChild(
    createSvgElement("path", {
      class: "first-divider-marker",
      d: [
        `M ${tip.x.toFixed(2)} ${tip.y.toFixed(2)}`,
        `L ${(wingBase.x + tangentX * wingSize).toFixed(2)} ${(wingBase.y + tangentY * wingSize).toFixed(2)}`,
        `M ${tip.x.toFixed(2)} ${tip.y.toFixed(2)}`,
        `L ${(wingBase.x - tangentX * wingSize).toFixed(2)} ${(wingBase.y - tangentY * wingSize).toFixed(2)}`,
      ].join(" "),
    }),
  );
}

function getEffectiveOuterBorderOuterRadius(state, outerBand = null) {
  const fallbackOuterBand = outerBand ?? Math.max(0, Number(state.boundaryOuterRadius) || Number(state.outerRadius) || 0);
  const outerBorderStrokeWidth = Math.max(0, Number(state.outerBorderStrokeWidth) || 0);
  if (outerBorderStrokeWidth <= 0) return fallbackOuterBand;
  const outerBorderRadius = Math.max(fallbackOuterBand, Number(state.outerBorderRadius) || fallbackOuterBand);
  return outerBorderRadius + outerBorderStrokeWidth / 2;
}

function getEffectiveBaseOuterRadius(state, outerBand = null) {
  const fallbackOuterBand = outerBand ?? Math.max(0, Number(state.boundaryOuterRadius) || Number(state.outerRadius) || 0);
  const ringStrokeWidth = Math.max(0, Number(state.ornamentStrokeWidth) || 0);
  const ringOuterEdge = fallbackOuterBand + ringStrokeWidth / 2;
  return Math.max(ringOuterEdge, getEffectiveOuterBorderOuterRadius(state, fallbackOuterBand));
}

function appendOrnamentNails(state) {
  if (state.centerDecorationMode === "centerText") return;
  const centerRadius = Math.max(0, Number(state.centerNailRadius) || 0);
  const surroundRadius = Math.max(0, Number(state.surroundNailRadius) || 0);
  const surroundSize = Math.max(0, Number(state.surroundNailSize) || 0);
  const surroundCount = Math.max(0, Math.round(Number(state.surroundNailCount) || 0));
  const surroundDecorationMode = state.surroundDecorationMode === "pattern" ? "pattern" : "nails";

  if (centerRadius > 0) {
    textLayer.appendChild(
      createSvgElement("circle", {
        class: "ornament-fill ornament-nail",
        "data-component": "centerNail",
        cx: CENTER,
        cy: CENTER,
        r: centerRadius.toFixed(2),
      }),
    );
  }

  if (state.centerNailBoundaryEnabled && state.centerNailBoundaryStrokeWidth > 0 && state.centerNailBoundaryRadius > 0) {
    textLayer.appendChild(
      createSvgElement("path", {
        class: "ornament-solid ornament-boundary",
        "data-component": "boundary",
        d: describeRingSector(
          Math.max(0, state.centerNailBoundaryRadius - state.centerNailBoundaryStrokeWidth / 2),
          state.centerNailBoundaryRadius + state.centerNailBoundaryStrokeWidth / 2,
          state.startAngle,
          state.sweepAngle,
        ),
      }),
    );
  }

  if (surroundDecorationMode !== "nails") return;
  if (surroundRadius <= 0 || surroundSize <= 0 || surroundCount <= 0) return;

  for (let index = 0; index < surroundCount; index += 1) {
    const angle = state.startAngle + (index / surroundCount) * 360;
    const point = polarToPoint(surroundRadius, angle);
    textLayer.appendChild(
      createSvgElement("circle", {
        class: "ornament-fill ornament-nail",
        "data-component": "surroundNail",
        cx: point.x.toFixed(2),
        cy: point.y.toFixed(2),
        r: surroundSize.toFixed(2),
      }),
    );
  }
}

function getCenterTextRadius(state) {
  const boundaryOuterEdge =
    state.centerNailBoundaryEnabled && Number(state.centerNailBoundaryStrokeWidth) > 0
      ? Number(state.centerNailBoundaryRadius) + Number(state.centerNailBoundaryStrokeWidth) / 2
      : Math.max(0, Number(state.centerNailRadius) || 0);
  const surroundOuterEdge =
    state.surroundDecorationMode === "pattern"
      ? getSurroundPatternBand(state).outerRadius
      : Math.max(boundaryOuterEdge, (Number(state.surroundNailRadius) || 0) + (Number(state.surroundNailSize) || 0));
  const boundaryLimit = Math.max(16, Number(state.boundaryInnerRadius) - Number(state.ornamentStrokeWidth || 0) / 2 - 8);
  return clamp(Math.max(boundaryOuterEdge, surroundOuterEdge), 16, boundaryLimit);
}

function getCenterTextClipRadius(state) {
  const ringStroke = Math.max(0, Number(state.ornamentStrokeWidth) || 0);
  return Math.max(0, Number(state.boundaryInnerRadius) - ringStroke / 2);
}

function appendCenterTextDecoration(state) {
  if (state.centerDecorationMode !== "centerText" || !state.centerCell) return;
  const font = getVectorFont(state);
  if (!font) return;

  const radius = getCenterTextRadius(state);
  const clipRadius = getCenterTextClipRadius(state);
  if (clipRadius <= 0) return;

  const fitState = {
    ...state,
    fontSize: Math.max(state.fontSize, radius * 1.2),
    fontHeightScale: Number(state.centerCellHeightScale) || 1,
    fontWidthScale: Number(state.centerCellWidthScale) || 1,
  };
  const glyph = font.getGlyph(state.centerCell);
  const metrics = getGlyphVisualMetrics(glyph, font, fitState);
  const clipId = ensureCenterTextClipPath("centerTextClip", clipRadius);
  const group = createSvgElement("g", {
    "clip-path": `url(#${clipId})`,
    "data-component": "centerText",
  });
  textLayer.appendChild(group);
  appendGlyphPath(
    state.centerCell,
    font,
    fitState,
    metrics.offsetX,
    (glyphX, glyphY) => ({ x: CENTER + glyphX, y: CENTER + glyphY }),
    -1,
    metrics.offsetY,
    group,
  );
}

function appendDividerLine(innerBand, outerBand, angle, attrs) {
  const innerPoint = polarToPoint(innerBand, angle);
  const outerPoint = polarToPoint(outerBand, angle);
  textLayer.appendChild(
    createSvgElement("line", {
      ...attrs,
      x1: innerPoint.x,
      y1: innerPoint.y,
      x2: outerPoint.x,
      y2: outerPoint.y,
    }),
  );
}

function appendSolidDivider(innerBand, outerBand, angle, thickness, className = "ornament-solid") {
  const angleRad = ((angle - 90) * Math.PI) / 180;
  const tangentX = -Math.sin(angleRad);
  const tangentY = Math.cos(angleRad);
  const half = thickness / 2;
  const innerPoint = polarToPoint(innerBand, angle);
  const outerPoint = polarToPoint(outerBand, angle);
  const p1 = { x: innerPoint.x + tangentX * half, y: innerPoint.y + tangentY * half };
  const p2 = { x: outerPoint.x + tangentX * half, y: outerPoint.y + tangentY * half };
  const p3 = { x: outerPoint.x - tangentX * half, y: outerPoint.y - tangentY * half };
  const p4 = { x: innerPoint.x - tangentX * half, y: innerPoint.y - tangentY * half };

  textLayer.appendChild(
    createSvgElement("path", {
      class: className,
      "data-component": className.includes("pattern") ? "pattern" : "boundary",
      d: [
        `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
        `L ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`,
        `L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}`,
        `L ${p4.x.toFixed(2)} ${p4.y.toFixed(2)}`,
        "Z",
      ].join(" "),
    }),
  );
}

function appendSolidParallelDivider(innerBand, outerBand, angle, gap, thickness, className = "ornament-solid") {
  const angleRad = ((angle - 90) * Math.PI) / 180;
  const tangentX = -Math.sin(angleRad);
  const tangentY = Math.cos(angleRad);
  const halfGap = gap / 2;

  [
    { dx: tangentX * halfGap, dy: tangentY * halfGap },
    { dx: -tangentX * halfGap, dy: -tangentY * halfGap },
  ].forEach((offset) => {
    const innerPoint = polarToPoint(innerBand, angle);
    const outerPoint = polarToPoint(outerBand, angle);
    const half = thickness / 2;
    const p1 = { x: innerPoint.x + offset.dx + tangentX * half, y: innerPoint.y + offset.dy + tangentY * half };
    const p2 = { x: outerPoint.x + offset.dx + tangentX * half, y: outerPoint.y + offset.dy + tangentY * half };
    const p3 = { x: outerPoint.x + offset.dx - tangentX * half, y: outerPoint.y + offset.dy - tangentY * half };
    const p4 = { x: innerPoint.x + offset.dx - tangentX * half, y: innerPoint.y + offset.dy - tangentY * half };
    textLayer.appendChild(
      createSvgElement("path", {
        class: className,
        "data-component": className.includes("pattern") ? "pattern" : "boundary",
        d: [
          `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
          `L ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`,
          `L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}`,
          `L ${p4.x.toFixed(2)} ${p4.y.toFixed(2)}`,
          "Z",
        ].join(" "),
      }),
    );
  });
}

function pointsToClosedPath(points) {
  if (!points.length) return "";
  const [first, ...rest] = points;
  return [
    `M ${first.x.toFixed(2)} ${first.y.toFixed(2)}`,
    ...rest.map((point) => `L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`),
    "Z",
  ].join(" ");
}

function appendSolidPolygon(points, className = "ornament-solid") {
  return appendSolidPolygonTo(points, textLayer, className);
}

function appendSolidPolygonTo(points, parent, className = "ornament-solid") {
  const d = pointsToClosedPath(points);
  if (!d) return;
  parent.appendChild(
    createSvgElement("path", {
      class: className,
      d,
    }),
  );
}

function appendSolidSegment(startPoint, endPoint, thickness, className = "ornament-solid") {
  return appendSolidSegmentTo(startPoint, endPoint, thickness, textLayer, className);
}

function appendSolidSegmentTo(startPoint, endPoint, thickness, parent, className = "ornament-solid") {
  const dx = endPoint.x - startPoint.x;
  const dy = endPoint.y - startPoint.y;
  const length = Math.hypot(dx, dy);
  if (length < 0.001) return;
  const nx = (-dy / length) * (thickness / 2);
  const ny = (dx / length) * (thickness / 2);
  appendSolidPolygonTo(
    [
      { x: startPoint.x + nx, y: startPoint.y + ny },
      { x: endPoint.x + nx, y: endPoint.y + ny },
      { x: endPoint.x - nx, y: endPoint.y - ny },
      { x: startPoint.x - nx, y: startPoint.y - ny },
    ],
    parent,
    className,
  );
}

function getOuterPatternBand(state, outerBand) {
  const ringStrokeWidth = Math.max(0, Number(state.ornamentStrokeWidth) || 0);
  const innerRadius = outerBand + ringStrokeWidth / 2;
  let outerRadius;
  if (state.innerOuterBorderEnabled && Number(state.innerOuterBorderStrokeWidth) > 0) {
    const innerOuterBorderRadius = Math.max(innerRadius, Number(state.innerOuterBorderRadius) || innerRadius);
    outerRadius = Math.max(innerRadius, innerOuterBorderRadius - Number(state.innerOuterBorderStrokeWidth) / 2);
  } else {
    const rawOuterRadius = Math.max(innerRadius, Number(state.outerBorderRadius) || innerRadius);
    const outerBorderStrokeWidth = Math.max(0, Number(state.outerBorderStrokeWidth) || 0);
    outerRadius = outerBorderStrokeWidth > 0 ? rawOuterRadius - outerBorderStrokeWidth / 2 : rawOuterRadius;
  }
  return {
    innerRadius,
    outerRadius,
    width: Math.max(0, outerRadius - innerRadius),
  };
}

function buildPatternGrid(startAngle, sweepAngle, innerRadius, outerRadius, ringCount, angleDivisions, jumpSpan) {
  const cyclic = Math.abs(Math.abs(sweepAngle) - 360) < 0.001;
  const ringStep = (outerRadius - innerRadius) / Math.max(1, ringCount);
  const extraRingCount = jumpSpan;
  const radii = Array.from(
    { length: ringCount + 1 + extraRingCount * 2 },
    (_, index) => innerRadius + (index - extraRingCount) * ringStep,
  );
  const angles = Array.from({ length: angleDivisions }, (_, index) => startAngle + (index / angleDivisions) * sweepAngle);
  return { ringCount, angleDivisions, cyclic, ringStep, radii, angles, extraRingCount };
}

function appendPatternMesh(grid, patternThickness, jumpSpan, parent) {
  const lastAngleIndex = grid.cyclic ? grid.angleDivisions : grid.angleDivisions - 1;

  for (let ringIndex = 0; ringIndex + jumpSpan < grid.radii.length; ringIndex += 1) {
    for (let angleIndex = 0; angleIndex < lastAngleIndex; angleIndex += 1) {
      const nextAngleIndex = (angleIndex + 1) % grid.angleDivisions;
      if (!grid.cyclic && angleIndex + 1 >= grid.angleDivisions) continue;
      appendSolidSegmentTo(
        polarToPoint(grid.radii[ringIndex], grid.angles[angleIndex]),
        polarToPoint(grid.radii[ringIndex + jumpSpan], grid.angles[nextAngleIndex]),
        patternThickness,
        parent,
      );
      appendSolidSegmentTo(
        polarToPoint(grid.radii[ringIndex + jumpSpan], grid.angles[angleIndex]),
        polarToPoint(grid.radii[ringIndex], grid.angles[nextAngleIndex]),
        patternThickness,
        parent,
      );
    }
  }
}

function appendPatternStar(grid, patternThickness, jumpSpan, parent) {
  const lastAngleIndex = grid.cyclic ? grid.angleDivisions : grid.angleDivisions - 1;

  for (let angleIndex = 0; angleIndex < lastAngleIndex; angleIndex += 1) {
    const direction = angleIndex % 2 === 0 ? 1 : -1;
    for (let baseRingIndex = jumpSpan; baseRingIndex + jumpSpan < grid.radii.length; baseRingIndex += 1) {
      let previousPoint = polarToPoint(grid.radii[baseRingIndex], grid.angles[angleIndex]);
      for (let step = 1; step <= grid.angleDivisions; step += 1) {
        const nextAngleIndex = (angleIndex + step) % grid.angleDivisions;
        if (!grid.cyclic && angleIndex + step >= grid.angleDivisions) break;
        const targetRingIndex = step % 2 === 1 ? baseRingIndex + direction * jumpSpan : baseRingIndex;
        if (targetRingIndex < 0 || targetRingIndex >= grid.radii.length) break;
        const nextPoint = polarToPoint(grid.radii[targetRingIndex], grid.angles[nextAngleIndex]);
        appendSolidSegmentTo(previousPoint, nextPoint, patternThickness, parent);
        previousPoint = nextPoint;
      }
    }
  }
}

function ensurePatternClipPath(id, innerRadius, outerRadius, startAngle, sweepAngle) {
  const defs = svg.querySelector("defs");
  if (!defs) return id;
  defs.querySelector(`#${id}`)?.remove();
  const clipPath = createSvgElement("clipPath", { id, "clipPathUnits": "userSpaceOnUse" });
  clipPath.appendChild(
    createSvgElement("path", {
      d: describeRingSector(innerRadius, outerRadius, startAngle, sweepAngle),
    }),
  );
  defs.appendChild(clipPath);
  return id;
}

function appendOuterPatternFill(state, outerBand) {
  const patternType = state.outerPatternType || "none";
  if (patternType === "none") return;
  const band = getOuterPatternBand(state, outerBand);
  if (band.width <= 1) return;
  const jumpSpan = Math.max(1, Math.round(Number(state.outerPatternJumpSpan) || 1));
  const grid = buildPatternGrid(
    state.startAngle,
    state.sweepAngle,
    band.innerRadius,
    band.outerRadius,
    Math.max(1, Math.round(Number(state.outerPatternRingCount) || 4)),
    Math.max(3, Math.round(Number(state.outerPatternAngleDivisions) || 24)),
    jumpSpan,
  );
  const clipId = ensurePatternClipPath("outerPatternClip", band.innerRadius, band.outerRadius, state.startAngle, state.sweepAngle);
  const group = createSvgElement("g", { "clip-path": `url(#${clipId})`, "data-component": "pattern" });
  textLayer.appendChild(group);
  const patternThickness = Math.max(0.5, Number(state.outerPatternStrokeWidth) || 0.5);
  const normalizedJumpSpan = Math.max(1, Math.min(grid.ringCount + grid.extraRingCount, jumpSpan));

  if (patternType === "mesh") {
    appendPatternMesh(grid, patternThickness, normalizedJumpSpan, group);
    return;
  }

  if (patternType === "star") {
    appendPatternStar(grid, patternThickness, normalizedJumpSpan, group);
  }
}

function getSurroundPatternBand(state) {
  const boundaryOuterEdge =
    state.centerNailBoundaryEnabled && Number(state.centerNailBoundaryStrokeWidth) > 0
      ? Number(state.centerNailBoundaryRadius) + Number(state.centerNailBoundaryStrokeWidth) / 2
      : Math.max(0, Number(state.centerNailRadius) || 0);
  const centerRadius = Math.max(boundaryOuterEdge, Number(state.surroundNailRadius) || 0);
  const bandWidth = Math.max(4, Number(state.surroundPatternBandWidth) || 24);
  const halfWidth = bandWidth / 2;
  return {
    innerRadius: Math.max(0, boundaryOuterEdge),
    outerRadius: centerRadius + halfWidth,
    width: Math.max(0, centerRadius + halfWidth - Math.max(0, boundaryOuterEdge)),
  };
}

function appendSurroundPatternFill(state) {
  if (state.surroundDecorationMode !== "pattern") return;
  const patternType = state.surroundPatternType || "none";
  if (patternType === "none") return;
  const band = getSurroundPatternBand(state);
  if (band.width <= 1 || band.outerRadius <= band.innerRadius + 0.5) return;
  const jumpSpan = Math.max(1, Math.round(Number(state.surroundPatternJumpSpan) || 1));
  const grid = buildPatternGrid(
    state.startAngle,
    state.sweepAngle,
    band.innerRadius,
    band.outerRadius,
    Math.max(1, Math.round(Number(state.surroundPatternRingCount) || 3)),
    Math.max(3, Math.round(Number(state.surroundPatternAngleDivisions) || 12)),
    jumpSpan,
  );
  const clipId = ensurePatternClipPath("surroundPatternClip", band.innerRadius, band.outerRadius, state.startAngle, state.sweepAngle);
  const group = createSvgElement("g", { "clip-path": `url(#${clipId})`, "data-component": "pattern" });
  textLayer.appendChild(group);
  const patternThickness = Math.max(0.5, Number(state.surroundPatternStrokeWidth) || 0.5);
  const normalizedJumpSpan = Math.max(1, Math.min(grid.ringCount + grid.extraRingCount, jumpSpan));

  if (patternType === "mesh") {
    appendPatternMesh(grid, patternThickness, normalizedJumpSpan, group);
    return;
  }

  if (patternType === "star") {
    appendPatternStar(grid, patternThickness, normalizedJumpSpan, group);
  }
}

function appendParallelDividerLines(innerBand, outerBand, angle, gap, attrs) {
  const innerPoint = polarToPoint(innerBand, angle);
  const outerPoint = polarToPoint(outerBand, angle);
  const angleRad = ((angle - 90) * Math.PI) / 180;
  const tangentX = -Math.sin(angleRad);
  const tangentY = Math.cos(angleRad);
  const halfGap = gap / 2;

  [
    { dx: tangentX * halfGap, dy: tangentY * halfGap },
    { dx: -tangentX * halfGap, dy: -tangentY * halfGap },
  ].forEach((offset) => {
    textLayer.appendChild(
      createSvgElement("line", {
        ...attrs,
        x1: (innerPoint.x + offset.dx).toFixed(2),
        y1: (innerPoint.y + offset.dy).toFixed(2),
        x2: (outerPoint.x + offset.dx).toFixed(2),
        y2: (outerPoint.y + offset.dy).toFixed(2),
      }),
    );
  });
}

function appendOrnamentRings(state, innerBand, outerBand, dividerAngles, markerAngle = null) {
  if (!state.showOrnamentRings) return;

  appendCenterTextDecoration(state);
  appendOrnamentNails(state);
  appendSurroundPatternFill(state);
  appendOuterPatternFill(state, outerBand);

  const ringStrokeWidth = state.ornamentStrokeWidth;
  const dividerStrokeWidth = state.dividerStrokeWidth || ringStrokeWidth;
  const isParallelDoubleDivider = state.dividerStyle === "parallelDouble";
  const isRadialDoubleDivider = state.dividerStyle === "radialDouble";
  const dividerGap = Math.max(4, dividerStrokeWidth * 2.4);
  const midBand = Math.max(1, (innerBand + outerBand) / 2);
  const doubleAngleOffset = (dividerGap * 180) / (Math.PI * midBand);

  dividerAngles.forEach((angle) => {
    if (isParallelDoubleDivider) {
      appendSolidParallelDivider(innerBand, outerBand, angle, dividerGap, dividerStrokeWidth);
      return;
    }
    if (isRadialDoubleDivider) {
      appendSolidDivider(innerBand, outerBand, angle - doubleAngleOffset / 2, dividerStrokeWidth);
      appendSolidDivider(innerBand, outerBand, angle + doubleAngleOffset / 2, dividerStrokeWidth);
      return;
    }
    appendSolidDivider(innerBand, outerBand, angle, dividerStrokeWidth);
  });

  textLayer.appendChild(
    createSvgElement("path", {
      class: "ornament-solid ornament-boundary",
      "data-component": "boundary",
      d: describeRingSector(
        Math.max(0, innerBand - ringStrokeWidth / 2),
        innerBand + ringStrokeWidth / 2,
        state.startAngle,
        state.sweepAngle,
      ),
    }),
  );
  textLayer.appendChild(
    createSvgElement("path", {
      class: "ornament-solid ornament-boundary",
      "data-component": "boundary",
      d: describeRingSector(
        Math.max(0, outerBand - ringStrokeWidth / 2),
        outerBand + ringStrokeWidth / 2,
        state.startAngle,
        state.sweepAngle,
      ),
    }),
  );

  if (state.innerOuterBorderEnabled && state.innerOuterBorderStrokeWidth > 0) {
    const innerOuterBorderRadius = Math.max(outerBand, Number(state.innerOuterBorderRadius) || outerBand);
    const innerOuterBorderStrokeWidth = Number(state.innerOuterBorderStrokeWidth) || 0;
    textLayer.appendChild(
      createSvgElement("path", {
        class: "ornament-solid ornament-boundary",
        "data-component": "boundary",
        d: describeRingSector(
          Math.max(0, innerOuterBorderRadius - innerOuterBorderStrokeWidth / 2),
          innerOuterBorderRadius + innerOuterBorderStrokeWidth / 2,
          state.startAngle,
          state.sweepAngle,
        ),
      }),
    );
  }

  if ((state.outerBorderStrokeWidth || 0) > 0) {
    const outerBorderRadius = Math.max(outerBand, Number(state.outerBorderRadius) || outerBand);
    const outerBorderStrokeWidth = Number(state.outerBorderStrokeWidth) || 0;
    textLayer.appendChild(
      createSvgElement("path", {
        class: "ornament-solid ornament-outer-border",
        "data-component": "outerBorder",
        d: describeRingSector(
          Math.max(0, outerBorderRadius - outerBorderStrokeWidth / 2),
          outerBorderRadius + outerBorderStrokeWidth / 2,
          state.startAngle,
          state.sweepAngle,
        ),
      }),
    );
  }

  if (typeof markerAngle === "number" && Number.isFinite(markerAngle)) {
    appendDividerMarker(markerAngle, getEffectiveBaseOuterRadius(state, outerBand), dividerStrokeWidth);
  }
}

function midpointAngleAlongSweep(firstAngle, secondAngle, sweepAngle) {
  let nextAngle = secondAngle;
  if (sweepAngle >= 0 && nextAngle < firstAngle) nextAngle += 360;
  if (sweepAngle < 0 && nextAngle > firstAngle) nextAngle -= 360;
  return firstAngle + (nextAngle - firstAngle) / 2;
}

function clearDynamicClipDefs() {
  svg.querySelectorAll("defs clipPath[id^='cellClip-']").forEach((node) => node.remove());
  svg.querySelectorAll("defs mask[id^='cellMask-']").forEach((node) => node.remove());
}

function normalizeSweepSpan(startAngle, endAngle, sweepAngle) {
  let nextEnd = endAngle;
  if (sweepAngle >= 0 && nextEnd < startAngle) nextEnd += 360;
  if (sweepAngle < 0 && nextEnd > startAngle) nextEnd -= 360;
  return nextEnd - startAngle;
}

function getRingSectorCentroidRadius(innerRadius, outerRadius, sweepAngleDeg) {
  const theta = Math.abs((sweepAngleDeg * Math.PI) / 180);
  if (theta < 1e-6) return (innerRadius + outerRadius) / 2;
  const numerator = 4 * Math.sin(theta / 2) * (outerRadius ** 3 - innerRadius ** 3);
  const denominator = 3 * theta * (outerRadius ** 2 - innerRadius ** 2);
  if (!Number.isFinite(numerator / denominator)) return (innerRadius + outerRadius) / 2;
  return numerator / denominator;
}

function buildInsetSlotGeometry(state, slotStartAngle, slotEndAngle) {
  const margin = Math.max(0, Number(state.cellInsetMargin) || 0);
  const boundaryStrokeInset = Math.max(0, Number(state.ornamentStrokeWidth) || 0) / 2;
  const rawInnerRadius = Math.max(0, Number(state.boundaryInnerRadius) || 0) + boundaryStrokeInset;
  const rawOuterRadius = Math.max(rawInnerRadius, Number(state.boundaryOuterRadius) || rawInnerRadius) - boundaryStrokeInset;
  const innerRadius = Math.max(0, rawInnerRadius + margin);
  const outerRadius = Math.max(innerRadius + 0.5, rawOuterRadius - margin);
  const midRadius = Math.max(1, (innerRadius + outerRadius) / 2);
  const strokeAngleHalf = ((Number(state.dividerStrokeWidth) || 0) / 2) * 180 / (Math.PI * midRadius);
  const dividerGap = Math.max(4, (Number(state.dividerStrokeWidth) || 0) * 2.4);
  const dividerGapAngleHalf = (dividerGap / 2) * 180 / (Math.PI * midRadius);
  const marginAngleInset = (margin * 180) / (Math.PI * midRadius);
  const dividerAngleInset =
    state.dividerStyle === "parallelDouble"
      ? dividerGapAngleHalf + strokeAngleHalf
      : state.dividerStyle === "radialDouble"
        ? dividerGapAngleHalf + strokeAngleHalf
        : strokeAngleHalf;
  const angleInset = marginAngleInset + dividerAngleInset;
  const startAngle = slotStartAngle + angleInset;
  const endAngle = slotEndAngle - angleInset;
  const sweepAngle = normalizeSweepSpan(startAngle, endAngle, state.sweepAngle);
  if (Math.abs(sweepAngle) < 0.5) {
    return {
      innerRadius,
      outerRadius,
      startAngle: slotStartAngle,
      endAngle: slotEndAngle,
      sweepAngle: normalizeSweepSpan(slotStartAngle, slotEndAngle, state.sweepAngle),
      centerAngle: midpointAngleAlongSweep(slotStartAngle, slotEndAngle, state.sweepAngle),
      centroidRadius: getRingSectorCentroidRadius(innerRadius, outerRadius, normalizeSweepSpan(slotStartAngle, slotEndAngle, state.sweepAngle)),
    };
  }
  return {
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    sweepAngle,
    centerAngle: midpointAngleAlongSweep(startAngle, endAngle, state.sweepAngle),
    centroidRadius: getRingSectorCentroidRadius(innerRadius, outerRadius, sweepAngle),
  };
}

function ensureCellClipPath(id, slotGeometry) {
  const defs = svg.querySelector("defs");
  if (!defs) return id;
  defs.querySelector(`#${id}`)?.remove();
  const clipPath = createSvgElement("clipPath", { id, "clipPathUnits": "userSpaceOnUse" });
  clipPath.appendChild(
    createSvgElement("path", {
      d: describeRingSector(slotGeometry.innerRadius, slotGeometry.outerRadius, slotGeometry.startAngle, slotGeometry.sweepAngle),
    }),
  );
  defs.appendChild(clipPath);
  return id;
}

function ensureCellMask(id, slotGeometry) {
  const defs = svg.querySelector("defs");
  if (!defs) return id;
  defs.querySelector(`#${id}`)?.remove();
  const mask = createSvgElement("mask", { id, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse" });
  mask.appendChild(createSvgElement("rect", { x: "0", y: "0", width: "900", height: "900", fill: "black" }));
  mask.appendChild(
    createSvgElement("path", {
      d: describeRingSector(slotGeometry.innerRadius, slotGeometry.outerRadius, slotGeometry.startAngle, slotGeometry.sweepAngle),
      fill: "white",
    }),
  );
  defs.appendChild(mask);
  return id;
}

function ensureCenterTextClipPath(id, radius) {
  const defs = svg.querySelector("defs");
  if (!defs) return id;
  defs.querySelector(`#${id}`)?.remove();
  const clipPath = createSvgElement("clipPath", { id, "clipPathUnits": "userSpaceOnUse" });
  clipPath.appendChild(
    createSvgElement("circle", {
      cx: CENTER,
      cy: CENTER,
      r: Math.max(0, radius).toFixed(2),
    }),
  );
  defs.appendChild(clipPath);
  return id;
}

function getUprightCellMapPoint(centerPoint) {
  return (glyphX, glyphY) => ({
    x: centerPoint.x + glyphX,
    y: centerPoint.y + glyphY,
  });
}

function getRadialRingGridCount(state, chars = state.cells || [...state.text]) {
  return Math.max(1, Math.round(state.gridCount || chars.length || 1));
}

function getRadialRingSlotAngle(state, gridCount) {
  return state.sweepAngle / Math.max(1, gridCount);
}

function buildWatangGeometry(state) {
  const gridCount = getRadialRingGridCount(state);
  const slotAngle = getRadialRingSlotAngle(state, gridCount);
  const layoutRadius = state.centerRadius;
  const halfTextHeight = getScaledFontHeight(state) / 2;
  const textInnerRadius = Math.max(0, layoutRadius - halfTextHeight);
  const textOuterRadius = layoutRadius + halfTextHeight;
  const dividerAngles = Array.from({ length: gridCount }, (_, index) => state.startAngle + index * slotAngle);
  return {
    center: { x: CENTER, y: CENTER },
    gridCount,
    slotAngle,
    sweepAngle: state.sweepAngle,
    startAngle: state.startAngle,
    layoutRadius,
    textInnerRadius,
    textOuterRadius,
    boundaryInnerRadius: state.boundaryInnerRadius,
    boundaryOuterRadius: state.boundaryOuterRadius,
    dividerAngles,
    markerAngle: dividerAngles[0],
  };
}

function getRadialRingGridDividerAngles(state) {
  return buildWatangGeometry(state).dividerAngles;
}

function buildWatangCellPlacements(state) {
  const geometry = buildWatangGeometry(state);
  const sourceCells = state.cells || [...state.text];
  const baseCells = Array.from({ length: geometry.gridCount }, (_, index) => sourceCells[index] || "");
  const orderedCells = state.alternateFlow ? baseCells.slice().reverse() : baseCells;

  return orderedCells.map((char, index) => {
    const sourceIndex = state.alternateFlow ? geometry.gridCount - 1 - index : index;
    const flow = state.cellSettings?.[sourceIndex]?.flow === "ccw" ? "ccw" : "cw";
    return {
      slotIndex: index,
      sourceIndex,
      char,
      flow,
      flowSign: flow === "ccw" ? -1 : 1,
      slotStartAngle: state.startAngle + index * geometry.slotAngle,
      slotCenterAngle: state.startAngle + (index + 0.5) * geometry.slotAngle,
      slotEndAngle: state.startAngle + (index + 1) * geometry.slotAngle,
    };
  });
}

function getRingOrientationLabel(state) {
  return state.ringOrientation === "horizontal" ? "横向成环" : "竖向成环";
}

function getRadialRingCharAngle(cell, state, radius) {
  const visualExtent =
    state.ringOrientation === "horizontal"
      ? cell.glyphVisualWidth || state.fontSize
      : cell.glyphVisualHeight || state.fontSize;
  return (visualExtent * 180) / (Math.PI * Math.max(1, radius));
}

function getRadialRingMapPoint(cell, state, radius) {
  if (state.ringOrientation === "horizontal") {
    return (glyphX, glyphY) => {
      const radialY = cell.flowSign < 0 ? -glyphY : glyphY;
      const glyphRadius = radius + radialY;
      const warpedAngle = cell.slotCenterAngle + (glyphX * cell.flowSign * 180) / (Math.PI * Math.max(1, radius));
      return polarToPoint(glyphRadius, warpedAngle);
    };
  }

  return (glyphX, glyphY) => {
    const radialX = cell.flowSign < 0 ? -glyphX : glyphX;
    const glyphRadius = radius + radialX;
    const warpedAngle = cell.slotCenterAngle + (glyphY * cell.flowSign * 180) / (Math.PI * Math.max(1, radius));
    return polarToPoint(glyphRadius, warpedAngle);
  };
}

function buildWatangReliefModel(state, font = getVectorFont(state)) {
  const geometry = buildWatangGeometry(state);
  const cells = buildWatangCellPlacements(state).map((cell) => {
    if (!cell.char || !font) {
      return { ...cell, hasGlyph: false, glyphBounds: null };
    }

    const glyph = font.getGlyph(cell.char);
    const metrics = getGlyphVisualMetrics(glyph, font, state);
    return {
      ...cell,
      hasGlyph: true,
      glyphAdvance: getGlyphAdvance(font, cell.char, state),
      glyphBounds: metrics.bounds,
      glyphVisualWidth: metrics.width,
      glyphVisualHeight: metrics.height,
      glyphOffsetY: metrics.offsetY,
    };
  });

  return { geometry, cells, readingOrder: state.cellOrder || [] };
}

function getRadialRingGlyphCenters(state, chars, font, radius) {
  const gridCount = getRadialRingGridCount(state, chars);
  const slotAngle = getRadialRingSlotAngle(state, gridCount);
  const reverse = state.alternateFlow;
  const orderedChars = reverse ? chars.slice().reverse() : chars;

  return orderedChars.slice(0, gridCount).map((char, index) => {
    if (!char) return null;
    const glyph = font.getGlyph(char);
    const slotIndex = index;
    const baseAngle = state.startAngle + (slotIndex + 0.5) * slotAngle;
    return {
      char,
      sourceIndex: reverse ? chars.length - 1 - index : index,
      slotIndex,
      baseAngle,
      centerAngle: getGlyphMappedCenterAngle(glyph, font, state, baseAngle, radius),
    };
  }).filter(Boolean);
}

function getRadialRingDividerAngles(state) {
  const font = getVectorFont(state);
  if (state.mode !== "radialRing" || !font) return [];
  return getRadialRingGridDividerAngles(state);
}

function centerFirstDividerAtTop() {
  const state = readState();
  const model = buildWatangReliefModel(state);
  if (!model.geometry.dividerAngles.length) {
    logDebug("居中失败：没有分隔线角度", { mode: state.mode, textLength: [...state.text].length });
    return null;
  }

  const markerAngle = model.geometry.markerAngle;
  const correction = 360 - markerAngle;
  const startAngleAfter = setStartAngle(state.startAngle + correction);
  controls.rotationAngle.value = "0";
  controls.rotationAngle.nextElementSibling.value = "0°";
  previousRotationAngle = 0;
  selectedAngleDebug = null;
  logDebug("居中", {
    markerAngle: Number(markerAngle.toFixed(2)),
    correction: Number(correction.toFixed(2)),
    startAngleBefore: state.startAngle,
    startAngleAfter,
    dividerAngles: model.geometry.dividerAngles.map((angle) => Number(angle.toFixed(2))),
  });
  render();
  return { previousAngle: markerAngle, correction };
}

function appendRadialRingOrnaments(state) {
  if (state.mode !== "radialRing" || state.gridCount < 1) return;

  const font = getVectorFont(state);
  if (!font) return;

  const model = buildWatangReliefModel(state, font);
  const innerBand = model.geometry.boundaryInnerRadius;
  const outerBand = model.geometry.boundaryOuterRadius;
  const dividerAngles = model.geometry.dividerAngles;
  if (dividerAngles.length) {
    logDebug("分隔线", {
      markerAngle: Number(model.geometry.markerAngle.toFixed(2)),
      dividerAngles: dividerAngles.map((angle) => Number(angle.toFixed(2))),
      gridCount: model.geometry.gridCount,
    });
  }

  const markerAngle = state.showAngleDebug && selectedAngleDebug ? selectedAngleDebug.startAngle : null;
  appendOrnamentRings(state, innerBand, outerBand, dividerAngles, markerAngle);
}

function showCharacterAngles(state, debug) {
  clear(debugLayer);
  if (!debug) {
    selectedAngleDebug = null;
    modeSummary.textContent = summaries[state.mode];
    return;
  }

  const inner = state.boundaryInnerRadius;
  const outer = getEffectiveBaseOuterRadius(state);
  [debug.startAngle, debug.endAngle].forEach((angle, index) => {
    const p1 = polarToPoint(inner, angle);
    const p2 = polarToPoint(outer, angle);
    debugLayer.appendChild(
      createSvgElement("line", {
        class: index === 0 ? "angle-debug-line start-angle-line" : "angle-debug-line end-angle-line",
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
      }),
    );
  });

  modeSummary.textContent = `字符「${debug.char}」 start angle: ${debug.startAngle.toFixed(2)}° / end angle: ${debug.endAngle.toFixed(2)}°（按字宽+字距计算）`;
}

function sampleLayoutLine(start, end, mapPoint) {
  const pixelLength = Math.hypot(end.x - start.x, end.y - start.y);
  const steps = Math.max(8, Math.ceil(pixelLength / 7));
  const points = [];

  for (let index = 0; index <= steps; index += 1) {
    const t = index / steps;
    const source = lerpPoint(start, end, t);
    points.push(mapPoint(source.x, source.y));
  }

  return points;
}

function appendGlyphPath(char, font, state, offsetX, mapPoint, colorIndex, offsetY = 0, parent = textLayer, options = {}) {
  if (!font) return;

  const glyph = font.getGlyph(char);
  const scale = getGlyphScale(font, state);
  const fill = getGlyphFill(colorIndex);
  const strokeWidth = Math.max(0, Number(state.glyphStrokeWidth) || 0);
  appendGlyphGrid(glyph, font, state, offsetX, mapPoint, offsetY, parent);
  appendGlyphPrecisionGrid(glyph, font, state, offsetX, mapPoint, offsetY, parent);
  const cornerRounding = options.cornerRounding || null;

  const d = glyph.contours
    .map((contour) => {
      const points = sampleContour(contour, scale, offsetX, mapPoint, offsetY);
      return cornerRounding ? pointsToLocallyRoundedPath(points, cornerRounding) : pointsToPath(points);
    })
    .filter(Boolean)
    .join(" ");

  if (!d) return;

  parent.appendChild(
    createSvgElement("path", {
      class: "glyph-vector",
      "data-component": "text",
      d,
      fill,
      stroke: fill,
      "stroke-width": strokeWidth.toFixed(2),
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
      "paint-order": "stroke fill",
      "fill-rule": "nonzero",
    }),
  );
}

function drawGuides(state, trackValues = []) {
  clear(guidesLayer);
  if (!state.showGuides && !state.showGrid) return;

  if (state.showGrid) drawRingGrid(state);

  if (state.showGuides) {
    guidesLayer.append(
      createSvgElement("path", {
        class: "guide-ring",
        d: describeRingSector(
          state.innerRadius,
          state.outerRadius,
          state.startAngle,
          state.sweepAngle,
        ),
        filter: "url(#softShadow)",
      }),
      createSvgElement("path", {
        class: "guide-edge",
        d: describeArc(state.innerRadius, state.startAngle, state.sweepAngle),
      }),
      createSvgElement("path", {
        class: "guide-edge",
        d: describeArc(state.outerRadius, state.startAngle, state.sweepAngle),
      }),
    );
  }

  trackValues.forEach((value) => {
    guidesLayer.appendChild(
      createSvgElement("path", {
        class: "guide-track",
        d: describeArc(value, state.startAngle, state.sweepAngle),
      }),
    );
  });
}

function drawRingGrid(state) {
  const radialStep = 20;
  const angleStep = 5;
  const minRadius = 20;
  const maxRadius = Math.ceil(Math.hypot(CENTER, CENTER) / radialStep) * radialStep;
  const gridGroup = createSvgElement("g", { class: "ring-grid" });

  for (let radius = minRadius; radius <= maxRadius + 0.1; radius += radialStep) {
    gridGroup.appendChild(
      createSvgElement("path", {
        class: "ring-grid-arc",
        d: describeArc(radius, 0, 360),
      }),
    );
  }

  const sweepSteps = 360 / angleStep;
  for (let index = 0; index < sweepSteps; index += 1) {
    const angle = index * angleStep;
    const inner = polarToPoint(minRadius, angle);
    const outer = polarToPoint(maxRadius, angle);
    gridGroup.appendChild(
      createSvgElement("line", {
        class: "ring-grid-spoke",
        x1: inner.x,
        y1: inner.y,
        x2: outer.x,
        y2: outer.y,
      }),
    );
  }

  guidesLayer.appendChild(gridGroup);
}

function layoutTangentBaseline(state) {
  const chars = [...state.text];
  const font = getVectorFont(state);
  const lineStep = getScaledFontHeight(state) + state.lineGap;
  const averageAdvance = font
    ? getRunAdvance(chars.slice(0, Math.min(chars.length, 24)), font, state) / Math.max(1, Math.min(chars.length, 24))
    : Math.max(4, getScaledFontWidth(state) + state.tracking);
  const minRadius = state.innerRadius + state.padding + getScaledFontHeight(state) / 2;
  const maxRadius = state.outerRadius - state.padding - getScaledFontHeight(state) / 2;
  const tracks = [];
  let cursor = 0;

  if (state.equalRingSpacing && chars.length > 0) {
    const radius = maxRadius;
    const slotAngle = state.sweepAngle / chars.length;
    const reverse = state.alternateFlow;
    const orderedChars = reverse ? chars.slice().reverse() : chars;
    tracks.push(radius);

    orderedChars.forEach((char, index) => {
      const sourceIndex = reverse ? chars.length - 1 - index : index;
      const advance = getGlyphAdvance(font, char, state);
      const centerAngle = state.startAngle + (index + 0.5) * slotAngle;
      appendGlyphPath(
        char,
        font,
        state,
        -advance / 2,
        (glyphX, glyphY) => {
          const angle = centerAngle + (glyphX * 180) / (Math.PI * radius);
          return polarToPoint(radius + glyphY, angle);
        },
        sourceIndex,
      );
    });

    return { placed: chars.length, overflow: 0, tracks };
  }

  for (let radius = maxRadius; radius >= minRadius && cursor < chars.length; radius -= lineStep) {
    const availableArc = Math.max(0, ((state.sweepAngle * Math.PI) / 180) * radius - state.padding * 2);
    const capacity = Math.floor(availableArc / Math.max(4, averageAdvance));
    if (capacity < 1) continue;

    let count = 0;
    let usedAdvance = 0;
    while (cursor + count < chars.length) {
      const advance = getGlyphAdvance(font, chars[cursor + count], state);
      if (count > 0 && usedAdvance + advance > availableArc) break;
      usedAdvance += advance;
      count += 1;
      if (count >= capacity * 2) break;
    }
    if (count < 1) continue;

    const usedAngle = (usedAdvance * 180) / (Math.PI * radius);
    const freeAngle = Math.max(0, state.sweepAngle - usedAngle);
    const baseStart = state.startAngle + freeAngle / 2;
    const reverse = state.alternateFlow && tracks.length % 2 === 1;
    const lineChars = chars.slice(cursor, cursor + count);
    const orderedChars = reverse ? lineChars.slice().reverse() : lineChars;
    let localX = 0;
    tracks.push(radius);

    orderedChars.forEach((char, index) => {
      appendGlyphPath(
        char,
        font,
        state,
        localX,
        (glyphX, glyphY) => {
          const angle = baseStart + (glyphX * 180) / (Math.PI * radius);
          return polarToPoint(radius + glyphY, angle);
        },
        cursor + (reverse ? count - 1 - index : index),
      );
      localX += getGlyphAdvance(font, char, state);
    });

    cursor += count;
  }

  return { placed: cursor, overflow: chars.length - cursor, tracks };
}

function layoutRadialBaseline(state) {
  const chars = [...state.text];
  const font = getVectorFont(state);
  const radialStep = getScaledFontHeight(state) + state.lineGap;
  const columnAdvance = Math.max(4, getScaledFontWidth(state) + state.tracking);
  const inner = state.innerRadius + state.padding + getScaledFontHeight(state) / 2;
  const outer = state.outerRadius - state.padding - getScaledFontHeight(state) / 2;
  const radialCapacity = Math.floor(Math.max(0, outer - inner) / radialStep) + 1;
  const midRadius = (inner + outer) / 2;
  const angleStep = (columnAdvance * 180) / (Math.PI * midRadius);
  const columnCount = Math.max(0, Math.floor(state.sweepAngle / angleStep));
  const tracks = [];
  let cursor = 0;

  for (let row = 0; row < radialCapacity && cursor < chars.length; row += 1) {
    const localX = row * radialStep;
    const radius = inner + localX;
    const availableArc = Math.max(0, ((state.sweepAngle * Math.PI) / 180) * radius - state.padding * 2);
    const rowCapacity = Math.min(columnCount, Math.floor(availableArc / columnAdvance));
    if (rowCapacity < 1) continue;

    const count = Math.min(rowCapacity, chars.length - cursor);
    const usedAngle = (count * columnAdvance * 180) / (Math.PI * radius);
    const freeAngle = Math.max(0, state.sweepAngle - usedAngle);
    const baseStart = state.startAngle + freeAngle / 2;
    const reverse = state.alternateFlow && row % 2 === 1;
    const rowChars = chars.slice(cursor, cursor + count);
    const orderedChars = reverse ? rowChars.slice().reverse() : rowChars;
    tracks.push(radius);

    orderedChars.forEach((char, index) => {
      const visualIndex = reverse ? count - 1 - index : index;
      const angle = baseStart + (visualIndex + 0.5) * (columnAdvance * 180) / (Math.PI * radius);
      appendGlyphPath(
        char,
        font,
        state,
        localX,
        (glyphX, glyphY) => {
          const glyphRadius = inner + glyphX;
          const warpedAngle = angle + (glyphY * 180) / (Math.PI * Math.max(1, radius));
          return polarToPoint(glyphRadius, warpedAngle);
        },
        cursor + (reverse ? count - 1 - index : index),
      );
    });

    cursor += count;
  }

  return { placed: cursor, overflow: chars.length - cursor, tracks };
}

function layoutRadialRing(state) {
  const font = getVectorFont(state);
  const model = buildWatangReliefModel(state, font);
  if (!model.cells.length) return { placed: 0, overflow: 0, tracks: [] };

  const layoutRadius = model.geometry.layoutRadius;
  const overflowCells = (state.cells || [...state.text]).slice(model.geometry.gridCount).filter(Boolean).length;
  let placed = 0;

  model.cells.forEach((cell) => {
    if (!cell.char) return;
    placed += 1;
    const cellState = getCellScaledState(state, cell.sourceIndex);
    const glyph = font.getGlyph(cell.char);
    const metrics = getGlyphVisualMetrics(glyph, font, cellState);
    let startAngle = cell.slotStartAngle;
    let endAngle = cell.slotEndAngle;

    if (state.cellFillMode === "uprightFit") {
      const slotGeometry = buildInsetSlotGeometry(state, cell.slotStartAngle, cell.slotEndAngle);
      startAngle = slotGeometry.startAngle;
      endAngle = slotGeometry.endAngle;
      const maskId = ensureCellMask(`cellMask-${renderCount}-${cell.slotIndex}`, slotGeometry);
      const centroidPoint = polarToPoint(slotGeometry.centroidRadius, slotGeometry.centerAngle);
      const mapPoint = getUprightCellMapPoint(centroidPoint);
      const group = createSvgElement("g", {
        mask: `url(#${maskId})`,
        "data-component": "text",
      });
      textLayer.appendChild(group);
      appendGlyphPath(
        cell.char,
        font,
        cellState,
        metrics.offsetX,
        mapPoint,
        cell.sourceIndex,
        metrics.offsetY,
        group,
        {
          cornerRounding: {
            maxAngleDeg: 30,
            radius: Math.max(0.5, Math.min(3.5, Math.max(1, Number(state.glyphStrokeWidth) || 0) * 0.8)),
          },
        },
      );
    } else {
      const charAngle = getRadialRingCharAngle(
        {
          ...cell,
          glyphVisualWidth: metrics.width,
          glyphVisualHeight: metrics.height,
        },
        cellState,
        layoutRadius,
      );
      const blankAngle = Math.max(0, model.geometry.slotAngle - charAngle);
      startAngle = cell.slotStartAngle + blankAngle / 2;
      endAngle = startAngle + charAngle;
      const mapPoint = getRadialRingMapPoint(cell, cellState, layoutRadius);
      appendGlyphPath(
        cell.char,
        font,
        cellState,
        metrics.offsetX,
        mapPoint,
        cell.sourceIndex,
        metrics.offsetY,
      );
    }

    if (state.showAngleDebug) {
      let hitPath;
      if (state.cellFillMode === "uprightFit") {
        const slotGeometry = buildInsetSlotGeometry(state, cell.slotStartAngle, cell.slotEndAngle);
        hitPath = createSvgElement("path", {
          class: "angle-hit-area",
          d: describeRingSector(slotGeometry.innerRadius, slotGeometry.outerRadius, slotGeometry.startAngle, slotGeometry.sweepAngle),
        });
      } else {
        const debugHalfRadial = getScaledFontHeight(cellState) / 2;
        const debugHalfArc = (model.geometry.slotAngle * Math.PI * layoutRadius) / 360;
        const mapPoint = getRadialRingMapPoint(cell, cellState, layoutRadius);
        hitPath = createSvgElement("path", {
          class: "angle-hit-area",
          d: mappedRectPath(
            state.ringOrientation === "horizontal" ? -debugHalfArc : -debugHalfRadial,
            state.ringOrientation === "horizontal" ? -debugHalfRadial : -debugHalfArc,
            state.ringOrientation === "horizontal" ? debugHalfArc : debugHalfRadial,
            state.ringOrientation === "horizontal" ? debugHalfRadial : debugHalfArc,
            mapPoint,
          ),
        });
      }
      hitPath.addEventListener("click", (event) => {
        event.stopPropagation();
        selectedAngleDebug = { char: cell.char, startAngle, endAngle };
        showCharacterAngles(readState(), selectedAngleDebug);
      });
      debugLayer.appendChild(hitPath);
    }
  });

  return { placed, overflow: overflowCells, tracks: [layoutRadius] };
}

function layoutFlatDebug(state) {
  const chars = [...state.text];
  const font = getVectorFont(state);
  if (!chars.length) return { placed: 0, overflow: 0, tracks: [] };

  const slotWidth = Math.max(12, (state.sweepAngle * Math.PI * 240) / 180 / chars.length);
  const baseX = CENTER - (slotWidth * chars.length) / 2;
  const baseY = CENTER;
  const bandHeight = Math.max(40, state.outerRadius - state.innerRadius);
  const reverse = state.alternateFlow;
  const orderedChars = reverse ? chars.slice().reverse() : chars;

  orderedChars.forEach((char, index) => {
    const sourceIndex = reverse ? chars.length - 1 - index : index;
    const glyph = font.getGlyph(char);
    const metrics = getGlyphVisualMetrics(glyph, font, state);
    const offsetX = metrics.offsetX;
    const offsetY = metrics.offsetY;
    const centerX = baseX + (index + 0.5) * slotWidth;
    const mapPoint = (glyphX, glyphY) => ({
      x: centerX + glyphY,
      y: baseY - glyphX,
    });

    appendGlyphPath(char, font, state, offsetX, mapPoint, sourceIndex, offsetY);
  });

  if (state.showOrnamentRings) {
    const strokeWidth = state.ornamentStrokeWidth;
    const attrs = { class: "ornament-line", "stroke-width": strokeWidth.toFixed(2) };
    const top = baseY - bandHeight / 2;
    const bottom = baseY + bandHeight / 2;
    textLayer.appendChild(createSvgElement("line", { ...attrs, x1: baseX, y1: top, x2: baseX + slotWidth * chars.length, y2: top }));
    textLayer.appendChild(createSvgElement("line", { ...attrs, x1: baseX, y1: bottom, x2: baseX + slotWidth * chars.length, y2: bottom }));
    for (let index = 0; index <= chars.length; index += 1) {
      const x = baseX + index * slotWidth;
      textLayer.appendChild(createSvgElement("line", { ...attrs, x1: x, y1: top, x2: x, y2: bottom }));
    }
  }

  return { placed: chars.length, overflow: 0, tracks: [0] };
}

function render() {
  const state = readState();
  reliefPreviewDirty = true;
  rubbingPreviewDirty = true;
  renderCount += 1;
  if (renderCount <= 8 || renderCount % 20 === 0) {
    logDebug("渲染", {
      count: renderCount,
      mode: state.mode,
      startAngle: state.startAngle,
      rotationAngle: state.rotationAngle,
      gridCount: state.gridCount,
      textLength: [...state.text].length,
      showGrid: state.showGrid,
      showGlyphGrid: state.showGlyphGrid,
    });
  }
  if (!state.showAngleDebug || state.mode !== "radialRing") selectedAngleDebug = null;
  updateOutputs(state);
  applyBoardZoom(state);
  clear(textLayer);
  clear(debugLayer);
  clearDynamicClipDefs();

  const selectedFont = FONT_REGISTRY.get(state.fontKey);
  if (!selectedFont || !selectedFont.parsed) {
    drawGuides(state, []);
    logDebug("字体未解析，跳过绘制", { fontKey: state.fontKey });
    modeSummary.textContent = "当前字体尚未解析为矢量轮廓。请等待字体加载，或导入 glyf 轮廓的 TTF 字体。";
    stats.placed.textContent = "0";
    stats.overflow.textContent = [...state.text].length + (state.centerCell ? 1 : 0);
    stats.tracks.textContent = "0";
    return;
  }

  const result =
    state.mode === "flatDebug"
      ? layoutFlatDebug(state)
      : state.mode === "tangentBaseline"
      ? layoutTangentBaseline(state)
      : state.mode === "radialRing"
        ? layoutRadialRing(state)
        : layoutRadialBaseline(state);

  drawGuides(state, result.tracks);
  appendRadialRingOrnaments(state);
  if (state.showAngleDebug && selectedAngleDebug) {
    showCharacterAngles(state, selectedAngleDebug);
  } else {
    modeSummary.textContent =
      state.mode === "radialRing" ? `${summaries[state.mode]} 当前为${getRingOrientationLabel(state)}。` : summaries[state.mode];
  }
  stats.placed.textContent = result.placed + (state.centerDecorationMode === "centerText" && state.centerCell ? 1 : 0);
  stats.overflow.textContent = result.overflow;
  stats.tracks.textContent = result.tracks.length;
}

function autoFitSingleRing() {
  const state = readState();
  const charCount = Math.max(1, state.gridCount);

  const padding = 4;
  const targetOuterRadius = 430;
  const targetFill = 0.985;
  const targetRadius = targetOuterRadius - padding - 28;
  const targetAdvance = ((Math.PI * 2 * targetRadius) / charCount) * targetFill;
  const fontSize = clamp(Math.round(targetAdvance * 0.82), LIMITS.fontSize.min, LIMITS.fontSize.max);
  const tracking = clamp(Math.round(targetAdvance - fontSize), LIMITS.tracking.min, LIMITS.tracking.max);
  const centerRadius = clamp(Math.round(targetRadius), LIMITS.centerRadius.min, LIMITS.centerRadius.max);
  const outerRadius = clamp(Math.round(centerRadius + fontSize / 2), LIMITS.outerRadius.min, LIMITS.outerRadius.max);
  const innerRadius = clamp(Math.round(centerRadius - fontSize / 2), LIMITS.innerRadius.min, outerRadius - 8);

  if (controls.layoutMode.find((input) => input.checked).value === "radialBaseline") {
    controls.layoutMode.forEach((input) => {
      input.checked = input.value === "radialRing";
    });
  }

  controls.startAngle.value = "0";
  controls.rotationAngle.value = "0";
  previousRotationAngle = 0;
  controls.sweepAngle.value = "360";
  setRangeValue("gridCount", charCount);
  buildCellInputs();
  setRangeValue("padding", padding);
  setRangeValue("lineGap", 0);
  setRangeValue("fontSize", fontSize);
  setRangeValue("tracking", tracking);
  setRangeValue("centerRadius", centerRadius);
  setRangeValue("outerRadius", outerRadius);
  setRangeValue("innerRadius", innerRadius);
  controls.alternateFlow.checked = false;
  equalRingSpacing = true;
  render();
}

function getCurrentLayoutSnapshot() {
  const state = readState();
  return {
    schemaVersion: 2,
    savedAt: new Date().toISOString(),
    text: state.text,
    cells: state.cells,
    centerCell: state.centerCell,
    cellSettings: state.cellSettings,
    cellOrder: state.cellOrder,
    mode: state.mode,
    fontKey: state.fontKey,
    parameters: {
      boardZoom: state.boardZoom,
      centerRadius: state.centerRadius,
      innerRadius: state.innerRadius,
      outerRadius: state.outerRadius,
      boundaryInnerRadius: state.boundaryInnerRadius,
      boundaryOuterRadius: state.boundaryOuterRadius,
      ornamentStrokeWidth: state.ornamentStrokeWidth,
      outerBorderRadius: state.outerBorderRadius,
      outerBorderStrokeWidth: state.outerBorderStrokeWidth,
      innerOuterBorderEnabled: state.innerOuterBorderEnabled,
      innerOuterBorderRadius: state.innerOuterBorderRadius,
      innerOuterBorderStrokeWidth: state.innerOuterBorderStrokeWidth,
      outerPatternType: state.outerPatternType,
      outerPatternRingCount: state.outerPatternRingCount,
      outerPatternAngleDivisions: state.outerPatternAngleDivisions,
      outerPatternStrokeWidth: state.outerPatternStrokeWidth,
      outerPatternJumpSpan: state.outerPatternJumpSpan,
      centerDecorationMode: state.centerDecorationMode,
      surroundDecorationMode: state.surroundDecorationMode,
      surroundPatternType: state.surroundPatternType,
      surroundPatternBandWidth: state.surroundPatternBandWidth,
      surroundPatternRingCount: state.surroundPatternRingCount,
      surroundPatternAngleDivisions: state.surroundPatternAngleDivisions,
      surroundPatternStrokeWidth: state.surroundPatternStrokeWidth,
      surroundPatternJumpSpan: state.surroundPatternJumpSpan,
      centerCellHeightScale: state.centerCellHeightScale,
      centerCellWidthScale: state.centerCellWidthScale,
      exportResolution: state.exportResolution,
      exportDiameterMm: state.exportDiameterMm,
      baseThickness: state.baseThickness,
      weatheringStrength: state.weatheringStrength,
      rubbingKernelRadius: state.rubbingKernelRadius,
      rubbingInkStrength: state.rubbingInkStrength,
      rubbingLowThreshold: state.rubbingLowThreshold,
      rubbingHighThreshold: state.rubbingHighThreshold,
      textReliefHeight: state.textReliefHeight,
      textReliefBevelProfile: state.textReliefBevelProfile,
      textReliefBevelSize: state.textReliefBevelSize,
      boundaryReliefHeight: state.boundaryReliefHeight,
      boundaryReliefBevelProfile: state.boundaryReliefBevelProfile,
      boundaryReliefBevelSize: state.boundaryReliefBevelSize,
      patternReliefHeight: state.patternReliefHeight,
      patternReliefBevelProfile: state.patternReliefBevelProfile,
      patternReliefBevelSize: state.patternReliefBevelSize,
      outerBorderReliefHeight: state.outerBorderReliefHeight,
      outerBorderReliefBevelProfile: state.outerBorderReliefBevelProfile,
      outerBorderReliefBevelSize: state.outerBorderReliefBevelSize,
      centerNailReliefHeight: state.centerNailReliefHeight,
      centerNailReliefBevelProfile: state.centerNailReliefBevelProfile,
      centerNailReliefBevelSize: state.centerNailReliefBevelSize,
      surroundNailReliefHeight: state.surroundNailReliefHeight,
      surroundNailReliefBevelProfile: state.surroundNailReliefBevelProfile,
      surroundNailReliefBevelSize: state.surroundNailReliefBevelSize,
      glyphStrokeWidth: state.glyphStrokeWidth,
      centerNailRadius: state.centerNailRadius,
      centerNailBoundaryEnabled: state.centerNailBoundaryEnabled,
      centerNailBoundaryRadius: state.centerNailBoundaryRadius,
      centerNailBoundaryStrokeWidth: state.centerNailBoundaryStrokeWidth,
      surroundNailRadius: state.surroundNailRadius,
      surroundNailSize: state.surroundNailSize,
      surroundNailCount: state.surroundNailCount,
      dividerStyle: state.dividerStyle,
      dividerStrokeWidth: state.dividerStrokeWidth,
      gridCount: state.gridCount,
      cellFillMode: state.cellFillMode,
      cellInsetMargin: state.cellInsetMargin,
      ringOrientation: state.ringOrientation,
      cells: state.cells,
      centerCell: state.centerCell,
      cellSettings: state.cellSettings,
      cellOrder: state.cellOrder,
      rotationAngle: state.rotationAngle,
      startAngle: state.startAngle,
      sweepAngle: state.sweepAngle,
      fontSize: state.fontSize,
      fontHeightScale: state.fontHeightScale,
      fontWidthScale: state.fontWidthScale,
      tracking: state.tracking,
      lineGap: state.lineGap,
      padding: state.padding,
      alternateFlow: state.alternateFlow,
      showGuides: state.showGuides,
      showGrid: state.showGrid,
      showGlyphGrid: state.showGlyphGrid,
      showAngleDebug: state.showAngleDebug,
      showOrnamentRings: state.showOrnamentRings,
      equalRingSpacing: state.equalRingSpacing,
    },
  };
}

function downloadLayoutBackup(json) {
  const blob = new Blob([`\ufeff${json}`], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = DEFAULT_LAYOUT_URL;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadLayoutSnapshot(filename = "watang-layout.json") {
  const layout = getCurrentLayoutSnapshot();
  const json = JSON.stringify(layout, null, 2);
  const blob = new Blob([`\ufeff${json}`], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
  modeSummary.textContent = `已另存配置 ${filename}`;
  logDebug("另存配置", {
    file: filename,
    text: layout.text,
    startAngle: layout.parameters.startAngle,
    rotationAngle: layout.parameters.rotationAngle,
  });
}

async function saveCurrentLayout() {
  const layout = getCurrentLayoutSnapshot();
  const json = JSON.stringify(layout, null, 2);
  localStorage.setItem("ringTextLayout:lastSaved", json);
  logDebug("保存默认配置", {
    startAngle: layout.parameters.startAngle,
    rotationAngle: layout.parameters.rotationAngle,
    text: layout.text,
  });

  try {
    const response = await fetch(SAVE_LAYOUT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: `\ufeff${json}`,
    });
    if (!response.ok) throw new Error("默认配置写入失败");
    modeSummary.textContent = `已保存到默认配置 ${DEFAULT_LAYOUT_URL}`;
  } catch (error) {
    downloadLayoutBackup(json);
    modeSummary.textContent = "当前服务不支持直接写入，已下载默认配置备份。";
  }
}

async function loadLayoutFromFile(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  try {
    const text = await file.text();
    const layout = JSON.parse(text.replace(/^\uFEFF/, ""));
    applyLayoutConfig(layout);
    if (controls.layoutPresetSelect) controls.layoutPresetSelect.value = "";
    await ensureSelectedFontParsed({ render: false });
    render();
    modeSummary.textContent = `已加载配置 ${file.name}`;
    logDebug("加载配置", {
      file: file.name,
      text: layout.text || "",
      mode: layout.mode || layout.parameters?.mode || "radialRing",
    });
  } catch (error) {
    modeSummary.textContent = "配置加载失败，请检查 JSON 文件格式。";
    logDebug("加载配置失败", { file: file.name, error: error.message });
  } finally {
    event.target.value = "";
  }
}

function getExportSvgStyle(state, variant = "svg") {
  const glyphStrokeWidth = Math.max(0, Number(state.glyphStrokeWidth) || 0);
  if (variant === "grayscale") {
    return `
      ${getSelectedFontFaceCss()}
      .glyph,
      .glyph-vector {
        fill: #ffffff;
        stroke: #ffffff;
        stroke-width: ${glyphStrokeWidth}px;
        stroke-linejoin: round;
        stroke-linecap: round;
        paint-order: stroke fill;
      }
      .ornament-line {
        fill: none;
        stroke: #ffffff;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }
      .ornament-divider {
        fill: none;
        stroke: #ffffff;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }
      .ornament-fill {
        fill: #ffffff;
        stroke: none;
      }
      .ornament-solid {
        fill: #ffffff;
        stroke: none;
      }
      .ring-mode-boundary,
      .slot-divider {
        fill: none;
        stroke: #ffffff;
        vector-effect: non-scaling-stroke;
      }
    `;
  }

  return `
    ${getSelectedFontFaceCss()}
    .guide-ring { fill: rgba(15, 139, 141, 0.08); stroke: rgba(15, 139, 141, 0.36); stroke-width: 2; }
    .guide-edge { fill: none; stroke: rgba(187, 62, 74, 0.52); stroke-dasharray: 8 10; stroke-width: 2; }
    .guide-track { fill: none; stroke: rgba(23, 32, 38, 0.12); stroke-width: 1; }
    .glyph { fill: #172026; font-family: ${state.fontFamily}; font-weight: 650; }
    .glyph-vector { stroke-linejoin: round; stroke-linecap: round; paint-order: stroke fill; }
    .ornament-line { fill: none; stroke: #111111; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
    .ornament-divider { fill: none; stroke: #111111; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
    .ornament-fill { fill: #111111; stroke: none; }
    .ornament-solid { fill: #111111; stroke: none; }
    .first-divider-marker { fill: none; stroke: #d21f1f; stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
    .ring-mode-boundary { fill: none; stroke: rgba(18, 24, 38, 0.82); stroke-width: 2; vector-effect: non-scaling-stroke; }
    .char-boundary { fill: none; stroke: rgba(229, 92, 43, 0.68); stroke-width: 1.1; vector-effect: non-scaling-stroke; }
    .slot-divider { stroke: rgba(229, 92, 43, 0.82); stroke-width: 1.2; vector-effect: non-scaling-stroke; }
    .glyph-debug-grid { fill: none; stroke: rgba(26, 115, 232, 0.42); stroke-width: 1; vector-effect: non-scaling-stroke; }
    .glyph-precision-grid { fill: none; stroke: rgba(229, 31, 31, 0.58); stroke-width: 1; vector-effect: non-scaling-stroke; }
    .glyph-center-line { fill: none; stroke: rgba(210, 31, 31, 0.86); stroke-width: 1.2; vector-effect: non-scaling-stroke; }
    .glyph:nth-child(7n) { fill: #0a5f62; }
    .glyph:nth-child(11n) { fill: #bb3e4a; }
  `;
}

function createExportSvgClone(state, variant = "svg") {
  const clone = svg.cloneNode(true);
  clone.setAttribute("xmlns", NS);
  clone.querySelector("#ringGuides")?.remove();
  clone.querySelector("#debugLayer")?.remove();
  clone.querySelectorAll(EXPORT_CLEANUP_SELECTOR).forEach((node) => node.remove());
  const style = createSvgElement("style");
  style.textContent = getExportSvgStyle(state, variant);
  clone.insertBefore(style, clone.firstChild);
  return clone;
}

function createComponentExportSvgClone(state, componentKey) {
  const clone = createExportSvgClone(state, "grayscale");
  const textLayerClone = clone.querySelector("#textLayer");
  const component = RELIEF_COMPONENTS.find((item) => item.key === componentKey);
  if (textLayerClone) {
    [...textLayerClone.children].forEach((node) => {
      const matchesComponent =
        component &&
        typeof node.matches === "function" &&
        (node.matches(component.selector) || typeof node.querySelector === "function" && node.querySelector(component.selector));
      if (!matchesComponent) node.remove();
    });
  }
  return clone;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    link.remove();
    URL.revokeObjectURL(url);
  }, 1000);
}

function waitForAnimationFrames(count = 1) {
  return new Promise((resolve) => {
    const step = (remaining) => {
      if (remaining <= 0) {
        resolve();
        return;
      }
      requestAnimationFrame(() => step(remaining - 1));
    };
    step(count);
  });
}

function renderTopViewReliefFrame() {
  if (!reliefPreview.renderer || !reliefPreview.scene || !reliefPreview.camera) {
    throw new Error("3D 预览尚未准备完成");
  }

  const camera = reliefPreview.camera;
  const controls = reliefPreview.controls;
  const originalPosition = camera.position.clone();
  const originalUp = camera.up.clone();
  const originalQuaternion = camera.quaternion.clone();
  const originalTarget = controls?.target?.clone();
  const originalMinDistance = controls?.minDistance;
  const originalMaxDistance = controls?.maxDistance;
  const radius = Math.max(260, Number(reliefPreview.mesh?.outerRadius || 260));
  const distance = radius * 2.28;

  camera.position.set(0, 0, distance);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 0, 0);
  if (controls) {
    controls.target.set(0, 0, 0);
    controls.minDistance = distance;
    controls.maxDistance = distance;
    controls.update();
  }
  reliefPreview.renderer.render(reliefPreview.scene, camera);

  camera.position.copy(originalPosition);
  camera.up.copy(originalUp);
  camera.quaternion.copy(originalQuaternion);
  if (controls && originalTarget) {
    controls.target.copy(originalTarget);
    controls.minDistance = originalMinDistance;
    controls.maxDistance = originalMaxDistance;
    controls.update();
  }
}

function makeCenteredTopViewWadangImageDataUrl(sourceCanvas) {
  const size = 1080;
  const output = document.createElement("canvas");
  output.width = size;
  output.height = size;
  const outCtx = output.getContext("2d");
  const cropSize = Math.min(sourceCanvas.width, sourceCanvas.height);
  const cropX = Math.max(0, (sourceCanvas.width - cropSize) / 2);
  const cropY = Math.max(0, (sourceCanvas.height - cropSize) / 2);
  outCtx.drawImage(sourceCanvas, cropX, cropY, cropSize, cropSize, 0, 0, size, size);
  return output.toDataURL("image/png");
}

async function postJson(url, body, stageLabel) {
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    throw new Error(`${stageLabel} 请求失败: ${error.message}`);
  }

  const responseText = await response.text();
  let payload = {};
  try {
    payload = responseText ? JSON.parse(responseText) : {};
  } catch (parseError) {
    payload = { error: responseText.slice(0, 240) || parseError.message };
  }
  if (!response.ok || !payload.ok) {
    const hint = response.status === 404
      ? `${stageLabel} 接口不存在，请重启瓦当设计器本地服务以加载新的 dev_server.py。`
      : payload.error || response.statusText || `${stageLabel} 失败`;
    throw new Error(`HTTP ${response.status}: ${hint}`);
  }
  return payload;
}

async function publishCurrentWadangToShowcase() {
  const layout = getCurrentLayoutSnapshot();
  modeSummary.textContent = "正在生成当前 3D 瓦当俯视大图...";
  if (controls.publishWadang4) controls.publishWadang4.disabled = true;

  try {
    await previewReliefModel({ force: true });
    await waitForAnimationFrames(2);
    if (!reliefPreview.renderer || !reliefPreview.scene || !reliefPreview.camera || !reliefPreviewCanvas) {
      throw new Error("3D 预览尚未准备完成");
    }
    renderTopViewReliefFrame();
    const imageData = makeCenteredTopViewWadangImageDataUrl(reliefPreviewCanvas);
    if (!imageData.startsWith("data:image/png;base64,")) {
      throw new Error("俯视大图生成失败：3D 预览画布未能导出 PNG");
    }
    const title = layout.text || "未命名瓦当";
    const text = layout.text || "";
    logDebug("俯视大图生成", {
      dataUrlLength: imageData.length,
      canvasWidth: reliefPreviewCanvas.width,
      canvasHeight: reliefPreviewCanvas.height,
    });

    modeSummary.textContent = "正在保存俯视大图到瓦当设计器...";
    const mountedPayload = await postJson(
      SAVE_MOUNTED_WADANG_URL,
      { title, text, imageData },
      "保存俯视大图",
    );
    logDebug("俯视大图已保存到瓦当设计器", mountedPayload);

    modeSummary.textContent = "俯视大图已保存，正在发布到 wadang4 展示池...";
    const publishPayload = await postJson(
      PUBLISH_WADANG4_URL,
      {
        title,
        text,
        mountedName: mountedPayload.name,
        layout,
      },
      "发布到 wadang4",
    );
    modeSummary.textContent = `已发布俯视大图到 wadang4 展示池：${publishPayload.name}`;
    logDebug("发布到 wadang4", publishPayload);
  } catch (error) {
    modeSummary.textContent = "发布到 wadang4 失败，日志中已标出失败阶段。";
    logDebug("发布到 wadang4 失败", { error: error.message });
  } finally {
    if (controls.publishWadang4) controls.publishWadang4.disabled = false;
  }
}

function makePublishableReliefMesh(mesh) {
  if (!mesh || !Array.isArray(mesh.positions) || !Array.isArray(mesh.indices)) {
    throw new Error("当前 3D 网格尚未准备完成");
  }
  const payload = {
    positions: mesh.positions,
    indices: mesh.indices,
    outerRadius: mesh.outerRadius,
    heightValue: mesh.heightValue,
    angularSegments: mesh.angularSegments,
    radialSegments: mesh.radialSegments,
    vertices: mesh.vertices || Math.floor(mesh.positions.length / 3),
    faces: mesh.faces || Math.floor(mesh.indices.length / 3),
  };
  if (Array.isArray(mesh.colors) && mesh.colors.length === mesh.positions.length) {
    payload.colors = mesh.colors;
  }
  return payload;
}

function defaultWadangTitle() {
  const layout = getCurrentLayoutSnapshot();
  if (imageReliefState.active) return "我的图片瓦当";
  return layout.text || "未命名瓦当";
}

async function publishCurrentWadangUgc(options = {}) {
  const layout = getCurrentLayoutSnapshot();
  const title = String(options.title || defaultWadangTitle()).trim() || "未命名瓦当";
  const text = layout.text || "";
  const message = String(options.message || "").trim();
  if (!publishMessagePage || publishMessagePage.hidden) {
    modeSummary.textContent = "正在生成用户作品发布包...";
  }
  if (controls.resultPublish) controls.resultPublish.disabled = true;

  try {
    await previewReliefModel({ force: true });
    await waitForAnimationFrames(2);
    if (!reliefPreview.renderer || !reliefPreview.scene || !reliefPreview.camera || !reliefPreviewCanvas) {
      throw new Error("3D 预览尚未准备完成");
    }

    renderTopViewReliefFrame();
    const imageData = makeCenteredTopViewWadangImageDataUrl(reliefPreviewCanvas);
    const mesh = makePublishableReliefMesh(reliefPreview.mesh);
    const payload = await postJson(
      PUBLISH_WADANG_UGC_URL,
      {
        title,
        text,
        message,
        mesh,
        layout,
        imageData,
      },
      "发布用户作品包",
    );

    modeSummary.textContent = `已发布用户作品包：${payload.item?.id || title}`;
    logDebug("发布用户作品包", payload);
    return payload;
  } catch (error) {
    modeSummary.textContent = "用户作品包发布失败，日志中已标出失败原因。";
    logDebug("用户作品包发布失败", { error: error.message });
    throw error;
  } finally {
    if (controls.resultPublish) controls.resultPublish.disabled = false;
  }
}

function defaultPublishMessage() {
  const text = publishTitleText?.value.trim() || defaultWadangTitle();
  return `愿${text}留住此刻心意，也把亲手制作的痕迹交给未来观看的人。`;
}

function openPublishMessagePage() {
  if (!publishMessagePage || !publishMessageText) return;
  if (publishTitleText) publishTitleText.value = publishTitleText.value.trim() || defaultWadangTitle();
  publishMessageText.value = publishMessageText.value.trim() || defaultPublishMessage();
  if (publishMessageStatus) publishMessageStatus.textContent = "";
  publishMessagePage.hidden = false;
  (publishTitleText || publishMessageText).focus();
}

function closePublishMessagePage() {
  if (!publishMessagePage) return;
  publishMessagePage.hidden = true;
}

async function polishPublishMessage() {
  if (!publishMessageText || !publishMessageAi) return;
  const layout = getCurrentLayoutSnapshot();
  publishMessageAi.disabled = true;
  if (publishMessageStatus) publishMessageStatus.textContent = "AI 正在润色寄语...";
  try {
    const payload = await postJson(
      DEEPSEEK_WADANG_MESSAGE_URL,
      {
        title: publishTitleText?.value.trim() || defaultWadangTitle(),
        text: layout.text || "",
        message: publishMessageText.value.trim() || defaultPublishMessage(),
      },
      "AI 润色寄语",
    );
    publishMessageText.value = payload.text || publishMessageText.value;
    if (publishMessageStatus) publishMessageStatus.textContent = "已润色，可继续编辑。";
  } catch (error) {
    if (publishMessageStatus) publishMessageStatus.textContent = "AI 暂时不可用，你仍可手写寄语并发布。";
    logDebug("AI 润色寄语失败", { error: error.message });
  } finally {
    publishMessageAi.disabled = false;
  }
}

async function confirmPublishWithMessage() {
  if (!publishMessageConfirm || !publishMessageText) return;
  publishMessageConfirm.disabled = true;
  publishMessageBack.disabled = true;
  publishMessageAi.disabled = true;
  if (publishMessageStatus) publishMessageStatus.textContent = "正在整理作品包，请稍候...";
  try {
    const payload = await publishCurrentWadangUgc({
      title: publishTitleText?.value.trim() || defaultWadangTitle(),
      message: publishMessageText.value.trim(),
    });
    if (publishMessageStatus) publishMessageStatus.textContent = `发布完成：${payload.item?.id || "用户作品包"}`;
  } catch (error) {
    if (publishMessageStatus) publishMessageStatus.textContent = "发布失败，请返回后重试或查看调试日志。";
  } finally {
    publishMessageConfirm.disabled = false;
    publishMessageBack.disabled = false;
    publishMessageAi.disabled = false;
  }
}

function openReserveMakingPage() {
  if (!reserveMakingPage) return;
  if (reserveTitleText) reserveTitleText.value = reserveTitleText.value.trim() || defaultWadangTitle();
  if (reserveMakingStatus) reserveMakingStatus.textContent = "";
  reserveMakingPage.hidden = false;
  (reserveContactText || reserveTitleText)?.focus();
}

function closeReserveMakingPage() {
  if (!reserveMakingPage) return;
  reserveMakingPage.hidden = true;
}

async function reserveCurrentWadangMaking() {
  if (!reserveMakingConfirm) return;
  const title = reserveTitleText?.value.trim() || defaultWadangTitle();
  const contact = reserveContactText?.value.trim() || "";
  const note = reserveNoteText?.value.trim() || "";
  if (!contact) {
    if (reserveMakingStatus) reserveMakingStatus.textContent = "请先留下联系方式。";
    reserveContactText?.focus();
    return;
  }

  const state = readState();
  const layout = getCurrentLayoutSnapshot();
  reserveMakingConfirm.disabled = true;
  reserveMakingBack.disabled = true;
  if (reserveMakingStatus) reserveMakingStatus.textContent = "正在生成 STL 并保存预约信息...";

  try {
    let imageData = "";
    try {
      await previewReliefModel({ force: true });
      await waitForAnimationFrames(2);
      if (reliefPreview.renderer && reliefPreview.scene && reliefPreview.camera && reliefPreviewCanvas) {
        renderTopViewReliefFrame();
        imageData = makeCenteredTopViewWadangImageDataUrl(reliefPreviewCanvas);
      }
    } catch (previewError) {
      logDebug("预约预览图生成失败，继续保存 STL", { error: previewError.message });
    }

    const reservationResolution = Math.min(getExportResolution(state), 480);
    const heightmap = await buildHeightmapCanvas(state, reservationResolution);
    const mesh = buildReliefMeshFromHeightmap(heightmap, state);
    const stl = reliefMeshToAsciiStl(mesh, "watang_relief");
    const payload = await postJson(
      RESERVE_WADANG_MAKING_URL,
      {
        title,
        text: layout.text || "",
        contact,
        note,
        stl,
        layout,
        imageData,
      },
      "预约制作",
    );
    if (reserveMakingStatus) reserveMakingStatus.textContent = `预约已保存：${payload.item?.id || title}`;
    logDebug("预约代制作", {
      ...payload,
      reservationResolution,
      vertices: mesh.vertices,
      faces: mesh.faces,
      stlBytes: stl.length,
      hasPreviewImage: Boolean(imageData),
    });
  } catch (error) {
    if (reserveMakingStatus) reserveMakingStatus.textContent = `预约保存失败：${error.message}`;
    logDebug("预约代制作失败", { error: error.message });
  } finally {
    reserveMakingConfirm.disabled = false;
    reserveMakingBack.disabled = false;
  }
}

function downloadSvg() {
  const state = readState();
  const clone = createExportSvgClone(state, "svg");
  downloadBlob(new Blob([clone.outerHTML], { type: "image/svg+xml;charset=utf-8" }), "ring-text-layout.svg");
}

function loadImageFromBlob(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.addEventListener("load", () => {
      URL.revokeObjectURL(url);
      resolve(image);
    });
    image.addEventListener("error", () => {
      URL.revokeObjectURL(url);
      reject(new Error("高度图源 SVG 渲染失败"));
    });
    image.src = url;
  });
}

function createBinaryMaskFromAlpha(maskImageData, alphaThreshold = 8) {
  const { width, height, data } = maskImageData;
  const binaryMask = new Uint8Array(width * height);
  for (let index = 0; index < binaryMask.length; index += 1) {
    binaryMask[index] = data[index * 4 + 3] >= alphaThreshold ? 1 : 0;
  }
  return binaryMask;
}

function dilateBinaryMask(mask, width, height, radius = 1) {
  const result = new Uint8Array(mask.length);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let filled = 0;
      for (let oy = -radius; oy <= radius && !filled; oy += 1) {
        const py = y + oy;
        if (py < 0 || py >= height) continue;
        for (let ox = -radius; ox <= radius; ox += 1) {
          const px = x + ox;
          if (px < 0 || px >= width) continue;
          if (mask[py * width + px]) {
            filled = 1;
            break;
          }
        }
      }
      result[y * width + x] = filled;
    }
  }
  return result;
}

function erodeBinaryMask(mask, width, height, radius = 1) {
  const result = new Uint8Array(mask.length);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let filled = 1;
      for (let oy = -radius; oy <= radius && filled; oy += 1) {
        const py = y + oy;
        if (py < 0 || py >= height) {
          filled = 0;
          break;
        }
        for (let ox = -radius; ox <= radius; ox += 1) {
          const px = x + ox;
          if (px < 0 || px >= width || !mask[py * width + px]) {
            filled = 0;
            break;
          }
        }
      }
      result[y * width + x] = filled;
    }
  }
  return result;
}

function closeBinaryMask(mask, width, height, radius = 1) {
  return erodeBinaryMask(dilateBinaryMask(mask, width, height, radius), width, height, radius);
}

function downsampleBinaryMask(mask, inputSize, outputSize) {
  const result = new Uint8Array(outputSize * outputSize);
  const scaleRatio = inputSize / outputSize;

  for (let y = 0; y < outputSize; y += 1) {
    const sourceY = Math.max(0, Math.min(inputSize - 1, Math.round((y + 0.5) * scaleRatio - 0.5)));
    for (let x = 0; x < outputSize; x += 1) {
      const sourceX = Math.max(0, Math.min(inputSize - 1, Math.round((x + 0.5) * scaleRatio - 0.5)));
      result[y * outputSize + x] = mask[sourceY * inputSize + sourceX];
    }
  }

  return result;
}

function getHeightmapWorldUnitsPerPixel(size) {
  return 900 / Math.max(1, size - 1);
}

function distanceTransform1D(source, length) {
  const result = new Float64Array(length);
  const vertices = new Int32Array(length);
  const boundaries = new Float64Array(length + 1);
  let count = 0;

  vertices[0] = 0;
  boundaries[0] = -Infinity;
  boundaries[1] = Infinity;

  for (let q = 1; q < length; q += 1) {
    let separation = Infinity;
    while (count >= 0) {
      const vertex = vertices[count];
      separation = ((source[q] + q * q) - (source[vertex] + vertex * vertex)) / (2 * (q - vertex));
      if (separation > boundaries[count]) break;
      count -= 1;
    }
    count += 1;
    vertices[count] = q;
    boundaries[count] = separation;
    boundaries[count + 1] = Infinity;
  }

  count = 0;
  for (let q = 0; q < length; q += 1) {
    while (boundaries[count + 1] < q) count += 1;
    const delta = q - vertices[count];
    result[q] = delta * delta + source[vertices[count]];
  }

  return result;
}

function computeInsideDistanceField(mask, width, height) {
  const inf = 1e12;
  const rowDistances = new Float64Array(width * height);
  const rowInput = new Float64Array(width);
  for (let y = 0; y < height; y += 1) {
    const rowOffset = y * width;
    for (let x = 0; x < width; x += 1) {
      rowInput[x] = mask[rowOffset + x] ? inf : 0;
    }
    const rowResult = distanceTransform1D(rowInput, width);
    for (let x = 0; x < width; x += 1) {
      rowDistances[rowOffset + x] = rowResult[x];
    }
  }

  const distanceSquares = new Float64Array(width * height);
  const columnInput = new Float64Array(height);
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
      columnInput[y] = rowDistances[y * width + x];
    }
    const columnResult = distanceTransform1D(columnInput, height);
    for (let y = 0; y < height; y += 1) {
      distanceSquares[y * width + x] = columnResult[y];
    }
  }

  const worldUnitsPerPixel = getHeightmapWorldUnitsPerPixel(width);
  const distances = new Float32Array(width * height);
  for (let index = 0; index < mask.length; index += 1) {
    distances[index] = mask[index] ? Math.sqrt(distanceSquares[index]) * worldUnitsPerPixel : 0;
  }
  return distances;
}

function applyReliefBevelProfile(distance, bevelSize, profile) {
  if (bevelSize <= 0 || profile === "none") return distance > 0 ? 1 : 0;
  const t = Math.max(0, Math.min(1, distance / bevelSize));
  if (profile === "round") {
    return Math.sqrt(Math.max(0, 2 * t - t * t));
  }
  if (profile === "log") {
    return Math.log1p(15 * t) / Math.log1p(15);
  }
  return t;
}

function buildHeightFieldFromMask(mask, size, reliefSettings) {
  const bevelProfile = reliefSettings.bevelProfile;
  const bevelSize = reliefSettings.bevelSize;
  if (bevelProfile === "none" || bevelSize <= 0) {
    const heights = binaryMaskToHeights(mask);
    for (let index = 0; index < heights.length; index += 1) heights[index] *= reliefSettings.height;
    return heights;
  }

  const distances = computeInsideDistanceField(mask, size, size);
  const heights = new Float32Array(mask.length);
  for (let index = 0; index < mask.length; index += 1) {
    if (!mask[index]) {
      heights[index] = 0;
      continue;
    }
    heights[index] = applyReliefBevelProfile(distances[index], bevelSize, bevelProfile) * reliefSettings.height;
  }
  return heights;
}

function binaryMaskToHeights(mask) {
  const heights = new Float32Array(mask.length);
  for (let index = 0; index < mask.length; index += 1) {
    heights[index] = mask[index] ? 1 : 0;
  }
  return heights;
}

function hashStringToSeed(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function hashNoise2D(x, y, seed) {
  let value = Math.imul(x ^ seed, 374761393) + Math.imul(y ^ (seed >>> 1), 668265263);
  value = (value ^ (value >>> 13)) >>> 0;
  value = Math.imul(value, 1274126177) >>> 0;
  return ((value ^ (value >>> 16)) >>> 0) / 4294967295;
}

function smoothstep(t) {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * clamped * (3 - 2 * clamped);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function valueNoise2D(x, y, scale, seed) {
  const sx = x / Math.max(1, scale);
  const sy = y / Math.max(1, scale);
  const x0 = Math.floor(sx);
  const y0 = Math.floor(sy);
  const tx = smoothstep(sx - x0);
  const ty = smoothstep(sy - y0);
  const n00 = hashNoise2D(x0, y0, seed);
  const n10 = hashNoise2D(x0 + 1, y0, seed);
  const n01 = hashNoise2D(x0, y0 + 1, seed);
  const n11 = hashNoise2D(x0 + 1, y0 + 1, seed);
  return lerp(lerp(n00, n10, tx), lerp(n01, n11, tx), ty);
}

function weatheringNoise(x, y, size, seed) {
  const coarseScale = Math.max(18, size * 0.12);
  const middleScale = Math.max(7, size * 0.035);
  const fineScale = Math.max(3, size * 0.012);
  return (
    valueNoise2D(x, y, coarseScale, seed) * 0.5 +
    valueNoise2D(x, y, middleScale, seed + 1013) * 0.32 +
    valueNoise2D(x, y, fineScale, seed + 7919) * 0.18
  );
}

function applyWeatheringToHeights(heights, size, state) {
  const strength = clamp(Number(state?.weatheringStrength || 0), 0, 100) / 100;
  if (strength <= 0) return null;

  const occupancy = new Uint8Array(heights.length);
  for (let index = 0; index < heights.length; index += 1) {
    occupancy[index] = heights[index] > 0.0001 ? 1 : 0;
  }

  const distances = computeInsideDistanceField(occupancy, size, size);
  const seed = hashStringToSeed(`${state?.text || ""}|${state?.centerCell || ""}|${size}|watang-weathering`);
  const chipWidth = 4 + strength * 34;
  const chipThreshold = 0.92 - strength * 0.34;
  const surfaceLoss = 0.08 + strength * 0.24;
  let chippedPixels = 0;
  let abradedPixels = 0;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = y * size + x;
      const height = heights[index];
      if (height <= 0) continue;

      const noise = weatheringNoise(x, y, size, seed);
      const pitted = Math.max(0, noise - 0.28) / 0.72;
      let nextHeight = height * (1 - pitted * surfaceLoss * strength);
      const edgeFactor = Math.max(0, 1 - distances[index] / chipWidth);

      if (edgeFactor > 0) {
        const chipNoise = weatheringNoise(x + 173, y - 97, size, seed + 48611);
        const chip = Math.max(0, chipNoise - chipThreshold) / Math.max(0.0001, 1 - chipThreshold);
        if (chip > 0) {
          const chipDepth = Math.min(1, edgeFactor * chip * (0.68 + strength * 0.32));
          nextHeight *= 1 - chipDepth;
          chippedPixels += 1;
        }
      }

      if (nextHeight < height) abradedPixels += 1;
      heights[index] = Math.max(0, nextHeight);
    }
  }

  return {
    strength,
    chipWidth,
    chippedPixels,
    abradedPixels,
    seed,
  };
}

async function renderSvgElementToCanvas(svgElement, size) {
  const svgBlob = new Blob([svgElement.outerHTML], { type: "image/svg+xml;charset=utf-8" });
  const image = await loadImageFromBlob(svgBlob);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.clearRect(0, 0, size, size);
  context.drawImage(image, 0, 0, size, size);
  return canvas;
}

function makeCanvasFromImageData(imageData) {
  const canvas = document.createElement("canvas");
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const context = canvas.getContext("2d");
  context.putImageData(imageData, 0, 0);
  return canvas;
}

function makeCanvasFromFloatHeights(heights, width, height, maxValue = 1) {
  const imageData = new ImageData(width, height);
  for (let index = 0; index < heights.length; index += 1) {
    const gray = Math.max(0, Math.min(255, Math.round((heights[index] / Math.max(0.0001, maxValue)) * 255)));
    const offset = index * 4;
    imageData.data[offset] = gray;
    imageData.data[offset + 1] = gray;
    imageData.data[offset + 2] = gray;
    imageData.data[offset + 3] = 255;
  }
  return makeCanvasFromImageData(imageData);
}

function makeCanvasFromAlphaImageData(imageData) {
  const alphaImage = new ImageData(imageData.width, imageData.height);
  for (let index = 0; index < imageData.data.length; index += 4) {
    const alpha = imageData.data[index + 3];
    alphaImage.data[index] = alpha;
    alphaImage.data[index + 1] = alpha;
    alphaImage.data[index + 2] = alpha;
    alphaImage.data[index + 3] = 255;
  }
  return makeCanvasFromImageData(alphaImage);
}

function makeCanvasFromBinaryMask(mask, width, height) {
  const imageData = new ImageData(width, height);
  for (let index = 0; index < mask.length; index += 1) {
    const gray = mask[index] ? 255 : 0;
    const offset = index * 4;
    imageData.data[offset] = gray;
    imageData.data[offset + 1] = gray;
    imageData.data[offset + 2] = gray;
    imageData.data[offset + 3] = 255;
  }
  return makeCanvasFromImageData(imageData);
}

function summarizeCanvasGrayscale(canvas) {
  if (!canvas) return null;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const { width, height } = canvas;
  const imageData = context.getImageData(0, 0, width, height).data;
  const counts = new Uint32Array(256);
  let min = 255;
  let max = 0;
  let nonZero = 0;
  for (let index = 0; index < imageData.length; index += 4) {
    const gray = imageData[index];
    counts[gray] += 1;
    if (gray < min) min = gray;
    if (gray > max) max = gray;
    if (gray > 0) nonZero += 1;
  }
  const distinct = [];
  for (let gray = 0; gray < 256; gray += 1) {
    if (counts[gray] > 0) distinct.push(gray);
  }
  const top = distinct
    .map((gray) => ({ gray, count: counts[gray] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 16);
  return {
    width,
    height,
    min,
    max,
    nonZero,
    distinctCount: distinct.length,
    firstDistinct: distinct.slice(0, 24),
    lastDistinct: distinct.slice(-24),
    top,
  };
}

function publishInspectStats(debug) {
  if (!INSPECT_MODE || !debug) return;
  const stats = {
    alpha: summarizeCanvasGrayscale(debug.alphaCanvas),
    coverage: summarizeCanvasGrayscale(debug.coverageCanvas),
    binary: summarizeCanvasGrayscale(debug.binaryCanvas),
    height: summarizeCanvasGrayscale(debug.heightCanvas),
  };
  let node = document.querySelector("#inspectStats");
  if (!node) {
    node = document.createElement("pre");
    node.id = "inspectStats";
    node.hidden = true;
    document.body.appendChild(node);
  }
  node.textContent = JSON.stringify(stats);
}

function getHeightmapInternalResolution(size) {
  return Math.min(4096, Math.max(size, size * 4));
}

function setImageReliefStatus(message) {
  if (imageReliefControls.status) imageReliefControls.status.textContent = message;
}

function updateImageReliefLabels() {
  if (imageReliefControls.depthWeightValue) {
    imageReliefControls.depthWeightValue.textContent = Number(imageReliefControls.depthWeight.value).toFixed(2);
  }
  if (imageReliefControls.detailWeightValue) {
    imageReliefControls.detailWeightValue.textContent = Number(imageReliefControls.detailWeight.value).toFixed(2);
  }
  if (imageReliefControls.smoothValue) {
    imageReliefControls.smoothValue.textContent = Number(imageReliefControls.smooth.value).toFixed(1);
  }
}

function loadHeightFieldFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const fieldSize = image.naturalWidth;
      const canvas = document.createElement("canvas");
      canvas.width = fieldSize;
      canvas.height = fieldSize;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      context.drawImage(image, 0, 0, fieldSize, fieldSize);
      const data = context.getImageData(0, 0, fieldSize, fieldSize).data;
      const values = new Float32Array(fieldSize * fieldSize);
      for (let index = 0; index < values.length; index += 1) {
        values[index] = data[index * 4] / 255;
      }
      resolve({ values, size: fieldSize });
    };
    image.onerror = () => reject(new Error("高度图无法读取"));
    image.src = dataUrl;
  });
}

function loadColorFieldFromDataUrl(dataUrl, targetSize = 768) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const size = Math.max(64, Math.min(1024, Math.round(targetSize || image.naturalWidth || 768)));
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, size, size);
      context.drawImage(image, 0, 0, size, size);
      context.globalCompositeOperation = "destination-in";
      context.beginPath();
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      context.fill();
      context.globalCompositeOperation = "source-over";
      const imageData = context.getImageData(0, 0, size, size);
      resolve({ data: imageData.data, size });
    };
    image.onerror = () => reject(new Error("颜色图无法读取"));
    image.src = dataUrl;
  });
}

async function regenerateImageRelief() {
  if (!imageReliefState.dataUrl || imageReliefState.busy) return;
  imageReliefState.busy = true;
  setImageReliefStatus("正在调用 DA3 估计深度并混合灰度细节...");
  try {
    imageReliefState.colorField = imageReliefState.colorEnabled
      ? await loadColorFieldFromDataUrl(imageReliefState.dataUrl)
      : null;
    const response = await fetch("/__image-relief-da3", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        imageData: imageReliefState.dataUrl,
        size: 640,
        polarity: "near",
        depthWeight: Number(imageReliefControls.depthWeight?.value || 0.7),
        detailWeight: Number(imageReliefControls.detailWeight?.value || 0.4),
        smooth: Number(imageReliefControls.smooth?.value || 2),
        circleCrop: true,
        processRes: 420,
      }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `DA3 请求失败：${response.status}`);
    imageReliefState.field = await loadHeightFieldFromDataUrl(payload.heightmap);
    imageReliefState.active = true;
    reliefPreviewDirty = true;
    rubbingPreviewDirty = true;
    setImageReliefStatus(`已生成图片浮雕高度图（仅外边界内），设备 ${payload.meta?.device || "?"}。`);
    await previewReliefModel({ force: true });
  } catch (error) {
    setImageReliefStatus(`图片浮雕生成失败：${error.message}`);
    logDebug("图片浮雕生成失败", { error: error.message });
  } finally {
    imageReliefState.busy = false;
  }
}

async function handleImageReliefFile(file) {
  if (!file) return;
  if (!/^image\//.test(file.type)) {
    setImageReliefStatus("请选择图片文件（PNG/JPG/WEBP）。");
    return;
  }
  imageReliefState.dataUrl = await readFileAsDataUrl(file);
  await regenerateImageRelief();
}

function clearImageRelief() {
  imageReliefState = { active: false, dataUrl: "", field: null, colorEnabled: false, colorField: null, busy: false };
  if (imageReliefControls.file) imageReliefControls.file.value = "";
  reliefPreviewDirty = true;
  rubbingPreviewDirty = true;
  setImageReliefStatus("已清除图片，恢复文字瓦当。");
  render();
  previewReliefModel({ force: true }).catch((error) => logDebug("恢复文字瓦当 3D 失败", { error: error.message }));
}

// 把圆形裁切后的图片高度场合成进瓦当外边界内的圆盘（取 max，与外边界环叠加）。
function compositeImageReliefHeights(outputHeights, size, state) {
  const field = imageReliefState.field;
  if (!field) return;
  const amplitude = getMaxReliefHeight(state);
  const discRadiusSvg = Math.max(
    20,
    Number(state.innerOuterBorderRadius) || Number(state.boundaryOuterRadius) || Number(state.outerRadius) || 400,
  );
  const discRadius = (discRadiusSvg / 900) * size;
  const centerX = size / 2;
  const centerY = size / 2;
  const left = centerX - discRadius;
  const top = centerY - discRadius;
  const span = Math.max(1, 2 * discRadius);
  const radiusSquared = discRadius * discRadius;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = x - centerX;
      const dy = y - centerY;
      if (dx * dx + dy * dy > radiusSquared) continue;
      const u = (x - left) / span;
      const v = (y - top) / span;
      const ix = Math.min(field.size - 1, Math.max(0, Math.floor(u * field.size)));
      const iy = Math.min(field.size - 1, Math.max(0, Math.floor(v * field.size)));
      const height = field.values[iy * field.size + ix] * amplitude;
      const index = y * size + x;
      if (height > outputHeights[index]) outputHeights[index] = height;
    }
  }
}

function sampleImageReliefColorAtWorld(worldX, worldY, state) {
  const field = imageReliefState.colorField;
  if (!field) return null;
  const discRadiusSvg = Math.max(
    20,
    Number(state.innerOuterBorderRadius) || Number(state.boundaryOuterRadius) || Number(state.outerRadius) || 400,
  );
  const discRadius = discRadiusSvg;
  if (worldX * worldX + worldY * worldY > discRadius * discRadius) return null;
  const left = -discRadius;
  const top = -discRadius;
  const span = Math.max(1, 2 * discRadius);
  const u = (worldX - left) / span;
  const v = 1 - (worldY - top) / span;
  if (u < 0 || u > 1 || v < 0 || v > 1) return null;
  const x = Math.min(field.size - 1, Math.max(0, Math.floor(u * field.size)));
  const y = Math.min(field.size - 1, Math.max(0, Math.floor(v * field.size)));
  const offset = (y * field.size + x) * 4;
  const alpha = field.data[offset + 3] / 255;
  const white = 1 - alpha;
  return [
    field.data[offset] / 255 * alpha + white,
    field.data[offset + 1] / 255 * alpha + white,
    field.data[offset + 2] / 255 * alpha + white,
  ];
}

async function buildHeightmapCanvas(state, size) {
  const internalSize = getHeightmapInternalResolution(size);
  const alphaThreshold = 8;
  const outputHeights = new Float32Array(size * size);
  const maxReliefHeight = getMaxReliefHeight(state);
  const componentDebug = {};

  // 图片浮雕模式：只保留最外圈外边界，其余文字/边界/装饰/分隔线/乳钉一律跳过。
  const imageReliefActive = imageReliefState.active && Boolean(imageReliefState.field);
  const activeComponents = imageReliefActive
    ? RELIEF_COMPONENTS.filter((component) => component.key === "outerBorder")
    : RELIEF_COMPONENTS;

  for (const component of activeComponents) {
    const reliefSettings = getReliefComponentSettings(state, component.key);
    const clone = createComponentExportSvgClone(state, component.key);
    clone.setAttribute("width", String(internalSize));
    clone.setAttribute("height", String(internalSize));
    const maskCanvas = await renderSvgElementToCanvas(clone, internalSize);
    const maskContext = maskCanvas.getContext("2d", { willReadFrequently: true });
    const maskImageData = maskContext.getImageData(0, 0, maskCanvas.width, maskCanvas.height);
    const rawBinaryMask = createBinaryMaskFromAlpha(maskImageData, alphaThreshold);
    const normalizedBinaryMask = closeBinaryMask(rawBinaryMask, maskCanvas.width, maskCanvas.height, 1);
    const outputMask = downsampleBinaryMask(normalizedBinaryMask, internalSize, size);
    const componentHeights = buildHeightFieldFromMask(outputMask, size, reliefSettings);
    for (let index = 0; index < outputHeights.length; index += 1) {
      if (componentHeights[index] > outputHeights[index]) outputHeights[index] = componentHeights[index];
    }
    componentDebug[component.key] = {
      rawBinaryMask,
      normalizedBinaryMask,
      maskImageData,
      reliefSettings,
      debugSize: maskCanvas.width,
    };
  }

  if (imageReliefActive) {
    compositeImageReliefHeights(outputHeights, size, state);
  }

  const weatheringDebug = applyWeatheringToHeights(outputHeights, size, state);

  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = size;
  outputCanvas.height = size;
  const outputContext = outputCanvas.getContext("2d");
  const outputImage = new ImageData(size, size);
  for (let index = 0; index < outputHeights.length; index += 1) {
    const gray = Math.round((outputHeights[index] / Math.max(0.0001, maxReliefHeight)) * 255);
    const offset = index * 4;
    outputImage.data[offset] = gray;
    outputImage.data[offset + 1] = gray;
    outputImage.data[offset + 2] = gray;
    outputImage.data[offset + 3] = 255;
  }
  outputContext.putImageData(outputImage, 0, 0);
  const debug = INSPECT_MODE
    ? {
        alphaCanvas: makeCanvasFromAlphaImageData(componentDebug.text?.maskImageData || componentDebug.boundary?.maskImageData),
        coverageCanvas: makeCanvasFromBinaryMask(
          componentDebug.text?.normalizedBinaryMask || componentDebug.boundary?.normalizedBinaryMask,
          componentDebug.text?.debugSize || componentDebug.boundary?.debugSize || size,
          componentDebug.text?.debugSize || componentDebug.boundary?.debugSize || size,
        ),
        binaryCanvas: makeCanvasFromBinaryMask(
          componentDebug.text?.rawBinaryMask || componentDebug.boundary?.rawBinaryMask,
          componentDebug.text?.debugSize || componentDebug.boundary?.debugSize || size,
          componentDebug.text?.debugSize || componentDebug.boundary?.debugSize || size,
        ),
        heightCanvas: makeCanvasFromFloatHeights(outputHeights, size, size, maxReliefHeight),
        alphaThreshold,
        debugSize: internalSize,
        components: Object.fromEntries(
          Object.entries(componentDebug).map(([key, value]) => [key, value.reliefSettings]),
        ),
        weathering: weatheringDebug,
      }
    : null;
  return {
    canvas: outputCanvas,
    heights: outputHeights,
    size,
    internalSize,
    debug,
  };
}

function getSummedAreaValue(integral, stride, x, y) {
  return integral[y * stride + x];
}

function getSummedAreaRect(integral, stride, x0, y0, x1, y1) {
  return (
    getSummedAreaValue(integral, stride, x1, y1) -
    getSummedAreaValue(integral, stride, x0, y1) -
    getSummedAreaValue(integral, stride, x1, y0) +
    getSummedAreaValue(integral, stride, x0, y0)
  );
}

function buildHeightIntegralImage(heights, size) {
  const stride = size + 1;
  const integral = new Float64Array(stride * stride);
  for (let y = 0; y < size; y += 1) {
    let rowSum = 0;
    for (let x = 0; x < size; x += 1) {
      rowSum += heights[y * size + x];
      integral[(y + 1) * stride + x + 1] = integral[y * stride + x + 1] + rowSum;
    }
  }
  return { integral, stride };
}

function computeRubbingProminence(heights, size, kernelRadius) {
  const radius = Math.max(1, Math.round(kernelRadius));
  const { integral, stride } = buildHeightIntegralImage(heights, size);
  const prominence = new Float32Array(heights.length);
  let maxProminence = 0;

  for (let y = 0; y < size; y += 1) {
    const y0 = Math.max(0, y - radius);
    const y1 = Math.min(size, y + radius + 1);
    for (let x = 0; x < size; x += 1) {
      const index = y * size + x;
      const height = heights[index];
      if (height <= 0) continue;
      const x0 = Math.max(0, x - radius);
      const x1 = Math.min(size, x + radius + 1);
      const count = (x1 - x0) * (y1 - y0);
      const average = getSummedAreaRect(integral, stride, x0, y0, x1, y1) / Math.max(1, count);
      const value = Math.max(0, height - average);
      prominence[index] = value;
      if (value > maxProminence) maxProminence = value;
    }
  }

  return { prominence, maxProminence, radius };
}

function buildRubbingCanvasFromHeightmap(heightmap, state) {
  const size = heightmap.size || heightmap.canvas?.width || getExportResolution(state);
  const heights = heightmap.heights;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const imageData = new ImageData(size, size);
  const maxReliefHeight = Math.max(0.0001, getMaxReliefHeight(state));
  const inkStrength = clamp(Number(state.rubbingInkStrength || 92), 10, 140) / 100;
  const lowThreshold = clamp(Number(state.rubbingLowThreshold || 8), 0, 100) / 100;
  const highThreshold = Math.max(lowThreshold, clamp(Number(state.rubbingHighThreshold || 55), 0, 100) / 100);
  const thresholdSpan = Math.max(0.0001, highThreshold - lowThreshold);
  const { prominence, maxProminence, radius } = computeRubbingProminence(heights, size, state.rubbingKernelRadius);
  const prominenceScale = Math.max(0.0001, maxProminence);
  const seed = hashStringToSeed(`${state.text}|${state.centerCell}|${size}|rubbing`);
  let inkedPixels = 0;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = y * size + x;
      const offset = index * 4;
      const fiber = (hashNoise2D(x, y, seed) - 0.5) * 10;
      const paperR = clamp(248 + fiber, 0, 255);
      const paperG = clamp(240 + fiber * 0.7, 0, 255);
      const paperB = clamp(222 + fiber * 0.45, 0, 255);
      const heightNorm = Math.max(0, Math.min(1, heights[index] / maxReliefHeight));
      const prominenceNorm = Math.max(0, Math.min(1, prominence[index] / prominenceScale));
      const thresholdedProminence =
        prominenceNorm <= lowThreshold
          ? 0
          : prominenceNorm >= highThreshold
            ? 1
            : smoothstep((prominenceNorm - lowThreshold) / thresholdSpan);
      const blot = weatheringNoise(x, y, size, seed + 30011);
      const ink = Math.max(
        0,
        Math.min(
          0.96,
          (Math.pow(thresholdedProminence, 0.72) * 0.94 + Math.pow(heightNorm, 1.7) * 0.1 * thresholdedProminence) *
            inkStrength *
            (0.82 + blot * 0.28),
        ),
      );

      if (ink > 0.02) inkedPixels += 1;
      imageData.data[offset] = Math.round(lerp(paperR, 164, ink));
      imageData.data[offset + 1] = Math.round(lerp(paperG, 22, ink));
      imageData.data[offset + 2] = Math.round(lerp(paperB, 24, ink));
      imageData.data[offset + 3] = 255;
    }
  }

  context.putImageData(imageData, 0, 0);
  return {
    canvas,
    radius,
    maxProminence,
    lowThreshold,
    highThreshold,
    inkedPixels,
  };
}

async function previewRubbing(options = {}) {
  const state = readState();
  const resolution = getExportResolution(state);
  if (!rubbingPreviewCanvas) return;
  if (!options.force && !rubbingPreviewDirty) {
    setPreviewViewport("rubbing", { generate: false });
    modeSummary.textContent = "已切换到红墨拓片预览。";
    return;
  }
  modeSummary.textContent = "正在生成红墨拓片...";

  try {
    const heightmap = await buildHeightmapCanvas(state, resolution);
    const rubbing = buildRubbingCanvasFromHeightmap(heightmap, state);
    rubbingPreviewCanvas.width = rubbing.canvas.width;
    rubbingPreviewCanvas.height = rubbing.canvas.height;
    const context = rubbingPreviewCanvas.getContext("2d");
    context.clearRect(0, 0, rubbingPreviewCanvas.width, rubbingPreviewCanvas.height);
    context.drawImage(rubbing.canvas, 0, 0);
    rubbingPreviewDirty = false;
    setPreviewViewport("rubbing", { generate: false });
    modeSummary.textContent = "已生成红墨拓片，可根据卷积核半径和红墨浓度继续调整。";
    logDebug("生成红墨拓片", {
      size: resolution,
      kernelRadius: rubbing.radius,
      inkStrength: state.rubbingInkStrength,
      lowThreshold: state.rubbingLowThreshold,
      highThreshold: state.rubbingHighThreshold,
      weatheringStrength: state.weatheringStrength,
      maxProminence: Number(rubbing.maxProminence.toFixed(4)),
      inkedPixels: rubbing.inkedPixels,
    });
  } catch (error) {
    modeSummary.textContent = "红墨拓片生成失败，请确认当前字体已解析为矢量轮廓。";
    logDebug("红墨拓片生成失败", { error: error.message });
  }
}

async function downloadRubbingPng() {
  const state = readState();
  const resolution = getExportResolution(state);
  modeSummary.textContent = "正在导出红墨拓片...";

  try {
    const heightmap = await buildHeightmapCanvas(state, resolution);
    const rubbing = buildRubbingCanvasFromHeightmap(heightmap, state);
    rubbing.canvas.toBlob((blob) => {
      if (!blob) {
        modeSummary.textContent = "红墨拓片导出失败。";
        return;
      }
      downloadBlob(blob, "ring-text-red-rubbing.png");
      modeSummary.textContent = "已导出红墨拓片。";
      logDebug("导出红墨拓片", {
        size: resolution,
        kernelRadius: rubbing.radius,
        inkStrength: state.rubbingInkStrength,
        lowThreshold: state.rubbingLowThreshold,
        highThreshold: state.rubbingHighThreshold,
        inkedPixels: rubbing.inkedPixels,
      });
    }, "image/png");
  } catch (error) {
    modeSummary.textContent = "红墨拓片导出失败，请确认当前字体已解析为矢量轮廓。";
    logDebug("导出红墨拓片失败", { error: error.message });
  }
}

async function downloadHeightmapPng() {
  const state = readState();
  const resolution = getExportResolution(state);
  modeSummary.textContent = "正在生成高度图...";

  try {
    const heightmap = await buildHeightmapCanvas(state, resolution);
    heightmap.canvas.toBlob((blob) => {
      if (!blob) {
        modeSummary.textContent = "二值高度图生成失败。";
        return;
      }
      downloadBlob(blob, "ring-text-heightmap.png");
      modeSummary.textContent = "已导出高度图。";
      logDebug("导出二值高度图", {
        size: resolution,
        internalSize: getHeightmapInternalResolution(resolution),
        components: Object.fromEntries(RELIEF_COMPONENTS.map((component) => [component.key, getReliefComponentSettings(state, component.key)])),
        weatheringStrength: state.weatheringStrength,
        glyphStrokeWidth: Number(state.glyphStrokeWidth.toFixed(2)),
        text: state.text,
      });
    }, "image/png");
  } catch (error) {
    modeSummary.textContent = "高度图导出失败，请确认当前字体已解析为矢量轮廓。";
    logDebug("导出二值高度图失败", { error: error.message });
  }
}

function buildReliefMeshFromHeightmap(heightmap, state) {
  const canvas = heightmap.canvas || heightmap;
  const { width, height } = canvas;
  const image = heightmap.heights
    ? null
    : canvas.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, width, height).data;
  const scale = 900 / (width - 1);
  const heightValue = getMaxReliefHeight(state);
  const baseThickness = Number(state.baseThickness) > 0 ? Number(state.baseThickness) : RELIEF_BASE_THICKNESS;
  const outerRadius = Math.max(1, Math.min(445, getEffectiveBaseOuterRadius(state)));
  const positions = [];
  const indices = [];
  const includeVertexColors = imageReliefState.active && imageReliefState.colorEnabled && Boolean(imageReliefState.colorField);
  const colors = includeVertexColors ? [] : null;
  const fallbackColor = [0.61, 0.58, 0.53];

  const addVertex = (x, y, z) => {
    const index = positions.length / 3;
    positions.push(x, y, z);
    if (colors) {
      const color = sampleImageReliefColorAtWorld(x, y, state) || fallbackColor;
      colors.push(color[0], color[1], color[2]);
    }
    return index;
  };

  const sampleGrayAtWorld = (worldX, worldY) => {
    const imageX = worldX / scale + (width - 1) / 2;
    const imageY = (height - 1) / 2 - worldY / scale;
    const x0 = Math.max(0, Math.min(width - 1, Math.floor(imageX)));
    const y0 = Math.max(0, Math.min(height - 1, Math.floor(imageY)));
    const x1 = Math.max(0, Math.min(width - 1, x0 + 1));
    const y1 = Math.max(0, Math.min(height - 1, y0 + 1));
    const tx = Math.max(0, Math.min(1, imageX - x0));
    const ty = Math.max(0, Math.min(1, imageY - y0));
    const getGray = (px, py) =>
      heightmap.heights
        ? heightmap.heights[py * width + px]
        : (image[(py * width + px) * 4] / 255) * heightValue;
    const g00 = getGray(x0, y0);
    const g10 = getGray(x1, y0);
    const g01 = getGray(x0, y1);
    const g11 = getGray(x1, y1);
    const top = g00 * (1 - tx) + g10 * tx;
    const bottom = g01 * (1 - tx) + g11 * tx;
    return top * (1 - ty) + bottom * ty;
  };
  const angularSegments = Math.max(192, Math.min(1600, Math.round(width * 0.75)));
  const radialSegments = Math.max(96, Math.min(700, Math.round(width * 0.35)));
  const topCenter = addVertex(0, 0, sampleGrayAtWorld(0, 0));
  const bottomCenter = addVertex(0, 0, -baseThickness);
  const topRings = [];

  for (let radialIndex = 1; radialIndex <= radialSegments; radialIndex += 1) {
    const radius = (outerRadius * radialIndex) / radialSegments;
    const ring = [];
    for (let angleIndex = 0; angleIndex < angularSegments; angleIndex += 1) {
      const angle = (angleIndex / angularSegments) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = sampleGrayAtWorld(x, y);
      ring.push(addVertex(x, y, z));
    }
    topRings.push(ring);
  }

  const firstRing = topRings[0];
  for (let angleIndex = 0; angleIndex < angularSegments; angleIndex += 1) {
    const next = (angleIndex + 1) % angularSegments;
    indices.push(topCenter, firstRing[angleIndex], firstRing[next]);
  }

  for (let radialIndex = 0; radialIndex < topRings.length - 1; radialIndex += 1) {
    const innerRing = topRings[radialIndex];
    const outerRing = topRings[radialIndex + 1];
    for (let angleIndex = 0; angleIndex < angularSegments; angleIndex += 1) {
      const next = (angleIndex + 1) % angularSegments;
      indices.push(innerRing[angleIndex], outerRing[angleIndex], innerRing[next]);
      indices.push(innerRing[next], outerRing[angleIndex], outerRing[next]);
    }
  }

  const topRing = topRings[topRings.length - 1];
  const bottomRing = [];
  for (let angleIndex = 0; angleIndex < angularSegments; angleIndex += 1) {
    const angle = (angleIndex / angularSegments) * Math.PI * 2;
    const x = Math.cos(angle) * outerRadius;
    const y = Math.sin(angle) * outerRadius;
    bottomRing.push(addVertex(x, y, -baseThickness));
  }

  for (let angleIndex = 0; angleIndex < angularSegments; angleIndex += 1) {
    const next = (angleIndex + 1) % angularSegments;
    indices.push(bottomCenter, bottomRing[next], bottomRing[angleIndex]);
    indices.push(topRing[angleIndex], bottomRing[angleIndex], topRing[next]);
    indices.push(topRing[next], bottomRing[angleIndex], bottomRing[next]);
  }

  const mesh = {
    positions,
    indices,
    heightValue,
    reliefComponents: Object.fromEntries(RELIEF_COMPONENTS.map((component) => [component.key, getReliefComponentSettings(state, component.key)])),
    glyphStrokeWidth: Number(state.glyphStrokeWidth || 0),
    baseThickness,
    outerRadius,
    angularSegments,
    radialSegments,
    vertices: positions.length / 3,
    faces: indices.length / 3,
  };
  if (colors) mesh.colors = colors;
  return mesh;
}

function heightmapCanvasToObj(canvas, state) {
  const target = canvas.canvas ? canvas.canvas : canvas;
  const mesh = buildReliefMeshFromHeightmap(canvas, state);
  const lines = [
    "# Watang relief OBJ test export",
    `# heightmap grid ${target.width} x ${target.height}`,
    `# max height ${mesh.heightValue}`,
    `# relief components ${JSON.stringify(mesh.reliefComponents)}`,
    `# glyph stroke width ${mesh.glyphStrokeWidth}`,
    `# base outer radius ${mesh.outerRadius}`,
    `# angular segments ${mesh.angularSegments}`,
    `# radial segments ${mesh.radialSegments}`,
    `# base thickness ${mesh.baseThickness}`,
  ];

  for (let index = 0; index < mesh.positions.length; index += 3) {
    lines.push(
      `v ${mesh.positions[index].toFixed(4)} ${mesh.positions[index + 1].toFixed(4)} ${mesh.positions[index + 2].toFixed(4)}`,
    );
  }

  for (let index = 0; index < mesh.indices.length; index += 3) {
    lines.push(`f ${mesh.indices[index] + 1} ${mesh.indices[index + 1] + 1} ${mesh.indices[index + 2] + 1}`);
  }

  return `${lines.join("\n")}\n`;
}

function computeTriangleNormal(ax, ay, az, bx, by, bz, cx, cy, cz) {
  const abx = bx - ax;
  const aby = by - ay;
  const abz = bz - az;
  const acx = cx - ax;
  const acy = cy - ay;
  const acz = cz - az;
  let nx = aby * acz - abz * acy;
  let ny = abz * acx - abx * acz;
  let nz = abx * acy - aby * acx;
  const length = Math.hypot(nx, ny, nz) || 1;
  nx /= length;
  ny /= length;
  nz /= length;
  return [nx, ny, nz];
}

function reliefMeshToAsciiStl(mesh, solidName = "watang_relief") {
  const lines = [`solid ${solidName}`];
  for (let index = 0; index < mesh.indices.length; index += 3) {
    const ia = mesh.indices[index] * 3;
    const ib = mesh.indices[index + 1] * 3;
    const ic = mesh.indices[index + 2] * 3;
    const ax = mesh.positions[ia];
    const ay = mesh.positions[ia + 1];
    const az = mesh.positions[ia + 2];
    const bx = mesh.positions[ib];
    const by = mesh.positions[ib + 1];
    const bz = mesh.positions[ib + 2];
    const cx = mesh.positions[ic];
    const cy = mesh.positions[ic + 1];
    const cz = mesh.positions[ic + 2];
    const [nx, ny, nz] = computeTriangleNormal(ax, ay, az, bx, by, bz, cx, cy, cz);
    lines.push(`  facet normal ${nx.toFixed(6)} ${ny.toFixed(6)} ${nz.toFixed(6)}`);
    lines.push("    outer loop");
    lines.push(`      vertex ${ax.toFixed(6)} ${ay.toFixed(6)} ${az.toFixed(6)}`);
    lines.push(`      vertex ${bx.toFixed(6)} ${by.toFixed(6)} ${bz.toFixed(6)}`);
    lines.push(`      vertex ${cx.toFixed(6)} ${cy.toFixed(6)} ${cz.toFixed(6)}`);
    lines.push("    endloop");
    lines.push("  endfacet");
  }
  lines.push(`endsolid ${solidName}`);
  return `${lines.join("\n")}\n`;
}

// 二进制 STL：80 字节头 + 4 字节三角数 + 每面 50 字节（法线12 + 3顶点36 + 属性2）。
// scale 用于把画板单位统一缩放到目标物理尺寸（mm）。
function reliefMeshToBinaryStl(mesh, scale = 1) {
  const triangleCount = mesh.indices.length / 3;
  const buffer = new ArrayBuffer(84 + triangleCount * 50);
  const view = new DataView(buffer);
  view.setUint32(80, triangleCount, true);
  let offset = 84;
  for (let index = 0; index < mesh.indices.length; index += 3) {
    const ia = mesh.indices[index] * 3;
    const ib = mesh.indices[index + 1] * 3;
    const ic = mesh.indices[index + 2] * 3;
    const ax = mesh.positions[ia] * scale;
    const ay = mesh.positions[ia + 1] * scale;
    const az = mesh.positions[ia + 2] * scale;
    const bx = mesh.positions[ib] * scale;
    const by = mesh.positions[ib + 1] * scale;
    const bz = mesh.positions[ib + 2] * scale;
    const cx = mesh.positions[ic] * scale;
    const cy = mesh.positions[ic + 1] * scale;
    const cz = mesh.positions[ic + 2] * scale;
    const [nx, ny, nz] = computeTriangleNormal(ax, ay, az, bx, by, bz, cx, cy, cz);
    view.setFloat32(offset, nx, true);
    view.setFloat32(offset + 4, ny, true);
    view.setFloat32(offset + 8, nz, true);
    view.setFloat32(offset + 12, ax, true);
    view.setFloat32(offset + 16, ay, true);
    view.setFloat32(offset + 20, az, true);
    view.setFloat32(offset + 24, bx, true);
    view.setFloat32(offset + 28, by, true);
    view.setFloat32(offset + 32, bz, true);
    view.setFloat32(offset + 36, cx, true);
    view.setFloat32(offset + 40, cy, true);
    view.setFloat32(offset + 44, cz, true);
    view.setUint16(offset + 48, 0, true);
    offset += 50;
  }
  return buffer;
}

// 目标直径(mm) > 0 时，把画板坐标统一缩放到真实物理尺寸；否则保持画板尺度。
function getExportScale(state, mesh) {
  const diameterMm = Number(state.exportDiameterMm) || 0;
  if (diameterMm <= 0) return 1;
  const baseOuter = mesh?.outerRadius || getEffectiveBaseOuterRadius(state);
  if (!(baseOuter > 0)) return 1;
  return diameterMm / (2 * baseOuter);
}

async function downloadReliefObj() {
  const state = readState();
  const resolution = getExportResolution(state);
  modeSummary.textContent = "正在生成 3D 浮雕测试 OBJ...";

  try {
    const heightmap = await buildHeightmapCanvas(state, resolution);
    const obj = heightmapCanvasToObj(heightmap, state);
    downloadBlob(new Blob([obj], { type: "text/plain;charset=utf-8" }), "ring-text-relief-test.obj");
    modeSummary.textContent = "已导出 3D 浮雕测试 OBJ。";
    const mesh = buildReliefMeshFromHeightmap(heightmap, state);
    logDebug("导出 3D 浮雕测试", {
      meshSize: resolution,
      internalSize: getHeightmapInternalResolution(resolution),
      height: mesh.heightValue,
      components: mesh.reliefComponents,
      glyphStrokeWidth: mesh.glyphStrokeWidth,
      baseThickness: RELIEF_BASE_THICKNESS,
      outerRadius: Number(mesh.outerRadius.toFixed(2)),
      vertices: mesh.vertices,
      faces: mesh.faces,
    });
  } catch (error) {
    modeSummary.textContent = "3D 浮雕测试导出失败，请确认当前字体已解析为矢量轮廓。";
    logDebug("3D 浮雕测试导出失败", { error: error.message });
  }
}

async function downloadReliefStl() {
  const state = readState();
  const resolution = getExportResolution(state);
  modeSummary.textContent = "正在生成 STL...";

  try {
    const heightmap = await buildHeightmapCanvas(state, resolution);
    const mesh = buildReliefMeshFromHeightmap(heightmap, state);
    const exportScale = getExportScale(state, mesh);
    const stl = reliefMeshToBinaryStl(mesh, exportScale);
    downloadBlob(new Blob([stl], { type: "model/stl" }), "ring-text-relief.stl");
    const diameterMm = Number(state.exportDiameterMm) || 0;
    modeSummary.textContent = diameterMm > 0 ? `已导出二进制 STL（直径 ${diameterMm}mm）。` : "已导出二进制 STL。";
    logDebug("导出 STL", {
      format: "binary",
      meshSize: resolution,
      internalSize: getHeightmapInternalResolution(resolution),
      height: mesh.heightValue,
      components: mesh.reliefComponents,
      glyphStrokeWidth: mesh.glyphStrokeWidth,
      baseThickness: mesh.baseThickness,
      exportScale: Number(exportScale.toFixed(4)),
      diameterMm,
      outerRadius: Number(mesh.outerRadius.toFixed(2)),
      angularSegments: mesh.angularSegments,
      radialSegments: mesh.radialSegments,
      vertices: mesh.vertices,
      faces: mesh.faces,
    });
  } catch (error) {
    modeSummary.textContent = "STL 导出失败，请确认当前字体已解析为矢量轮廓。";
    logDebug("导出 STL 失败", { error: error.message });
  }
}

async function loadThreePreviewModules() {
  if (reliefPreview.three) return reliefPreview.three;
  const [threeModule, controlsModule] = await Promise.all([
    import(THREE_MODULE_URL),
    import(THREE_ORBIT_CONTROLS_URL),
  ]);
  reliefPreview.three = {
    THREE: threeModule,
    OrbitControls: controlsModule.OrbitControls,
  };
  return reliefPreview.three;
}

function resizeThreePreview() {
  if (!reliefPreview.renderer || !reliefPreview.camera || !reliefPreviewCanvas) return;
  const rect = reliefPreviewCanvas.getBoundingClientRect();
  const width = Math.max(320, Math.round(rect.width));
  const height = Math.max(260, Math.round(rect.height));
  reliefPreview.renderer.setPixelRatio(Math.min(2.5, window.devicePixelRatio || 1));
  reliefPreview.renderer.setSize(width, height, false);
  reliefPreview.camera.aspect = width / height;
  reliefPreview.camera.updateProjectionMatrix();
}

function fitReliefPreviewCamera(mesh = reliefPreview.mesh, preview = reliefPreview) {
  if (!mesh || !preview.camera || !preview.controls) return;
  const { THREE } = preview.three;
  const camera = preview.camera;
  const controls = preview.controls;
  const radius = Math.max(260, Number(mesh.outerRadius || 445));
  const targetZ = Math.max(8, Math.min(42, Number(mesh.heightValue || 24) * 0.42));
  const verticalFov = THREE.MathUtils.degToRad(camera.fov);
  const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * Math.max(0.1, camera.aspect));
  const fittingFov = Math.max(0.12, Math.min(verticalFov, horizontalFov));
  const margin = document.body.classList.contains("simplified-ui") ? 1.18 : 1.08;
  const distance = clamp((radius * margin) / Math.sin(fittingFov / 2), 760, 4200);
  const target = new THREE.Vector3(0, 0, targetZ);
  const direction = new THREE.Vector3(0.42, -0.75, 0.51).normalize();

  controls.target.copy(target);
  camera.position.copy(target).addScaledVector(direction, distance);
  camera.near = Math.max(1, distance - radius * 3.2);
  camera.far = distance + radius * 4.2;
  camera.lookAt(target);
  camera.updateProjectionMatrix();
  controls.minDistance = Math.max(180, distance * 0.26);
  controls.maxDistance = Math.max(1600, distance * 1.9);
  controls.update();
}

function configurePreviewTexture(texture, THREE, options = {}) {
  if (!texture) return texture;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(options.repeatX || 2.2, options.repeatY || 2.2);
  if (options.colorSpace) texture.colorSpace = options.colorSpace;
  return texture;
}

async function loadPreviewTexture(loader, url) {
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });
}

async function ensureThreePreview() {
  const { THREE, OrbitControls } = await loadThreePreviewModules();
  if (reliefPreview.renderer) {
    resizeThreePreview();
    return reliefPreview;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const camera = new THREE.PerspectiveCamera(38, 1, 1, 3600);
  camera.position.set(430, -760, 540);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: reliefPreviewCanvas,
    antialias: true,
    alpha: false,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.96;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const controls = new OrbitControls(camera, reliefPreviewCanvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.target.set(0, 0, 8);
  controls.minDistance = 460;
  controls.maxDistance = 1600;
  controls.maxPolarAngle = Math.PI * 0.49;

  scene.add(new THREE.HemisphereLight(0xe9e2d6, 0x6b6258, 0.34));
  const keyLight = new THREE.DirectionalLight(0xf9f2e6, 2.7);
  keyLight.position.set(-260, -420, 680);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  keyLight.shadow.camera.left = -560;
  keyLight.shadow.camera.right = 560;
  keyLight.shadow.camera.top = 560;
  keyLight.shadow.camera.bottom = -560;
  keyLight.shadow.camera.near = 80;
  keyLight.shadow.camera.far = 1400;
  keyLight.shadow.bias = -0.00008;
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0xcfd7df, 0.2);
  fillLight.position.set(460, 280, 180);
  scene.add(fillLight);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(620, 96),
    new THREE.ShadowMaterial({ color: 0x49372a, opacity: 0.16 }),
  );
  floor.position.z = -RELIEF_BASE_THICKNESS - 3.2;
  floor.receiveShadow = true;
  scene.add(floor);

  Object.assign(reliefPreview, { scene, camera, renderer, controls, floor });
  resizeThreePreview();
  return reliefPreview;
}

async function ensureThreePreviewAssets() {
  const preview = await ensureThreePreview();
  if (preview.clayTextures && preview.environmentMap) return preview;
  if (preview.assetsPromise) return preview.assetsPromise;

  const { THREE } = preview.three;
  const textureLoader = new THREE.TextureLoader();
  const pmremGenerator = new THREE.PMREMGenerator(preview.renderer);
  pmremGenerator.compileEquirectangularShader();

  preview.assetsPromise = Promise.all([
    loadPreviewTexture(textureLoader, STUDIO_ENVIRONMENT_URL),
    loadPreviewTexture(textureLoader, CLAY_TEXTURES.color),
    loadPreviewTexture(textureLoader, CLAY_TEXTURES.ao),
    loadPreviewTexture(textureLoader, CLAY_TEXTURES.roughness),
    loadPreviewTexture(textureLoader, CLAY_TEXTURES.normal),
    loadPreviewTexture(textureLoader, CLAY_TEXTURES.bump),
  ])
    .then(([environmentTexture, colorTexture, aoTexture, roughnessTexture, normalTexture, bumpTexture]) => {
      environmentTexture.mapping = THREE.EquirectangularReflectionMapping;
      environmentTexture.colorSpace = THREE.SRGBColorSpace;
      const environmentMap = pmremGenerator.fromEquirectangular(environmentTexture).texture;
      preview.scene.environment = environmentMap;
      preview.environmentMap = environmentMap;
      preview.clayTextures = {
        color: configurePreviewTexture(colorTexture, THREE, { colorSpace: THREE.SRGBColorSpace }),
        ao: configurePreviewTexture(aoTexture, THREE),
        roughness: configurePreviewTexture(roughnessTexture, THREE),
        normal: configurePreviewTexture(normalTexture, THREE),
        bump: configurePreviewTexture(bumpTexture, THREE),
      };
      pmremGenerator.dispose();
      return preview;
    })
    .finally(() => {
      preview.assetsPromise = null;
    });

  return preview.assetsPromise;
}

function reliefMeshToThreeGeometry(mesh, THREE) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(mesh.positions.length);
  const uvs = new Float32Array((mesh.positions.length / 3) * 2);
  const hasVertexColors = Array.isArray(mesh.colors) && mesh.colors.length === mesh.positions.length;
  const colors = hasVertexColors ? new Float32Array(mesh.colors.length) : null;
  const textureRadius = Math.max(1, mesh.outerRadius * 0.75);
  for (let index = 0; index < mesh.positions.length; index += 3) {
    const x = mesh.positions[index];
    const y = mesh.positions[index + 1];
    positions[index] = x;
    positions[index + 1] = y;
    positions[index + 2] = mesh.positions[index + 2];
    if (colors) {
      colors[index] = mesh.colors[index];
      colors[index + 1] = mesh.colors[index + 1];
      colors[index + 2] = mesh.colors[index + 2];
    }
    const uvIndex = (index / 3) * 2;
    uvs[uvIndex] = x / (textureRadius * 2) + 0.5;
    uvs[uvIndex + 1] = y / (textureRadius * 2) + 0.5;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  if (colors) geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geometry.setAttribute("uv2", new THREE.BufferAttribute(uvs.slice(), 2));
  geometry.setIndex(mesh.indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function updateThreeReliefMesh(mesh, preview) {
  const { THREE } = reliefPreview.three;
  if (reliefPreview.meshObject) {
    reliefPreview.scene.remove(reliefPreview.meshObject);
    reliefPreview.meshObject.geometry.dispose();
    reliefPreview.meshObject.material.dispose();
  }

  const geometry = reliefMeshToThreeGeometry(mesh, THREE);
  const hasVertexColors = Boolean(geometry.getAttribute("color"));
  const material = new THREE.MeshStandardMaterial({
    color: hasVertexColors ? 0xffffff : 0x9c9488,
    vertexColors: hasVertexColors,
    aoMap: preview.clayTextures?.ao || null,
    roughnessMap: preview.clayTextures?.roughness || null,
    normalMap: preview.clayTextures?.normal || null,
    bumpMap: preview.clayTextures?.bump || null,
    bumpScale: 1.8,
    roughness: 1,
    metalness: 0.02,
    envMapIntensity: 0.12,
    side: THREE.DoubleSide,
  });
  const object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  object.receiveShadow = true;
  reliefPreview.scene.add(object);
  reliefPreview.meshObject = object;
  if (reliefPreview.floor) {
    const baseThickness = Number(mesh.baseThickness) > 0 ? Number(mesh.baseThickness) : RELIEF_BASE_THICKNESS;
    reliefPreview.floor.position.z = -baseThickness - 3.2;
  }
}

function renderThreePreviewFrame() {
  if (!reliefPreview.renderer || !reliefPreview.scene || !reliefPreview.camera) return;
  reliefPreview.controls.update();
  reliefPreview.renderer.render(reliefPreview.scene, reliefPreview.camera);
  reliefPreview.animationFrame = requestAnimationFrame(renderThreePreviewFrame);
}

function startThreePreviewLoop() {
  if (reliefPreview.animationFrame) return;
  renderThreePreviewFrame();
}

async function previewReliefModel(options = {}) {
  const state = readState();
  const resolution = getExportResolution(state);
  if (!options.force && !reliefPreviewDirty && reliefPreview.meshObject) {
    setPreviewViewport("relief", { generate: false });
    modeSummary.textContent = "已切换到 3D 预览。";
    return;
  }
  modeSummary.textContent = "正在生成浏览器内 3D 预览...";

  try {
    const heightmap = await buildHeightmapCanvas(state, resolution);
    const preview = await ensureThreePreviewAssets();
    const mesh = buildReliefMeshFromHeightmap(heightmap, state);
    reliefPreview.mesh = mesh;
    // 先让 3D 视窗可见，再测量尺寸，否则隐藏时 getBoundingClientRect 为 0 会被钳到最小值导致拉伸。
    setPreviewViewport("relief", { generate: false });
    resizeThreePreview();
    updateThreeReliefMesh(mesh, preview);
    fitReliefPreviewCamera(mesh, preview);
    startThreePreviewLoop();
    reliefPreviewDirty = false;
    modeSummary.textContent = "已生成 Three.js 3D 浮雕预览，可拖动旋转、滚轮缩放。";
    logDebug("生成 3D 预览", {
      meshSize: resolution,
      internalSize: getHeightmapInternalResolution(resolution),
      baseThickness: RELIEF_BASE_THICKNESS,
      height: mesh.heightValue,
      components: mesh.reliefComponents,
      glyphStrokeWidth: mesh.glyphStrokeWidth,
      renderer: "Three.js",
      outerRadius: Number(mesh.outerRadius.toFixed(2)),
      vertices: mesh.vertices,
      faces: mesh.faces,
    });
  } catch (error) {
    modeSummary.textContent = "3D 预览生成失败，请确认网络可加载 Three.js，且当前字体已解析为矢量轮廓。";
    logDebug("3D 预览生成失败", { error: error.message });
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

async function importFontFile(event) {
  const [file] = event.target.files;
  if (!file) return;

  const extension = file.name.split(".").pop().toLowerCase();
  if (!["ttf", "otf"].includes(extension)) {
    fontStatus.textContent = "请选择 TTF 或含 glyf 轮廓的 OTF 字体文件。";
    event.target.value = "";
    return;
  }

  const label = file.name.replace(/\.[^.]+$/, "");
  const key = `ImportedFont_${Date.now()}`;
  const familyName = `Imported Font ${Date.now()}`;
  const dataUrl = await readFileAsDataUrl(file);
  const arrayBuffer = await file.arrayBuffer();
  const formatMap = {
    ttf: "truetype",
    otf: "opentype",
  };

  try {
    const parsed = parseTtfFont(arrayBuffer);
    const face = new FontFace(familyName, `url(${dataUrl})`);
    await face.load();
    document.fonts.add(face);

    const option = document.createElement("option");
    option.value = key;
    option.textContent = label;
    controls.fontFamily.appendChild(option);

    FONT_REGISTRY.set(key, {
      label,
      familyName,
      family: `"${familyName}", "PingFang SC", "Microsoft YaHei", sans-serif`,
      source: dataUrl,
      format: formatMap[extension],
      parsed,
    });

    controls.fontFamily.value = key;
    fontStatus.textContent = `已导入 ${file.name}`;
    render();
  } catch (error) {
    fontStatus.textContent = `无法解析 ${file.name}，请使用 TTF 或含 glyf 轮廓的 OTF 字体。`;
  } finally {
    event.target.value = "";
  }
}

async function parseRegisteredFont(fontKey, options = {}) {
  const font = FONT_REGISTRY.get(fontKey);
  if (!font || font.parsed) return Boolean(font && font.parsed);
  if (!font.source) return false;

  try {
    const response = await fetch(font.source);
    if (!response.ok) throw new Error("字体文件读取失败");
    font.parsed = parseTtfFont(await response.arrayBuffer());
    fontStatus.textContent = `已解析 ${font.label} 矢量轮廓`;
    logDebug("字体解析成功", { fontKey, label: font.label });
    if (options.render !== false) render();
    return true;
  } catch (error) {
    fontStatus.textContent = `无法解析 ${font.label}。请确认字体文件可访问，且为含 glyf 轮廓的 TTF。`;
    logDebug("字体解析失败", { fontKey, label: font.label, error: error.message });
    return false;
  }
}

async function loadBundledFont(options = {}) {
  return parseRegisteredFont(DEFAULT_FONT_KEY, options);
}

async function ensureSelectedFontParsed(options = {}) {
  const font = FONT_REGISTRY.get(controls.fontFamily.value);
  if (font && font.parsed) return true;
  return parseRegisteredFont(controls.fontFamily.value, options);
}

async function applyFontKey(fontKey, options = {}) {
  if (!FONT_REGISTRY.has(fontKey)) return false;
  controls.fontFamily.value = fontKey;
  const ready = await ensureSelectedFontParsed({ render: false });
  if (ready && options.render !== false) render();
  return ready;
}

function toggleSecretSealFont() {
  secretFontUnlocked = !secretFontUnlocked;
  const secretOption = controls.fontFamily?.querySelector(`option[value="${SECRET_FONT_KEY}"]`);
  if (secretOption) secretOption.hidden = !secretFontUnlocked;
  const nextFont = secretFontUnlocked ? SECRET_FONT_KEY : DEFAULT_FONT_KEY;
  fontStatus.textContent = secretFontUnlocked
    ? "彩蛋已触发：汉仪篆书繁"
    : "已切回汇文明朝体";
  applyFontKey(nextFont).catch((error) => {
    fontStatus.textContent = `字体切换失败：${error.message || error}`;
    logDebug("彩蛋字体切换失败", { error: error.message || String(error) });
  });
}

function handleSecretFontTap(event) {
  const now = performance.now();
  if (now - lastSecretFontTapAt < 24) return;
  lastSecretFontTapAt = now;
  secretFontTapTimes = secretFontTapTimes.filter((time) => now - time <= SECRET_FONT_TAP_WINDOW_MS);
  secretFontTapTimes.push(now);
  if (secretFontTapTimes.length < SECRET_FONT_TAP_COUNT) return;
  secretFontTapTimes = [];
  toggleSecretSealFont();
}

async function loadDefaultLayout(options = {}) {
  for (const url of DEFAULT_LAYOUT_URL_CANDIDATES) {
    try {
      await applyLayoutFromUrl(url, url.replace(/^\.\.\//, ""), { render: false });
      fontStatus.textContent = `已加载默认配置 ${url}`;
      logDebug("默认配置加载成功", {
        file: url,
        text: controls.sourceText.value,
        startAngle: Number(controls.startAngle.value),
        rotationAngle: Number(controls.rotationAngle.value),
      });
      if (options.render !== false) render();
      return true;
    } catch (error) {
      logDebug("默认配置候选加载失败", { file: url, error: error.message });
    }
  }

  fontStatus.textContent = "未能加载默认配置，已使用页面内置参数。";
  logDebug("默认配置加载失败", { candidates: DEFAULT_LAYOUT_URL_CANDIDATES });
  return false;
}

Object.values(controls).forEach((control) => {
  if (!control) return;
  if (Array.isArray(control)) {
    control.forEach((input) => input.addEventListener("change", render));
    return;
  }

  if (
    control.id === "sourceText" ||
    control.id === "cellInputs" ||
    control.id === "gridCount" ||
    control.id === "downloadSvg" ||
    control.id === "downloadGrayscale" ||
    control.id === "downloadReliefObj" ||
    control.id === "downloadReliefStl" ||
    control.id === "resultExportStl" ||
    control.id === "resultPublish" ||
    control.id === "publishWadang4" ||
    control.id === "renderRubbing" ||
    control.id === "downloadRubbing" ||
    control.id === "previewRelief" ||
    control.id === "loadLayout" ||
    control.id === "layoutPresetSelect" ||
    control.id === "refreshLayouts" ||
    control.id === "autoMatchText" ||
    control.id === "autoMatchLayout" ||
    control.id === "layoutFile" ||
    control.id === "saveLayoutAs" ||
    control.id === "fontFile" ||
    control.id === "autoRing" ||
    control.id === "smartBalance" ||
    control.id === "centerRing" ||
    control.id === "clearLog" ||
    control.id === "rotationAngle" ||
    control.id === "saveLayout"
  ) {
    return;
  }
  control.addEventListener("input", render);
  control.addEventListener("change", render);
});

previewViewports.forEach((input) => {
  input.addEventListener("change", () => {
    if (!input.checked) return;
    setPreviewViewport(input.value);
  });
});
controls.downloadSvg?.addEventListener("click", downloadSvg);
controls.downloadGrayscale?.addEventListener("click", downloadHeightmapPng);
controls.downloadReliefObj?.addEventListener("click", downloadReliefObj);
controls.downloadReliefStl?.addEventListener("click", downloadReliefStl);
controls.resultExportStl?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  downloadReliefStl().catch((error) => {
    logDebug("游客本地 STL 保存失败", { error: error.message });
  });
});
controls.resultPublish?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  openPublishMessagePage();
});
publishMessageBack?.addEventListener("click", closePublishMessagePage);
publishMessageAi?.addEventListener("click", polishPublishMessage);
publishMessageConfirm?.addEventListener("click", confirmPublishWithMessage);
reserveMakingBack?.addEventListener("click", closeReserveMakingPage);
reserveMakingConfirm?.addEventListener("click", reserveCurrentWadangMaking);
controls.publishWadang4?.addEventListener("click", publishCurrentWadangToShowcase);
controls.renderRubbing?.addEventListener("click", () => previewRubbing({ force: true }));
controls.downloadRubbing?.addEventListener("click", downloadRubbingPng);
controls.previewRelief?.addEventListener("click", previewReliefModel);
controls.loadLayout?.addEventListener("click", () => controls.layoutFile?.click());
controls.layoutPresetSelect?.addEventListener("change", handleLayoutPresetChange);
controls.refreshLayouts?.addEventListener("click", () => {
  refreshLayoutPresetList(controls.layoutPresetSelect?.value || "");
});
controls.autoMatchLayout?.addEventListener("click", () => {
  runAutoMatcher().catch((error) => {
    modeSummary.textContent = "自动匹配失败，请检查配置与输入文字。";
    logDebug("自动匹配异常", { error: error.message });
  });
});
controls.autoMatchText?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  runAutoMatcher().catch((error) => {
    modeSummary.textContent = "自动匹配失败，请检查配置与输入文字。";
    logDebug("自动匹配异常", { error: error.message });
  });
});
simpleAutoMatchLayout?.addEventListener("click", () => {
  runAutoMatcher(simpleAutoMatchText?.value || "").catch((error) => {
    modeSummary.textContent = "自动匹配失败，请检查配置与输入文字。";
    logDebug("自动匹配异常", { error: error.message });
  });
});
simpleAutoMatchText?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  runAutoMatcher(simpleAutoMatchText.value).catch((error) => {
    modeSummary.textContent = "自动匹配失败，请检查配置与输入文字。";
    logDebug("自动匹配异常", { error: error.message });
  });
});
controls.layoutFile?.addEventListener("change", loadLayoutFromFile);
controls.saveLayoutAs?.addEventListener("click", () => downloadLayoutSnapshot());
controls.saveLayout?.addEventListener("click", saveCurrentLayout);
controls.fontFile?.addEventListener("change", importFontFile);
window.addEventListener("pointerdown", handleSecretFontTap, { capture: true, passive: true });
window.addEventListener("mousedown", handleSecretFontTap, { capture: true, passive: true });
window.addEventListener("touchstart", handleSecretFontTap, { capture: true, passive: true });
controls.autoRing?.addEventListener("click", autoFitSingleRing);
controls.smartBalance?.addEventListener("click", smartBalanceCellScales);
controls.outerPatternType?.addEventListener("change", enforceEvenOuterPatternAngleDivisions);
controls.centerDecorationMode?.addEventListener("change", () => {
  updateDecorationControlState();
  buildCellInputs();
  render();
});
controls.surroundDecorationMode?.addEventListener("change", updateDecorationControlState);
controls.centerNailBoundaryEnabled?.addEventListener("change", updateDecorationControlState);
controls.innerOuterBorderEnabled?.addEventListener("change", updateBoundaryControlState);
controls.surroundPatternType?.addEventListener("change", enforceEvenSurroundPatternAngleDivisions);
controls.outerPatternAngleDivisions?.addEventListener("input", enforceEvenOuterPatternAngleDivisions);
controls.surroundPatternAngleDivisions?.addEventListener("input", enforceEvenSurroundPatternAngleDivisions);
updateDecorationControlState();
updateBoundaryControlState();
controls.gridCount?.addEventListener("input", () => {
  buildCellInputs();
  render();
});
controls.gridCount?.addEventListener("change", () => {
  buildCellInputs();
  render();
});
controls.clearLog?.addEventListener("click", () => {
  debugLog.textContent = "";
  logDebug("日志已清空");
});
controls.centerRing?.addEventListener("click", () => {
  logDebug("点击居中按钮");
  const result = centerFirstDividerAtTop();
  if (result) {
    modeSummary.textContent = `已将红色箭头从 ${result.previousAngle.toFixed(2)}° 修正 ${result.correction.toFixed(2)}° 到 360°，旋转角已归零。`;
  }
});
controls.rotationAngle?.addEventListener("input", () => {
  applyRotationAngleChange();
  render();
});
controls.rotationAngle?.addEventListener("change", () => {
  applyRotationAngleChange();
  render();
});

if (reliefPreviewCanvas) {
  window.addEventListener("resize", () => {
    if (reliefPreview.renderer && activePreviewViewport === "relief") resizeThreePreview();
  });
}

// 图片浮雕（debug）控件绑定
imageReliefControls.file?.addEventListener("change", (event) => {
  handleImageReliefFile(event.target.files?.[0]).catch((error) => {
    setImageReliefStatus(`图片读取失败：${error.message}`);
  });
});
[imageReliefControls.depthWeight, imageReliefControls.detailWeight, imageReliefControls.smooth].forEach((input) => {
  input?.addEventListener("input", updateImageReliefLabels);
  input?.addEventListener("change", () => {
    if (imageReliefState.dataUrl) regenerateImageRelief();
  });
});
imageReliefControls.clear?.addEventListener("click", clearImageRelief);
updateImageReliefLabels();

// 供准备流程（prep-flow.js）在「制作」一步调用：触发生成并返回完成 Promise。
window.WadangCreate = {
  async fromText(text) {
    imageReliefState.active = false;
    imageReliefState.field = null;
    imageReliefState.colorEnabled = false;
    imageReliefState.colorField = null;
    imageReliefState.dataUrl = "";
    if (text) controls.autoMatchText.value = text;
    await runAutoMatcher();
  },
  fromImageDataUrl() {
    return Promise.reject(new Error("文字版服务已禁用图片浮雕功能"));
  },
};

window.WatangDesigner = {
  getState: readState,
  getReliefModel() {
    return buildWatangReliefModel(readState());
  },
};

async function runInspectReport() {
  const state = readState();
  const debugResolution = 1080;
  const heightmap = await buildHeightmapCanvas(state, debugResolution);
  publishInspectStats(heightmap.debug);
}

async function initializeApp() {
  modeSummary.textContent = "正在加载默认配置并解析字体轮廓...";
  setPreviewViewport(document.body.classList.contains("simplified-ui") ? "relief" : "flat", { generate: false });
  loadNetworkShareInfo();
  const items = await refreshLayoutPresetList();
  await loadDefaultLayout({ render: false });
  if (controls.layoutPresetSelect && !controls.layoutPresetSelect.value) {
    const defaultItem = items.find((item) => item.isDefault) || items[0];
    if (defaultItem) controls.layoutPresetSelect.value = defaultItem.url;
  }
  if (INSPECT_MODE && Number.isFinite(INSPECT_SILHOUETTE_WIDTH)) {
    controls.glyphStrokeWidth.value = String(
      clamp(INSPECT_SILHOUETTE_WIDTH, LIMITS.glyphStrokeWidth.min, LIMITS.glyphStrokeWidth.max),
    );
  }
  if (!FONT_REGISTRY.has(controls.fontFamily.value)) {
    controls.fontFamily.value = DEFAULT_FONT_KEY;
  }
  const fontReady = await ensureSelectedFontParsed({ render: false });
  if (!fontReady) {
    render();
    return;
  }
  render();
  if (activePreviewViewport === "relief") {
    previewReliefModel({ force: true }).catch((error) => {
      logDebug("初始化 3D 视窗失败", { error: error.message });
    });
  }
  if (INSPECT_MODE) {
    runInspectReport().catch((error) => {
      let node = document.querySelector("#inspectStats");
      if (!node) {
        node = document.createElement("pre");
        node.id = "inspectStats";
        node.hidden = true;
        document.body.appendChild(node);
      }
      node.textContent = JSON.stringify({ error: error.message });
    });
  }
  document.fonts.ready.then(render);
}

initializeApp();
