const toggle = document.getElementById('toggle')

chrome.storage.local.get("enabled", (data) => {
  toggle.checked = data.enabled ?? true
})

toggle.addEventListener("change", () => {
  const enabled = toggle.checked
  chrome.runtime.sendMessage({
    type: "toggleExtension",
    enabled
  })
})
