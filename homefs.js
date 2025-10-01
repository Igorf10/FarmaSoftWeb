// Pega todos os itens do menu e as seções
let itensMenu = document.querySelectorAll('.item-menu');
let secoes = document.querySelectorAll('.secao');

function clicarNoMenu() {
  // 1. Remove a classe "ativo" de todos os itens do menu
  itensMenu.forEach(function(item) {
    item.classList.remove('ativo');
  });

  // 2. Marca este item do menu como ativo
  this.classList.add('ativo');

  // 3. Pega o ID da seção que este item do menu representa
  let idDaSecao = this.getAttribute('data-section');

  // 4. Mostra a seção certa e esconde as outras
  secoes.forEach(function(secao) {
    if (secao.id === idDaSecao) {
      secao.classList.add('ativa'); // mostra
    } else {
      secao.classList.remove('ativa'); // esconde
    }
  });
}

// Adiciona o evento de clique em cada item do menu
itensMenu.forEach(function(item) {
  item.addEventListener('click', clicarNoMenu);
});
