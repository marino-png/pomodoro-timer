const timeOption = document.getElementById("time-option")
timeOption.addEventListener("click", (event) => {
    const val = event.target.value
})

const saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click", () => {
    const selectedTimeOption = timeOption.value;
    const validatedTimeOption = (selectedTimeOption >= 1 && selectedTimeOption <= 60)
        ? selectedTimeOption: 25;
    chrome.storage.local.set({
        timer: 0,
        timeOption: validatedTimeOption,
        isRunning: false,
    })
})

chrome.storage.local.get(["timeOption"], (res) => {
    timeOption.value = res.timeOption
})