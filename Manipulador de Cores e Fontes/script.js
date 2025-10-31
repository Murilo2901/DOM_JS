const titulo = document.getElementById("titulo");
const paragrafo = document.getElementById("paragrafo");

const fontes = [
  "Roboto", "Oswald", "Lato", "Poppins", "Montserrat", "Raleway",
  "Merriweather", "Open Sans", "Playfair Display", "Rubik",
  "Inconsolata", "Pacifico", "Bebas Neue", "Ubuntu", "Cabin"
];

function corAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function fonteAleatoria() {
  const indice = Math.floor(Math.random() * fontes.length);
  return fontes[indice];
}

document.getElementById("btn-bg").addEventListener("click", () => {
  document.body.style.backgroundColor = corAleatoria();
});

document.getElementById("btn-titulo-cor").addEventListener("click", () => {
  titulo.style.color = corAleatoria();
});

document.getElementById("btn-paragrafo-cor").addEventListener("click", () => {
  paragrafo.style.color = corAleatoria();
});

document.getElementById("btn-titulo-fonte").addEventListener("click", () => {
  titulo.style.fontFamily = fonteAleatoria();
});

document.getElementById("btn-paragrafo-fonte").addEventListener("click", () => {
  paragrafo.style.fontFamily = fonteAleatoria();
});

document.getElementById("btn-tudo").addEventListener("click", () => {
  document.body.style.backgroundColor = corAleatoria();
  titulo.style.color = corAleatoria();
  paragrafo.style.color = corAleatoria();
  titulo.style.fontFamily = fonteAleatoria();
  paragrafo.style.fontFamily = fonteAleatoria();
});