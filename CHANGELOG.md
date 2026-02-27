# Changelog

## [0.3.0] - 2026-02-26

### Fixed
- **Security:** Replaced innerHTML with safe DOM construction in voice cards and setup banner (XSS prevention)
- **Security:** Switched audio player from shell `exec` to `spawn` with args array (shell injection prevention)
- **Bug:** `findPython` race condition — parallel exec calls could resolve multiple times; now sequential
- **Bug:** Dialogue playback can now be cancelled mid-sequence via Stop button (AbortController)
- **Bug:** Error status chip timeout stacking — rapid errors no longer queue conflicting resets
- **Bug:** Speaking button state now correctly resets when dialogue is cancelled mid-playback

## [0.2.2] - 2026-02-27

### Added
- Publish workflow for automated VSIX packaging and Marketplace release

## [0.2.1] - 2026-02-23

### Added
- **Dialogue export as WebVTT** — synthesize dialogue lines and export as `.vtt` subtitle file with cumulative timecodes and voice tags
- "Export VTT" button in the Dialogue tab alongside "Play All"
- Command Palette entry: `Voice Soundboard: Export Dialogue as WebVTT`

### Fixed
- README Settings table: backend default now correctly shows `python` (was `mock`)

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
