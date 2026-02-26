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

Extension de synthèse vocale avec 48 voix, des préréglages et un système de dialogue multi-haut-parleurs, alimentée par [MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard).

## Caractéristiques

- **Panneau latéral** avec les onglets "Parole", "Voix" et "Dialogue".
- **48 voix** disponibles dans 9 langues (anglais, japonais, mandarin, espagnol, français, hindi, italien, portugais).
- **5 préréglages** : Assistant, Narrateur, Annonceur, Conte, Murmure.
- **Dialogue multi-voix** : rédigez des scripts, attribuez des voix et lancez la lecture de tous les éléments.
- **Sélection vocale** : sélectionnez du code ou du texte et appuyez sur `Ctrl+Shift+S`.
- Lecture audio **compatible avec plusieurs plateformes** (Windows, macOS, Linux).

## Premiers pas

1. Installez l'extension.
2. Le serveur de la barre de sons vocales MCP démarre automatiquement.
3. Cliquez sur l'icône du microphone dans la barre d'activité.
4. Tapez du texte et cliquez sur le bouton **Parler**.

## Commandes

| Commande. | Raccourci. | Description. |
| Veuillez fournir le texte à traduire. | Bien sûr, veuillez me fournir le texte que vous souhaitez que je traduise. | Veuillez fournir le texte à traduire. |
| Tableau de sons vocaux : Parler le texte... | — | Entrez le texte que vous souhaitez entendre. |
| Tableau de sons vocaux : Sélection de la voix. | `Ctrl+Shift+S` | Prononcer le texte sélectionné par l'éditeur. |
| Tableau de sons vocaux : Arrêtez de parler. | — | Arrêter la lecture en cours. |
| Tableau de sons vocaux : Modifier la voix. | — | Sélecteur vocal à accès rapide. |
| Tableau de commandes vocales : Basculer le panneau. | — | Afficher/masquer la barre latérale. |
| Tableau de sons vocaux : Exporter les dialogues au format WebVTT. | — | Exporter le script de dialogue au format `.vtt`, qui est un fichier de sous-titres. |

## Dialogue Export

Dans l'onglet "Dialogue", rédigez un script avec plusieurs intervenants, attribuez des voix, puis cliquez sur **Exporter en VTT**. L'extension synthétise chaque réplique, calcule les horodatages cumulatifs en fonction de la durée de l'audio, et enregistre un fichier de sous-titres au format [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

Le fichier `.vtt` exporté utilise des balises vocales (`<v Speaker>`) et peut être utilisé avec des lecteurs vidéo, des éditeurs de sous-titres ou des outils d'accessibilité.

## Paramètres

| Cadre.
Contexte.
Décor.
Lieu.
Environnement.
Installation.
Réglage.
Configuration.
Mise en place. | Par défaut. | Description. |
| Veuillez fournir le texte à traduire. | Veuillez fournir le texte à traduire. | Veuillez fournir le texte à traduire. |
| `voiceSoundboard.defaultVoice` | `bm_george` | Identifiant vocal par défaut. |
| `voiceSoundboard.speed` | `1.0` | Vitesse de la parole (0,5–2,0). |
| `voiceSoundboard.backend` | `python` | Serveur de traitement de la parole (en Python, via HTTP, avec possibilité de simulation). |
| `voiceSoundboard.autoStart` | `true` | Démarrer automatiquement le serveur lors de l'activation. |
| `voiceSoundboard.format` | `wav` | Format de sortie audio. |

## Licence

MIT.
