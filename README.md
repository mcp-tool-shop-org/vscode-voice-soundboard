<p align="center">
  <img src="assets/logo.png" alt="VSCode Voice Soundboard" width="280" />
</p>

Text-to-speech extension with 48 voices, presets, and multi-speaker dialogue — powered by [MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard).

## Features

- **Sidebar panel** with Speak, Voices, and Dialogue tabs
- **48 voices** across 9 languages (English, Japanese, Mandarin, Spanish, French, Hindi, Italian, Portuguese)
- **5 presets** — Assistant, Narrator, Announcer, Storyteller, Whisper
- **Multi-speaker dialogue** — write scripts, assign voices, play all
- **Speak Selection** — highlight code or text and press `Ctrl+Shift+S`
- **Cross-platform** audio playback (Windows, macOS, Linux)

## Getting Started

1. Install the extension
2. The MCP Voice Soundboard server starts automatically
3. Click the microphone icon in the activity bar
4. Type text and click **Speak**

## Commands

| Command | Shortcut | Description |
|---------|----------|-------------|
| Voice Soundboard: Speak Text... | — | Enter text to speak |
| Voice Soundboard: Speak Selection | `Ctrl+Shift+S` | Speak selected editor text |
| Voice Soundboard: Stop Speaking | — | Stop current playback |
| Voice Soundboard: Change Voice | — | Quick-pick voice selector |
| Voice Soundboard: Toggle Panel | — | Show/hide sidebar |
| Voice Soundboard: Export Dialogue as WebVTT | — | Export dialogue script as `.vtt` subtitle file |

## Dialogue Export

Write a multi-speaker script in the Dialogue tab, assign voices, then click **Export VTT**. The extension synthesizes each line, calculates cumulative timecodes from the audio durations, and saves a [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) subtitle file.

The exported `.vtt` file uses voice tags (`<v Speaker>`) and can be used with video players, subtitle editors, or accessibility tools.

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `voiceSoundboard.defaultVoice` | `bm_george` | Default voice ID |
| `voiceSoundboard.speed` | `1.0` | Speech speed (0.5–2.0) |
| `voiceSoundboard.backend` | `python` | TTS backend (python/http/mock) |
| `voiceSoundboard.autoStart` | `true` | Auto-start server on activation |
| `voiceSoundboard.format` | `wav` | Audio output format |

## License

MIT
