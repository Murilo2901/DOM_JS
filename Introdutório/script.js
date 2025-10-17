const headerID = document.getElementsById('cabecalho');
console.log('Header selecionado por ID:');
console.log(headerID);

const gridSections = document.getElementsByClassName('.grid-section');
console.log('Todas as seções com classe "grid-section":');
console.log(gridSections);

const imagens = document.getElementsByTagName('img');
console.log('Todas as imagens da página:');
console.log(imagens);

const primeiroParagrafo = document.querySelector('.grid-section p');
console.log('Primeiro parágrafo dentro de uma grid-section:');
console.log(primeiroParagrafo);

const linkContato = document.querySelector('#contato a');
console.log('Link dentro da seção de contato:');
console.log(linkContato);

const TitulosH2 = document.querySelectorAll('h2');
console.log('Todos os títulos <h2> da página:');
console.log(TitulosH2);

const paragrafosFilhosDiretos = document.querySelectorAll('main > p, footer > p');
console.log('Parágrafos filhos diretos de main ou footer:');
console.log(paragrafosFilhosDiretos);

console.log('Títulos <h2> (texto de cada um):');
titulos.forEach((titulo) => {
  console.log(titulo.innerText);
});