// === Controle de Sessão Centralizado ===//
// Importar este arquivo em TODAS as páginas protegidas (exceto index.html)


let ultimoAtivo = Date.now();
const TEMPO_INATIVIDADE = 30 * 60 * 1000; // 30 minutos em milissegundos

// === Refresher por inatividade á cada 30min ===//
function verificarSessao() {
  const caminho = window.location.pathname;

  if (caminho.includes("index.html")) return;

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
    return;
  }


  if (Date.now() - ultimoAtivo > TEMPO_INATIVIDADE) {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("dataLogin");
    alert("⚠️ Sessão encerrada por inatividade.");
    window.location.href = "index.html";
  }
}

function registrarAtividade() {
  ultimoAtivo = Date.now();
}

// === Função para atualizar a página exatamente à meia-noite ===
function agendarRefreshMeiaNoite() {
  const agora = new Date();
  const amanha = new Date(agora);
  amanha.setHours(24, 0, 0, 0);
  const tempoRestante = amanha - agora;

  console.log(`⏳ Próximo refresh em ${(tempoRestante / 1000 / 60).toFixed(1)} minutos`);

  setTimeout(() => {
    console.log("🕛 Virou meia-noite — atualizando página...");
    window.location.reload();
  }, tempoRestante);
}

if (!window.location.pathname.includes("index.html")) {
  window.onload = verificarSessao;


  setInterval(verificarSessao, 60000);


  agendarRefreshMeiaNoite();


  ["mousemove", "keydown", "click", "scroll"].forEach(evt => {
    window.addEventListener(evt, registrarAtividade);
  });
}
