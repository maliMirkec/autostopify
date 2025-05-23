function getEnabled() {
  return new Promise(resolve => {
    chrome.storage.local.get("enabled", (result) => {
      resolve(result.enabled);
    });
  });
}

const checkTrack = () => {
  getEnabled().then(enabled => {
    if(enabled !== false) {
      const $currentTrack = document.querySelector('[data-testid="context-item-link"]')

      if (!$currentTrack?.textContent) {
        return
      }

      const $allTracks = document.querySelectorAll('[data-testid="internal-track-link"] [data-encore-id="text"]')

      const $itemExists = Array.from($allTracks).find(
        el => el.textContent.trim() === $currentTrack?.textContent.trim()
      )

      if ($itemExists) {
        return
      }

      const $pause = document.querySelector('[data-testid="control-button-playpause"][aria-label="Pause"]')

      if ($pause) {
        $pause.click()
        console.log("AutoStopify: Playback stopped after recommended track.")
      }
    }
  });

}

setInterval(() => {
  checkTrack()
}, 3000)
