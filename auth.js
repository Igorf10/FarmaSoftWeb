// === Controle de Sessão Centralizado ===

let ultimoAtivo = Date.now();
const TEMPO_INATIVIDADE = 20 * 60 * 1000; // 30 minutos
let abaVisivel = true;

function verificarSessao() {
  const caminho = window.location.pathname;

  // Evita rodar no login
  if (caminho.includes("index.html")) return;

  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dataLogin = localStorage.getItem("dataLogin");

  if (!usuarioLogado || !dataLogin) {
    window.location.href = "index.html";
    return;
  }

  const hoje = new Date().toDateString();

  // Dia mudou → força novo login
  if (dataLogin !== hoje) {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("dataLogin");
    alert("⏰ A senha do dia mudou! Faça login novamente.");
    window.location.href = "index.html";
    return;
  }

  // Inatividade → logoff
  const tempoSemAtividade = Date.now() - ultimoAtivo;
  if (abaVisivel && tempoSemAtividade > TEMPO_INATIVIDADE) {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("dataLogin");
    alert("⚠️ Sessão encerrada por inatividade.");
    window.location.href = "index.html";
  }
}

// Atualiza o tempo da última atividade
function registrarAtividade() {
  if (abaVisivel) ultimoAtivo = Date.now();
}

// Detecta mudança de visibilidade da aba
document.addEventListener("visibilitychange", () => {
  abaVisivel = !document.hidden;
  if (abaVisivel) ultimoAtivo = Date.now(); // reseta quando o usuário volta pra aba
});

// Atualiza exatamente à meia-noite
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

// === Executa apenas em páginas protegidas ===
if (!window.location.pathname.includes("index.html")) {
  // Marca o primeiro momento de atividade
  ultimoAtivo = Date.now();

  // Escuta atividades do usuário dentro da página
  ["mousemove", "keydown", "click", "scroll"].forEach(evt => {
    window.addEventListener(evt, registrarAtividade);
  });

  // Checa sessão a cada minuto
  setInterval(verificarSessao, 60000);

  // Faz uma verificação inicial logo ao carregar
  verificarSessao();

  // Programa o refresh automático à meia-noite
  agendarRefreshMeiaNoite();
}
