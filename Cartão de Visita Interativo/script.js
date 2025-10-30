// 1. ALTERAR O NOME
const nomeInput = document.querySelector('#nome-input');
const cartaoNome = document.querySelector('#cartao-nome');

nomeInput.addEventListener('input', () => {
  const nome = nomeInput.value.trim();
  cartaoNome.textContent = nome || 'Seu Nome';
});

// 2. MUDAR A COR DE FUNDO
const cartao = document.querySelector('#cartao');
const btnAzul = document.querySelector('#btn-azul');
const btnVerde = document.querySelector('#btn-verde');

btnAzul.addEventListener('click', () => {
  cartao.classList.remove('fundo-verde');
  cartao.classList.add('fundo-azul');
});

btnVerde.addEventListener('click', () => {
  cartao.classList.remove('fundo-azul');
  cartao.classList.add('fundo-verde');
});

// 3. ALTERNAR O ESTILO DA FONTE
const btnFonte = document.querySelector('#btn-fonte');

btnFonte.addEventListener('click', () => {
  cartao.classList.toggle('fonte-alternativa');
});

// 4. MUDAR O ÍCONE
const imagemSelect = document.querySelector('#imagem-select');
const cartaoImg = document.querySelector('#cartao-img');

imagemSelect.addEventListener('change', () => {
  const novaImagem = imagemSelect.value;
  cartaoImg.setAttribute('src', novaImagem);
});

// 5. ADICIONAR NOVAS HABILIDADES
const habilidadeInput = document.querySelector('#habilidade-input');
const btnAdicionar = document.querySelector('#btn-adicionar');
const listaHabilidades = document.querySelector('#lista-habilidades');

btnAdicionar.addEventListener('click', () => {
  const novaHabilidade = habilidadeInput.value.trim();

  if (novaHabilidade !== '') {
    const li = document.createElement('li');
    li.textContent = novaHabilidade;
    listaHabilidades.appendChild(li);
    habilidadeInput.value = ''; 
  }
});
