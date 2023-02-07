const nombres = ["Cristopher Cisneros", "Eduardo Luna", "Ivan Solis", "Moises Bermudez","Fausto Palacios"];
      const lista = document.getElementById("nombres-lista");
      const generarBoton = document.getElementById("generar-button");

      generarBoton.addEventListener("click", function() {
        let nombresAleatorios = nombres.slice();
        nombresAleatorios.sort(() => Math.random() - 0.5);
        lista.innerHTML = "";
        for (let i = 0; i < nombresAleatorios.length; i++) {
          let nombre = document.createElement("div");
          nombre.classList.add("nombre");
          nombre.innerHTML = `${i + 1}. ${nombresAleatorios[i]}`;
          lista.appendChild(nombre);
        }
      });

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
                