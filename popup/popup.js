const startTimerBtn = document.getElementById("start-timer-btn")
startTimerBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: true,
    })
})