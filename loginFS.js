function geraSuperSenha() {
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
  let diaSemana = hoje.getDay() + 1;
  let dia = String(hoje.getDate()).padStart(2, "0");
  let mes = String(hoje.getMonth() + 1).padStart(2, "0");

  let diaMes =
    parseInt(dia[0]) + parseInt(dia[1]) +
    parseInt(mes[0]) + parseInt(mes[1]);

  const premium = "PREMIUM";
  const premiumInvertido = "MUIMERP";

  return (
    premium.charAt(diaSemana - 1) +
    dias[diaMes].charAt(diaSemana - 1) +
    (parseInt(dia) + parseInt(mes)) +
    semanas[diaSemana].charAt(diaSemana - 1) +
    premiumInvertido.charAt(diaSemana - 1)
  );
}

// 👉 Mover os listeners para fora:
window.addEventListener('DOMContentLoaded', () => {
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");

  usuario.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      senha.focus(); // vai pro campo de senha
    }
  });

  senha.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // impede recarregar a página
      login(); // chama a função de login direto
    }
  });
});

function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const usuariomaster = "suporte";
  const senha = document.getElementById("senha").value.trim().toUpperCase();
  const senhaCorreta = geraSuperSenha().toUpperCase();
  const msg = document.getElementById("mensagem");

  const isUserCorrect = usuario.toLowerCase() === usuariomaster;
  const isPassCorrect = senha === senhaCorreta;

  if (isUserCorrect && isPassCorrect) {
    msg.style.color = "green";
    msg.textContent = "✅ Login realizado com sucesso!";

    const hoje = new Date();
    localStorage.setItem("usuarioLogado", usuario);
    localStorage.setItem("dataLogin", hoje.toDateString());

    setTimeout(() => {
      window.location.href = "homefs.html";
    }, 1500);
    return;
  }

  if (!isUserCorrect && !isPassCorrect) {
    msg.style.color = "red";
    msg.textContent = "❌ Usuário e senha incorretos.";
    return;
  }

  if (!isUserCorrect) {
    msg.style.color = "red";
    msg.textContent = "❌ Usuário incorreto.";
    return;
  }

  msg.style.color = "red";
  msg.textContent = "❌ Senha incorreta.";
}
