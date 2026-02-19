import { exec, type ChildProcess } from "child_process";

let activeProcess: ChildProcess | null = null;

export function playAudio(filePath: string): void {
  stopAudio();

  const escaped = filePath.replace(/'/g, "'\\''");

  if (process.platform === "win32") {
    activeProcess = exec(
      `powershell -NoProfile -Command "(New-Object Media.SoundPlayer '${escaped}').PlaySync()"`,
    );
  } else if (process.platform === "darwin") {
    activeProcess = exec(`afplay '${escaped}'`);
  } else {
    activeProcess = exec(`aplay '${escaped}' 2>/dev/null || paplay '${escaped}'`);
  }

  activeProcess.on("exit", () => {
    activeProcess = null;
  });
}

export function stopAudio(): void {
  if (activeProcess) {
    activeProcess.kill();
    activeProcess = null;
  }
}

export function isPlaying(): boolean {
  return activeProcess !== null;
}
