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
  let diaSemana = hoje.getDay() + 1; // 1=domingo, 7=sábado
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

function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const senhaCorreta = geraSuperSenha();
  const msg = document.getElementById("mensagem");

  const isUserCorrect = usuario === "Master.Farmax"; // ou use .toLowerCase() se quiser case-insensitive
  const isPassCorrect = senha === senhaCorreta;

  if (isUserCorrect && isPassCorrect) {
    msg.style.color = "green";
    msg.textContent = "✅ Login realizado com sucesso!";
    setTimeout(() => {
      window.location.href = "homefs.html";
    }, 1500);
    return;
  }

  // agora tratamos as demais possibilidades separadamente
  if (!isUserCorrect && !isPassCorrect) {
    msg.style.color = "red";
    msg.textContent = "❌ Usuário e senha incorretos. Tente novamente.";
    return;
  }

  if (!isUserCorrect) {
    msg.style.color = "red";
    msg.textContent = "❌ Usuário incorreto. Tente novamente.";
    return;
  }

  // se chegou aqui, é porque a senha está incorreta (usuário certo)
  msg.style.color = "red";
  msg.textContent = "❌ Senha incorreta. Tente novamente.";
}

