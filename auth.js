// === Controle de Sessão Centralizado ===
// Importar este arquivo em TODAS as páginas protegidas (exceto index.html)

function verificarSessao() {
  const caminho = window.location.pathname;

  // Evita rodar no login
  if (caminho.includes("index.html")) return;

  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const dataLogin = localStorage.getItem("dataLogin");

  // Se não há login salvo, redireciona pro login
  if (!usuarioLogado || !dataLogin) {
    window.location.href = "index.html";
    return;
  }

  const hoje = new Date().toDateString();

  // Se o dia mudou → limpa login e força novo login
  if (dataLogin !== hoje) {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("dataLogin");
    alert("⏰ A senha do dia mudou! Faça login novamente.");
    window.location.href = "index.html";
  }
}

// === Função para atualizar a página exatamente à meia-noite ===
function agendarRefreshMeiaNoite() {
  const agora = new Date();
  const amanha = new Date(agora);
  amanha.setHours(24, 0, 0, 0); // define o horário para 00:00 da próxima virada
  const tempoRestante = amanha - agora;

  console.log(`⏳ Próximo refresh em ${(tempoRestante / 1000 / 60).toFixed(1)} minutos`);

  setTimeout(() => {
    console.log("🕛 Virou meia-noite — atualizando página...");
    window.location.reload();
  }, tempoRestante);
}

// === Executa apenas em páginas protegidas ===
if (!window.location.pathname.includes("index.html")) {
  window.onload = verificarSessao;

  // Checa sessão a cada minuto
  setInterval(verificarSessao, 60000);

  // Programa o refresh automático à meia-noite
  agendarRefreshMeiaNoite();
}
