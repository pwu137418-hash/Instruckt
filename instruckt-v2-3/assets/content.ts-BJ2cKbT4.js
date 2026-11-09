(function(){const S=["zh-CN","en","ja"];function re(i){return i==="zh-CN"||i==="en"||i==="ja"}function J(i){switch(i){case"zh-CN":return"简体中文";case"en":return"English";case"ja":return"日本語"}}const ae={"zh-CN":{annotate:i=>`标注元素 (${i})`,freeze:i=>`冻结页面动画 (${i})`,clearPage:i=>`清除本页标注 (${i})`,settingsBrandName:"Red-instruckt",panelTitle:"Red-instruckt",settingsPanelAria:"Red-instruckt 设置",panelCloseAria:"关闭设置",dragHandleAria:"拖动以移动工具栏",copyTooltip:"复制为 Markdown",clearAllTooltip:"删除所有标注。",settingsTooltip:"设置",minimizeTooltip:"收起工具栏",fabTitle:"打开 instruckt 工具栏",fabAria:"打开 instruckt 工具栏",outputFormatTitle:"输出详略",outputFormatHelp:`复制为 Markdown 时包含多少上下文。

• 简洁 — 最少字段，适合快速修改。
• 标准 — 元素、路径、来源、类名、附近文本、严重程度。
• 详细 — 增加边界框与更丰富的上下文。
• 取证 — 增加稳定 ID、完整组件栈与实时计算样式快照。

点击右侧当前值可循环切换格式。`,outputHelpAria:"关于输出详略",outputCycleAria:"切换输出详略",markerColorTitle:"标记颜色",languageTitle:"界面语言",languageHelp:`控制工具栏、设置面板与新建/编辑标注弹窗的显示语言。

点击右侧可在 简体中文、English、日本語 之间循环切换。`,languageHelpAria:"关于界面语言",languageCycleAria:"切换界面语言",formatLabel:{compact:"简洁",standard:"标准",detailed:"详细",forensic:"取证"},markerCurrentPage:"当前页面",markerAll:"全部标记"},en:{annotate:i=>`Annotate elements (${i})`,freeze:i=>`Freeze page (${i})`,clearPage:i=>`Clear this page (${i})`,settingsBrandName:"Red-instruckt",panelTitle:"Red-instruckt",settingsPanelAria:"Red-instruckt settings",panelCloseAria:"Close settings",dragHandleAria:"Drag to reposition toolbar",copyTooltip:"Copy annotations as markdown",clearAllTooltip:"Delete all instructions.",settingsTooltip:"Settings",minimizeTooltip:"Minimize toolbar",fabTitle:"Open instruckt toolbar",fabAria:"Open instruckt toolbar",outputFormatTitle:"Output detail",outputFormatHelp:`How much context is included when you copy annotations as Markdown for AI agents.

• Compact — minimal fields for quick fixes.
• Standard — element, path, source, classes, nearby text, severity.
• Detailed — adds bounding-box position and richer context.
• Forensic — adds stable ID, full component stack, and a live computed-style snapshot.

Click the value on the right to cycle through formats in order.`,outputHelpAria:"About output detail",outputCycleAria:"Change output detail",markerColorTitle:"Marker color",languageTitle:"Language",languageHelp:`Controls the display language for the toolbar, settings panel, and new/edit annotation popups.

Click the value on the right to cycle: 简体中文 → English → 日本語.`,languageHelpAria:"About interface language",languageCycleAria:"Change interface language",formatLabel:{compact:"Compact",standard:"Standard",detailed:"Detailed",forensic:"Forensic"},markerCurrentPage:"Current page",markerAll:"All markers"},ja:{annotate:i=>`要素に注釈 (${i})`,freeze:i=>`ページのアニメーションを停止 (${i})`,clearPage:i=>`このページの注釈を消去 (${i})`,settingsBrandName:"Red-instruckt",panelTitle:"Red-instruckt",settingsPanelAria:"Red-instruckt 設定",panelCloseAria:"設定を閉じる",dragHandleAria:"ドラッグしてツールバーを移動",copyTooltip:"Markdown としてコピー",clearAllTooltip:"すべての指示を削除。",settingsTooltip:"設定",minimizeTooltip:"ツールバーを最小化",fabTitle:"instruckt ツールバーを開く",fabAria:"instruckt ツールバーを開く",outputFormatTitle:"出力の詳しさ",outputFormatHelp:`注釈を AI 向け Markdown でコピーするときに含める文脈の量。

• コンパクト — 最小限のフィールドで素早く修正。
• 標準 — 要素、パス、ソース、クラス、周辺テキスト、重要度。
• 詳細 — バウンディングボックス位置などより豊富な文脈。
• フォレンジック — 安定 ID、完全なコンポーネントスタック、計算済みスタイルのスナップショット。

右側の値をクリックして順に切り替えます。`,outputHelpAria:"出力の詳しさについて",outputCycleAria:"出力の詳しさを変更",markerColorTitle:"マーカー色",languageTitle:"表示言語",languageHelp:`ツールバー、設定パネル、新規/編集ポップアップの表示言語を切り替えます。

右側の値をクリックして 简体中文 → English → 日本語 の順で循環します。`,languageHelpAria:"表示言語について",languageCycleAria:"表示言語を変更",formatLabel:{compact:"コンパクト",standard:"標準",detailed:"詳細",forensic:"フォレンジック"},markerCurrentPage:"現在のページ",markerAll:"すべてのマーカー"}};function I(i,t){const e=ae[i],n=(t.annotate??"A").toUpperCase(),s=(t.freeze??"F").toUpperCase(),o=(t.clearPage??"X").toUpperCase();return{settingsBrandName:e.settingsBrandName,panelTitle:e.panelTitle,settingsPanelAria:e.settingsPanelAria,panelCloseAria:e.panelCloseAria,dragHandleAria:e.dragHandleAria,annotateTooltip:e.annotate(n),freezeTooltip:e.freeze(s),copyTooltip:e.copyTooltip,clearPageTooltip:e.clearPage(o),clearAllTooltip:e.clearAllTooltip,settingsTooltip:e.settingsTooltip,minimizeTooltip:e.minimizeTooltip,fabTitle:e.fabTitle,fabAria:e.fabAria,outputFormatTitle:e.outputFormatTitle,outputFormatHelp:e.outputFormatHelp,outputHelpAria:e.outputHelpAria,outputCycleAria:e.outputCycleAria,markerColorTitle:e.markerColorTitle,languageTitle:e.languageTitle,languageHelp:e.languageHelp,languageHelpAria:e.languageHelpAria,languageCycleAria:e.languageCycleAria,formatLabel:e.formatLabel,markerCurrentPage:e.markerCurrentPage,markerAll:e.markerAll}}const le={"zh-CN":{cancelEscTitle:"取消 (Esc)",placeholder:"这里需要改什么？",addNote:"添加备注",cancel:"取消",closeAria:"关闭",remove:"删除",save:"保存"},en:{cancelEscTitle:"Cancel (Esc)",placeholder:"What needs to change here?",addNote:"Add note",cancel:"Cancel",closeAria:"Close",remove:"Remove",save:"Save"},ja:{cancelEscTitle:"キャンセル (Esc)",placeholder:"ここで何を変えたいですか？",addNote:"メモを追加",cancel:"キャンセル",closeAria:"閉じる",remove:"削除",save:"保存"}};function Q(i){return le[i]}const ce=`
body.ik-annotating,
body.ik-annotating * { cursor: crosshair !important; }
`,ue=280,de=`
:host {
  all: initial;
  display: block;
  position: fixed;
  z-index: 2147483646;
  --ds-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --ds-font-sans: "Inter", -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
  --ds-font-mono: "JetBrains Mono", "SF Mono", ui-monospace, Consolas, monospace;
  /* v3 dark (extension default) */
  --ik-accent: var(--instruckt-accent, #ef4444);
  --ik-accent-h: var(--instruckt-accent-hover, #dc2626);
  --ik-accent-soft: rgba(239, 68, 68, 0.12);
  --ik-accent-border: rgba(239, 68, 68, 0.3);
  --ik-bg: #141414;
  --ik-bg2: #1f1f1f;
  --ik-bg3: #2a2a2a;
  --ik-border: #232323;
  --ik-border-2: #2a2a2a;
  --ik-text: #f5f5f5;
  --ik-text-2: #a1a1aa;
  --ik-muted: #71717a;
  --ik-radius: 10px;
  --ik-radius-sm: 6px;
  --ik-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 24px 48px -12px rgba(0, 0, 0, 0.5);
}

* { box-sizing: border-box; }

/* Light surfaces (marketing / explicit light theme only) */
:host-context([data-instruckt-theme="light"]) {
  --ik-accent-soft: rgba(239, 68, 68, 0.1);
  --ik-bg: #ffffff;
  --ik-bg2: #f4f4f5;
  --ik-bg3: #eaeaec;
  --ik-border: #ececec;
  --ik-border-2: #e4e4e7;
  --ik-text: #18181b;
  --ik-text-2: #71717a;
  --ik-muted: #a1a1aa;
  --ik-shadow:
    0 1px 0 rgba(255, 255, 255, 0.8) inset,
    0 16px 40px -12px rgba(0, 0, 0, 0.12);
}

.toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: var(--ik-bg);
  border: 1px solid var(--ik-border);
  border-radius: var(--ik-radius);
  box-shadow: var(--ik-shadow);
  user-select: none;
  touch-action: none;
  cursor: grab;
  font-family: var(--ds-font-sans);
  font-size: 13px;
}
.toolbar:active { cursor: grabbing; }

.drag-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8px;
  margin-bottom: 4px;
  cursor: grab;
  color: var(--ik-muted);
  opacity: 0.55;
  flex-shrink: 0;
  transition: opacity 120ms var(--ds-ease), color 120ms var(--ds-ease);
}
.drag-handle:hover { opacity: 0.9; color: var(--ik-text-2); }
.drag-handle:active { cursor: grabbing; opacity: 1; }
.drag-handle svg { pointer-events: none; display: block; }

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--ik-radius-sm);
  border: none;
  background: transparent;
  color: var(--ik-muted);
  cursor: pointer;
  padding: 0;
  position: relative;
  transition: background 150ms var(--ds-ease), color 120ms var(--ds-ease);
}
.btn svg { display: block; flex-shrink: 0; }
.btn:hover {
  background: var(--ik-bg2);
  color: var(--ik-text);
}
.btn[data-tooltip]::before {
  content: attr(data-tooltip);
  position: absolute;
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 11px;
  font-weight: 400;
  line-height: 1.4;
  padding: 4px 8px;
  border-radius: var(--ik-radius-sm);
  border: 1px solid var(--ik-border);
  background: var(--ik-bg3);
  color: var(--ik-text-2);
  pointer-events: none;
  opacity: 0;
  transition: opacity 120ms var(--ds-ease);
  font-family: var(--ds-font-sans);
  box-shadow: var(--ik-shadow);
}
.btn[data-tooltip]:hover::before { opacity: 1; }
.btn.active:not(.settings-btn) {
  background: var(--ik-accent-soft);
  color: var(--ik-accent);
}
.btn.active:not(.settings-btn):hover {
  background: var(--ik-accent-soft);
  color: var(--ik-accent);
  box-shadow: inset 0 0 0 1px var(--ik-accent-border);
}

.divider {
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: var(--ik-border);
  flex-shrink: 0;
}

.badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 14px;
  height: 14px;
  background: var(--ik-accent);
  color: #fff;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  font-family: var(--ds-font-mono);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  line-height: 1;
  border: 1px solid var(--ik-bg);
}

.minimize-btn { color: var(--ik-muted); }
.minimize-btn:hover { color: var(--ik-text-2); }

.danger-btn { color: var(--ik-muted); }
.danger-btn:hover { color: var(--ik-accent); background: var(--ik-accent-soft); }

.clear-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.clear-all-btn {
  display: none;
  position: absolute;
  right: calc(100% + 4px);
  top: 0;
  background: var(--ik-bg);
  border: 1px solid var(--ik-border);
  border-radius: var(--ik-radius-sm);
  box-shadow: var(--ik-shadow);
}
.clear-all-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 100%;
  width: 4px;
  height: 100%;
}
.clear-wrap > .btn:first-child[data-tooltip]::before {
  right: 0;
  left: auto;
  top: auto;
  bottom: calc(100% + 8px);
  transform: none;
}
.clear-wrap:hover .clear-all-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--ik-radius-sm);
  border: 1px solid var(--ik-border);
  background: var(--ik-bg);
  color: var(--ik-muted);
  box-shadow: var(--ik-shadow);
  cursor: grab;
  padding: 0;
  touch-action: none;
  user-select: none;
  position: relative;
  font-family: var(--ds-font-sans);
  transition: background 150ms var(--ds-ease), color 120ms var(--ds-ease), border-color 120ms var(--ds-ease);
}
.fab:hover {
  color: var(--ik-accent);
  background: var(--ik-bg2);
  border-color: var(--ik-border-2);
}
.fab:active { cursor: grabbing; }

.fab-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 14px;
  height: 14px;
  background: var(--ik-accent);
  color: #fff;
  border-radius: 999px;
  font-size: 9px;
  font-weight: 600;
  font-family: var(--ds-font-mono);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  line-height: 1;
  border: 1px solid var(--ik-bg);
}

/* Settings panel — Figma tokens (node 1:4) + dark fallbacks */
.settings-btn { color: var(--ik-muted); }
.settings-btn:hover { background: var(--ik-bg2); color: var(--ik-text); }
/* Open settings: neutral gray fill — icon tint only, never theme-colored background */
.btn.settings-btn.active {
  background: var(--ik-bg2);
  color: var(--ik-muted);
}
.btn.settings-btn.active:hover {
  background: var(--ik-bg3);
  color: var(--ik-text);
}

.settings-panel {
  --sp-brand: #ef4444;
  /* v3 dark text (extension default — matches toolbar surface) */
  --sp-text-paragraph: #f5f5f5;
  --sp-text-title: #a1a1aa;
  --sp-text-placeholder: #71717a;
  --sp-line-divider: #232323;
  --sp-checkbox-active: #3077f1;
  --sp-checkbox-stroke: #2a2a2a;
  position: fixed;
  z-index: 2147483647;
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  box-sizing: border-box;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 11px;
  background: var(--ik-bg);
  border: 1px solid var(--ik-border);
  border-radius: var(--ik-radius, 10px);
  box-shadow: var(--ik-shadow);
  padding: 16px;
  font-family: var(--ds-font-sans, "Inter", -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif);
  color: var(--sp-text-paragraph);
  user-select: text;
  cursor: default;
}

:host-context([data-instruckt-theme="light"]) .settings-panel {
  --sp-text-paragraph: #000000b2;
  --sp-text-title: #000000d9;
  --sp-text-placeholder: #0000006b;
  --sp-line-divider: #00000014;
  --sp-checkbox-stroke: #0000001a;
}

.settings-panel .panel-head-figma {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  flex-shrink: 0;
}
.settings-panel .panel-head-actions {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}
.settings-panel .panel-brand {
  display: flex;
  align-items: center;
  line-height: 0;
  min-width: 0;
  flex: 0 1 auto;
  max-width: calc(100% - 120px);
}
.settings-panel .panel-brand svg {
  display: block;
  height: 11px;
  width: auto;
  max-width: 100%;
}
.settings-panel .panel-version {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: var(--sp-text-placeholder);
  flex-shrink: 0;
}
.settings-panel .panel-divider,
.settings-panel .settings-list-divider {
  flex-shrink: 0;
  margin: 0;
  padding: 8px 0;
  height: auto;
  background: transparent;
  border: 0;
  box-sizing: border-box;
}
.settings-panel .panel-divider::after,
.settings-panel .settings-list-divider::after {
  content: '';
  display: block;
  height: 1px;
  width: 100%;
  background: var(--sp-line-divider);
}
.settings-panel .panel-close {
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px;
  border: 0; background: transparent;
  border-radius: 4px;
  color: var(--ik-muted);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}
.settings-panel .panel-close:hover { background: var(--ik-bg2); color: var(--ik-text); }
.settings-panel .panel-body {
  min-height: 0;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: var(--sp-text-paragraph);
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: visible;
}

.settings-panel .settings-section { display: flex; flex-direction: column; gap: 8px; }
.settings-panel .settings-section-head { display: none; }

.settings-panel .settings-row.settings-pick-row,
.settings-panel .settings-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  min-height: 32px;
  padding: 5px 0;
  border-radius: 4px;
}
.settings-panel .settings-label-wrap {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
}
.settings-panel .settings-row-title {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--sp-text-paragraph);
  letter-spacing: 0;
  text-transform: none;
  white-space: nowrap;
}
.settings-panel .settings-help-wrap {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
}
.settings-panel .settings-help-wrap.is-help-open {
  z-index: 50;
  isolation: isolate;
}
.settings-panel .settings-help-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--sp-text-placeholder);
  cursor: help;
  flex-shrink: 0;
}
.settings-panel .settings-help-btn:hover {
  background: var(--ik-bg2);
  color: var(--sp-text-paragraph);
}
.settings-panel .settings-help-btn svg {
  display: block;
  opacity: 0.45;
}
.settings-panel .settings-help-btn:hover svg {
  opacity: 0.65;
}
.settings-panel .settings-help-popover {
  position: absolute;
  left: 0;
  right: auto;
  top: calc(100% + 6px);
  bottom: auto;
  z-index: 100;
  width: min(248px, calc(100vw - 48px));
  max-width: calc(100vw - 48px);
  max-height: min(240px, 50vh);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0;
  text-transform: none;
  white-space: pre-wrap;
  color: var(--ik-text);
  background: var(--ik-bg);
  border: 1px solid var(--ik-border);
  border-radius: 8px;
  box-shadow: var(--ik-shadow);
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  transition: opacity .12s ease, visibility .12s ease;
}
.settings-panel .settings-help-wrap.is-help-open .settings-help-popover {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.settings-panel .settings-help-popover.is-fixed-placement {
  position: fixed;
  z-index: 2147483647;
}
.settings-panel .settings-value-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  font: inherit;
  color: var(--ik-text);
  flex-shrink: 0;
  max-width: 52%;
  min-width: 0;
}
.settings-panel .settings-value-toggle:hover {
  background: var(--ik-bg2);
}
.settings-panel .settings-value-toggle .value-name {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--sp-text-title);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Figma 10-17: vertical step dots beside cycle value (Output detail / Language) */
.settings-panel .settings-cycle-dots {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: 0;
}
.settings-panel .settings-cycle-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--ik-text) 18%, transparent);
  flex-shrink: 0;
  transition: background 0.15s ease, transform 0.15s ease;
}
.settings-panel .settings-cycle-dot.is-on {
  background: var(--ik-text);
}
.settings-panel .settings-value-toggle .value-name.is-switching,
.settings-panel .settings-cycle-dots.is-switching .settings-cycle-dot.is-on {
  animation: ik-settings-cycle-switch 0.2s ease;
}
@keyframes ik-settings-cycle-switch {
  0% { opacity: 0.45; transform: scale(0.82); }
  100% { opacity: 1; transform: scale(1); }
}

.settings-panel .settings-color-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 5px 0;
  border-radius: 4px;
}
.settings-panel .settings-color-head {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--sp-text-paragraph);
}
.settings-panel .settings-color-swatches {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
}
.settings-panel .settings-color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid transparent;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  background: var(--swatch, #6366f1);
  box-sizing: border-box;
}
.settings-panel .settings-color-swatch:hover {
  filter: brightness(1.06);
}
.settings-panel .settings-color-swatch.is-selected {
  border-color: var(--ik-bg);
  border-width: 2px;
  box-shadow: 0 0 0 1px var(--swatch, #6366f1);
}

.settings-panel .settings-modes-section {
  gap: 0;
}
.settings-panel .settings-mode-row {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 32px;
  padding: 5px 0;
  width: 100%;
}
.settings-panel .settings-mode-main {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
  text-align: left;
  color: inherit;
  border-radius: 4px;
}
.settings-panel .settings-mode-main:hover {
  background: var(--ik-bg2);
}
.settings-panel .settings-check-ui {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid var(--sp-checkbox-stroke);
  background: var(--ik-bg3, #2a2a2a);
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
}
:host-context([data-instruckt-theme="light"]) .settings-panel .settings-check-ui {
  background: #ffffff;
}
.settings-panel .settings-mode-row.is-selected .settings-check-ui {
  border-color: var(--sp-checkbox-active);
  background: var(--sp-checkbox-active);
}
.settings-panel .settings-mode-row.is-selected .settings-check-ui::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid #fff;
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(45deg);
}
.settings-panel .settings-mode-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--sp-text-paragraph);
}
`,tt=`
:host {
  all: initial;
  display: block;
  position: fixed;
  z-index: 2147483647;
}

* { box-sizing: border-box; }

:host {
  --ik-accent: var(--instruckt-accent, #6366f1);
  --ik-accent-h: var(--instruckt-accent-hover, #4f46e5);
  --ik-bg: #ffffff;
  --ik-bg2: #f8f8f8;
  --ik-border: #e4e4e7;
  --ik-text: #18181b;
  --ik-muted: #71717a;
  --ik-shadow: 0 4px 24px rgba(0,0,0,.12);
  --ik-radius: 10px;
  --ik-hl: color-mix(in srgb, var(--ik-accent) 15%, transparent);
}

@media (prefers-color-scheme: dark) {
  :host {
    --ik-bg: #1c1c1e; --ik-bg2: #2c2c2e; --ik-border: #3a3a3c;
    --ik-text: #f4f4f5; --ik-muted: #a1a1aa;
    --ik-shadow: 0 4px 24px rgba(0,0,0,.5);
    --ik-hl: color-mix(in srgb, var(--ik-accent) 22%, transparent);
  }
}

.popup {
  width: 340px;
  background: var(--ik-bg);
  border: 1px solid var(--ik-border);
  border-radius: var(--ik-radius);
  box-shadow: var(--ik-shadow);
  padding: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  color: var(--ik-text);
  animation: pop-in .12s ease;
}
@keyframes pop-in {
  from { opacity:0; transform: scale(.95) translateY(4px); }
  to   { opacity:1; transform: scale(1) translateY(0); }
}

.header { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
.element-tag {
  font-size:11px; font-family:ui-monospace,monospace; color:var(--ik-muted);
  background:var(--ik-bg2); border-radius:4px; padding:2px 6px;
  max-width:220px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.close-btn {
  background:none; border:none; color:var(--ik-muted);
  cursor:pointer; font-size:18px; line-height:1; padding:0;
}

.fw-badge {
  display:inline-flex; align-items:center; gap:4px;
  font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.05em;
  color:var(--ik-accent); background:var(--ik-hl); border-radius:4px;
  padding:2px 6px; margin-bottom:8px;
}
.selected-text {
  font-size:12px; color:var(--ik-muted); background:var(--ik-bg2);
  border-left:3px solid var(--ik-accent); padding:4px 8px;
  border-radius:0 4px 4px 0; margin-bottom:10px;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}

.label {
  font-size:10px; font-weight:700; text-transform:uppercase;
  letter-spacing:.05em; color:var(--ik-muted); margin-bottom:4px;
}
.row { display:flex; gap:6px; margin-bottom:10px; }
.chips { display:flex; gap:4px; flex-wrap:wrap; }

.chip {
  font-size:11px; padding:3px 8px; border-radius:12px;
  border:1px solid var(--ik-border); background:transparent;
  color:var(--ik-muted); cursor:pointer; transition:all .1s;
}
.chip:hover { border-color:var(--ik-accent); color:var(--ik-accent); }
.chip.sel { background:var(--ik-accent); border-color:var(--ik-accent); color:#fff; }
.chip.blocking.sel  { background:#ef4444; border-color:#ef4444; }
.chip.important.sel { background:#f97316; border-color:#f97316; }
.chip.suggestion.sel{ background:#22c55e; border-color:#22c55e; }

textarea {
  width:100%; min-height:80px; resize:vertical;
  border:1px solid var(--ik-border); border-radius:6px;
  background:var(--ik-bg2); color:var(--ik-text);
  font-family:inherit; font-size:13px; padding:8px 10px;
  outline:none; transition:border-color .15s; margin-bottom:10px;
}
textarea:focus { border-color:var(--ik-accent); }
textarea::placeholder { color:var(--ik-muted); }

.actions { display:flex; justify-content:flex-end; gap:6px; }

.btn-secondary {
  padding:6px 14px; border-radius:6px; border:1px solid var(--ik-border);
  background:transparent; color:var(--ik-muted); font-size:12px; cursor:pointer; transition:all .1s;
}
.btn-secondary:hover { border-color:var(--ik-muted); color:var(--ik-text); }

.btn-primary {
  padding:6px 14px; border-radius:6px; border:none;
  background:var(--ik-accent); color:#fff;
  font-size:12px; font-weight:700; cursor:pointer; transition:background .1s;
}
.btn-primary:hover { background:var(--ik-accent-h); }
.btn-primary:disabled { opacity:.5; cursor:not-allowed; }

.btn-danger {
  padding:6px 14px; border-radius:6px; border:1px solid #ef4444;
  background:transparent; color:#ef4444;
  font-size:12px; cursor:pointer; transition:all .1s;
}
.btn-danger:hover { background:#ef4444; color:#fff; }

/* Thread view */
.thread { margin-top:10px; border-top:1px solid var(--ik-border); padding-top:10px; }
.msg { margin-bottom:8px; }
.msg-role {
  font-size:10px; font-weight:700; text-transform:uppercase;
  letter-spacing:.05em; margin-bottom:2px;
}
.msg-role.human { color:var(--ik-accent); }
.msg-role.agent { color:#22c55e; }
.msg-content { font-size:12px; line-height:1.5; }

.status-badge {
  display:inline-flex; align-items:center; gap:4px;
  font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.05em;
  border-radius:4px; padding:2px 6px;
}
.status-badge.pending      { background:var(--ik-hl); color:var(--ik-accent); }
.status-badge.resolved     { background:rgba(34,197,94,.15); color:#22c55e; }
.status-badge.dismissed    { background:var(--ik-bg2); color:var(--ik-muted); }
`,he=`
.ik-marker {
  position: absolute;
  z-index: 2147483645;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: var(--ik-marker-default, #6366f1);
  color: #fff;
  font-size: 11px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px color-mix(in srgb, var(--ik-marker-default, #6366f1) 40%, transparent);
  transition: transform .15s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  pointer-events: all;
  user-select: none;
  /* left/top are the click point; center the pin on that point */
  transform: translate(-50%, -50%);
}
.ik-marker:hover { transform: translate(-50%, -50%) scale(1.15); }
.ik-marker.dismissed { background: var(--ik-marker-dismissed, #71717a); box-shadow: 0 2px 8px rgba(0,0,0,.2); }
/* Ghost pin — target is off-screen, in a closed overlay, or clipped; click to reveal */
.ik-marker.ik-marker-ghost {
  opacity: 0.55;
  background: color-mix(in srgb, var(--ik-marker-default, #6366f1) 70%, #ffffff);
  border: 2px dashed color-mix(in srgb, var(--ik-marker-default, #6366f1) 55%, #ffffff);
  box-shadow: none;
}
.ik-marker .ik-marker-edit { display: none; line-height: 0; }
.ik-marker:hover .ik-marker-index { display: none; }
.ik-marker:hover .ik-marker-edit { display: block; }

/* Spotlight rectangle showing the annotated region */
.ik-spotlight {
  position: absolute;
  z-index: 2147483644;
  pointer-events: none;
  /* Use border-box so width/height match the element's bbox exactly
     (border is drawn inside, not outside, the rect we position). */
  box-sizing: border-box;
  border: 2px solid color-mix(in srgb, var(--ik-marker-default, #6366f1) 80%, #ffffff);
  background: color-mix(in srgb, var(--ik-marker-default, #6366f1) 16%, transparent);
  border-radius: 6px;
  box-shadow: 0 10px 30px rgba(0,0,0,.15);
  display: none;
}

/* Hover preview (comment) */
.ik-marker-preview {
  position: absolute;
  z-index: 2147483646;
  pointer-events: none;
  display: none;
  max-width: min(360px, calc(100vw - 24px));
  background: #111827;
  color: #fff;
  border-radius: 10px;
  padding: 8px 10px;
  box-shadow: 0 12px 30px rgba(0,0,0,.22);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  line-height: 1.35;
}
.ik-marker-preview .title {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .04em;
  text-transform: uppercase;
  opacity: .75;
  margin-bottom: 4px;
}
.ik-marker-preview .content {
  font-weight: 600;
  word-break: break-word;
}
.ik-marker-preview .meta {
  margin-top: 6px;
  font-size: 11px;
  opacity: .75;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ik-marker-preview .ghost-hint {
  margin-top: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: #fcd34d;
  line-height: 1.3;
}
`;function pe(){if(typeof document>"u")return"99, 102, 241";try{return getComputedStyle(document.documentElement).getPropertyValue("--instruckt-accent-rgb").trim()||"99, 102, 241"}catch{return"99, 102, 241"}}function et(i){return!!i&&/^#[0-9A-Fa-f]{6}$/.test(i.trim())}function fe(i,t){const e=i.replace("#","").trim(),n=/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(!n)return"#4f46e5";const s=o=>{const r=Math.round(parseInt(n[o],16)*t);return Math.max(0,Math.min(255,r)).toString(16).padStart(2,"0")};return`#${s(1)}${s(2)}${s(3)}`}function me(i){const t=i.replace("#","").trim(),e=/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t);return e?`${parseInt(e[1],16)}, ${parseInt(e[2],16)}, ${parseInt(e[3],16)}`:"99, 102, 241"}function ge(i){const t=et(i?.default)?i.default.trim():"#6366f1",e=fe(t,.88),n=me(t),s=[`--ik-marker-default: ${t};`,`--instruckt-accent: ${t};`,`--instruckt-accent-hover: ${e};`,`--instruckt-accent-rgb: ${n};`];return et(i?.dismissed)&&s.push(`--ik-marker-dismissed: ${i.dismissed.trim()};`),`:root {
  ${s.join(`
  `)}
}
`}function be(i){if(document.getElementById("instruckt-global"))return;const t=document.createElement("style");t.id="instruckt-global",t.textContent=ge(i)+ce+he,document.head.appendChild(t)}function ve(){try{if(typeof chrome<"u"&&chrome?.storage?.local)return chrome.storage.local}catch{}return null}class ye{cache={};chromeLocal=ve();hydrated;listeners=new Set;localWrites=new Set;constructor(){this.hydrated=this.hydrate(),this.subscribeCrossTab()}get ready(){return this.hydrated}onExternalChange(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}async hydrate(){if(!this.chromeLocal){try{for(let t=0;t<window.localStorage.length;t++){const e=window.localStorage.key(t);if(e===null)continue;const n=window.localStorage.getItem(e);n!==null&&(this.cache[e]=n)}}catch{}return}try{const t=await this.chromeLocal.get(null);for(const[e,n]of Object.entries(t))typeof n=="string"&&(this.cache[e]=n)}catch{}}subscribeCrossTab(){try{chrome?.storage?.onChanged?.addListener((t,e)=>{if(e!=="local")return;const n=[];for(const[s,o]of Object.entries(t))typeof o.newValue=="string"?this.cache[s]=o.newValue:o.newValue===void 0&&delete this.cache[s],this.localWrites.has(s)?this.localWrites.delete(s):n.push(s);if(n.length!==0)for(const s of this.listeners)try{s(n)}catch{}})}catch{}}getItem(t){return Object.prototype.hasOwnProperty.call(this.cache,t)?this.cache[t]:null}async getItemFresh(t){if(this.chromeLocal)try{const n=(await this.chromeLocal.get(t))[t];return typeof n=="string"?(this.cache[t]=n,n):null}catch{}return this.getItem(t)}setItem(t,e){if(this.cache[t]=e,this.chromeLocal)this.localWrites.add(t),this.chromeLocal.set({[t]:e}).catch(()=>{this.localWrites.delete(t)});else try{window.localStorage.setItem(t,e)}catch{}}removeItem(t){if(delete this.cache[t],this.chromeLocal)this.localWrites.add(t),this.chromeLocal.remove(t).catch(()=>{this.localWrites.delete(t)});else try{window.localStorage.removeItem(t)}catch{}}}const y=new ye,ke="2.2.1",E='width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"',k={annotate:`<svg ${E}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,freeze:`<svg ${E}><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,copy:`<svg ${E}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,check:`<svg ${E}><polyline points="20 6 9 17 4 12"/></svg>`,clear:`<svg ${E}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,minimize:`<svg ${E}><polyline points="7 13 12 18 17 13"/><line x1="12" y1="6" x2="12" y2="18"/></svg>`,settings:`<svg ${E}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 4.21 16.96l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 4.21l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,logo:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>',close:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},A=["compact","standard","detailed","forensic"],we=["#ff2442","#ff6b35","#fbbf24","#22c55e","#06b6d4","#3b82f6","#1e3a8a"],nt='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="currentColor"><path d="M8.0711 4C7.25791 4 6.62055 4.23077 6.15901 4.7033C5.8141 5.04821 5.59807 5.48517 5.51091 6.01877C5.45955 6.33323 5.725 6.59341 6.04363 6.59341C6.36225 6.59341 6.60796 6.33137 6.67766 6.02047C6.72637 5.8032 6.80623 5.62056 6.91725 5.47253C7.13704 5.15385 7.49967 5 7.99418 5C8.38978 5 8.70846 5.10989 8.92824 5.32967C9.13703 5.54945 9.24693 5.84615 9.24693 6.23077C9.24693 6.51648 9.13704 6.78022 8.93923 7.03297L8.75242 7.24176C8.0711 7.84615 7.65352 8.2967 7.51066 8.6044C7.35682 8.89011 7.29088 9.24176 7.29088 9.64835C7.29088 9.75153 7.37452 9.83517 7.47769 9.83517H8.27989C8.38307 9.83517 8.46671 9.75153 8.46671 9.64835C8.46671 9.38462 8.52165 9.14286 8.64253 8.92308C8.74143 8.72528 8.89528 8.52747 9.10407 8.35165C9.62055 7.9011 9.92824 7.61539 10.0271 7.49451C10.3019 7.14286 10.4447 6.69231 10.4447 6.15385C10.4447 5.49451 10.2249 4.96703 9.78539 4.58242C9.34583 4.18681 8.7744 4 8.0711 4Z"/><path d="M7.87309 10.4287C8.10386 10.4287 8.30166 10.4946 8.4555 10.6485C8.60935 10.7913 8.68627 10.9782 8.68627 11.2089C8.68627 11.4397 8.59836 11.6265 8.44452 11.7804C8.29067 11.9232 8.09287 12.0001 7.87309 12.0001C7.65331 12.0001 7.4555 11.9232 7.30166 11.7694C7.14781 11.6155 7.07089 11.4287 7.07089 11.2089C7.07089 10.9782 7.14781 10.7913 7.30166 10.6485C7.4555 10.4946 7.65331 10.4287 7.87309 10.4287Z"/><path d="M8.00007 14.6663C4.31817 14.6663 1.3334 11.6816 1.3334 7.99968C1.3334 4.31778 4.31817 1.33301 8.00007 1.33301C11.682 1.33301 14.6667 4.31778 14.6667 7.99968C14.6667 11.6816 11.682 14.6663 8.00007 14.6663ZM13.6667 7.99968C13.6667 4.87006 11.1297 2.33301 8.00007 2.33301C4.87046 2.33301 2.3334 4.87006 2.3334 7.99968C2.3334 11.1293 4.87046 13.6663 8.00007 13.6663C11.1297 13.6663 13.6667 11.1293 13.6667 7.99968Z"/></g></svg>',xe='<svg width="102" height="9" viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3.66569e-06 8.58V1.43051e-06H7.188C8.076 1.43051e-06 8.764 0.224001 9.252 0.672001C9.748 1.12 9.996 1.8 9.996 2.712C9.996 3.488 9.816 4.096 9.456 4.536C9.096 4.976 8.584 5.252 7.92 5.364L9.9 8.58H7.716L5.88 5.424H1.92V8.58H3.66569e-06ZM6.96 1.56H1.92V3.852L6.96 3.864C7.312 3.864 7.58 3.776 7.764 3.6C7.956 3.424 8.052 3.128 8.052 2.712C8.052 2.288 7.956 1.992 7.764 1.824C7.58 1.648 7.312 1.56 6.96 1.56ZM14.4255 8.64C13.3535 8.64 12.5175 8.376 11.9175 7.848C11.3175 7.312 11.0175 6.528 11.0175 5.496C11.0175 4.456 11.3175 3.672 11.9175 3.144C12.5175 2.608 13.3535 2.34 14.4255 2.34H17.4255C18.1295 2.34 18.6655 2.508 19.0335 2.844C19.4095 3.172 19.5975 3.644 19.5975 4.26C19.5975 5.516 18.8735 6.144 17.4255 6.144H12.8895C13.0575 6.888 13.5695 7.26 14.4255 7.26H19.2855V8.64H14.4255ZM14.4255 3.72C13.6015 3.72 13.0935 4.068 12.9015 4.764H17.3415C17.5015 4.764 17.6255 4.716 17.7135 4.62C17.8095 4.524 17.8575 4.392 17.8575 4.224C17.8575 3.888 17.6855 3.72 17.3415 3.72H14.4255ZM28.2874 8.58H26.5474V1.43051e-06H28.2874V8.58ZM27.9874 8.58H23.8474C22.7754 8.58 21.9394 8.316 21.3394 7.788C20.7394 7.26 20.4394 6.496 20.4394 5.496C20.4394 4.488 20.7394 3.72 21.3394 3.192C21.9394 2.664 22.7754 2.4 23.8474 2.4H27.8674V3.78H23.8474C23.3274 3.78 22.9274 3.924 22.6474 4.212C22.3754 4.492 22.2394 4.92 22.2394 5.496C22.2394 6.064 22.3754 6.492 22.6474 6.78C22.9274 7.06 23.3274 7.2 23.8474 7.2H27.9874V8.58ZM29.4291 5.772V4.392H33.1011V5.772H29.4291ZM34.238 8.58V2.4H35.978V8.58H34.238ZM34.226 1.38V0.0240011H35.99V1.38H34.226ZM37.2966 8.58V2.4H42.6846C43.3886 2.4 43.9006 2.576 44.2206 2.928C44.5486 3.272 44.7126 3.728 44.7126 4.296V8.58H42.9726V4.5C42.9726 4.02 42.7326 3.78 42.2526 3.78H39.0366V8.58H37.2966ZM45.7644 8.64V7.26H51.6444C51.9804 7.26 52.1484 7.072 52.1484 6.696C52.1484 6.328 51.9804 6.144 51.6444 6.144H47.8404C47.1284 6.144 46.5884 5.984 46.2204 5.664C45.8524 5.336 45.6684 4.868 45.6684 4.26C45.6684 3.644 45.8524 3.172 46.2204 2.844C46.5964 2.508 47.1364 2.34 47.8404 2.34H53.3124V3.72H47.9244C47.5804 3.72 47.4084 3.888 47.4084 4.224C47.4084 4.392 47.4564 4.524 47.5524 4.62C47.6484 4.716 47.7724 4.764 47.9244 4.764H51.9564C52.5804 4.764 53.0564 4.928 53.3844 5.256C53.7204 5.576 53.8884 6.044 53.8884 6.66C53.8884 7.284 53.7204 7.772 53.3844 8.124C53.0484 8.468 52.5724 8.64 51.9564 8.64H45.7644ZM58.1258 8.58C57.4298 8.58 56.9178 8.408 56.5898 8.064C56.2618 7.712 56.0978 7.252 56.0978 6.684V3.78H54.3098V2.4H56.0978V0.504001H57.8378V2.4H60.4058V3.78H57.8378V6.468C57.8378 6.956 58.0778 7.2 58.5578 7.2H60.7418V8.58H58.1258ZM61.6364 8.58V2.4H66.3644C67.0604 2.4 67.5724 2.576 67.9004 2.928C68.2284 3.272 68.3924 3.728 68.3924 4.296V5.58H66.6284V4.512C66.6284 4.032 66.3884 3.792 65.9084 3.792H63.4004V8.58H61.6364ZM71.3153 8.58C70.6113 8.58 70.0953 8.404 69.7673 8.052C69.4473 7.7 69.2873 7.244 69.2873 6.684V2.4H71.0273V6.48C71.0273 6.96 71.2673 7.2 71.7473 7.2H74.2433C74.7233 7.2 74.9633 6.96 74.9633 6.48V2.4H76.7033V6.684C76.7033 7.244 76.5393 7.7 76.2113 8.052C75.8913 8.404 75.3793 8.58 74.6753 8.58H71.3153ZM81.1286 8.64C80.0566 8.64 79.2206 8.376 78.6206 7.848C78.0206 7.312 77.7206 6.528 77.7206 5.496C77.7206 4.456 78.0206 3.672 78.6206 3.144C79.2206 2.608 80.0566 2.34 81.1286 2.34H85.1486V3.72H81.1286C80.6086 3.72 80.2086 3.864 79.9286 4.152C79.6566 4.44 79.5206 4.888 79.5206 5.496C79.5206 6.096 79.6566 6.54 79.9286 6.828C80.2086 7.116 80.6086 7.26 81.1286 7.26H85.2686V8.64H81.1286ZM86.1638 8.58V1.43051e-06H87.9038V2.4H92.0558C92.7598 2.4 93.2958 2.568 93.6638 2.904C94.0398 3.232 94.2278 3.704 94.2278 4.32C94.2278 5.328 93.7478 5.928 92.7878 6.12L94.2518 8.58H92.2958L90.8798 6.192H87.9038V8.58H86.1638ZM91.9718 3.768H87.9038V4.824H91.9718C92.1318 4.824 92.2558 4.776 92.3438 4.68C92.4398 4.584 92.4878 4.452 92.4878 4.284C92.4878 3.94 92.3158 3.768 91.9718 3.768ZM98.5438 8.58C97.8478 8.58 97.3358 8.408 97.0078 8.064C96.6798 7.712 96.5158 7.252 96.5158 6.684V3.78H94.7278V2.4H96.5158V0.504001H98.2558V2.4H100.824V3.78H98.2558V6.468C98.2558 6.956 98.4958 7.2 98.9758 7.2H101.16V8.58H98.5438Z" fill="#FF2442"/></svg>';class w{constructor(t,e,n,s,o,r){this.position=t,this.callbacks=e,this.keys=n??{},this.tools=s??{},this.settings=o??null,this.positionAnchor=r?.positionAnchor,this.build(),this.setupDrag(),this.setupLayoutSync()}host;shadow;toolbarEl;fab;fabBadge=null;annotateBtn;freezeBtn;copyBtn;dragHandle;clearPageBtn;clearAllBtn;minimizeBtn=null;panelBrandEl=null;panelVersionEl=null;panelCloseBtn=null;annotateActive=!1;freezeActive=!1;minimized=!1;totalCount=0;dragPointer=null;dragMoved=!1;dragStartClient={x:0,y:0};dragOffset={x:0,y:0};activePointerId=null;userPositioned=!1;layoutSyncRaf=null;positionAnchor;settingsBtn=null;settingsPanel=null;settingsOpen=!1;settingsHelpCloseTimer=null;keys;tools;settings;show(t){return this.tools[t]!==!1}build(){this.host=document.createElement("div"),this.host.setAttribute("data-instruckt","toolbar"),this.shadow=this.host.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=de,this.shadow.appendChild(t),this.toolbarEl=document.createElement("div"),this.toolbarEl.className="toolbar",this.dragHandle=document.createElement("div"),this.dragHandle.className="drag-handle",this.dragHandle.innerHTML=`<svg width="16" height="6" viewBox="0 0 16 6" fill="currentColor">
      <circle cx="4" cy="1.5" r="1.2"/><circle cx="8" cy="1.5" r="1.2"/><circle cx="12" cy="1.5" r="1.2"/>
      <circle cx="4" cy="4.5" r="1.2"/><circle cx="8" cy="4.5" r="1.2"/><circle cx="12" cy="4.5" r="1.2"/>
    </svg>`,this.toolbarEl.appendChild(this.dragHandle),this.keys,this.annotateBtn=this.makeBtn(k.annotate,"",()=>{const a=!this.annotateActive;this.setAnnotateActive(a),this.callbacks.onToggleAnnotate(a)}),this.freezeBtn=this.makeBtn(k.freeze,"",()=>{const a=!this.freezeActive;this.setFreezeActive(a),this.callbacks.onFreezeAnimations(a)}),this.copyBtn=this.makeBtn(k.copy,"",()=>{this.callbacks.onCopy(),this.copyBtn.innerHTML=k.check,setTimeout(()=>{this.copyBtn.innerHTML=k.copy},1200)});const e=document.createElement("div");e.className="clear-wrap",this.clearPageBtn=this.makeBtn(k.clear,"",()=>{this.callbacks.onClearPage?.()}),this.clearPageBtn.classList.add("danger-btn"),this.clearAllBtn=this.makeBtn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',"",()=>this.callbacks.onClearAll?.()),this.clearAllBtn.classList.add("danger-btn","clear-all-btn"),e.appendChild(this.clearPageBtn),e.appendChild(this.clearAllBtn),this.settingsBtn=this.makeBtn(k.settings,"",()=>this.toggleSettings()),this.settingsBtn.classList.add("settings-btn"),this.minimizeBtn=null,this.show("minimize")&&(this.minimizeBtn=this.makeBtn(k.minimize,"",()=>{this.setMinimized(!0)}),this.minimizeBtn.classList.add("minimize-btn"));const n=()=>{const a=document.createElement("div");return a.className="divider",a},s=[],o=a=>{s.length>0&&s.push(n()),s.push(a)};this.show("annotate")&&o(this.annotateBtn),this.show("freeze")&&o(this.freezeBtn),this.show("copy")&&o(this.copyBtn),(this.show("clear_page")||this.show("clear_all"))&&o(e),this.show("settings")&&o(this.settingsBtn),this.show("minimize")&&this.minimizeBtn&&o(this.minimizeBtn),this.toolbarEl.append(...s),this.shadow.appendChild(this.toolbarEl),this.settingsPanel=document.createElement("div"),this.settingsPanel.className="settings-panel",this.settingsPanel.setAttribute("role","dialog"),this.settingsPanel.innerHTML=`
      <div class="panel-head panel-head-figma">
        <div class="panel-brand"></div>
        <div class="panel-head-actions">
          <span class="panel-version"></span>
          <button class="panel-close" type="button">${k.close}</button>
        </div>
      </div>
      <div class="panel-divider" role="presentation"></div>
      <div class="panel-body"></div>
    `,this.settingsPanel.style.display="none",this.applySettingsPanelWidth(),this.shadow.appendChild(this.settingsPanel),this.panelBrandEl=this.settingsPanel.querySelector(".panel-brand"),this.panelVersionEl=this.settingsPanel.querySelector(".panel-version"),this.panelCloseBtn=this.settingsPanel.querySelector(".panel-close"),this.panelCloseBtn?.addEventListener("click",a=>{a.stopPropagation(),this.closeSettings()}),this.buildSettingsBody(),this.fab=document.createElement("button"),this.fab.className="fab",this.fab.innerHTML=k.logo,this.fab.style.display="none",this.shadow.appendChild(this.fab),this.applyToolbarI18n(),this.host.addEventListener("click",a=>a.stopPropagation()),this.host.addEventListener("mousedown",a=>a.stopPropagation()),this.host.addEventListener("pointerdown",a=>a.stopPropagation()),(document.getElementById("instruckt-root")??document.body).appendChild(this.host),Object.assign(this.host.style,{position:"fixed",zIndex:"2147483646"}),this.loadSavedPosition()||this.applyDefaultPosition(),requestAnimationFrame(()=>this.syncLayoutPosition())}makeBtn(t,e,n){const s=document.createElement("button");return s.className="btn",s.setAttribute("data-tooltip",e),s.setAttribute("aria-label",e),s.innerHTML=t,s.addEventListener("click",o=>{o.stopPropagation(),n()}),s}static EDGE_INSET_PX=20;static DRAG_THRESHOLD_PX=5;static POSITION_KEY="instruckt:toolbar-pos";detectLayoutAnchor(){const t=s=>{const o=s.getBoundingClientRect();if(o.width<320||o.height<120)return!1;const r=window.innerWidth;return o.width<=r*.98&&o.width>=Math.min(r*.45,480)},e=document.querySelector('main, [role="main"]');if(e instanceof HTMLElement&&t(e))return e;const n=document.getElementById("app");if(n){for(const s of n.children)if(s instanceof HTMLElement&&t(s))return s}for(const s of document.body.children)if(s instanceof HTMLElement&&!s.hasAttribute("data-instruckt")&&t(s))return s;return document.documentElement}resolveLayoutAnchor(){if(this.positionAnchor){const t=document.querySelector(this.positionAnchor);if(t instanceof HTMLElement)return t}return this.detectLayoutAnchor()}getLayoutBounds(){const t=this.resolveLayoutAnchor();return t===document.documentElement?new DOMRect(0,0,window.innerWidth,window.innerHeight):t.getBoundingClientRect()}applyDefaultPosition(){const t=this.getLayoutBounds(),{width:e,height:n}=this.getHostSize(),s=w.EDGE_INSET_PX,o=this.position.includes("right")?t.right-e-s:t.left+s,r=this.position.includes("bottom")?t.bottom-n-s:t.top+s;this.applyHostPosition(o,r)}syncLayoutPosition(){this.host.isConnected&&(this.userPositioned?this.ensureHostInViewport():this.applyDefaultPosition(),this.settingsOpen&&this.positionSettingsPanel())}boundLayoutSync=()=>{this.layoutSyncRaf===null&&(this.layoutSyncRaf=requestAnimationFrame(()=>{this.layoutSyncRaf=null,this.syncLayoutPosition()}))};setupLayoutSync(){window.addEventListener("resize",this.boundLayoutSync,{passive:!0}),document.addEventListener("scroll",this.boundLayoutSync,{capture:!0,passive:!0}),window.visualViewport?.addEventListener("resize",this.boundLayoutSync),window.visualViewport?.addEventListener("scroll",this.boundLayoutSync)}getHostSize(){const t=this.host.getBoundingClientRect();return{width:this.host.offsetWidth||t.width||48,height:this.host.offsetHeight||t.height||200}}clampHostPosition(t,e){const n=w.EDGE_INSET_PX,{width:s,height:o}=this.getHostSize(),r=Math.max(n,window.innerWidth-s-n),a=Math.max(n,window.innerHeight-o-n);return{left:Math.min(Math.max(t,n),r),top:Math.min(Math.max(e,n),a)}}applyHostPosition(t,e){const n=this.clampHostPosition(t,e);Object.assign(this.host.style,{left:`${n.left}px`,top:`${n.top}px`,right:"auto",bottom:"auto"})}ensureHostInViewport(){if(!this.host.isConnected)return;const t=this.host.getBoundingClientRect();this.applyHostPosition(t.left,t.top),this.settingsOpen&&this.positionSettingsPanel()}parseSavedPosition(t){const{width:e,height:n}=this.getHostSize(),s=window.innerWidth,o=window.innerHeight,r=this.host.getBoundingClientRect();let a=null,l=null;return t.left&&t.left!=="auto"?a=parseFloat(t.left):t.right&&t.right!=="auto"&&(a=s-parseFloat(t.right)-e),t.top&&t.top!=="auto"?l=parseFloat(t.top):t.bottom&&t.bottom!=="auto"&&(l=o-parseFloat(t.bottom)-n),(a===null||Number.isNaN(a))&&(a=r.left),(l===null||Number.isNaN(l))&&(l=r.top),Number.isNaN(a)||Number.isNaN(l)?null:{left:a,top:l}}savePosition(){this.userPositioned=!0;const{left:t,top:e}=this.host.style;try{y.setItem(w.POSITION_KEY,JSON.stringify({left:t,top:e,right:"auto",bottom:"auto"}))}catch{}}loadSavedPosition(){try{const t=y.getItem(w.POSITION_KEY);if(!t)return!1;const e=this.parseSavedPosition(JSON.parse(t));return e?(this.userPositioned=!0,this.applyHostPosition(e.left,e.top),!0):!1}catch{return!1}}beginDragPointer(t,e){if(t.button!==0)return;const n=this.host.getBoundingClientRect();this.dragPointer=e,this.dragMoved=!1,this.dragStartClient={x:t.clientX,y:t.clientY},this.dragOffset={x:t.clientX-n.left,y:t.clientY-n.top},this.activePointerId=t.pointerId;try{this.host.setPointerCapture(t.pointerId)}catch{}}endDragPointer(t){if(!this.dragPointer||t!==void 0&&this.activePointerId!==null&&t.pointerId!==this.activePointerId)return;const e=this.dragPointer,n=this.dragMoved;if(this.activePointerId!==null){try{this.host.releasePointerCapture(this.activePointerId)}catch{}this.activePointerId=null}this.dragPointer=null,this.dragMoved=!1,e==="fab"&&!n&&this.setMinimized(!1),n&&this.savePosition()}onDragPointerMove=t=>{if(this.dragPointer&&!(this.activePointerId!==null&&t.pointerId!==this.activePointerId)){if(t.buttons===0){this.endDragPointer(t);return}if(!this.dragMoved){const e=t.clientX-this.dragStartClient.x,n=t.clientY-this.dragStartClient.y;if(Math.hypot(e,n)<w.DRAG_THRESHOLD_PX)return;this.dragMoved=!0}this.applyHostPosition(t.clientX-this.dragOffset.x,t.clientY-this.dragOffset.y)}};boundEndDrag=()=>{this.endDragPointer()};setupDrag(){this.shadow.addEventListener("pointerdown",t=>{const e=t,n=e.target;n.closest(".btn")||n.closest(".fab")||n.closest(".settings-panel")||(this.beginDragPointer(e,"toolbar"),e.preventDefault())}),this.fab.addEventListener("pointerdown",t=>{t.stopPropagation(),this.beginDragPointer(t,"fab"),t.preventDefault()}),this.host.addEventListener("pointermove",this.onDragPointerMove),this.host.addEventListener("pointerup",t=>this.endDragPointer(t)),this.host.addEventListener("pointercancel",t=>this.endDragPointer(t)),window.addEventListener("mouseup",this.boundEndDrag),window.addEventListener("blur",this.boundEndDrag)}applyMinimizedLayout(t){const e=this.host.getBoundingClientRect(),n=e.left,s=e.bottom,o=w.EDGE_INSET_PX,r=window.innerHeight;if(this.toolbarEl.style.display=t?"none":"",this.fab.style.display=t?"":"none",this.minimized=t,t){const d=this.fab.offsetHeight||32;this.applyHostPosition(n,s-d);return}const a=this.toolbarEl.offsetHeight||this.getHostSize().height,l=e.top,c=r-o-(l+a)<0?s-a:l;this.applyHostPosition(n,c),this.ensureHostInViewport()}setMinimized(t){this.minimized!==t&&(this.applyMinimizedLayout(t),t&&this.closeSettings(),this.updateFabBadge(),this.callbacks.onMinimize?.(t))}refreshI18n(){this.applyToolbarI18n();const t=this.settingsPanel?.querySelector(".panel-body");if(t){for(;t.firstChild;)t.removeChild(t.firstChild);this.buildSettingsBody()}this.settingsOpen&&this.positionSettingsPanel()}applyToolbarI18n(){const t=this.settings?.getUiLocale?.()??"zh-CN",e=I(t,this.keys);this.settingsPanel?.setAttribute("aria-label",e.settingsPanelAria),this.panelBrandEl&&(this.panelBrandEl.innerHTML=xe,this.panelBrandEl.setAttribute("aria-label",e.settingsBrandName)),this.panelVersionEl&&(this.panelVersionEl.textContent=`v${ke}`),this.panelCloseBtn?.setAttribute("aria-label",e.panelCloseAria),this.dragHandle.setAttribute("aria-label",e.dragHandleAria);const n=(s,o)=>{s&&(s.setAttribute("data-tooltip",o),s.setAttribute("aria-label",o))};n(this.annotateBtn,e.annotateTooltip),n(this.freezeBtn,e.freezeTooltip),n(this.copyBtn,e.copyTooltip),n(this.clearPageBtn,e.clearPageTooltip),n(this.clearAllBtn,e.clearAllTooltip),n(this.settingsBtn,e.settingsTooltip),n(this.minimizeBtn,e.minimizeTooltip),this.fab&&(this.fab.title=e.fabTitle,this.fab.setAttribute("aria-label",e.fabAria))}buildSettingsBody(){if(!this.settingsPanel)return;const t=this.settingsPanel.querySelector(".panel-body");if(!t)return;const e=this.settings?.getUiLocale?.()??"zh-CN",n=I(e,this.keys),s=this.settings?.getOutputFormat()??"standard",o=this.settings?.getMarkerShowAll?.()??!1,r=this.settings?.getMarkerShowCurrentPage?.()??!0,a=document.createElement("div");a.className="settings-section",a.innerHTML=`
      <div class="settings-row settings-pick-row">
        <div class="settings-label-wrap">
          <span class="settings-row-title">${this.escHtml(n.outputFormatTitle)}</span>
          <span class="settings-help-wrap">
            <button type="button" class="settings-help-btn" aria-expanded="false" aria-label="${this.escAttr(n.outputHelpAria)}" aria-describedby="instruckt-settings-help-output">${nt}</button>
            <div id="instruckt-settings-help-output" class="settings-help-popover" role="tooltip"></div>
          </span>
        </div>
        <button type="button" class="settings-value-toggle settings-output-cycle" aria-label="${this.escAttr(n.outputCycleAria)}">
          <span class="value-name">${this.escHtml(n.formatLabel[s])}</span>
          ${this.buildSettingsCycleDotsHtml(A.length,Math.max(0,A.indexOf(s)))}
        </button>
      </div>
    `,a.querySelector("#instruckt-settings-help-output").textContent=n.outputFormatHelp,a.querySelector(".settings-output-cycle")?.addEventListener("click",h=>{h.stopPropagation();const p=this.settings?.getOutputFormat()??"standard";let m=A.indexOf(p);m<0&&(m=0);const g=A[(m+1)%A.length];this.selectOutputFormat(g,!0)}),t.appendChild(a);const l=document.createElement("div");l.className="settings-section",l.innerHTML=`
      <div class="settings-row settings-pick-row">
        <div class="settings-label-wrap">
          <span class="settings-row-title">${this.escHtml(n.languageTitle)}</span>
          <span class="settings-help-wrap">
            <button type="button" class="settings-help-btn" aria-expanded="false" aria-label="${this.escAttr(n.languageHelpAria)}" aria-describedby="instruckt-settings-help-locale">${nt}</button>
            <div id="instruckt-settings-help-locale" class="settings-help-popover" role="tooltip"></div>
          </span>
        </div>
        <button type="button" class="settings-value-toggle settings-locale-cycle" aria-label="${this.escAttr(n.languageCycleAria)}">
          <span class="value-name">${this.escHtml(J(e))}</span>
          ${this.buildSettingsCycleDotsHtml(S.length,Math.max(0,S.indexOf(e)))}
        </button>
      </div>
    `,l.querySelector("#instruckt-settings-help-locale").textContent=n.languageHelp,l.querySelector(".settings-locale-cycle")?.addEventListener("click",h=>{h.stopPropagation();const p=this.settings?.getUiLocale()??"zh-CN";let m=S.indexOf(p);m<0&&(m=0);const g=S[(m+1)%S.length];this.settings?.setUiLocale(g),this.syncLocaleCycleUI(!0)}),t.appendChild(l),t.appendChild(this.makeSettingsDivider());const u=(this.settings?.getMarkerDefaultHex?.()??"#6366f1").toLowerCase(),c=document.createElement("div");c.className="settings-section settings-color-section",c.innerHTML=`<div class="settings-color-head">${this.escHtml(n.markerColorTitle)}</div>
      <div class="settings-color-swatches"></div>`;const d=c.querySelector(".settings-color-swatches");for(const h of we){const p=document.createElement("button");p.type="button",p.className="settings-color-swatch",p.dataset.hex=h,p.style.setProperty("--swatch",h),p.setAttribute("aria-label",h),p.setAttribute("aria-pressed",h.toLowerCase()===u?"true":"false"),h.toLowerCase()===u&&p.classList.add("is-selected"),p.addEventListener("click",m=>{m.stopPropagation(),this.settings?.setMarkerDefaultHex?.(h)}),d.appendChild(p)}t.appendChild(c),t.appendChild(this.makeSettingsDivider());const f=document.createElement("div");f.className="settings-section settings-modes-section",f.innerHTML=`
      <div class="settings-mode-row" data-mode="all">
        <button type="button" class="settings-mode-main" aria-pressed="${o?"true":"false"}">
          <span class="settings-check-ui" aria-hidden="true"></span>
          <span class="settings-mode-label">${this.escHtml(n.markerAll)}</span>
        </button>
      </div>
      <div class="settings-mode-row" data-mode="current-page">
        <button type="button" class="settings-mode-main" aria-pressed="${r?"true":"false"}">
          <span class="settings-check-ui" aria-hidden="true"></span>
          <span class="settings-mode-label">${this.escHtml(n.markerCurrentPage)}</span>
        </button>
      </div>
    `,f.querySelectorAll(".settings-mode-main").forEach(h=>{h.addEventListener("click",p=>{p.stopPropagation();const g=h.closest(".settings-mode-row")?.dataset.mode;if(g==="all"){const b=this.settings?.getMarkerShowAll?.()??!1;this.settings?.setMarkerShowAll?.(!b)}else if(g==="current-page"){const b=this.settings?.getMarkerShowCurrentPage?.()??!0;this.settings?.setMarkerShowCurrentPage?.(!b)}this.syncMarkerDisplayModeUI()})}),t.appendChild(f),this.bindSettingsHelpHover(t),this.syncMarkerDisplayModeUI()}makeSettingsDivider(){const t=document.createElement("div");return t.className="settings-list-divider",t.setAttribute("role","presentation"),t}syncMarkerDisplayModeUI(){if(!this.settingsPanel||!this.settings)return;const t=this.settings.getMarkerShowCurrentPage,e=this.settings.getMarkerShowAll;if(typeof t!="function"||typeof e!="function")return;const n=t(),s=e();this.settingsPanel.querySelectorAll(".settings-mode-row").forEach(o=>{const r=o,a=r.dataset.mode;a==="all"?(r.classList.toggle("is-selected",s),r.querySelector(".settings-mode-main")?.setAttribute("aria-pressed",s?"true":"false")):a==="current-page"&&(r.classList.toggle("is-selected",n),r.querySelector(".settings-mode-main")?.setAttribute("aria-pressed",n?"true":"false"))})}positionSettingsHelpPopover(t){const e=t.querySelector(".settings-help-popover"),n=t.querySelector(".settings-help-btn");if(!e||!n)return;e.classList.add("is-fixed-placement"),Object.assign(e.style,{visibility:"hidden",opacity:"0",pointerEvents:"none",left:"-9999px",top:"0"});const s=e.offsetWidth,o=e.offsetHeight,r=n.getBoundingClientRect(),a=8,l=window.innerHeight,u=window.innerWidth;let c=r.bottom+a;c+o>l-a&&(c=r.top-o-a),c=Math.max(a,Math.min(c,l-o-a));let d=r.left;d=Math.max(a,Math.min(d,u-s-a)),Object.assign(e.style,{left:`${d}px`,top:`${c}px`,bottom:"auto",right:"auto",visibility:"",opacity:"",pointerEvents:""})}resetSettingsHelpPopover(t){const e=t.querySelector(".settings-help-popover");e&&(e.classList.remove("is-fixed-placement"),e.style.position="",e.style.left="",e.style.top="",e.style.bottom="",e.style.right="",e.style.visibility="",e.style.opacity="",e.style.pointerEvents="")}dismissSettingsHelpPopovers(){this.settingsHelpCloseTimer!=null&&(clearTimeout(this.settingsHelpCloseTimer),this.settingsHelpCloseTimer=null);const t=this.settingsPanel?.querySelector(".panel-body");t&&t.querySelectorAll(".settings-help-wrap").forEach(e=>{const n=e;n.classList.remove("is-help-open"),n.querySelector(".settings-help-btn")?.setAttribute("aria-expanded","false"),this.resetSettingsHelpPopover(n)})}boundDismissHelpOnBodyMouseDown=t=>{const e=t.target;!e||typeof e.closest!="function"||e.closest(".settings-help-wrap")||this.dismissSettingsHelpPopovers()};bindSettingsHelpHover(t){t.removeEventListener("mousedown",this.boundDismissHelpOnBodyMouseDown,!0),t.addEventListener("mousedown",this.boundDismissHelpOnBodyMouseDown,!0);const e=[...t.querySelectorAll(".settings-help-wrap")],n=()=>{this.settingsHelpCloseTimer!=null&&(clearTimeout(this.settingsHelpCloseTimer),this.settingsHelpCloseTimer=null)};e.forEach(s=>{const o=s.querySelector(".settings-help-btn");if(!o)return;const r=()=>{n();for(const u of e){const c=u===s;u.classList.toggle("is-help-open",c),u.querySelector(".settings-help-btn")?.setAttribute("aria-expanded",c?"true":"false"),c?this.positionSettingsHelpPopover(u):this.resetSettingsHelpPopover(u)}},a=()=>{n(),this.settingsHelpCloseTimer=window.setTimeout(()=>{this.settingsHelpCloseTimer=null,!s.matches(":hover")&&!l?.matches(":hover")&&(s.classList.remove("is-help-open"),o.setAttribute("aria-expanded","false"),this.resetSettingsHelpPopover(s))},200)},l=s.querySelector(".settings-help-popover");s.addEventListener("mouseenter",n),s.addEventListener("mouseleave",a),o.addEventListener("mouseenter",r),o.addEventListener("focus",r),l?.addEventListener("mouseenter",r),l?.addEventListener("mouseleave",a),o.addEventListener("blur",()=>{window.setTimeout(()=>{s.contains(document.activeElement)||(s.classList.remove("is-help-open"),o.setAttribute("aria-expanded","false"),this.resetSettingsHelpPopover(s))},0)}),o.addEventListener("keydown",u=>{u.key==="Escape"&&(s.classList.remove("is-help-open"),o.setAttribute("aria-expanded","false"),this.resetSettingsHelpPopover(s))})})}escAttr(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/\r?\n/g," ")}escHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}buildSettingsCycleDotsHtml(t,e){const n=Math.max(0,Math.min(e,t-1)),s=[];for(let o=0;o<t;o++)s.push(`<span class="settings-cycle-dot${o===n?" is-on":""}"></span>`);return`<span class="settings-cycle-dots" data-total="${t}" data-active="${n}" aria-hidden="true">${s.join("")}</span>`}syncOutputCycleUI(t=!1){if(!this.settingsPanel)return;const e=this.settings?.getOutputFormat()??"standard",n=Math.max(0,A.indexOf(e)),s=this.settingsPanel.querySelector(".settings-output-cycle");if(!s)return;const o=this.settings?.getUiLocale?.()??"zh-CN",r=I(o,this.keys),a=s.querySelector(".value-name");a&&(a.textContent=r.formatLabel[e]),this.applyCycleDots(s,A.length,n,t)}syncLocaleCycleUI(t=!1){if(!this.settingsPanel)return;const e=this.settings?.getUiLocale?.()??"zh-CN",n=Math.max(0,S.indexOf(e)),s=this.settingsPanel.querySelector(".settings-locale-cycle");if(!s)return;const o=s.querySelector(".value-name");o&&(o.textContent=J(e)),this.applyCycleDots(s,S.length,n,t)}applyCycleDots(t,e,n,s){const o=Math.max(0,Math.min(n,e-1));let r=t.querySelector(".settings-cycle-dots");if(r||(t.insertAdjacentHTML("beforeend",this.buildSettingsCycleDotsHtml(e,o)),r=t.querySelector(".settings-cycle-dots")),r.dataset.total=String(e),r.dataset.active=String(o),r.querySelectorAll(".settings-cycle-dot").forEach((a,l)=>{a.classList.toggle("is-on",l===o)}),s){r.classList.remove("is-switching"),r.offsetWidth,r.classList.add("is-switching");const a=t.querySelector(".value-name");a&&(a.classList.remove("is-switching"),a.offsetWidth,a.classList.add("is-switching")),r.addEventListener("animationend",()=>r.classList.remove("is-switching"),{once:!0}),a?.addEventListener("animationend",()=>a.classList.remove("is-switching"),{once:!0})}}selectOutputFormat(t,e=!1){this.settingsPanel&&(this.settings?.setOutputFormat(t),this.syncOutputCycleUI(e))}toggleSettings(){this.settingsOpen?this.closeSettings():this.openSettings()}applySettingsPanelWidth(){if(!this.settingsPanel)return;const t=`${ue}px`;Object.assign(this.settingsPanel.style,{width:t,minWidth:t,maxWidth:t,boxSizing:"border-box"})}openSettings(){!this.settingsPanel||!this.settingsBtn||(this.settingsOpen=!0,this.settingsBtn.classList.add("active"),this.applySettingsPanelWidth(),this.settingsPanel.style.display="block",this.positionSettingsPanel(),document.addEventListener("mousedown",this.boundOutsideClick,!0))}closeSettings(){this.settingsPanel&&(this.dismissSettingsHelpPopovers(),this.settingsOpen=!1,this.settingsBtn?.classList.remove("active"),this.settingsPanel.style.display="none",document.removeEventListener("mousedown",this.boundOutsideClick,!0))}boundOutsideClick=t=>{this.host.contains(t.target)||this.closeSettings()};positionSettingsPanel(){if(!this.settingsPanel||!this.settingsBtn)return;Object.assign(this.settingsPanel.style,{display:"block",left:"-9999px",top:"0px"});const t=this.settingsPanel.getBoundingClientRect(),e=t.width,n=t.height,s=this.toolbarEl.getBoundingClientRect(),o=this.settingsBtn.getBoundingClientRect(),r=window.innerWidth,a=window.innerHeight,l=w.EDGE_INSET_PX,u=8;let c;s.left-u-e>=l?c=s.left-u-e:s.right+u+e+l<=r?c=s.right+u:c=Math.max(l,Math.min(s.left,r-e-l));let d=o.top+o.height/2-n/2;a-l-(d+n)<0&&(d=Math.min(s.bottom-n,a-l-n)),d=Math.max(l,Math.min(d,a-n-l)),Object.assign(this.settingsPanel.style,{left:`${c}px`,top:`${d}px`});const h=this.settingsPanel.querySelector(".settings-help-wrap.is-help-open");h&&this.positionSettingsHelpPopover(h)}updateFabBadge(){this.totalCount>0&&this.minimized?(this.fabBadge||(this.fabBadge=document.createElement("span"),this.fabBadge.className="fab-badge",this.fab.appendChild(this.fabBadge)),this.fabBadge.textContent=this.totalCount>99?"99+":String(this.totalCount)):(this.fabBadge?.remove(),this.fabBadge=null)}isMinimized(){return this.minimized}minimize(){this.minimized||(this.applyMinimizedLayout(!0),this.closeSettings(),this.updateFabBadge())}restore(){this.minimized&&(this.applyMinimizedLayout(!1),this.updateFabBadge())}setAnnotateActive(t){this.annotateActive=t,this.annotateBtn.classList.toggle("active",t),document.body.classList.toggle("ik-annotating",t)}setFreezeActive(t){this.freezeActive=t,this.freezeBtn.classList.toggle("active",t)}setMode(t){this.setAnnotateActive(t==="annotating")}setAnnotationCount(t){let e=this.annotateBtn.querySelector(".badge");t>0?(e||(e=document.createElement("span"),e.className="badge",this.annotateBtn.appendChild(e)),e.textContent=t>99?"99+":String(t)):e?.remove()}setTotalCount(t){this.totalCount=t,this.updateFabBadge()}setHidden(t){this.host&&(this.host.style.display=t?"none":"")}isHidden(){return this.host?.style.display==="none"}destroy(){if(this.activePointerId!==null)try{this.host.releasePointerCapture(this.activePointerId)}catch{}this.dragPointer=null,this.dragMoved=!1,this.activePointerId=null,document.removeEventListener("mousedown",this.boundOutsideClick,!0),this.settingsPanel?.querySelector(".panel-body")?.removeEventListener("mousedown",this.boundDismissHelpOnBodyMouseDown,!0),this.dismissSettingsHelpPopovers(),this.host.removeEventListener("pointermove",this.onDragPointerMove),window.removeEventListener("mouseup",this.boundEndDrag),window.removeEventListener("blur",this.boundEndDrag),window.removeEventListener("resize",this.boundLayoutSync),document.removeEventListener("scroll",this.boundLayoutSync,{capture:!0}),window.visualViewport?.removeEventListener("resize",this.boundLayoutSync),window.visualViewport?.removeEventListener("scroll",this.boundLayoutSync),this.layoutSyncRaf!==null&&(cancelAnimationFrame(this.layoutSyncRaf),this.layoutSyncRaf=null),this.host.remove(),document.body.classList.remove("ik-annotating")}}class it{el;constructor(){this.el=document.createElement("div"),Object.assign(this.el.style,{position:"fixed",pointerEvents:"none",zIndex:"2147483644",boxSizing:"border-box",border:"2px solid rgba(99,102,241,0.7)",background:"rgba(99,102,241,0.1)",borderRadius:"3px",transition:"all 0.06s ease",display:"none"}),this.el.setAttribute("data-instruckt","highlight"),(document.getElementById("instruckt-root")??document.body).appendChild(this.el)}show(t){const e=pe();Object.assign(this.el.style,{border:`2px solid rgba(${e},0.55)`,background:`rgba(${e},0.1)`});const n=t.getBoundingClientRect();if(n.width===0&&n.height===0){this.hide();return}Object.assign(this.el.style,{display:"block",left:`${n.left}px`,top:`${n.top}px`,width:`${n.width}px`,height:`${n.height}px`})}hide(){this.el.style.display="none"}destroy(){this.el.remove()}}function v(i){return String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Ce{constructor(t=()=>"zh-CN"){this.getLocale=t}host=null;shadow=null;onEditDismiss;showNew(t,e){this.destroy();const n=Q(this.getLocale());this.host=document.createElement("div"),this.host.setAttribute("data-instruckt","popup"),this.stopHostPropagation(this.host),this.shadow=this.host.attachShadow({mode:"open"});const s=document.createElement("style");s.textContent=tt,this.shadow.appendChild(s);const o=document.createElement("div");o.className="popup";const r=t.framework?`<div class="fw-badge">${v(t.framework.component)}</div>`:"",a=t.selectedText?`<div class="selected-text">"${v(t.selectedText.slice(0,80))}"</div>`:"";o.innerHTML=`
      <div class="header">
        <span class="element-tag" title="${v(t.elementPath)}">${v(t.elementLabel)}</span>
        <button class="close-btn" title="${v(n.cancelEscTitle)}">✕</button>
      </div>
      ${r}${a}
      <textarea placeholder="${v(n.placeholder)}" rows="3"></textarea>
      <div class="actions">
        <button class="btn-secondary" data-action="cancel">${v(n.cancel)}</button>
        <button class="btn-primary" data-action="submit" disabled>${v(n.addNote)}</button>
      </div>
    `;const l=o.querySelector("textarea"),u=o.querySelector('[data-action="submit"]'),c=()=>{u.disabled=l.value.trim().length===0};l.addEventListener("input",c),l.addEventListener("keydown",d=>{d.stopPropagation(),d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),u.disabled||u.click()),d.key==="Escape"&&(e.onCancel(),this.destroy())}),o.querySelector('[data-action="cancel"]').addEventListener("click",()=>{e.onCancel(),this.destroy()}),o.querySelector(".close-btn").addEventListener("click",()=>{e.onCancel(),this.destroy()}),u.addEventListener("click",()=>{const d=l.value.trim();d&&(e.onSubmit({comment:d}),this.destroy())}),this.shadow.appendChild(o),(document.getElementById("instruckt-root")??document.body).appendChild(this.host),this.positionHost(t.x,t.y),this.setupOutsideClick(),l.focus()}showEdit(t,e,n){this.destroy(),this.onEditDismiss=e.onDismiss;const s=Q(this.getLocale());this.host=document.createElement("div"),this.host.setAttribute("data-instruckt","popup"),this.stopHostPropagation(this.host),this.shadow=this.host.attachShadow({mode:"open"});const o=document.createElement("style");o.textContent=tt,this.shadow.appendChild(o);const r=document.createElement("div");r.className="popup";const a=t.framework?`<div class="fw-badge">${v(t.framework.component)}</div>`:"";r.innerHTML=`
      <div class="header">
        <span class="element-tag" title="${v(t.elementPath)}">${v(t.element)}</span>
        <button class="close-btn" title="${v(s.closeAria)}">✕</button>
      </div>
      ${a}
      <textarea rows="3">${v(t.comment)}</textarea>
      <div class="actions">
        <button class="btn-danger" data-action="delete">${v(s.remove)}</button>
        <button class="btn-primary" data-action="save">${v(s.save)}</button>
      </div>
    `,r.querySelector(".close-btn").addEventListener("click",()=>this.destroy());const l=r.querySelector("textarea"),u=r.querySelector('[data-action="save"]'),c=r.querySelector('[data-action="delete"]');l.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),u.click()),h.key==="Escape"&&this.destroy()}),u.addEventListener("click",()=>{const h=l.value.trim();h&&(e.onSave(t,h),this.destroy())}),c.addEventListener("click",()=>{e.onDelete(t),this.destroy()}),this.shadow.appendChild(r),(document.getElementById("instruckt-root")??document.body).appendChild(this.host);const d=t.x/100*window.innerWidth,f=t.y-window.scrollY;this.positionHost(d,f,n??void 0),this.setupOutsideClick(),l.focus(),l.setSelectionRange(l.value.length,l.value.length)}stopHostPropagation(t){for(const e of["click","mousedown","pointerdown","keydown","keyup","keypress","submit"])t.addEventListener(e,n=>n.stopPropagation())}positionHost(t,e,n){if(this.host){this.host.setAttribute("popover","manual");try{this.host.showPopover()}catch{}Object.assign(this.host.style,{position:"fixed",zIndex:"2147483647",left:"-9999px",top:"0"}),requestAnimationFrame(()=>{if(!this.host)return;let s=t,o=e,r=null;if(n?.isConnected){const p=n.getBoundingClientRect();p.width>0&&p.height>0&&(r=p,s=p.left+p.width/2,o=p.top+p.height/2)}const a=window.innerWidth,l=window.innerHeight,u=this.host.querySelector(".popup")?.getBoundingClientRect(),c=Math.max(this.host.getBoundingClientRect().width,u?.width??340,300),d=Math.max(this.host.getBoundingClientRect().height,u?.height??280,120);let f,h;if(r){const p=this.computePopupPositionClearOfMarker(r,c,d,a,l);f=p.left,h=p.top}else{const m=u?.height??300;f=Math.max(10,Math.min(s+10,a-360)),h=Math.max(10,Math.min(o+10,l-m-10))}Object.assign(this.host.style,{left:`${f}px`,top:`${h}px`})})}}computePopupPositionClearOfMarker(t,e,n,s,o){const a={left:t.left-8,top:t.top-8,right:t.right+8,bottom:t.bottom+8},l=(h,p)=>{const m=h+e,g=p+n;return!(m<=a.left||h>=a.right||g<=a.top||p>=a.bottom)},u=(h,p)=>({left:Math.max(10,Math.min(h,s-e-10)),top:Math.max(10,Math.min(p,o-n-10))}),c=t.left+t.width/2,d=t.top+t.height/2,f=[{left:a.right,top:d-n/2},{left:a.left-e,top:d-n/2},{left:c-e/2,top:a.bottom},{left:c-e/2,top:a.top-n}];for(const h of f){const p=u(h.left,h.top);if(!l(p.left,p.top))return p}return u(a.right,d-n/2)}boundOutside=t=>{this.host&&!this.host.contains(t.target)&&this.destroy()};setupOutsideClick(){setTimeout(()=>document.addEventListener("mousedown",this.boundOutside),0)}destroy(){const t=this.onEditDismiss;this.onEditDismiss=void 0;try{t?.()}catch{}this.host?.remove(),this.host=null,this.shadow=null,document.removeEventListener("mousedown",this.boundOutside)}}function Se(i){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(i):i.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}class O{constructor(t,e){this.onClick=t,this.getMarkerVisibility=e,this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"2147483645"}),this.container.setAttribute("data-instruckt","markers"),(document.getElementById("instruckt-root")??document.body).appendChild(this.container),this.spotlight=document.createElement("div"),this.spotlight.className="ik-spotlight",this.container.appendChild(this.spotlight),this.preview=document.createElement("div"),this.preview.className="ik-marker-preview",this.container.appendChild(this.preview)}container;markers=new Map;spotlight;preview;spotlightPinnedAnnotation=null;static EDIT_ICON=`
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
    </svg>
  `;findTarget(t){if(!t.elementPath||!this.belongsToCurrentPage(t))return null;try{const e=document.querySelector(t.elementPath);if(!e)return null;const n=e.getBoundingClientRect();return n.width===0&&n.height===0||Number.isNaN(n.left)?null:e}catch{return null}}belongsToCurrentPage(t){try{return new URL(t.url).pathname===window.location.pathname}catch{return t.url===window.location.href}}async revealHiddenTarget(t){try{const s=new URL(t.url,window.location.href),o=window.location,r=s.origin===o.origin,a=s.pathname===o.pathname&&s.hash===o.hash;if(r&&!a){const l=s.pathname+o.search+s.hash;try{history.pushState({instruckt:!0},"",l),window.dispatchEvent(new PopStateEvent("popstate",{state:history.state})),window.dispatchEvent(new Event("instruckt:locationchange"))}catch{window.location.assign(l);return}await new Promise(c=>setTimeout(c,350));const u=this.findTarget(t);u instanceof HTMLElement&&(u.scrollIntoView({block:"center",behavior:"smooth"}),await new Promise(c=>setTimeout(c,200)));return}}catch{}const e=this.findTarget(t);if(e instanceof HTMLElement){e.scrollIntoView({block:"center",behavior:"smooth"}),await new Promise(s=>setTimeout(s,420));return}const n=t.revealHost?.trim();if(n){const s=`[data-instruckt-open="${Se(n)}"]`,o=document.querySelector(s);o instanceof HTMLElement&&(o.click(),await new Promise(r=>setTimeout(r,120)))}}resolveRect(t){const e=this.findTarget(t);return e?e.getBoundingClientRect():null}clipsOverflow(t){if(t===document.documentElement||t===document.body)return!1;const e=window.getComputedStyle(t);return e.overflowX!=="visible"||e.overflowY!=="visible"}visibleRectFor(t){const e=t.getBoundingClientRect();if(e.width===0&&e.height===0||Number.isNaN(e.left))return null;let{left:n,top:s,right:o,bottom:r}=e,a=t.parentElement;for(;a&&a!==document.documentElement;){if(this.clipsOverflow(a)){const l=a.getBoundingClientRect();if(n=Math.max(n,l.left),s=Math.max(s,l.top),o=Math.min(o,l.right),r=Math.min(r,l.bottom),o<=n||r<=s)return null}a=a.parentElement}return new DOMRect(n,s,o-n,r-s)}showSpotlightFor(t){const e=this.findTarget(t);if(!e){this.hideSpotlight();return}const n=this.visibleRectFor(e);if(!n||n.width<=0||n.height<=0){this.hideSpotlight();return}this.spotlight.setAttribute("data-annotation-id",t.id),this.spotlight.className="ik-spotlight",Object.assign(this.spotlight.style,{display:"block",left:`${n.left}px`,top:`${n.top}px`,width:`${n.width}px`,height:`${n.height}px`})}hideSpotlight(){this.spotlight.style.display="none",this.spotlight.removeAttribute("data-annotation-id")}pinSpotlightForEdit(t){this.spotlightPinnedAnnotation=t,this.hidePreview(),this.showSpotlightFor(t)}unpinSpotlightForEdit(){this.spotlightPinnedAnnotation=null,this.hideSpotlight()}showPreviewFor(t,e,n){const s="Note",o=t.comment,r=t.framework?.component?`in ${t.framework.component}`:"",l=[t.element?t.element:"",r].filter(Boolean).join(" "),u=n?.ghost?'<div class="ghost-hint">Hidden — click marker to reveal or scroll into view.</div>':"";this.preview.innerHTML=`
      <div class="title">${this.esc(s)}</div>
      <div class="content">${this.esc(o).slice(0,240)}</div>
      ${l?`<div class="meta">${this.esc(l)}</div>`:""}
      ${u}
    `,this.preview.setAttribute("data-annotation-id",t.id);const c=e.getBoundingClientRect();this.preview.style.display="block";const d=window.innerWidth,f=window.innerHeight,h=10,p=10;Object.assign(this.preview.style,{left:"-9999px",top:"0px"});const m=this.preview.getBoundingClientRect().width,g=this.preview.getBoundingClientRect().height,b=c.left+c.width/2,Z=f-c.bottom,ie=c.top,se=Z>=g+p+h||Z>=ie?Math.min(c.bottom+p,f-g-h):Math.max(h,c.top-p-g),oe=Math.max(h,Math.min(b-m/2,d-m-h));Object.assign(this.preview.style,{left:`${oe}px`,top:`${se}px`})}hidePreview(){this.preview.style.display="none",this.preview.removeAttribute("data-annotation-id")}esc(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}legacyMarkerPosition(t){return{left:t.x/100*window.innerWidth,top:t.y-window.scrollY}}upsert(t,e){const n=this.markers.get(t.id);if(n){this.updateStyle(n.el,t),this.positionMarker(n.el,t);return}const s=document.createElement("div");s.className=`ik-marker ${this.statusClass(t.status)}`,s.innerHTML=`<span class="ik-marker-index">${e}</span><span class="ik-marker-edit">${O.EDIT_ICON}</span>`,s.title=t.comment.slice(0,60),s.style.pointerEvents="all",this.positionMarker(s,t),s.addEventListener("click",o=>{o.stopPropagation();const r=s.classList.contains("ik-marker-ghost");this.onClick(t,{ghost:r,anchorEl:s})}),s.addEventListener("mouseenter",()=>{const o=this.spotlightPinnedAnnotation!==null;s.classList.contains("ik-marker-ghost")?o||this.showPreviewFor(t,s,{ghost:!0}):(this.showSpotlightFor(t),o||this.showPreviewFor(t,s))}),s.addEventListener("mouseleave",()=>{const o=this.spotlightPinnedAnnotation;o?o.id!==t.id&&this.showSpotlightFor(o):this.hideSpotlight(),this.hidePreview()}),this.container.appendChild(s),this.markers.set(t.id,{el:s,annotationId:t.id})}positionMarker(t,e){t.classList.remove("ik-marker-ghost");const{showCurrentPageMarkers:n,showAllMarkers:s}=this.getMarkerVisibility(),{left:o,top:r}=this.legacyMarkerPosition(e),a=()=>{t.classList.add("ik-marker-ghost"),t.style.display="",t.style.left=`${o}px`,t.style.top=`${r}px`},l=(p,m)=>{t.classList.remove("ik-marker-ghost"),t.style.display="",t.style.left=`${p}px`,t.style.top=`${m}px`};if(!n&&!s){t.style.display="none";return}const u=this.findTarget(e);if(n&&!s){if(!u){t.style.display="none";return}const p=u.getBoundingClientRect(),m=this.visibleRectFor(u);if(!m){t.style.display="none";return}let g,b;if(typeof e.targetOffsetX=="number"&&typeof e.targetOffsetY=="number"?(g=p.left+e.targetOffsetX*p.width,b=p.top+e.targetOffsetY*p.height):(g=o,b=r),g<m.left||g>m.right||b<m.top||b>m.bottom){t.style.display="none";return}l(g,b);return}if(!n&&s){if(!u){a();return}const p=u.getBoundingClientRect(),m=this.visibleRectFor(u);let g,b;if(typeof e.targetOffsetX=="number"&&typeof e.targetOffsetY=="number"?(g=p.left+e.targetOffsetX*p.width,b=p.top+e.targetOffsetY*p.height):(g=o,b=r),m&&g>=m.left&&g<=m.right&&b>=m.top&&b<=m.bottom){t.style.display="none";return}a();return}if(!u){a();return}const c=u.getBoundingClientRect(),d=this.visibleRectFor(u);let f,h;typeof e.targetOffsetX=="number"&&typeof e.targetOffsetY=="number"?(f=c.left+e.targetOffsetX*c.width,h=c.top+e.targetOffsetY*c.height):(f=o,h=r),d&&f>=d.left&&f<=d.right&&h>=d.top&&h<=d.bottom?l(f,h):a()}update(t){const e=this.markers.get(t.id);e&&(this.updateStyle(e.el,t),this.positionMarker(e.el,t))}updateStyle(t,e){const n=t.classList.contains("ik-marker-ghost");t.className=`ik-marker ${this.statusClass(e.status)}${n?" ik-marker-ghost":""}`,t.title=e.comment.slice(0,60)}statusClass(t){return t==="resolved"?"resolved":t==="dismissed"?"dismissed":""}reposition(t){if(this.spotlightPinnedAnnotation){const e=t.find(n=>n.id===this.spotlightPinnedAnnotation.id);e?this.spotlightPinnedAnnotation=e:this.spotlightPinnedAnnotation=null}if(t.forEach(e=>{const n=this.markers.get(e.id);n&&this.positionMarker(n.el,e)}),this.spotlight.style.display!=="none"){const e=this.spotlight.getAttribute("data-annotation-id");if(e){const n=t.find(s=>s.id===e);n&&this.showSpotlightFor(n)}}if(this.preview.style.display!=="none"&&!this.spotlightPinnedAnnotation){const e=this.preview.getAttribute("data-annotation-id");if(e){const n=this.markers.get(e)?.el,s=t.find(o=>o.id===e);if(n&&s&&n.style.display!=="none"){const o=n.classList.contains("ik-marker-ghost");this.showPreviewFor(s,n,o?{ghost:!0}:void 0)}else this.hidePreview()}}}currentPageIds(){const t=[];for(const[e,n]of this.markers)!n.el.classList.contains("ik-marker-ghost")&&n.el.style.display!=="none"&&t.push(e);return t}remove(t){const e=this.markers.get(t);e&&(e.el.remove(),this.markers.delete(t),this.spotlightPinnedAnnotation?.id===t&&(this.spotlightPinnedAnnotation=null,this.hideSpotlight(),this.hidePreview()))}setVisible(t){this.container.style.display=t?"":"none",t||(this.spotlightPinnedAnnotation=null,this.hideSpotlight(),this.hidePreview())}clear(){for(const{el:t}of this.markers.values())t.remove();this.markers.clear(),this.spotlightPinnedAnnotation=null,this.hideSpotlight(),this.hidePreview()}destroy(){this.spotlightPinnedAnnotation=null,this.container.remove(),this.markers.clear()}}function Ee(i){if(i.id)return`#${CSS.escape(i.id)}`;const t=[];let e=i;for(;e&&e!==document.documentElement;){const n=e.tagName.toLowerCase(),s=e.parentElement;if(!s){t.unshift(n);break}const o=Array.from(e.classList).filter(a=>!a.match(/^(hover|focus|active|visited|is-|has-)/)).slice(0,3);if(o.length>0){const a=`${n}.${o.map(CSS.escape).join(".")}`;if(s.querySelectorAll(a).length===1){t.unshift(a);break}}const r=Array.from(s.children).filter(a=>a.tagName===e.tagName);if(r.length===1)t.unshift(n);else{const a=r.indexOf(e)+1;t.unshift(`${n}:nth-of-type(${a})`)}e=s}return t.join(" > ")}function Ae(i){const t=i.tagName.toLowerCase(),e=i.getAttribute("wire:model")||i.getAttribute("wire:click");if(e)return`${t}[wire:${e.split(".")[0]}]`;if(i.id)return`${t}#${i.id}`;const n=i.classList[0];return n?`${t}.${n}`:t}function Pe(i){const t=i.tagName.toLowerCase(),e=(i.textContent||"").trim().replace(/\s+/g," ").slice(0,40),n=[];i.id&&n.push(`id="${i.id}"`);const s=i.getAttribute("role");s&&n.push(`role="${s}"`);const o=i.getAttribute("wire:model")||i.getAttribute("wire:click");o&&n.push(`wire:${i.hasAttribute("wire:model")?"model":"click"}="${o}"`);const r=n.length?" "+n.join(" "):"",a=`<${t}${r}>`;return e?`${a} ${e}`:a}function Le(i){return(i.textContent||"").trim().replace(/\s+/g," ").slice(0,120)}function Ne(i){return Array.from(i.classList).filter(t=>!t.match(/^(instruckt-)/)).join(" ")}function Me(i){const t=i.getBoundingClientRect();return{x:t.left+window.scrollX,y:t.top+window.scrollY,width:t.width,height:t.height}}/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Te="0.5.32",At=`bippy-${Te}`,st=Object.defineProperty,He=Object.prototype.hasOwnProperty,T=()=>{},Pt=i=>{try{Function.prototype.toString.call(i).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},Lt=(i=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(i&&"getFiberRoots"in i);let Nt=!1,ot;const j=(i=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>Nt?!0:(i&&typeof i.inject=="function"&&(ot=i.inject.toString()),!!ot?.includes("(injected)")),U=new Set,H=new Set,_e=i=>{let t=new Map,e=0,n={_instrumentationIsActive:!1,_instrumentationSource:At,checkDCE:Pt,hasUnsupportedRendererAttached:!1,inject(s){let o=++e;return t.set(o,s),H.add(s),n._instrumentationIsActive||(n._instrumentationIsActive=!0,U.forEach(r=>r())),o},on:T,onCommitFiberRoot:T,onCommitFiberUnmount:T,onPostCommitFiberRoot:T,renderers:t,supportsFiber:!0,supportsFlight:!0};try{st(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return n},set(r){if(r&&typeof r=="object"){let a=n.renderers;n=r,a.size>0&&(a.forEach((l,u)=>{H.add(l),r.renderers.set(u,l)}),q(i))}}});let s=window.hasOwnProperty,o=!1;st(window,"hasOwnProperty",{configurable:!0,value:function(...r){try{if(!o&&r[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,o=!0,-0}catch{}return s.apply(this,r)},writable:!0})}catch{q(i)}return n},q=i=>{try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=Pt,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=At,t._instrumentationIsActive=!1;let e=Lt(t);if(e||(t.on=T),t.renderers.size){t._instrumentationIsActive=!0,U.forEach(o=>o());return}let n=t.inject,s=j(t);s&&!e&&(Nt=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=o=>{let r=n(o);return H.add(o),s&&t.renderers.set(r,o),t._instrumentationIsActive=!0,U.forEach(a=>a()),r}}(t.renderers.size||t._instrumentationIsActive||j())&&i?.()}catch{}},Oe=()=>He.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),Mt=i=>Oe()?(q(i),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):_e(i),$e=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),Re=()=>{try{$e()&&Mt()}catch{}};/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Re();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ze=0,Ie=1,Fe=5,Be=11,De=13,Ve=15,je=16,Ue=19,qe=26,We=27,Ke=28,Ge=30,Ye=i=>{switch(i.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function Tt(i,t,e=!1){if(!i)return null;let n=t(i);if(n instanceof Promise)return(async()=>{if(await n===!0)return i;let o=e?i.return:i.child;for(;o;){let r=await _t(o,t,e);if(r)return r;o=e?null:o.sibling}return null})();if(n===!0)return i;let s=e?i.return:i.child;for(;s;){let o=Ht(s,t,e);if(o)return o;s=e?null:s.sibling}return null}const Ht=(i,t,e=!1)=>{if(!i)return null;if(t(i)===!0)return i;let n=e?i.return:i.child;for(;n;){let s=Ht(n,t,e);if(s)return s;n=e?null:n.sibling}return null},_t=async(i,t,e=!1)=>{if(!i)return null;if(await t(i)===!0)return i;let n=e?i.return:i.child;for(;n;){let s=await _t(n,t,e);if(s)return s;n=e?null:n.sibling}return null},Ot=i=>{let t=i;return typeof t=="function"?t:typeof t=="object"&&t?Ot(t.type||t.render):null},$=i=>{let t=i;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;let e=t.displayName||t.name||null;if(e)return e;let n=Ot(t);return n&&(n.displayName||n.name)||null},G=()=>{let i=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!i?._instrumentationIsActive||Lt(i)||j(i)},R=i=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let e of t.renderers.values())try{let n=e.findFiberByHostInstance?.(i);if(n)return n}catch{}if(typeof i=="object"&&i){if("_reactRootContainer"in i)return i._reactRootContainer?._internalRoot?.current?.child;for(let e in i)if(e.startsWith("__reactContainer$")||e.startsWith("__reactInternalInstance$")||e.startsWith("__reactFiber"))return i[e]||null}return null};/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const rt=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,Xe=["rsc://","file:///","webpack://","webpack-internal://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],Ze=["<anonymous>","eval",""],$t=/\.(jsx|tsx|ts|js)$/,Je=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,Qe=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,Rt="(at Server)",tn=/(^|@)\S+:\d+/,en=/^\s*at .*(\S+:\d+|\(native\))/m,nn=/^(eval@)?(\[native code\])?$/,Y=(i,t)=>{{let e=i.split(`
`),n=[];for(let s of e)if(/^\s*at\s+/.test(s)){let o=sn(s,void 0)[0];o&&n.push(o)}else if(/^\s*in\s+/.test(s)){let o=s.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");n.push({functionName:o,source:s})}else if(s.match(tn)){let o=on(s,void 0)[0];o&&n.push(o)}return X(n,t)}},zt=i=>{if(!i.includes(":"))return[i,void 0,void 0];let t=i.startsWith("(")&&/:\d+\)$/.test(i)?i.slice(1,-1):i,e=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return e?[e[1],e[2]||void 0,e[3]||void 0]:[t,void 0,void 0]},X=(i,t)=>t&&t.slice!=null?Array.isArray(t.slice)?i.slice(t.slice[0],t.slice[1]):i.slice(0,t.slice):i,sn=(i,t)=>X(i.split(`
`).filter(e=>!!e.match(en)),t).map(e=>{let n=e;n.includes("(eval ")&&(n=n.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let s=n.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),o=s.match(/ (\(.+\)$)/);s=o?s.replace(o[0],""):s;let r=zt(o?o[1]:s);return{functionName:o&&s||void 0,fileName:["eval","<anonymous>"].includes(r[0])?void 0:r[0],lineNumber:r[1]?+r[1]:void 0,columnNumber:r[2]?+r[2]:void 0,source:n}}),on=(i,t)=>X(i.split(`
`).filter(e=>!e.match(nn)),t).map(e=>{let n=e;if(n.includes(" > eval")&&(n=n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!n.includes("@")&&!n.includes(":"))return{functionName:n};{let s=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,o=n.match(s),r=o&&o[1]?o[1]:void 0,a=zt(n.replace(s,""));return{functionName:r,fileName:a[0],lineNumber:a[1]?+a[1]:void 0,columnNumber:a[2]?+a[2]:void 0,source:n}}});var rn=44,at="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",an=new Uint8Array(64),It=new Uint8Array(128);for(let i=0;i<at.length;i++){let t=at.charCodeAt(i);an[i]=t,It[t]=i}function N(i,t){let e=0,n=0,s=0;do s=It[i.next()],e|=(s&31)<<n,n+=5;while(s&32);let o=e&1;return e>>>=1,o&&(e=-2147483648|-e),t+e}function lt(i,t){return i.pos>=t?!1:i.peek()!==rn}var ln=class{constructor(i){this.pos=0,this.buffer=i}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(i){let{buffer:t,pos:e}=this,n=t.indexOf(i,e);return n===-1?t.length:n}};function Ft(i){let{length:t}=i,e=new ln(i),n=[],s=0,o=0,r=0,a=0,l=0;do{let u=e.indexOf(";"),c=[],d=!0,f=0;for(s=0;e.pos<u;){let h;s=N(e,s),s<f&&(d=!1),f=s,lt(e,u)?(o=N(e,o),r=N(e,r),a=N(e,a),lt(e,u)?(l=N(e,l),h=[s,o,r,a,l]):h=[s,o,r,a]):h=[s],c.push(h),e.pos++}d||cn(c),n.push(c),e.pos=u+1}while(e.pos<=t);return n}function cn(i){i.sort(un)}function un(i,t){return i[0]-t[0]}const Bt=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,dn=/^data:application\/json[^,]+base64,/,hn=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,Dt=typeof WeakRef<"u",M=new Map,_=new Map,pn=i=>Dt&&i instanceof WeakRef,ct=(i,t,e,n)=>{if(e<0||e>=i.length)return null;let s=i[e];if(!s||s.length===0)return null;let o=null;for(let c of s)if(c[0]<=n)o=c;else break;if(!o||o.length<4)return null;let[,r,a,l]=o;if(r===void 0||a===void 0||l===void 0)return null;let u=t[r];return u?{columnNumber:l,fileName:u,lineNumber:a+1}:null},fn=(i,t,e)=>{if(i.sections){let n=null;for(let r of i.sections)if(t>r.offset.line||t===r.offset.line&&e>=r.offset.column)n=r;else break;if(!n)return null;let s=t-n.offset.line,o=t===n.offset.line?e-n.offset.column:e;return ct(n.map.mappings,n.map.sources,s,o)}return ct(i.mappings,i.sources,t-1,e)},mn=(i,t)=>{let e=t.split(`
`),n;for(let o=e.length-1;o>=0&&!n;o--){let r=e[o].match(hn);r&&(n=r[1]||r[2])}if(!n)return null;let s=Bt.test(n);if(!(dn.test(n)||s||n.startsWith("/"))){let o=i.split("/");o[o.length-1]=n,n=o.join("/")}return n},gn=i=>({file:i.file,mappings:Ft(i.mappings),names:i.names,sourceRoot:i.sourceRoot,sources:i.sources,sourcesContent:i.sourcesContent,version:3}),bn=i=>{let t=i.sections.map(({map:n,offset:s})=>({map:{...n,mappings:Ft(n.mappings)},offset:s})),e=new Set;for(let n of t)for(let s of n.map.sources)e.add(s);return{file:i.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(e),sourcesContent:void 0,version:3}},ut=i=>{if(!i)return!1;let t=i.trim();if(!t)return!1;let e=t.match(Bt);if(!e)return!0;let n=e[0].toLowerCase();return n==="http:"||n==="https:"},vn=async(i,t=fetch)=>{if(!ut(i))return null;let e;try{let s=await t(i);if(!s.ok)return null;e=await s.text()}catch{return null}if(!e)return null;let n=mn(i,e);if(!n||!ut(n))return null;try{let s=await t(n);if(!s.ok)return null;let o=await s.json();return"sections"in o?bn(o):gn(o)}catch{return null}},yn=async(i,t=!0,e)=>{if(t&&M.has(i)){let o=M.get(i);if(o==null)return null;if(pn(o)){let r=o.deref();if(r)return r;M.delete(i)}else return o}if(t&&_.has(i))return _.get(i);let n=vn(i,e);t&&_.set(i,n);let s=await n;return t&&_.delete(i),t&&(s===null?M.set(i,null):M.set(i,Dt?new WeakRef(s):s)),s},kn=async(i,t=!0,e)=>await Promise.all(i.map(async n=>{if(!n.fileName)return n;let s=await yn(n.fileName,t,e);if(!s||typeof n.lineNumber!="number"||typeof n.columnNumber!="number")return n;let o=fn(s,n.lineNumber,n.columnNumber);return o?{...n,source:o.fileName&&n.source?n.source.replace(n.fileName,o.fileName):n.source,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber,isSymbolicated:!0}:n})),Vt=i=>i._debugStack instanceof Error&&typeof i._debugStack?.stack=="string",wn=()=>{let i=Mt();for(let t of[...Array.from(H),...Array.from(i.renderers.values())]){let e=t.currentDispatcherRef;if(e&&typeof e=="object")return"H"in e?e.H:e.current}return null},dt=i=>{for(let t of H){let e=t.currentDispatcherRef;e&&typeof e=="object"&&("H"in e?e.H=i:e.current=i)}},x=i=>`
    in ${i}`,xn=(i,t)=>{let e=x(i);return t&&(e+=` (at ${t})`),e};let F=!1;const B=(i,t)=>{if(!i||F)return"";let e=Error.prepareStackTrace;Error.prepareStackTrace=void 0,F=!0;let n=wn();dt(null);let s=console.error,o=console.warn;console.error=()=>{},console.warn=()=>{};try{let a={DetermineComponentFrameRoot(){let c;try{if(t){let d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(f){c=f}Reflect.construct(i,[],d)}else{try{d.call()}catch(f){c=f}i.call(d.prototype)}}else{try{throw Error()}catch(f){c=f}let d=i();d&&typeof d.catch=="function"&&d.catch(()=>{})}}catch(d){if(d instanceof Error&&c instanceof Error&&typeof d.stack=="string")return[d.stack,c.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[l,u]=a.DetermineComponentFrameRoot();if(l&&u){let c=l.split(`
`),d=u.split(`
`),f=0,h=0;for(;f<c.length&&!c[f].includes("DetermineComponentFrameRoot");)f++;for(;h<d.length&&!d[h].includes("DetermineComponentFrameRoot");)h++;if(f===c.length||h===d.length)for(f=c.length-1,h=d.length-1;f>=1&&h>=0&&c[f]!==d[h];)h--;for(;f>=1&&h>=0;f--,h--)if(c[f]!==d[h]){if(f!==1||h!==1)do if(f--,h--,h<0||c[f]!==d[h]){let p=`
${c[f].replace(" at new "," at ")}`,m=$(i);return m&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",m)),p}while(f>=1&&h>=0);break}}}finally{F=!1,Error.prepareStackTrace=e,dt(n),console.error=s,console.warn=o}let r=i?$(i):"";return r?x(r):""},Cn=(i,t)=>{let e=i.tag,n="";switch(e){case Ke:n=x("Activity");break;case Ie:n=B(i.type,!0);break;case Be:n=B(i.type.render,!1);break;case ze:case Ve:n=B(i.type,!1);break;case Fe:case qe:case We:n=x(i.type);break;case je:n=x("Lazy");break;case De:n=i.child!==t&&t!==null?x("Suspense Fallback"):x("Suspense");break;case Ue:n=x("SuspenseList");break;case Ge:n=x("ViewTransition");break;default:return""}return n},Sn=i=>{try{let t="",e=i,n=null;do{t+=Cn(e,n);let s=e._debugInfo;if(s&&Array.isArray(s))for(let o=s.length-1;o>=0;o--){let r=s[o];typeof r.name=="string"&&(t+=xn(r.name,r.env))}n=e,e=e.return}while(e);return t}catch(t){return t instanceof Error?`
Error generating stack: ${t.message}
${t.stack}`:""}},jt=i=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let e=i;if(!e)return"";Error.prepareStackTrace=t,e.startsWith(`Error: react-stack-top-frame
`)&&(e=e.slice(29));let n=e.indexOf(`
`);if(n!==-1&&(e=e.slice(n+1)),n=Math.max(e.indexOf("react_stack_bottom_frame"),e.indexOf("react-stack-bottom-frame")),n!==-1&&(n=e.lastIndexOf(`
`,n)),n!==-1)e=e.slice(0,n);else return"";return e},En=i=>!!(i.fileName?.startsWith("rsc://")&&i.functionName),An=(i,t)=>i.fileName===t.fileName&&i.lineNumber===t.lineNumber&&i.columnNumber===t.columnNumber,Pn=i=>{let t=new Map;for(let e of i)for(let n of e.stackFrames){if(!En(n))continue;let s=n.functionName,o=t.get(s)??[];o.some(r=>An(r,n))||(o.push(n),t.set(s,o))}return t},Ln=(i,t,e)=>{if(!i.functionName)return{...i,isServer:!0};let n=t.get(i.functionName);if(!n||n.length===0)return{...i,isServer:!0};let s=e.get(i.functionName)??0,o=n[s%n.length];return e.set(i.functionName,s+1),{...i,isServer:!0,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber,source:i.source?.replace(Rt,`(${o.fileName}:${o.lineNumber}:${o.columnNumber})`)}},Nn=i=>{let t=[];return Tt(i,e=>{if(!Vt(e))return;let n=typeof e.type=="string"?e.type:$(e.type)||"<anonymous>";t.push({componentName:n,stackFrames:Y(jt(e._debugStack?.stack))})},!0),t},Mn=async(i,t=!0,e)=>{let n=Nn(i),s=Y(Sn(i)),o=Pn(n),r=new Map;return kn(s.map(a=>a.source?.includes(Rt)??!1?Ln(a,o,r):a).filter((a,l,u)=>{if(l===0)return!0;let c=u[l-1];return a.functionName!==c.functionName}),t,e)},ht=i=>i.split("/").filter(Boolean).length,Tn=i=>i.split("/").filter(Boolean)[0]??null,Hn=i=>{let t=i.indexOf("/",1);if(t===-1||ht(i.slice(0,t))!==1)return i;let e=i.slice(t);if(!$t.test(e)||ht(e)<2)return i;let n=Tn(e);return!n||n.startsWith("@")||n.length>4?i:e},Ut=i=>{if(!i||Ze.some(o=>o===i))return"";let t=i,e=t.startsWith("http://")||t.startsWith("https://");if(e)try{t=new URL(t).pathname}catch{}if(e&&(t=Hn(t)),t.startsWith("about://React/")){let o=t.slice(14),r=o.indexOf("/"),a=o.indexOf(":");t=r!==-1&&(a===-1||r<a)?o.slice(r+1):o}let n=!0;for(;n;){n=!1;for(let o of Xe)if(t.startsWith(o)){t=t.slice(o.length),o==="file:///"&&(t=`/${t.replace(/^\/+/,"")}`),n=!0;break}}if(rt.test(t)){let o=t.match(rt);o&&(t=t.slice(o[0].length))}if(t.startsWith("//")){let o=t.indexOf("/",2);t=o===-1?"":t.slice(o)}let s=t.indexOf("?");if(s!==-1){let o=t.slice(s);Qe.test(o)&&(t=t.slice(0,s))}return t},_n=i=>{let t=Ut(i);return!(!t||!$t.test(t)||Je.test(t))};var On=5e3,$n=4e3,pt=$n/2,Rn=3,qt=1,zn=1,In=1,W=i=>typeof Element<"u"&&i instanceof Element,Fn=["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."],Bn=new Set(["InnerLayoutRouter","RedirectErrorBoundary","RedirectBoundary","HTTPAccessFallbackErrorBoundary","HTTPAccessFallbackBoundary","LoadingBoundary","ErrorBoundary","InnerScrollAndFocusHandler","ScrollAndFocusHandler","RenderFromTemplateContext","OuterLayoutRouter","body","html","DevRootHTTPAccessFallbackBoundary","AppDevOverlayErrorBoundary","AppDevOverlay","HotReload","Router","ErrorBoundaryHandler","AppRouter","ServerRoot","SegmentStateProvider","RootErrorBoundary","LoadableComponent","MotionDOMComponent"]),Dn=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),ft,Vn=i=>(ft??=typeof document<"u"&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal")),ft),Wt=i=>Bn.has(i)||Dn.has(i)?!0:Fn.some(t=>i.startsWith(t)),Kt=i=>!(i.length<=In||Wt(i)||i[0]!==i[0].toUpperCase()||i.includes("Provider")||i.includes("Context")),jn=i=>!(!i||Wt(i)||i==="SlotClone"||i==="Slot"),Gt=["about://React/","rsc://React/"],Un=i=>Gt.some(t=>i.startsWith(t)),qn=i=>{for(const t of Gt){if(!i.startsWith(t))continue;const e=i.indexOf("/",t.length),n=i.lastIndexOf("?");if(e>-1&&n>-1)return decodeURI(i.slice(e+1,n))}return i},Wn=async i=>{const t=[],e=[];for(let o=0;o<i.length;o++){const r=i[o];!r.isServer||!r.fileName||(t.push(o),e.push({file:qn(r.fileName),methodName:r.functionName??"<unknown>",line1:r.lineNumber??null,column1:r.columnNumber??null,arguments:[]}))}if(e.length===0)return i;const n=new AbortController,s=setTimeout(()=>n.abort(),On);try{const o=await fetch("/__nextjs_original-stack-frames",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:e,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),signal:n.signal});if(!o.ok)return i;const r=await o.json(),a=[...i];for(let l=0;l<t.length;l++){const u=r[l];if(u?.status!=="fulfilled")continue;const c=u.value?.originalStackFrame;if(!c?.file||c.ignored)continue;const d=t[l];a[d]={...i[d],fileName:c.file,lineNumber:c.line1??void 0,columnNumber:c.column1??void 0,isSymbolicated:!0}}return a}catch{return i}finally{clearTimeout(s)}},Kn=i=>{const t=new Map;return Tt(i,e=>{if(!Vt(e))return!1;const n=jt(e._debugStack.stack);if(!n)return!1;for(const s of Y(n))!s.functionName||!s.fileName||Un(s.fileName)&&(t.has(s.functionName)||t.set(s.functionName,{...s,isServer:!0}));return!1},!0),t},Gn=(i,t)=>{if(!t.some(s=>s.isServer&&!s.fileName&&s.functionName))return t;const n=Kn(i);return n.size===0?t:t.map(s=>{if(!s.isServer||s.fileName||!s.functionName)return s;const o=n.get(s.functionName);return o?{...s,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber}:s})},Yt=i=>{if(!G()||R(i))return i;if(W(i)){let t=i.parentElement;for(;t;){if(R(t))return t;t=t.parentElement}}return i},mt=new WeakMap,Yn=async i=>{try{const t=R(i);if(!t)return null;const e=await Mn(t);if(Vn()){const n=Gn(t,e);return Wn(n)}return e}catch{return null}},Xt=i=>{if(!G())return Promise.resolve([]);const t=Yt(i),e=mt.get(t);if(e)return e;const n=Yn(t);return mt.set(t,n),n},Xn=i=>{if(!i||i.length===0)return null;for(const t of i)if(t.fileName&&_n(t.fileName))return{filePath:Ut(t.fileName),lineNumber:t.lineNumber??null,columnNumber:null,componentName:t.functionName&&Kt(t.functionName)?t.functionName:null};return null},Zn=async i=>{const t=await Xt(i),e=Xn(t);return e?[e]:[]},Jn=async i=>{if(!G())return null;const t=await Xt(i);if(t){for(const o of t)if(o.functionName&&Kt(o.functionName))return o.functionName}const e=Yt(i),n=R(e);if(!n)return null;let s=n.return;for(;s;){if(Ye(s)){const o=$(s.type);if(o&&jn(o))return o}s=s.return}return null},D={name:"react",resolveStack:Zn,resolveComponentName:Jn},L=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),P=i=>typeof i=="string"?i:null,z=i=>typeof i=="number"&&Number.isFinite(i)?i:null,Qn="__svelte_meta",ti=i=>{let t=i;for(;t;){const e=Reflect.get(t,Qn);if(L(e))return e;t=t.parentElement}return null},ei=i=>{const t=i.loc;if(!L(t))return null;const e=P(t.file),n=z(t.line),s=z(t.column);return!e||n===null||s===null?null:{filePath:e,lineNumber:n,columnNumber:s+qt}},ni=i=>{let t=i.parent;for(;L(t);){const e=P(t.componentTag);if(e)return e;t=t.parent}return null},ii=i=>{const t=[];let e=i.parent;for(;L(e);){const n=P(e.file),s=z(e.line),o=z(e.column),r=P(e.componentTag);n&&s!==null&&o!==null&&t.push({filePath:n,lineNumber:s,columnNumber:o+qt,componentName:r}),e=e.parent}return t},si=i=>{const t=ti(i);if(!t)return[];const e=ei(t);if(!e)return[];const n=[{filePath:e.filePath,lineNumber:e.lineNumber,columnNumber:e.columnNumber,componentName:ni(t)}],s=new Set([`${e.filePath}:${e.lineNumber}:${e.columnNumber}`]);for(const o of ii(t)){const r=`${o.filePath}:${o.lineNumber??""}:${o.columnNumber??""}`;s.has(r)||(s.add(r),n.push(o))}return n},oi={name:"svelte",resolveStack:si},gt=":",bt=i=>{const t=Number.parseInt(i,10);return Number.isNaN(t)||t<1?null:t},Zt=i=>{const t=i.lastIndexOf(gt);if(t===-1)return null;const e=i.lastIndexOf(gt,t-1);if(e===-1)return null;const n=i.slice(0,e);if(!n)return null;const s=i.slice(e+1,t),o=i.slice(t+1),r=bt(s),a=bt(o);return r===null||a===null?null:{filePath:n,lineNumber:r,columnNumber:a}},Jt="data-v-inspector",ri=`[${Jt}]`,ai="__vueParentComponent",Qt=i=>{if(!i)return null;const t=i.type;return L(t)?t:null},li=i=>{const t=Reflect.get(i,ai);return L(t)?t:null},te=i=>{let t=i;for(;t;){const e=li(t);if(e)return e;t=t.parentElement}return null},ee=i=>i?P(i.__name)??P(i.name):null,ci=i=>i?P(i.__file):null,ui=i=>{if(!i)return null;const t=Reflect.get(i,"parent");return L(t)?t:null},di=i=>{const t=[];let e=te(i);for(;e;)t.push(e),e=ui(e);return t},hi=i=>di(i).map(t=>{const e=Qt(t),n=ci(e);return n?{filePath:n,lineNumber:null,columnNumber:null,componentName:ee(e)}:null}).filter(t=>!!t),pi=i=>{const t=i.closest(ri);if(!t)return null;const e=t.getAttribute(Jt);if(!e)return null;const n=Zt(e);if(!n)return null;const s=te(i),o=Qt(s);return{filePath:n.filePath,lineNumber:n.lineNumber,columnNumber:n.columnNumber,componentName:ee(o)}},fi=i=>{const t=[],e=new Set,n=pi(i);if(n){const s=`${n.filePath}|${n.componentName??""}`;t.push(n),e.add(s)}for(const s of hi(i)){const o=`${s.filePath}|${s.componentName??""}`;e.has(o)||(e.add(o),t.push(s))}return t},mi={name:"vue",resolveStack:fi},gi="$$",bi=/location:\s*["']([^"']+:\d+:\d+)["']/g,ne="/src/",vi=".css",yi="?import",ki="__SOLID_RUNTIME_MODULES__",vt=new Map,yt=new Map,wi=i=>{if(i.includes(yi))return!1;const t=new URL(i,window.location.href).pathname;return t.endsWith(vi)?!1:t.includes(ne)},xi=()=>{if(typeof window>"u")return[];const i=performance.getEntriesByType("resource"),t=new Set;for(const e of i)!e.name||!wi(e.name)||t.add(e.name);return Array.from(t)},Ci=i=>{const t=vt.get(i);if(t)return t;const e=fetch(i).then(n=>n.ok?n.text():null).catch(()=>null);return vt.set(i,e),e},Si=()=>{if(typeof window>"u")return[];const i=Reflect.get(window,ki);return Array.isArray(i)?i:[]},Ei=async i=>{for(const t of Si()){const e=t.content.indexOf(i);if(e!==-1)return{moduleUrl:t.url,moduleContent:t.content,handlerSourceIndex:e}}for(const t of xi()){const e=await Ci(t);if(!e)continue;const n=e.indexOf(i);if(n!==-1)return{moduleUrl:t,moduleContent:e,handlerSourceIndex:n}}return null},Ai=(i,t)=>{const e=Math.max(0,t-pt),n=Math.min(i.length,t+pt),s=i.slice(e,n),o=[];for(const l of s.matchAll(bi)){const u=l[1];if(!u)continue;const c=Zt(u);if(!c||l.index===void 0)continue;const d=e+l.index;o.push({sourceInfo:{filePath:c.filePath,lineNumber:c.lineNumber,columnNumber:c.columnNumber,componentName:null},distance:Math.abs(d-t)})}o.sort((l,u)=>{const c=l.sourceInfo.lineNumber??0,d=u.sourceInfo.lineNumber??0;return d!==c?d-c:l.distance-u.distance});const r=new Set,a=[];for(const l of o){const u=`${l.sourceInfo.filePath}:${l.sourceInfo.lineNumber}:${l.sourceInfo.columnNumber}`;r.has(u)||(r.add(u),a.push(l.sourceInfo))}return a},Pi=i=>{try{const t=decodeURIComponent(new URL(i,window.location.href).pathname);return t.includes(ne)?t.startsWith("/")?t.slice(1):t:null}catch{return null}},Li=(i,t)=>{const n=i.slice(0,t).split(`
`),s=n[n.length-1]??"";return{lineNumber:n.length,columnNumber:s.length+zn}},Ni=i=>{let t=i;for(;t;){for(const e of Object.getOwnPropertyNames(t)){if(!e.startsWith(gi))continue;const n=Reflect.get(t,e);if(typeof n!="function")continue;const s=String(n).trim();if(!(s.length<Rn))return{source:s}}t=t.parentElement}return null},Mi=i=>{const t=yt.get(i);if(t)return t;const e=(async()=>{const n=await Ei(i);if(!n)return[];const s=Ai(n.moduleContent,n.handlerSourceIndex);if(s.length>0)return s;const o=Pi(n.moduleUrl);if(!o)return[];const r=Li(n.moduleContent,n.handlerSourceIndex);return[{filePath:o,lineNumber:r.lineNumber,columnNumber:r.columnNumber,componentName:null}]})();return yt.set(i,e),e},Ti=i=>{const t=Ni(i);return t?Mi(t.source):Promise.resolve([])},Hi={name:"solid",resolveStack:Ti},_i=i=>"tagName"in i&&typeof i.tagName=="string"?i.tagName.toLowerCase():"nodeName"in i&&typeof i.nodeName=="string"?i.nodeName.toLowerCase():"",Oi=[oi,mi,Hi],kt=async(i,t)=>{for(const e of t){const s=(await e.resolveStack(i)).filter(o=>o.filePath.length>0);if(s.length>0)return s}return[]},$i=(i={})=>{const t=i.resolvers??Oi,e=async r=>{const a=await D.resolveStack(r);if(W(r)){const l=await kt(r,t);return a.length>0?[...a,...l]:l}return a};return{resolveSource:async r=>(await e(r))[0]??null,resolveStack:e,resolveComponentName:async r=>{const a=await D.resolveComponentName?.(r);return a||(W(r)?(await kt(r,t)).find(c=>c.componentName)?.componentName??null:null)},resolveElementInfo:async r=>{const a=await e(r),l=a[0]??null,u=a.find(c=>c.componentName)?.componentName??await D.resolveComponentName?.(r)??null;return{tagName:_i(r),componentName:u,source:l,stack:a}}}},Ri=$i(),zi=Ri.resolveElementInfo;function Ii(){return typeof window.Livewire<"u"}function Fi(i){let t=i;for(;t&&t!==document.documentElement;){if(t.getAttribute("wire:id"))return t;t=t.parentElement}return null}function Bi(i){if(!Ii())return null;const t=Fi(i);if(!t)return null;const e=t.getAttribute("wire:id");let n="Unknown",s;const o=t.getAttribute("wire:snapshot");if(o)try{const r=JSON.parse(o);n=r?.memo?.name??"Unknown",s=r?.memo?.path??r?.memo?.name}catch{}return{framework:"livewire",component:n,wire_id:e,class_name:s}}function wt(i){return i?!i.includes("node_modules"):!1}function K(i){return i.type?.__file??i.$options?.__file}function Di(i){return i.$options?.name??i.$options?.__name??i.type?.name??i.type?.__name??"Anonymous"}function Vi(i){let t=null,e=i;for(;e&&e!==document.documentElement;){const n=e.__vueParentComponent??e.__vue__;if(n){const s=K(n);if(wt(s))return n;t||(t=n)}e=e.parentElement}if(t?.parent){let n=t.parent;for(;n;){const s=K(n);if(wt(s))return n;n=n.parent}}return t}function xt(i){const t=Vi(i);if(!t)return null;const e=Di(t),n={};if(t.props&&Object.assign(n,t.props),t.setupState){for(const[o,r]of Object.entries(t.setupState))if(!o.startsWith("_")&&typeof r!="function")try{n[o]=JSON.parse(JSON.stringify(r))}catch{n[o]=String(r)}}const s=K(t);return{framework:"vue",component:e,source_file:s,component_uid:t.uid!==void 0?String(t.uid):void 0,data:n}}function ji(i){let t=i;for(;t&&t!==document.documentElement;){if(t.__svelte_meta)return t.__svelte_meta;t=t.parentElement}return null}function Ct(i){const t=ji(i);if(!t)return null;const e=t.loc?.file??"";return{framework:"svelte",component:e?e.split("/").pop()?.replace(/\.svelte$/,"")??"Unknown":"Unknown",source_file:e||void 0,data:e?{file:e}:void 0}}function Ui(i){for(const t of Object.keys(i))if(t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$"))return t;return null}function qi(i){return i?!i.fileName.includes("node_modules"):!1}function Wi(i){let t=null,e=i;for(;e;){const{type:n}=e;let s=null;if(typeof n=="function"&&n.name){const o=n.name;o[0]===o[0].toUpperCase()&&o.length>1&&(s=o)}if(!s&&typeof n=="object"&&n!==null&&n.displayName&&(s=n.displayName),s){const o={name:s,source:e._debugSource};if(qi(e._debugSource))return o;t||(t=o)}e=e.return}return t??{name:"Component"}}function Ki(i){const t=i.memoizedProps??i.pendingProps??{},e={};for(const[n,s]of Object.entries(t))if(!(n==="children"||typeof s=="function"))try{e[n]=JSON.parse(JSON.stringify(s))}catch{e[n]=String(s)}return e}function St(i){let t=i;for(;t&&t!==document.documentElement;){const e=Ui(t);if(e){const n=t[e];if(n){const{name:s,source:o}=Wi(n),r=Ki(n);return{framework:"react",component:s,source_file:o?.fileName,source_line:o?.lineNumber,data:r}}}t=t.parentElement}return null}function Gi(){const i=document.getElementById("instruckt-views");if(!i)return[];try{return JSON.parse(i.textContent??"[]")}catch{return[]}}function Yi(i){const t=Gi();if(t.length===0)return null;const e=t.length>1?t.find(n=>!n.name.startsWith("layouts.")&&!n.name.startsWith("components."))??t[t.length-1]:t[0];return{framework:"blade",component:e.name,source_file:e.file,data:{views:t.map(n=>n.file)}}}function V(){return window.location.pathname}const Et="__instrucktHistoryPatched",Xi="instruckt:locationchange";class C{config;toolbar=null;highlight=null;popup=null;markers=null;annotations=[];deletedIds=new Set;isAnnotating=!1;isFrozen=!1;frozenStyleEl=null;frozenPopovers=[];rafId=null;pendingMouseTarget=null;highlightLocked=!1;outputFormat="standard";markerShowCurrentPage=!0;markerShowAll=!1;uiLocale="zh-CN";markerDefaultHex=null;boundKeydown;repositionRaf=null;boundReposition=()=>{this.repositionRaf===null&&(this.repositionRaf=requestAnimationFrame(()=>{this.repositionRaf=null,this.markers?.reposition(this.annotations)}))};lastPathKey=V();boundOnLocationChange=()=>{const t=V();t!==this.lastPathKey&&(this.lastPathKey=t,setTimeout(()=>this.reattach(),0))};static installHistoryHooks(){if(typeof window>"u"||window[Et])return;window[Et]=!0;const t=()=>{try{window.dispatchEvent(new Event(Xi))}catch{}},e=n=>{const s=history[n];history[n]=function(...r){const a=s.apply(this,r);return t(),a}};e("pushState"),e("replaceState"),window.addEventListener("popstate",t),window.addEventListener("hashchange",t)}mutationObserver=null;mutationRaf=null;scheduleReposition(){this.mutationRaf===null&&(this.mutationRaf=requestAnimationFrame(()=>{this.mutationRaf=null,this.boundReposition()}))}onDomMutation=t=>{for(const e of t){const n=e.target;if(!(!n||n.nodeType!==1)&&!(typeof n.closest=="function"&&n.closest("[data-instruckt]"))){this.scheduleReposition();return}}};constructor(t={}){this.config={adapters:["livewire","vue","svelte","react","blade"],theme:"auto",position:"bottom-right",...t},this.boundKeydown=this.onKeydown.bind(this),this.loadSettings(),this.init()}init(){this.applyMarkerColorsToDoc(),this.config.theme!=="auto"&&document.documentElement.setAttribute("data-instruckt-theme",this.config.theme),this.toolbar=new w(this.config.position,{onToggleAnnotate:t=>{this.setAnnotating(t)},onFreezeAnimations:t=>{this.setFrozen(t)},onCopy:()=>this.copyToClipboard(!0),onClearPage:()=>this.clearPage(),onClearAll:()=>this.clearEverything(),onMinimize:t=>this.onMinimize(t)},this.config.keys,this.config.tools,this.makeSettingsAdapter(),{positionAnchor:this.config.positionAnchor}),this.highlight=new it,this.popup=new Ce(()=>this.uiLocale),this.markers=new O((t,e)=>{this.onMarkerClick(t,e)},()=>({showCurrentPageMarkers:this.markerShowCurrentPage,showAllMarkers:this.markerShowAll})),document.addEventListener("keydown",this.boundKeydown),document.addEventListener("scroll",this.boundReposition,{capture:!0,passive:!0}),window.addEventListener("resize",this.boundReposition,{passive:!0});try{this.mutationObserver=new MutationObserver(this.onDomMutation),this.mutationObserver.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]})}catch{}document.addEventListener("livewire:navigated",()=>this.reattach()),document.addEventListener("inertia:navigate",()=>this.syncMarkers()),window.addEventListener("popstate",()=>{setTimeout(()=>this.reattach(),0)}),C.installHistoryHooks(),window.addEventListener("instruckt:locationchange",this.boundOnLocationChange),this.loadAnnotations(),this.unsubscribeStorage=y.onExternalChange(t=>{t.includes(C.STORAGE_KEY)&&this.loadAnnotations()})}unsubscribeStorage=null;makeToolbarCallbacks(){return{onToggleAnnotate:t=>{this.setAnnotating(t)},onFreezeAnimations:t=>{this.setFrozen(t)},onCopy:()=>this.copyToClipboard(!0),onClearPage:()=>this.clearPage(),onClearAll:()=>this.clearEverything(),onMinimize:t=>this.onMinimize(t)}}reattach(){const t=this.isAnnotating;this.isFrozen;const e=this.toolbar?.isMinimized()??!1;this.isAnnotating&&this.detachAnnotateListeners(),this.isFrozen&&this.setFrozen(!1),this.isAnnotating=!1,this.isFrozen=!1,document.querySelectorAll("[data-instruckt]").forEach(s=>s.remove()),this.toolbar=new w(this.config.position,this.makeToolbarCallbacks(),this.config.keys,this.config.tools,this.makeSettingsAdapter(),{positionAnchor:this.config.positionAnchor}),e&&this.toolbar.minimize(),this.markers=new O((s,o)=>{this.onMarkerClick(s,o)},()=>({showCurrentPageMarkers:this.markerShowCurrentPage,showAllMarkers:this.markerShowAll})),this.highlight=new it,e&&this.markers.setVisible(!1);const n=document.getElementById("instruckt-global");n&&n.remove(),this.applyMarkerColorsToDoc(),this.syncMarkers(),t&&!e&&this.setAnnotating(!0)}onMinimize(t){t?(this.isAnnotating&&this.setAnnotating(!1),this.isFrozen&&this.setFrozen(!1),this.toolbar?.setAnnotateActive(!1),this.toolbar?.setFreezeActive(!1),this.markers?.setVisible(!1),this.popup?.destroy()):this.markers?.setVisible(!0)}mergeMarkerColors(){const t=this.config.colors,e=this.markerDefaultHex??t?.default;if(!(!t&&!e))return{...t??{},...e?{default:e}:{}}}applyMarkerColorsToDoc(){document.getElementById("instruckt-global")?.remove(),be(this.mergeMarkerColors())}static get SETTINGS_KEY(){return`instruckt:${window.location.origin}:settings`}hydrateMarkerVisibilityFromConfig(){if(this.config.markerShowCurrentPage!==void 0||this.config.markerShowAll!==void 0){this.markerShowCurrentPage=this.config.markerShowCurrentPage??!0,this.markerShowAll=this.config.markerShowAll??!1;return}this.config.markerDisplayMode==="all"?(this.markerShowCurrentPage=!0,this.markerShowAll=!0):(this.markerShowCurrentPage=!0,this.markerShowAll=!1)}loadSettings(){this.outputFormat=this.config.outputFormat??"standard",this.hydrateMarkerVisibilityFromConfig(),this.uiLocale=this.config.uiLocale??"zh-CN";try{const t=y.getItem(C.SETTINGS_KEY);if(!t)return;const e=JSON.parse(t);e?.outputFormat&&["compact","standard","detailed","forensic"].includes(e.outputFormat)&&(this.outputFormat=e.outputFormat),typeof e.markerShowCurrentPage=="boolean"||typeof e.markerShowAll=="boolean"?(typeof e.markerShowCurrentPage=="boolean"&&(this.markerShowCurrentPage=e.markerShowCurrentPage),typeof e.markerShowAll=="boolean"&&(this.markerShowAll=e.markerShowAll)):e?.markerDisplayMode==="all"?(this.markerShowCurrentPage=!0,this.markerShowAll=!0):e?.markerDisplayMode==="current-page"&&(this.markerShowCurrentPage=!0,this.markerShowAll=!1),e?.uiLocale&&re(e.uiLocale)&&(this.uiLocale=e.uiLocale),e?.markerDefaultHex&&/^#[0-9A-Fa-f]{6}$/.test(e.markerDefaultHex)&&(this.markerDefaultHex=e.markerDefaultHex)}catch{}}saveSettings(){try{y.setItem(C.SETTINGS_KEY,JSON.stringify({outputFormat:this.outputFormat,markerShowCurrentPage:this.markerShowCurrentPage,markerShowAll:this.markerShowAll,uiLocale:this.uiLocale,markerDefaultHex:this.markerDefaultHex}))}catch{}}makeSettingsAdapter(){return{getOutputFormat:()=>this.outputFormat,setOutputFormat:t=>{this.outputFormat=t,this.saveSettings()},getMarkerShowCurrentPage:()=>this.markerShowCurrentPage,setMarkerShowCurrentPage:t=>{this.markerShowCurrentPage=t,this.saveSettings(),this.boundReposition(),this.toolbar?.syncMarkerDisplayModeUI()},getMarkerShowAll:()=>this.markerShowAll,setMarkerShowAll:t=>{this.markerShowAll=t,this.saveSettings(),this.boundReposition(),this.toolbar?.syncMarkerDisplayModeUI()},getUiLocale:()=>this.uiLocale,setUiLocale:t=>{this.uiLocale=t,this.saveSettings(),this.toolbar?.refreshI18n()},getMarkerDefaultHex:()=>this.markerDefaultHex??this.config.colors?.default??"#6366f1",setMarkerDefaultHex:t=>{/^#[0-9A-Fa-f]{6}$/.test(t)&&(this.markerDefaultHex=t,this.saveSettings(),this.applyMarkerColorsToDoc(),this.toolbar?.refreshI18n())}}}static get STORAGE_KEY(){return`instruckt:${window.location.origin}:annotations`}loadAnnotations(){try{const t=y.getItem(C.STORAGE_KEY);t&&(this.annotations=JSON.parse(t))}catch{}this.syncMarkers()}saveToStorage(){try{this.persistMerged()}catch{}}async persistMerged(){let t=[];try{const s=await y.getItemFresh(C.STORAGE_KEY);s&&(t=JSON.parse(s))}catch{}const e=new Map;for(const s of t)this.deletedIds.has(s.id)||e.set(s.id,s);for(const s of this.annotations){if(this.deletedIds.has(s.id))continue;const o=e.get(s.id);if(!o){e.set(s.id,s);continue}const r=s.updatedAt?Date.parse(s.updatedAt):0,a=o.updatedAt?Date.parse(o.updatedAt):0;e.set(s.id,r>=a?s:o)}const n=Array.from(e.values());this.annotations=n;try{y.setItem(C.STORAGE_KEY,JSON.stringify(n)),this.deletedIds.clear()}catch{}this.syncMarkers()}syncMarkers(){this.markers?.clear();let t=0;for(const e of this.annotations)e.status==="resolved"||e.status==="dismissed"||(t++,this.markers?.upsert(e,t));this.toolbar?.setAnnotationCount(this.totalActiveCount()),this.toolbar?.setTotalCount(this.totalActiveCount())}annotationPageKey(t){try{return new URL(t.url).pathname}catch{return t.url}}pageAnnotations(){const t=V();return this.annotations.filter(e=>this.annotationPageKey(e)===t&&e.status!=="resolved"&&e.status!=="dismissed")}totalActiveCount(){return this.annotations.filter(t=>t.status!=="resolved"&&t.status!=="dismissed").length}setAnnotating(t){this.isAnnotating=t,this.toolbar?.setAnnotateActive(t),t?this.attachAnnotateListeners():(this.detachAnnotateListeners(),this.highlight?.hide(),this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)),this.updateFreezeStyles()}setFrozen(t){if(this.isFrozen=t,this.toolbar?.setFreezeActive(t),t){this.updateFreezeStyles(),this.freezePopovers();for(const e of this.freezeBlockEvents)window.addEventListener(e,this.boundFreezeClick,!0);window.addEventListener("submit",this.boundFreezeSubmit,!0);for(const e of this.freezePassiveEvents)window.addEventListener(e,this.boundFreezePassive,!0)}else{this.frozenStyleEl?.remove(),this.frozenStyleEl=null,this.unfreezePopovers();for(const e of this.freezeBlockEvents)window.removeEventListener(e,this.boundFreezeClick,!0);window.removeEventListener("submit",this.boundFreezeSubmit,!0);for(const e of this.freezePassiveEvents)window.removeEventListener(e,this.boundFreezePassive,!0)}}freezePopovers(){this.frozenPopovers=[];const t=":popover-open, .\\:popover-open";document.querySelectorAll("[popover]").forEach(e=>{const n=e,s=n.getAttribute("popover")??"";let o=!1;try{o=n.matches(t)}catch{try{o=n.matches(".\\:popover-open")}catch{}}if(!o)return;const r=n.getBoundingClientRect();this.frozenPopovers.push({el:n,original:s}),n.removeAttribute("popover"),n.style.setProperty("display","block","important"),n.style.setProperty("position","fixed","important"),n.style.setProperty("z-index","2147483644","important"),n.style.setProperty("top",`${r.top}px`,"important"),n.style.setProperty("left",`${r.left}px`,"important"),n.style.setProperty("width",`${r.width}px`,"important"),n.classList.add(":popover-open")})}unfreezePopovers(){for(const{el:t,original:e}of this.frozenPopovers){for(const n of["display","position","z-index","top","left","width"])t.style.removeProperty(n);t.classList.remove(":popover-open"),t.setAttribute("popover",e||"auto")}this.frozenPopovers=[]}freezeBlockEvents=["click","mousedown","pointerdown","pointerup","mouseup","touchstart","touchend","auxclick"];freezePassiveEvents=["focusin","focusout","blur","pointerleave","mouseleave","mouseout"];updateFreezeStyles(){if(!this.isFrozen)return;this.frozenStyleEl?.remove(),this.frozenStyleEl=document.createElement("style"),this.frozenStyleEl.id="instruckt-freeze";const t=this.isAnnotating?"":`
        a[href], a[wire\\:navigate], [wire\\:click], [wire\\:navigate],
        [x-on\\:click], [@click], [v-on\\:click], [onclick],
        button, input[type="submit"], select, [role="button"], [role="link"],
        [tabindex] {
          pointer-events: none !important;
          cursor: not-allowed !important;
        }
      `;this.frozenStyleEl.textContent=`
        *, *::before, *::after {
          animation-play-state: paused !important;
          transition: none !important;
        }
        video { filter: none !important; }
        ${t}
      `,document.head.appendChild(this.frozenStyleEl)}boundFreezeClick=t=>{this.isInstruckt(t.target)||this.isAnnotating&&t.type==="click"||(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};boundFreezeSubmit=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()};boundFreezePassive=t=>{t.stopPropagation(),t.stopImmediatePropagation()};boundMouseMove=t=>{this.highlightLocked||(this.pendingMouseTarget=t.target,this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{this.rafId=null,!this.highlightLocked&&(this.pendingMouseTarget&&!this.isInstruckt(this.pendingMouseTarget)?this.highlight?.show(this.pendingMouseTarget):this.highlight?.hide())})))};boundMouseLeave=()=>{this.highlightLocked||this.highlight?.hide()};boundAnnotateBlock=t=>{this.isInstruckt(t.target)||(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};boundClick=t=>{const e=t.target;if(this.isInstruckt(e))return;t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();const n=window.getSelection()?.toString().trim()||void 0,s=Ee(e),o=Ae(e),r=Pe(e),a=Ne(e),l=Le(e)||void 0,u=Me(e);this.highlight?.show(e),this.highlightLocked=!0;const c=e.getBoundingClientRect(),d=this.computeTargetOffset(t.clientX,t.clientY,c);this.detectFramework(e).then(f=>{const h={element:e,elementPath:s,elementName:o,elementLabel:r,cssClasses:a,boundingBox:u,x:t.clientX,y:t.clientY,targetOffsetX:d.x,targetOffsetY:d.y,selectedText:n,nearbyText:l,revealHost:this.findRevealHostKey(e),framework:f??void 0};this.showAnnotationPopup(h)})};computeTargetOffset(t,e,n){if(!n||n.width<=0||n.height<=0)return{x:.5,y:.5};const s=(t-n.left)/n.width,o=(e-n.top)/n.height;return{x:Math.min(1,Math.max(0,s)),y:Math.min(1,Math.max(0,o))}}findRevealHostKey(t){let e=t;for(;e;){if(e.nodeType===1){const n=e.getAttribute("data-instruckt-host");if(n?.trim())return n.trim()}e=e.parentElement}}showAnnotationPopup(t){this.popup?.showNew(t,{onSubmit:e=>{this.highlightLocked=!1,this.highlight?.hide(),this.submitAnnotation(t,e.comment)},onCancel:()=>{this.highlightLocked=!1,this.highlight?.hide()}})}attachAnnotateListeners(){document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseleave",this.boundMouseLeave);for(const t of["mousedown","pointerdown"])window.addEventListener(t,this.boundAnnotateBlock,!0);window.addEventListener("click",this.boundClick,!0)}detachAnnotateListeners(){document.removeEventListener("mousemove",this.boundMouseMove),document.removeEventListener("mouseleave",this.boundMouseLeave);for(const t of["mousedown","pointerdown"])window.removeEventListener(t,this.boundAnnotateBlock,!0);window.removeEventListener("click",this.boundClick,!0)}isInstruckt(t){return!t||!(t instanceof Element)?!1:t.closest("[data-instruckt]")!==null}async detectFramework(t){const e=this.config.adapters??[];if(e.includes("livewire")){const s=Bi(t);if(s)return s}if(["vue","svelte","react"].some(s=>e.includes(s)))try{const s=await zi(t);if(s.source){const o=s.stack.map(a=>({filePath:a.filePath,lineNumber:a.lineNumber,columnNumber:a.columnNumber,componentName:a.componentName}));let r=null;return e.includes("vue")&&(r=xt(t)),!r&&e.includes("svelte")&&(r=Ct(t)),!r&&e.includes("react")&&(r=St(t)),r?{...r,component:s.componentName??r.component,source_file:s.source.filePath,source_line:s.source.lineNumber??r.source_line,source_column:s.source.columnNumber??void 0,component_stack:o.length>0?o:void 0}:{framework:"react",component:s.componentName??"Component",source_file:s.source.filePath,source_line:s.source.lineNumber??void 0,source_column:s.source.columnNumber??void 0,component_stack:o.length>0?o:void 0}}}catch{}if(e.includes("vue")){const s=xt(t);if(s)return s}if(e.includes("svelte")){const s=Ct(t);if(s)return s}if(e.includes("react")){const s=St(t);if(s)return s}if(e.includes("blade")){const s=Yi();if(s)return s}return null}submitAnnotation(t,e){const s={...{x:t.x/window.innerWidth*100,y:t.y+window.scrollY,targetOffsetX:t.targetOffsetX,targetOffsetY:t.targetOffsetY,revealHost:t.revealHost,comment:e,element:t.elementName,elementPath:t.elementPath,cssClasses:t.cssClasses,boundingBox:t.boundingBox,selectedText:t.selectedText,nearbyText:t.nearbyText,intent:"fix",severity:"important",framework:t.framework,url:window.location.href},id:crypto.randomUUID(),status:"pending",createdAt:new Date().toISOString()};this.annotations.push(s),this.saveToStorage(),this.syncMarkers(),this.config.onAnnotationAdd?.(s),this.copyAnnotations()}onMarkerClick(t,e){this.handleMarkerClick(t,e)}async handleMarkerClick(t,e){if(e.ghost){await this.markers?.revealHiddenTarget(t),this.markers?.reposition(this.annotations);const n=document.querySelector(t.elementPath);n instanceof HTMLElement&&(e.anchorEl=n)}this.markers?.reposition(this.annotations),this.popup?.showEdit(t,{onSave:(n,s)=>{this.onAnnotationUpdated({...n,comment:s,updatedAt:new Date().toISOString()})},onDelete:n=>{this.removeAnnotation(n.id)},onDismiss:()=>this.markers?.unpinSpotlightForEdit()},e.anchorEl),this.markers?.pinSpotlightForEdit(t)}onAnnotationUpdated(t){const e=this.annotations.findIndex(n=>n.id===t.id);e>=0&&(this.annotations[e]=t),this.saveToStorage(),this.syncMarkers()}removeAnnotation(t){this.annotations=this.annotations.filter(e=>e.id!==t),this.deletedIds.add(t),this.saveToStorage(),this.syncMarkers()}clearPage(){const t=new Set;for(const e of this.pageAnnotations())t.add(e.id);if(this.markers)for(const e of this.markers.currentPageIds())t.add(e);if(t.size!==0){for(const e of t)this.deletedIds.add(e);this.annotations=this.annotations.filter(e=>!t.has(e.id)),this.saveToStorage(),this.syncMarkers()}}clearEverything(){for(const t of this.annotations)this.deletedIds.add(t.id);this.annotations=[],this.saveToStorage(),this.syncMarkers()}onKeydown(t){if(this.toolbar?.isMinimized())return;const e=t.target;if(["INPUT","TEXTAREA","SELECT"].includes(e.tagName)||e.closest('[contenteditable="true"]')||this.isInstruckt(e))return;const n=this.config.keys??{},s=!t.metaKey&&!t.ctrlKey&&!t.altKey;t.key===(n.annotate??"a")&&s&&this.setAnnotating(!this.isAnnotating),t.key===(n.freeze??"f")&&s&&this.setFrozen(!this.isFrozen),t.key===(n.clearPage??"x")&&s&&this.clearPage(),t.key==="Escape"&&(this.isAnnotating&&this.setAnnotating(!1),this.isFrozen&&this.setFrozen(!1))}copyAnnotations(){this.copyToClipboard(!1)}copyToClipboard(t){const e=this.exportMarkdown();if(window.isSecureContext)navigator.clipboard.writeText(e).catch(()=>{});else if(t)try{const n=document.createElement("textarea");n.value=e,n.style.cssText="position:fixed;left:-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove()}catch{}}exportMarkdown(){const t=this.annotations.filter(r=>r.status!=="resolved"&&r.status!=="dismissed");if(t.length===0)return`# UI Feedback

No open annotations.`;const e=new Map;for(const r of t){const a=this.annotationPageKey(r);e.has(a)||e.set(a,[]),e.get(a).push(r)}const n=e.size>1,s=[],o=this.outputFormat;n&&(s.push("# UI Feedback"),s.push(""));for(const[r,a]of e){n?s.push(`## ${r}`):s.push(`# UI Feedback: ${r}`),s.push("");const l=n?"###":"##";a.forEach((u,c)=>{s.push(...this.renderAnnotation(u,c+1,l,o))})}return s.join(`
`).trim()}renderAnnotation(t,e,n,s){const o=[];if(o.push(`${n} Annotation #${e}`),o.push(`**Element:** ${this.elementLabel(t)}`),s!=="compact"){t.elementPath&&o.push(`**Path:** ${t.elementPath}`);const r=this.componentTreeLine(t,s);r&&o.push(`**${this.componentLabel(t)}:** ${r}`);const a=this.sourceLocation(t);a&&o.push(`**Source:** ${a}`),t.cssClasses&&o.push(`**Classes:** ${t.cssClasses}`)}if(s==="detailed"||s==="forensic"){const r=this.positionString(t);r&&o.push(`**Position:** ${r}`)}if(s!=="compact"){const r=s==="standard"?100:240,a=t.selectedText?"Selected text":"Nearby text",l=t.selectedText??t.nearbyText;l&&o.push(`**${a}:** "${l.slice(0,r)}"`)}if(o.push(`**Feedback:** ${t.comment}`),s!=="compact"&&t.severity&&o.push(`**Severity:** ${t.severity}`),(s==="detailed"||s==="forensic")&&t.intent&&o.push(`**Intent:** ${t.intent}`),s==="forensic"){o.push(`**ID:** ${t.id}`);const r=t.framework?.component_stack??[];if(r.length>0){o.push("**Component stack:**");for(const l of r){let u=l.filePath;l.lineNumber&&(u+=`:${l.lineNumber}`,l.columnNumber&&(u+=`:${l.columnNumber}`));const c=l.componentName?`${l.componentName} `:"";o.push(`- ${c}\`${u}\``)}}const a=this.computedStyleSnapshot(t);if(a&&Object.keys(a).length>0){o.push("**Computed styles:**");for(const[l,u]of Object.entries(a))o.push(`- \`${l}\`: \`${u}\``)}}return o.push(""),o}elementLabel(t){const e=t.element||"element",n=(t.cssClasses??"").trim().split(/\s+/).filter(Boolean)[0];return n?`${e}.${n}`:e}componentLabel(t){switch(t.framework?.framework){case"react":return"React";case"vue":return"Vue";case"svelte":return"Svelte";case"livewire":case"blade":return"Component";default:return"Component"}}componentTreeLine(t,e){if(e==="compact")return null;const s=(t.framework?.component_stack??[]).map(o=>o.componentName).filter(o=>!!o);return s.length>0?(e==="standard"?s.slice(-3):s).join(" > "):t.framework?.component??null}sourceLocation(t){const e=t.framework;if(e?.source_file){let n=e.source_file;return e.source_line&&(n+=`:${e.source_line}`,e.source_column&&(n+=`:${e.source_column}`)),n}return e?.data?.file&&typeof e.data.file=="string"?e.data.file:null}positionString(t){const e=t.boundingBox;return!e||!e.width&&!e.height&&!e.x&&!e.y?null:`${Math.round(e.x)}px, ${Math.round(e.y)}px (${Math.round(e.width)}×${Math.round(e.height)}px)`}computedStyleSnapshot(t){try{const e=t.elementPath?document.querySelector(t.elementPath):null;if(!(e instanceof HTMLElement))return null;const n=window.getComputedStyle(e),s=["display","position","box-sizing","width","height","padding","margin","color","background-color","font-family","font-size","font-weight","line-height","border","border-radius","opacity","z-index","flex-direction","justify-content","align-items","gap"],o={};for(const r of s){const a=n.getPropertyValue(r)?.trim();a&&(o[r]=a)}return o}catch{return null}}getAnnotations(){return[...this.annotations]}toggleMinimize(){if(!this.toolbar)return;const t=!this.toolbar.isMinimized();t?this.toolbar.minimize():this.toolbar.restore(),this.onMinimize(t)}setVisible(t){if(this.toolbar){this.toolbar.setHidden(!t),t?this.markers?.setVisible(!this.toolbar.isMinimized()):(this.isAnnotating&&this.setAnnotating(!1),this.isFrozen&&this.setFrozen(!1),this.markers?.setVisible(!1),this.popup?.destroy());try{y.setItem(`instruckt:${location.origin}:hidden`,t?"0":"1")}catch{}}}toggleVisible(){this.toolbar&&this.setVisible(this.toolbar.isHidden())}isVisible(){return!this.toolbar?.isHidden()}destroy(){this.setAnnotating(!1),this.setFrozen(!1),document.removeEventListener("keydown",this.boundKeydown),document.removeEventListener("scroll",this.boundReposition,{capture:!0}),window.removeEventListener("resize",this.boundReposition),this.mutationObserver?.disconnect(),this.mutationObserver=null,this.mutationRaf!==null&&(cancelAnimationFrame(this.mutationRaf),this.mutationRaf=null),this.repositionRaf!==null&&(cancelAnimationFrame(this.repositionRaf),this.repositionRaf=null),window.removeEventListener("instruckt:locationchange",this.boundOnLocationChange),this.toolbar?.destroy(),this.highlight?.destroy(),this.popup?.destroy(),this.markers?.destroy(),this.unsubscribeStorage?.(),this.unsubscribeStorage=null,this.rafId!==null&&cancelAnimationFrame(this.rafId)}}function Zi(i={}){return new C(i)}if(!window.__instrucktBooted){window.__instrucktBooted=!0;const i=async()=>{try{await y.ready;const t=Zi();window.__instrucktInstance=t;try{y.getItem(`instruckt:${location.origin}:hidden`)==="1"&&t.setVisible(!1)}catch{}}catch(t){console.error("[instruckt] failed to initialize",t)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{i()},{once:!0}):i();try{chrome.runtime.onMessage.addListener(t=>{t?.type==="instruckt:toggle-visible"?window.__instrucktInstance?.toggleVisible():t?.type==="instruckt:toggle-minimize"&&window.__instrucktInstance?.toggleMinimize()})}catch{}}
//# sourceMappingURL=content.ts-BJ2cKbT4.js.map
})()
