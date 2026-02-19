# Changelog

## [0.2.0] - 2026-02-19

### Changed
- Default backend switched from `mock` to `python` (local Kokoro TTS, free)
- First-run setup flow: detects Python, prompts Kokoro install, offers cloud fallback

### Added
- `voiceSoundboard.openaiApiKey` setting for cloud TTS (OpenAI) fallback
- `voiceSoundboard.pythonPath` setting for custom Python path
- Setup banner in sidebar when backend needs configuration
- Status bar "Setup required" state with gear icon

## [0.1.0] - 2026-02-19

### Added
- Sidebar panel with Speak, Voices, and Dialogue tabs
- 48 voices across 9 languages with search and filter
- 5 presets: Assistant, Narrator, Announcer, Storyteller, Whisper
- Multi-speaker dialogue editor with cast assignment
- Cross-platform audio playback (Windows, macOS, Linux)
- Bundled MCP server (auto-starts on activation)
- Commands: Speak Text, Speak Selection, Stop, Change Voice, Toggle Panel
- Status bar indicator showing connection state
- Keyboard shortcut: Ctrl+Shift+S to speak selection
