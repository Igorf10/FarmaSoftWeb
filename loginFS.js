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

// Função de login
function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim().toUpperCase();
  const senhaCorreta = geraSuperSenha().toUpperCase();
  const msg = document.getElementById("mensagem");

  const isUserCorrect = usuario === "Supfarmax";
  const isPassCorrect = senha === senhaCorreta;

  if (isUserCorrect && isPassCorrect) {
    msg.style.color = "green";
    msg.textContent = "✅ Login realizado com sucesso!";
    
    // Salva o login e a data do dia
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
