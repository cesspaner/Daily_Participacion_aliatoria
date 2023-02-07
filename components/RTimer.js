const timer    = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn  = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
      
      let totalSeconds = 900;
      let intervalId;
      
      function startTimer() {
        intervalId = setInterval(function() {
          totalSeconds--;
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          timer.innerHTML = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
          if (totalSeconds === 0) {
            clearInterval(intervalId);
          }
        }, 1000);
      }
      
      function stopTimer() {
        clearInterval(intervalId);
      }
      
      function resetTimer() {
        clearInterval(intervalId);
        totalSeconds = 900;
        timer.innerHTML = "15:00";
      }
      
      startBtn.addEventListener("click", startTimer);
      stopBtn.addEventListener("click", stopTimer);
      resetBtn.addEventListener("click", resetTimer);
      