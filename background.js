chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "toggleExtension") {
    const enabled = message.enabled

    const iconPath = enabled ? "icon-enabled.png" : "icon-disabled.png"

    chrome.action.setIcon({
      path: iconPath
    })

    chrome.storage.local.set({
      enabled
    })
  }
})
