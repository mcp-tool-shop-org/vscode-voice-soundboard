# Security Policy

## Reporting a Vulnerability

If you discover a security issue in this extension, please report it responsibly:

- **Report to:** [GitHub Issues](https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/issues) (for non-sensitive issues)
- **Response time:** We aim to acknowledge reports within 48 hours

## Scope

Voice Soundboard is a VS Code extension for text-to-speech. Its threat model covers:

- **Audio playback** — synthesized audio is played locally, never uploaded
- **Backend communication** — local Python backend by default (`localhost` only)
- **API keys** — optional OpenAI/ElevenLabs keys stored in VS Code settings (encrypted by VS Code)
- **File operations** — WebVTT export writes to user-chosen paths only

## What This Extension Does NOT Do

- No telemetry or data collection
- No network requests in local Python mode (all synthesis is on-device)
- No file access beyond user-initiated exports
- No secrets or credentials in the codebase

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.3.x   | Yes       |
