<p align="center">
  <strong>English</strong> | <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português</a>
</p>

<p align="center">
  
            <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/vscode-voice-soundboard/readme.png"
           alt="Voice Soundboard" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=mcp-tool-shop.vscode-voice-soundboard"><img src="https://img.shields.io/visual-studio-marketplace/v/mcp-tool-shop.vscode-voice-soundboard.svg" alt="Marketplace"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/vscode-voice-soundboard/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

一款文本转语音扩展，提供48种声音、预设选项以及多扬声器对话功能，由[MCP语音音效库](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard)驱动。

## 功能特点

- **侧边栏面板**，包含“语音”、“声音”和“对话”三个选项卡。
- **48种声音**，涵盖9种语言（英语、日语、普通话、西班牙语、法语、印地语、意大利语、葡萄牙语）。
- **5种预设模式**：助手、旁白、播报员、故事讲述者、低语。
- **多说话人对话**：编写剧本，分配声音，一键播放所有内容。
- **语音选择**：高亮代码或文本，然后按下 `Ctrl+Shift+S` 组合键。
- **跨平台音频播放**（Windows、macOS、Linux）。

## 入门指南

1. 安装扩展程序。
2. MCP Voice Soundboard 服务器将自动启动。
3. 点击活动栏中的麦克风图标。
4. 输入文本，然后点击“说话”按钮。

## 命令

| 命令。 | 快捷方式 | 描述。 |
| 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 |
| 语音音板：朗读文本... | — | 输入您想要语音朗读的文本。 |
| 语音音效面板：语音选择。 | `Ctrl+Shift+S` | 朗读选定的编辑器中的文本。 |
| 语音音效面板：停止说话。 | — | 停止当前播放。 |
| 语音音效面板：改变声音。 | — | 快速语音选择器。 |
| 语音音效面板：切换面板。 | — | 显示/隐藏侧边栏。 |
| 语音音效库：将对话导出为 WebVTT 格式。 | — | 将导出的对话脚本导出为 `.vtt` 字幕文件。 |

## 对话导出

在“对话”选项卡中编写一个多说话者的脚本，为每个角色分配声音，然后点击“导出 VTT”。该扩展程序会合成每一句台词，根据音频的时长计算累计时间码，并将结果保存为一种名为 [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) 的字幕文件。

导出的 `.vtt` 文件使用了语音标签 (`<v Speaker>`)，可以与视频播放器、字幕编辑软件或辅助工具一起使用。

## 设置

| 场景；环境；设置。 | 默认设置。 | 描述。 |
| 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 |
| `voiceSoundboard.defaultVoice` | `bm_george` | 默认语音ID。 |
| `voiceSoundboard.speed` | `1.0` | 语速 (0.5–2.0)。 |
| `voiceSoundboard.backend` | `python` | TTS后端 (Python/HTTP/模拟)。 |
| `voiceSoundboard.autoStart` | `true` | 激活时自动启动服务器。 |
| `voiceSoundboard.format` | `wav` | 音频输出格式。 |

## 许可

麻省理工学院。
