<p align="center">
  <strong>English</strong> | <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português</a>
</p>

<p align="center">
  <img src="assets/logo.png" alt="Voice Soundboard" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=mcp-tool-shop.vscode-voice-soundboard"><img src="https://img.shields.io/visual-studio-marketplace/v/mcp-tool-shop.vscode-voice-soundboard.svg" alt="Marketplace"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/vscode-voice-soundboard/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

Extensão de texto para voz com 48 vozes, configurações predefinidas e diálogo com múltiplos alto-falantes, alimentada por [MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard).

## Características

- **Painel lateral** com as abas "Falar", "Vozes" e "Diálogo".
- **48 vozes** em 9 idiomas (inglês, japonês, mandarim, espanhol, francês, hindi, italiano, português).
- **5 predefinições** — Assistente, Narrador, Locutor, Contador de histórias, Sussurro.
- **Diálogo com múltiplos locutores** — escreva roteiros, atribua vozes e reproduza tudo.
- **Seleção de fala** — selecione o código ou o texto e pressione `Ctrl+Shift+S`.
- Reprodução de áudio **compatível com diversas plataformas** (Windows, macOS, Linux).

## Começando

1. Instale a extensão.
2. O servidor do painel de sons MCP Voice inicia-se automaticamente.
3. Clique no ícone do microfone na barra de atividades.
4. Digite o texto e clique em "**Falar**".

## Comandos

| Comando. | Atalho. | Descrição. |
| Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Absolutely! Please provide the English text you would like me to translate into Portuguese. I will do my best to provide an accurate and natural-sounding translation. |
| Painel de sons de voz: Falar o texto... | — | Insira o texto que deseja ouvir. |
| Painel de sons de voz: Seleção de áudio. | `Ctrl+Shift+S` | Falar o texto selecionado pelo editor. |
| Painel de sons de voz: Pare de falar. | — | Interromper a reprodução atual. |
| Painel de sons de voz: Alterar a voz. | — | Seletor de voz de acesso rápido. |
| Painel de sons de voz: Alternar. | — | Mostrar/ocultar a barra lateral. |
| Painel de sons: Exportar diálogos no formato WebVTT. | — | Exporte o script do diálogo como um arquivo de legenda `.vtt`. |

## Exportação de diálogos

Escreva um roteiro com várias falas na aba "Diálogo", atribua vozes e, em seguida, clique em **Exportar VTT**. A extensão sintetiza cada linha, calcula os tempos cumulativos com base na duração do áudio e salva um arquivo de legendas no formato [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

O arquivo `.vtt` exportado utiliza etiquetas de voz (`<v Speaker>`) e pode ser utilizado com reprodutores de vídeo, editores de legendas ou ferramentas de acessibilidade.

## Configurações

| Cenário. | Padrão. | Descrição. |
| Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Absolutely! Please provide the English text you would like me to translate into Portuguese. I will do my best to provide an accurate and natural-sounding translation. |
| `voiceSoundboard.defaultVoice` | `bm_george` | Identificador de voz padrão. |
| `voiceSoundboard.speed` | `1.0` | Velocidade da fala (0,5–2,0). |
| `voiceSoundboard.backend` | `python` | Backend de Text-to-Speech (Python/HTTP/Simulação). |
| `voiceSoundboard.autoStart` | `true` | Iniciar o servidor automaticamente ao ser ativado. |
| `voiceSoundboard.format` | `wav` | Formato de saída de áudio. |

## Licença

MIT.
