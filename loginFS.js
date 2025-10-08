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
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const senhaCorreta = geraSuperSenha();
  const msg = document.getElementById("mensagem");

  if (senha.toUpperCase() === senhaCorreta.toUpperCase() && usuario ==="Master.Farmax") {
    msg.style.color = "green";
    msg.textContent = "✅ Login realizado com sucesso!";
        setTimeout(() => {
      window.location.href = "homefs.html"; // Caminho da tua página principal
    }, 1500);
  } else {
    msg.style.color = "red";
    msg.textContent = "❌ Senha incorreta. Tente novamente.";
  }
}
