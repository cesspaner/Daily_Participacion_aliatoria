      const nombres = [ "Eduardo Luna", "Ivan Solis","Cristopher Cisneros" ,"Moises Bermudez","Fausto Palacios"];
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

      