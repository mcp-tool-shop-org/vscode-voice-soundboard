<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.md">English</a>
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

Extensão de texto para fala com 48 vozes, predefinições e diálogo multi-alto-falante — alimentada por [MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard).

## Recursos

- **Painel lateral** com abas "Falar", "Vozes" e "Diálogo"
- **48 vozes** em 9 idiomas (inglês, japonês, mandarim, espanhol, francês, hindi, italiano, português)
- **5 predefinições** — Assistente, Narrador, Apresentador, Contador de Histórias, Sussurro
- **Diálogo multi-alto-falante** — escreva roteiros, atribua vozes, reproduza tudo
- **Seleção de Fala** — destaque o código ou o texto e pressione `Ctrl+Shift+S`
- Reprodução de áudio compatível com diversas plataformas (Windows, macOS, Linux)

## Como Começar

1. Instale a extensão
2. O servidor MCP Voice Soundboard inicia automaticamente
3. Clique no ícone do microfone na barra de atividades
4. Digite o texto e clique em **Falar**

## Comandos

| Comando | Atalho | Descrição |
|---------|----------|-------------|
| Voice Soundboard: Falar Texto... | — | Digite o texto a ser falado |
| Voice Soundboard: Falar Seleção | `Ctrl+Shift+S` | Fala o texto selecionado no editor |
| Voice Soundboard: Parar de Falar | — | Interrompe a reprodução atual |
| Voice Soundboard: Mudar Voz | — | Seletor rápido de voz |
| Voice Soundboard: Alternar Painel | — | Mostra/oculta o painel lateral |
| Voice Soundboard: Exportar Diálogo como WebVTT | — | Exporta o roteiro do diálogo como um arquivo de legenda `.vtt` |

## Exportação de Diálogo

Escreva um roteiro multi-alto-falante na aba "Diálogo", atribua vozes e, em seguida, clique em **Exportar VTT**. A extensão sintetiza cada linha, calcula os tempos cumulativos a partir das durações do áudio e salva um arquivo de legenda [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

O arquivo `.vtt` exportado usa tags de voz (`<v Speaker>`) e pode ser usado com players de vídeo, editores de legendas ou ferramentas de acessibilidade.

## Configurações

| Configuração | Padrão | Descrição |
|---------|---------|-------------|
| `voiceSoundboard.defaultVoice` | `bm_george` | ID de voz padrão |
| `voiceSoundboard.speed` | `1.0` | Velocidade da fala (0,5–2,0) |
| `voiceSoundboard.backend` | `python` | Backend TTS (python/http/mock) |
| `voiceSoundboard.autoStart` | `true` | Iniciar automaticamente o servidor na ativação |
| `voiceSoundboard.format` | `wav` | Formato de saída de áudio |

## Privacidade

No modo Python local (o padrão), toda a síntese de fala ocorre na sua máquina. Nenhum texto é enviado para lugar nenhum. No modo HTTP, o texto é enviado para o provedor de nuvem configurado (OpenAI/ElevenLabs) de acordo com seus termos de API. Sem telemetria.

## Avaliação

| Categoria | Pontuação | Observações |
|----------|-------|-------|
| A. Segurança | 9/10 | SECURITY.md, padrão somente local, chaves de API criptografadas no armazenamento do VS Code |
| B. Tratamento de Erros | 8/10 | Inicialização automática do backend, fallback suave, mensagens de status |
| C. Documentação para Usuários | 9/10 | README, CHANGELOG, página inicial, documentação de configurações |
| D. Higiene de Distribuição | 9/10 | CI + testes (102), Marketplace do VS Code, cobertura Codecov |
| E. Identidade | 10/10 | Logo, traduções, página inicial, listagem no Marketplace |
| **Total** | **45/50** | |

## Licença

MIT

---

<p align="center">
  Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</p>
