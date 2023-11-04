document.addEventListener("DOMContentLoaded", () => {
  const stopwatchDisplay = document.getElementById("stopwatch");
  const datePicker = document.getElementById("date-picker");
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const resetButton = document.getElementById("reset-button");

  let startTime = 0;
  let offset = 0;
  let isRunning = false;

  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split("T")[0];
  datePicker.value = currentDateString;


  startButton.addEventListener("click", () => {
    if (!isRunning) { 
      const currentDate = new Date();
      startTime = currentDate.getTime() - offset;
      startButton.disabled = true;
      stopButton.disabled = false;
      isRunning = true;  
      startStopwatch();
    }
  });

  stopButton.addEventListener("click", () => {
    if (isRunning) {
      const currentDate = new Date();
      offset = currentDate.getTime() - startTime;
      stopButton.disabled = true;
      startButton.disabled = false;
      isRunning = false;
      stopStopwatch();
    }
  });

  resetButton.addEventListener("click", () => {
    startTime = 0;
    offset = 0;
    startButton.disabled = false;
    stopButton.disabled = true;
    isRunning = false;
    resetStopwatch();
  });

  async function startStopwatch() {
    const selectedDate = new Date(datePicker.value);
    if (selectedDate > currentDate) {
      alert("Please select a valid date.");
      return;
    }

    while (isRunning) {
      updateStopwatch();
      await new Promise(resolve => setInterval(resolve, 1000));
    }
  }

  function stopStopwatch() {
    isRunning = false;
    clearInterval();
  }

  function resetStopwatch() {
    isRunning = false;
    stopwatchDisplay.textContent = "00:00:00";
    datePicker.value = currentDateString;
    clearInterval();
  }

  function updateStopwatch() {
    const currentDate = new Date();
    const elapsedTime = currentDate.getTime() - startTime;
    
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    stopwatchDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
});
