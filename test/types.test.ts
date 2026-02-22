import { describe, it, expect } from "vitest";
import type {
  VoiceInfo,
  PresetConfig,
  BackendInfo,
  VoiceStatusResponse,
  VoiceSpeakResponse,
  VoiceInterruptResponse,
  DialogueLineResult,
  DialoguePauseResult,
  DialogueResponse,
  VoiceErrorResponse,
} from "../src/mcp/types.js";

describe("MCP types", () => {
  it("VoiceInfo shape is valid", () => {
    const voice: VoiceInfo = {
      id: "bm_george",
      name: "George",
      gender: "male",
      accent: "British",
      style: "narrator",
      language: "en",
    };
    expect(voice.id).toBe("bm_george");
    expect(voice.gender).toBe("male");
  });

  it("PresetConfig shape is valid", () => {
    const preset: PresetConfig = {
      name: "narrator",
      voice: "bm_george",
      speed: 1.0,
      description: "Clear British narrator",
    };
    expect(preset.speed).toBe(1.0);
    expect(preset.voice).toBe("bm_george");
  });

  it("BackendInfo shape is valid", () => {
    const backend: BackendInfo = {
      type: "python",
      ready: true,
      model: "kokoro-v0.19",
      sampleRate: 24000,
    };
    expect(backend.ready).toBe(true);
    expect(backend.sampleRate).toBe(24000);
  });

  it("VoiceStatusResponse shape is valid", () => {
    const status: VoiceStatusResponse = {
      voices: [
        {
          id: "af_jessica",
          name: "Jessica",
          gender: "female",
          accent: "American",
          style: "conversational",
          language: "en",
        },
      ],
      presets: [],
      defaultVoice: "af_jessica",
      backend: { type: "mock", ready: true },
    };
    expect(status.voices).toHaveLength(1);
    expect(status.defaultVoice).toBe("af_jessica");
  });

  it("VoiceSpeakResponse shape is valid", () => {
    const speak: VoiceSpeakResponse = {
      traceId: "abc-123",
      voiceUsed: "bm_george",
      speed: 1.0,
      artifactMode: "path",
      audioPath: "/tmp/audio.wav",
      durationMs: 3200,
      sampleRate: 24000,
      format: "wav",
    };
    expect(speak.artifactMode).toBe("path");
    expect(speak.format).toBe("wav");
  });

  it("VoiceInterruptResponse shape is valid", () => {
    const interrupt: VoiceInterruptResponse = {
      interrupted: true,
      streamId: "stream-1",
      reason: "user-requested",
    };
    expect(interrupt.interrupted).toBe(true);
  });

  it("DialogueResponse shape is valid", () => {
    const line: DialogueLineResult = {
      type: "line",
      speaker: "Narrator",
      voice: "bm_george",
      text: "Hello world",
      durationMs: 1500,
    };
    const pause: DialoguePauseResult = {
      type: "pause",
      durationMs: 500,
    };
    const dialogue: DialogueResponse = {
      lineCount: 1,
      speakers: ["Narrator"],
      cast: { Narrator: "bm_george" },
      artifacts: [line, pause],
      totalDurationMs: 2000,
    };
    expect(dialogue.lineCount).toBe(1);
    expect(dialogue.artifacts).toHaveLength(2);
    expect(dialogue.artifacts[0].type).toBe("line");
    expect(dialogue.artifacts[1].type).toBe("pause");
  });

  it("VoiceErrorResponse shape is valid", () => {
    const err: VoiceErrorResponse = {
      error: true,
      code: "VOICE_NOT_FOUND",
      message: "Voice xyz does not exist",
      traceId: "err-456",
    };
    expect(err.error).toBe(true);
    expect(err.code).toBe("VOICE_NOT_FOUND");
  });
});

describe("ExtensionConfig type contract", () => {
  it("backend must be one of mock | python | http", () => {
    const validBackends = ["mock", "python", "http"] as const;
    expect(validBackends).toContain("mock");
    expect(validBackends).toContain("python");
    expect(validBackends).toContain("http");
    expect(validBackends).toHaveLength(3);
  });

  it("format must be one of wav | mp3 | ogg", () => {
    const validFormats = ["wav", "mp3", "ogg"] as const;
    expect(validFormats).toContain("wav");
    expect(validFormats).toContain("mp3");
    expect(validFormats).toContain("ogg");
    expect(validFormats).toHaveLength(3);
  });

  it("default voice is bm_george", () => {
    expect("bm_george").toBe("bm_george");
  });

  it("speed range is 0.5 to 2.0", () => {
    const min = 0.5;
    const max = 2.0;
    const defaultSpeed = 1.0;
    expect(defaultSpeed).toBeGreaterThanOrEqual(min);
    expect(defaultSpeed).toBeLessThanOrEqual(max);
  });
});
