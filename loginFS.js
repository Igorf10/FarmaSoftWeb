function gerarSenhaData() {
  const hoje = new Date();

  const dia = hoje.getDate().toString().padStart(2, '0');
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
  const ano = hoje.getFullYear().toString();

  return `F${dia}${mes}${ano}S`;
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
  const senhaCorreta = gerarSenhaData().toUpperCase();
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
