/* ===== Controle do menu lateral: clique simples x duplo ===== */
const itensMenu = document.querySelectorAll('.item-menu');
const secoes = document.querySelectorAll('.secao');
const menu = document.getElementById('menu-lateral');

let menuFixo = false;    // true quando o menu foi "fixado" por duplo clique
let itemFixo = null;     // referência do item fixado
let clickTimer = null;   // timer para distinguir click / dblclick
const CLICK_DELAY = 150; // ms (ajuste se quiser mais/menos sensível)


function abrirSecao(item) {
  itensMenu.forEach(i => i.classList.remove('ativo'));
  item.classList.add('ativo');

  const idDaSecao = item.getAttribute('data-section');
  secoes.forEach(sec => {
    if (sec.id === idDaSecao) sec.classList.add('ativa');
    else sec.classList.remove('ativa');
  });
}

// Ação para clique simples
function singleClickAction(item) {
  // Se o menu estava fixo e o usuário clicou num item diferente:
  // desfazemos a fixação (volta ao comportamento normal)
  if (menuFixo && item !== itemFixo) {
    menuFixo = false;
    itemFixo = null;
    menu.classList.remove('fixo');    // remove estado visual de "fixo"
  }

  abrirSecao(item);

  // após clique simples: encolhe o menu (a menos que esteja fixo)
  if (!menuFixo) {
    menu.classList.add('collapsed');  // classe que você define no CSS para encolher
  }
}

// Ação para duplo clique
function doubleClickAction(item) {
  menuFixo = true;
  itemFixo = item;

  abrirSecao(item);

  // duplo clique mantém o menu aberto e indica visualmente que foi fixado
  menu.classList.remove('collapsed');
  menu.classList.add('fixo'); // classe para estado "fixado"
}

// Associa eventos em cada item do menu
itensMenu.forEach(item => {
  // click: aguarda um pequeno delay para confirmar que não virá um dblclick
  item.addEventListener('click', function (e) {
    e.preventDefault(); // evita comportamento do <a href="#">
    if (clickTimer) clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      singleClickAction(item);
      clickTimer = null;
    }, CLICK_DELAY);
  });

  // dblclick: cancela o timer do click simples e executa fixação
  item.addEventListener('dblclick', function (e) {
    e.preventDefault();
    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;
    }
    doubleClickAction(item);
  });
});

const btnSair = document.getElementById('btn-sair');
const popup = document.getElementById('popup-sair');
const btnSim = document.getElementById('confirmar-sair');
const btnNao = document.getElementById('cancelar-sair');


btnSair.addEventListener('click', () => {
  popup.style.display = 'flex';
});


btnNao.addEventListener('click', () => {
  popup.style.display = 'none';
   location.reload();
});


btnSim.addEventListener('click', () => {
  window.location.href = 'index.html'; 
});
