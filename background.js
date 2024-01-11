chrome.alarms.create("tomatoTimer",{
    periodInMinutes: 1/60,
})

chrome.alarms.onAlarm.addListener((alarm)=>{
    if(alarm.name === "tomatoTimer"){
        chrome.storage.local.get(["timer", "isRunning"], (res) => {
            if (res.isRunning){
                let timer = res.timer+1
                let isRunning = true
                console.log(timer)
                if (timer === 25 * 60){
                    this.registration.showNotification("Tomato Timer", {
                        body: "25 minutes has passed",
                        icon: "images/pomodoro.png",
                    })
                    timer = 0
                    isRunning = false
                }
                chrome.storage.local.set({
                    timer,
                })
            }
        })
    }
})

chrome.storage.local.get(["timer","isRunning"],(res)=>{
    chrome.storage.local.set({
        timer:"timer" in res ? res.timer : 0,
        isRunning: "isRunning" in res ? res.isRunning : false,
    })
})