self.onmessage = function(event) {
    // This will be the data you sent to the worker
    const { timer, isRunning, timeOption } = event.data;
    
    if (isRunning){
      let timer = 0
      timer = timer + 1
      let isRunning = true
      console.log(timer)
      if (timer === timeOption * 60){
        self.registration.showNotification("Tomato Timer", {
          body: `${timeOption} minutes has passed`,
          icon: "images/pomodoro.png",
        })
        timer = 0
        isRunning = false
      }
      // Send the updated timer back to the main thread
      self.postMessage({ timer });
    }
  };
  