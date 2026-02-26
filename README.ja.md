<p align="center">
  <strong>English</strong> | <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/vscode-voice-soundboard/readme.png" alt="Voice Soundboard" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=mcp-tool-shop.vscode-voice-soundboard"><img src="https://img.shields.io/visual-studio-marketplace/v/mcp-tool-shop.vscode-voice-soundboard.svg" alt="Marketplace"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/vscode-voice-soundboard/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

48種類の音声、プリセット機能、およびマルチスピーカーによる対話機能を備えたテキスト読み上げ拡張機能。動作には[MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard)が使用されています。

## 特徴

- **サイドバーパネル**: 「発話」「声の種類」「会話」のタブを搭載
- **48種類の音声**: 9言語に対応 (英語、日本語、中国語、スペイン語、フランス語、ヒンディー語、イタリア語、ポルトガル語)
- **5つのプリセット**: アシスタント、ナレーター、アナウンサー、語り手、ささやき
- **マルチスピーカーによる会話**: スクリプトを作成し、音声の種類を割り当て、すべてを再生
- **発話選択**: コードまたはテキストを選択し、`Ctrl+Shift+S`キーを押す
- **クロスプラットフォーム対応**: Windows、macOS、Linuxで音声再生が可能

## はじめに

1. 拡張機能をインストールします。
2. MCP Voice Soundboardのサーバーが自動的に起動します。
3. アクティビティバーにあるマイクアイコンをクリックします。
4. テキストを入力し、**発話**ボタンをクリックします。

## コマンド

| コマンド | ショートカット | 説明 |
| 以下の文章を日本語に翻訳してください。 | 以下に翻訳します。
----------
The company is committed to providing high-quality products and services.
(当社は、高品質な製品とサービスを提供することに尽力しています。) | 以下に翻訳します。
-------------
申し訳ありませんが、翻訳するテキストが提供されていません。テキストを入力してください。 |
| 音声サンプル盤：テキストを読み上げます... | — | 話したいテキストを入力してください。 |
| 音声サンプル盤：選択した音声を再生。 | `Ctrl+Shift+S` | 選択されたテキストを読み上げます。 |
| 音声サンプル：発言を停止する。 | — | 現在の再生を停止します。 |
| 音声エフェクトボード：声を変える。 | — | 簡易音声選択機能 |
| 音声サンプル盤：パネルの表示/非表示を切り替えます。 | — | サイドバーの表示/非表示を切り替えます。 |
| 音声サンプル盤：対話文をWebVTT形式でエクスポートする。 | — | エクスポートダイアログのスクリプトを`.vtt`形式の字幕ファイルとして保存します。 |

## 対話のエクスポート

「ダイアログ」タブで、複数の話者が登場するスクリプトを作成し、各キャラクターに声を設定します。その後、「VTT形式でエクスポート」をクリックします。この拡張機能は、各セリフを合成し、音声の長さに基づいて累積タイムコードを計算し、[WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)形式の字幕ファイルを保存します。

エクスポートされる `.vtt` ファイルには、音声タグ (`<v Speaker>`) が含まれており、ビデオプレーヤー、字幕編集ソフト、またはアクセシビリティツールで使用することができます。

## 設定

| 設定。 | デフォルト設定 | 説明. |
| Please provide the English text you would like me to translate. I am ready to translate it into Japanese. | 以下の文章を日本語に翻訳してください。 | 以下に翻訳します。
------------- |
| `voiceSoundboard.defaultVoice` | `bm_george` | デフォルトの音声ID。 |
| `voiceSoundboard.speed` | `1.0` | 再生速度 (0.5～2.0倍)。 |
| `voiceSoundboard.backend` | `python` | TTS (テキスト読み上げ) のバックエンド部分 (Python/HTTP/モック)。 |
| `voiceSoundboard.autoStart` | `true` | アクティベーション時に自動的にサーバーを起動します。 |
| `voiceSoundboard.format` | `wav` | 音声出力形式 |

## ライセンス

マサチューセッツ工科大学
