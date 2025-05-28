# Autostopify

**Autostopify** is a simple Chrome extension that automatically stops Spotify Web Player from autoplaying after an album or playlist ends.

## 🚀 Install

Get it from the [Chrome Web Store](https://chromewebstore.google.com/detail/autostopify/khebpfgdinomclahiiopldnfmpkphbem)

## 🛠️ Development

Clone the repo and load it into Chrome manually:

```bash
git clone https://github.com/maliMirkec/autostopify.git
```

1. Open `chrome://extensions/`
2. Enable Developer mode
3. Click Load unpacked
4. Select the cloned autostopify folder

## 📂 Structure

- `background.js` – Listens to tab events
- `content.js` – Controls playback in the Spotify tab
- `popup.js` – Handles logic for enabling/disabling the functionality
- `popup.html` – The popup interface shown when clicking the extension icon.
- `manifest.json` – Extension metadata and permissions

## 📄 License

[MIT](https://github.com/maliMirkec/autostopify/blob/main/LICENSE)
