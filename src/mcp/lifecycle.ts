import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import type { ExtensionConfig } from "../config.js";

let client: Client | null = null;
let transport: StdioClientTransport | null = null;

export function getClient(): Client | null {
  return client;
}

export async function startServer(config: ExtensionConfig): Promise<Client> {
  if (client) {
    return client;
  }

  const args = ["@mcptoolshop/voice-soundboard-mcp", `--backend=${config.backend}`];
  if (config.format !== "wav") {
    args.push(`--format=${config.format}`);
  }

  transport = new StdioClientTransport({
    command: "npx",
    args,
    env: {
      ...process.env,
      VOICE_SOUNDBOARD_ARTIFACT_MODE: "path",
    },
  });

  client = new Client({ name: "vscode-voice-soundboard", version: "0.1.0" }, {
    capabilities: {},
  });

  await client.connect(transport);
  return client;
}

export async function stopServer(): Promise<void> {
  if (client) {
    try {
      await client.close();
    } catch {
      // ignore close errors
    }
    client = null;
  }
  if (transport) {
    try {
      await transport.close();
    } catch {
      // ignore close errors
    }
    transport = null;
  }
}

export function isConnected(): boolean {
  return client !== null;
}
