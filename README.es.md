<p align="center">
  <strong>English</strong> | <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/vscode-voice-soundboard/readme.png" alt="Voice Soundboard" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/vscode-voice-soundboard/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=mcp-tool-shop.vscode-voice-soundboard"><img src="https://img.shields.io/visual-studio-marketplace/v/mcp-tool-shop.vscode-voice-soundboard.svg" alt="Marketplace"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/vscode-voice-soundboard/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

Extensión de texto a voz con 48 voces, configuraciones predefinidas y diálogo con múltiples altavoces, impulsada por [MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard).

## Características

- **Panel lateral** con las pestañas "Hablar", "Voces" y "Diálogo".
- **48 voces** en 9 idiomas (inglés, japonés, mandarín, español, francés, hindi, italiano, portugués).
- **5 preajustes** — Asistente, Narrador, Locutor, Cuentacuentos, Susurro.
- **Diálogo con múltiples voces** — escriba guiones, asigne voces y reproduzca todo.
- **Selección de voz** — seleccione código o texto y presione `Ctrl+Shift+S`.
- Reproducción de audio **compatible con diferentes plataformas** (Windows, macOS, Linux).

## Comenzando

1. Instale la extensión.
2. El servidor de la tabla de sonidos de voz de MCP se inicia automáticamente.
3. Haga clic en el icono del micrófono en la barra de actividades.
4. Escriba el texto y haga clic en **Hablar**.

## Comandos

| Comando. | Atajo. | Descripción. |
| Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | "The company is committed to providing high-quality products and services."

"We are looking for a motivated and experienced candidate."

"The meeting will be held on Tuesday at 10:00 AM."

"Please submit your application by the end of the week."

"For more information, please visit our website."
-------------

"La empresa está comprometida a ofrecer productos y servicios de alta calidad."

"Estamos buscando un candidato motivado y con experiencia."

"La reunión se llevará a cabo el martes a las 10:00 AM."

"Por favor, envíe su solicitud antes de que finalice la semana."

"Para obtener más información, visite nuestro sitio web." |
| Panel de sonidos de voz: Hablar texto... | — | Introduzca el texto que desea que se lea. |
| Panel de sonidos de voz: Selección de voz. | `Ctrl+Shift+S` | Hablar el texto seleccionado del editor. |
| Panel de sonidos de voz: Dejar de hablar. | — | Detener la reproducción actual. |
| Panel de sonidos de voz: Cambiar la voz. | — | Selector de voz de acceso rápido. |
| Panel de sonidos de voz: Alternar. | — | Mostrar/ocultar la barra lateral. |
| Panel de sonidos de voz: Exportar el diálogo en formato WebVTT. | — | Exportar el guion de diálogo como un archivo de subtítulos `.vtt`. |

## Exportación de diálogos

Escriba un guion con múltiples hablantes en la pestaña "Diálogo", asígne voces y luego haga clic en **Exportar VTT**. La extensión sintetiza cada línea, calcula los tiempos acumulativos a partir de la duración del audio y guarda un archivo de subtítulos en formato [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

El archivo `.vtt` exportado utiliza etiquetas de voz (`<v Speaker>`) y puede ser utilizado con reproductores de video, editores de subtítulos o herramientas de accesibilidad.

## Configuración

| Escenario. | Predeterminado. | Descripción. |
| Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | "Please provide the English text you would like me to translate." | Por favor, proporciona el texto que deseas que traduzca. |
| `voiceSoundboard.defaultVoice` | `bm_george` | Identificador de voz predeterminado. |
| `voiceSoundboard.speed` | `1.0` | Velocidad del habla (0.5–2.0). |
| `voiceSoundboard.backend` | `python` | Backend de Text-to-Speech (Python/HTTP/simulación). |
| `voiceSoundboard.autoStart` | `true` | Iniciar el servidor automáticamente al activarse. |
| `voiceSoundboard.format` | `wav` | Formato de salida de audio. |

## Licencia

MIT.
