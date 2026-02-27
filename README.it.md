<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.md">English</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Estensione di sintesi vocale con 48 voci, impostazioni predefinite e dialogo multivoce, basata su [MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard).

## Funzionalità

- **Pannello laterale** con schede "Parla", "Voci" e "Dialogo"
- **48 voci** in 9 lingue (inglese, giapponese, cinese mandarino, spagnolo, francese, hindi, italiano, portoghese)
- **5 impostazioni predefinite** — Assistente, Narratore, Annunciatore, Raccontastorie, Sussurro
- **Dialogo multivoce** — scrivi script, assegna voci, riproduci tutto
- **Selezione vocale** — evidenzia codice o testo e premi `Ctrl+Shift+S`
- Riproduzione audio compatibile con diverse piattaforme (Windows, macOS, Linux)

## Come iniziare

1. Installa l'estensione
2. Il server di MCP Voice Soundboard si avvia automaticamente
3. Clicca sull'icona del microfono nella barra delle attività
4. Digita il testo e clicca su **Parla**

## Comandi

| Comando | Scorciatoia | Descrizione |
|---------|----------|-------------|
| Voice Soundboard: Parla il testo... | — | Inserisci il testo da pronunciare |
| Voice Soundboard: Parla la selezione | `Ctrl+Shift+S` | Pronuncia il testo selezionato nell'editor |
| Voice Soundboard: Interrompi la riproduzione | — | Interrompi la riproduzione corrente |
| Voice Soundboard: Cambia voce | — | Selettore rapido delle voci |
| Voice Soundboard: Mostra/Nascondi il pannello | — | Mostra/nascondi il pannello laterale |
| Voice Soundboard: Esporta il dialogo come WebVTT | — | Esporta lo script del dialogo come file di sottotitoli `.vtt` |

## Esportazione del dialogo

Scrivi uno script multivoce nella scheda "Dialogo", assegna le voci e poi clicca su **Esporta VTT**. L'estensione sintetizza ogni riga, calcola i timestamp cumulativi in base alla durata dell'audio e salva un file di sottotitoli [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

Il file `.vtt` esportato utilizza tag vocali (`<v Speaker>`) e può essere utilizzato con lettori video, editor di sottotitoli o strumenti di accessibilità.

## Impostazioni

| Impostazione | Valore predefinito | Descrizione |
|---------|---------|-------------|
| `voiceSoundboard.defaultVoice` | `bm_george` | ID voce predefinito |
| `voiceSoundboard.speed` | `1.0` | Velocità del parlato (0.5–2.0) |
| `voiceSoundboard.backend` | `python` | Backend TTS (python/http/mock) |
| `voiceSoundboard.autoStart` | `true` | Avvia automaticamente il server all'attivazione |
| `voiceSoundboard.format` | `wav` | Formato dell'output audio |

## Privacy

In modalità Python locale (predefinita), tutta la sintesi vocale avviene sulla tua macchina. Nessun testo viene inviato da nessuna parte. In modalità HTTP, il testo viene inviato al provider cloud configurato (OpenAI/ElevenLabs) in base ai loro termini di servizio API. Nessuna raccolta di dati di telemetria.

## Valutazione

| Categoria | Punteggio | Note |
|----------|-------|-------|
| A. Sicurezza | 9/10 | SECURITY.md, solo locale per impostazione predefinita, chiavi API crittografate nello storage di VS Code |
| B. Gestione degli errori | 8/10 | Avvio automatico del backend, fallback graduale, messaggi di stato |
| C. Documentazione per l'utente | 9/10 | README, CHANGELOG, pagina di presentazione, documentazione delle impostazioni |
| D. Qualità del codice | 9/10 | CI + test (102), VS Code Marketplace, copertura Codecov |
| E. Identità | 10/10 | Logo, traduzioni, pagina di presentazione, inserzione nel Marketplace |
| **Total** | **45/50** | |

## Licenza

MIT

---

<p align="center">
  Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</p>
