import * as vscode from "vscode";

export interface ExtensionConfig {
  defaultVoice: string;
  speed: number;
  backend: "mock" | "python" | "http";
  autoStart: boolean;
  format: "wav" | "mp3" | "ogg";
}

export function getConfig(): ExtensionConfig {
  const cfg = vscode.workspace.getConfiguration("voiceSoundboard");
  return {
    defaultVoice: cfg.get<string>("defaultVoice", "bm_george"),
    speed: cfg.get<number>("speed", 1.0),
    backend: cfg.get<"mock" | "python" | "http">("backend", "mock"),
    autoStart: cfg.get<boolean>("autoStart", true),
    format: cfg.get<"wav" | "mp3" | "ogg">("format", "wav"),
  };
}
