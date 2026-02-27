<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/vscode-voice-soundboard/readme.png" alt="Voice Soundboard" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=mcp-tool-shop.vscode-voice-soundboard"><img src="https://img.shields.io/visual-studio-marketplace/v/mcp-tool-shop.vscode-voice-soundboard.svg" alt="Marketplace"></a>
  <a href="https://codecov.io/gh/mcp-tool-shop-org/vscode-voice-soundboard"><img src="https://img.shields.io/codecov/c/github/mcp-tool-shop-org/vscode-voice-soundboard" alt="Coverage"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/vscode-voice-soundboard/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

テキスト読み上げ機能拡張。48種類の音声、プリセット、マルチスピーカーによる会話に対応。 [MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard)によって実現。

## 機能

- **サイドバーパネル**：読み上げ、音声、会話のタブ
- **48種類の音声**：9言語（英語、日本語、中国語、スペイン語、フランス語、ヒンディー語、イタリア語、ポルトガル語）
- **5つのプリセット**：アシスタント、ナレーター、アナウンサー、語り手、ささやき
- **マルチスピーカーによる会話**：スクリプトを作成し、音声を選択して、すべてを再生
- **選択範囲の読み上げ**：コードまたはテキストを選択し、`Ctrl+Shift+S`キーを押す
- **クロスプラットフォーム対応**の音声再生（Windows、macOS、Linux）

## 始め方

1. 拡張機能をインストール
2. MCP Voice Soundboardのサーバーが自動的に起動
3. アクティビティバーにあるマイクアイコンをクリック
4. テキストを入力し、**読み上げ**ボタンをクリック

## コマンド

| コマンド | ショートカット | 説明 |
|---------|----------|-------------|
| Voice Soundboard: テキストの読み上げ... | — | 読み上げるテキストを入力 |
| Voice Soundboard: 選択範囲の読み上げ | `Ctrl+Shift+S` | 選択したエディタのテキストを読み上げる |
| Voice Soundboard: 再生停止 | — | 現在の再生を停止 |
| Voice Soundboard: 音声の変更 | — | 音声選択のクイックピッカー |
| Voice Soundboard: パネルの表示/非表示 | — | サイドバーの表示/非表示を切り替える |
| Voice Soundboard: 会話をWebVTT形式でエクスポート | — | 会話スクリプトを`.vtt`形式の字幕ファイルとしてエクスポート |

## 会話のエクスポート

会話タブでマルチスピーカーのスクリプトを作成し、音声を選択し、**WebVTTのエクスポート**ボタンをクリックします。拡張機能は各行を合成し、音声の長さに基づいて累積時間を計算し、[WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)形式の字幕ファイルを保存します。

エクスポートされた`.vtt`ファイルには、音声タグ（`<v Speaker>`）が含まれており、ビデオプレーヤー、字幕エディター、またはアクセシビリティツールで使用できます。

## 設定

| 設定項目 | デフォルト値 | 説明 |
|---------|---------|-------------|
| `voiceSoundboard.defaultVoice` | `bm_george` | デフォルト音声ID |
| `voiceSoundboard.speed` | `1.0` | 読み上げ速度（0.5～2.0） |
| `voiceSoundboard.backend` | `python` | TTSバックエンド（python/http/mock） |
| `voiceSoundboard.autoStart` | `true` | 起動時にサーバーを自動起動 |
| `voiceSoundboard.format` | `wav` | 音声出力形式 |

## プライバシー

ローカルPythonモード（デフォルト）では、すべての音声合成がローカルマシン上で行われます。テキストはどこにも送信されません。HTTPモードでは、テキストが設定されたクラウドプロバイダー（OpenAI/ElevenLabs）に送信されます（各プロバイダーのAPI規約に基づきます）。テレメトリーは行われません。

## 評価

| カテゴリ | 評価 | 備考 |
|----------|-------|-------|
| A. セキュリティ | 9/10 | SECURITY.md、ローカルのみのデフォルト設定、VS Codeの暗号化ストレージにAPIキーを保存 |
| B. エラー処理 | 8/10 | バックエンドの自動起動、エラー発生時の安全なフォールバック、ステータスメッセージ |
| C. ユーザーマニュアル | 9/10 | README、CHANGELOG、紹介ページ、設定に関するドキュメント |
| D. 品質管理 | 9/10 | CI + テスト（102件）、VS Code Marketplace、Codecovによるカバレッジ測定 |
| E. 識別 | 10/10 | ロゴ、翻訳、紹介ページ、Marketplaceへの登録 |
| **Total** | **45/50** | |

## ライセンス

MIT

---

<p align="center">
  Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</p>
