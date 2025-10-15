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

function Senhahome() {
  const dias = [
    "",
    "",
    "ALBERTO", "GILVETE", "GILBERT", "ANGELOS",
    "MARCELO", "MATHEUS", "THIAGOS", "JULIANA", "GSOARES",
    "GELINAS", "ALBERLE", "ALBERTI", "MACHADO", "FILLIPE",
    "LEONARD", "PISTOLA", "XFARMAX", "PREMIUM", "ZFARMAX"
  ];

  const semanas = [
    "",
    "GILSONS", "GENNYSD", "ALVAROS",
    "DIACONO", "IVANETE", "IVETTES", "JOSIANE"
  ];

  const hoje = new Date();
  let diaSemana = hoje.getDay() + 1; // 1=domingo, 7=sábado
  let dia = String(hoje.getDate()).padStart(2, "0");
  let mes = String(hoje.getMonth() + 1).padStart(2, "0");

  let diaMes =
    parseInt(dia[0]) + parseInt(dia[1]) +
    parseInt(mes[0]) + parseInt(mes[1]);

  const premium = "PREMIUM";
  const premiumInvertido = "MUIMERP";

  const senha = 
    premium.charAt(diaSemana - 1) +
    dias[diaMes].charAt(diaSemana - 1) +
    (parseInt(dia) + parseInt(mes)) +
    semanas[diaSemana].charAt(diaSemana - 1) +
    premiumInvertido.charAt(diaSemana - 1);


  const resultadoDiv = document.querySelector(".SenhaResultado");
  if (resultadoDiv) {
    resultadoDiv.textContent = senha;
  }

  return senha;
}
function copiarSenha() {
  // Garante que a senha já está no DOM
  const senha = document.querySelector(".SenhaResultado").textContent;

  if (!senha) return; // evita copiar se estiver vazio

  navigator.clipboard.writeText(senha).then(() => {
    const toast = document.getElementById("textsenha");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  });
}


window.addEventListener("DOMContentLoaded", Senhahome);


function verificarSessao() {
  const caminho = window.location.pathname;
  if (caminho.includes("index.html")) {
    return; 
  }

  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dataLogin = localStorage.getItem("dataLogin");

  if (!usuarioLogado || !dataLogin) {

    window.location.href = "index.html";
    return;
  }

  const hoje = new Date().toDateString();

  if (dataLogin !== hoje) {
   
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("dataLogin");
    alert("⏰ A senha do dia mudou! Faça login novamente.");
    window.location.href = "index.html";
  }
}

// Só roda essa verificação em páginas protegidas (homefs.html, etc)
if (window.location.pathname.includes("homefs.html")) {
  window.onload = verificarSessao;
  setInterval(verificarSessao, 60000); // checa a cada 60 segundos
}

