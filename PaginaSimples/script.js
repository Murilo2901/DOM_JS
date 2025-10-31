let contador = 0;
const contadorElemento = document.getElementById("contador");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDiminuir = document.getElementById("btn-diminuir");

btnAumentar.addEventListener("click", () => {
  contador++;
  contadorElemento.textContent = contador;
});

btnDiminuir.addEventListener("click", () => {
  contador--;
  contadorElemento.textContent = contador;
});