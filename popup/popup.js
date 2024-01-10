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

const resetTimerBtn = document.getElementById("reset-timer-btn")

resetTimerBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        timer: 0,
        isRunning: false,
    },() => {
        startTimerBtn.textContent = "Start Timer"
    })
})