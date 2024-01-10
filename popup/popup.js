const startTimerBtn = document.getElementById("start-timer-btn")

startTimerBtn.addEventListener("click", () => {
    chrome.storage.local.get(['isRunning'], (res) => {
        chrome.storage.local.set({
            isRunning: !res.isRunning,
        }), () => {
            startTimerBtn.textContent = !res.isRunning ? "Pause Timer" : "Start Timer"
        }
    })
    
})