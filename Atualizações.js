document.querySelectorAll('.grupo-att').forEach(grupo => {
  const header = grupo.querySelector('.grupo-header');
  const toggle = grupo.querySelector('.toggle-icon2');
  const conteudo = grupo.querySelector('.Atualizar-container');

  header.addEventListener('click', () => {
    conteudo.classList.toggle('show');
    toggle.classList.toggle('bi-plus');
    toggle.classList.toggle('bi-dash');

    toggle.classList.toggle('active');
  });
});

  const Att01 = document.querySelector('.Att01');
  const Att02 = document.querySelector('.Att02');
  const Att03 = document.querySelector('.Att03');
  const Att04 = document.querySelector('.Att04');

  Att01.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxAtualizacoes/releases/download/Farmax4.3.0.1/Farmax4.3.0.1.rar', 'v4.3.0.1');
  });

  Att03.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxAtualizacoes/releases/download/Farmax4.2.0.3/Farmax4.2.0.3.rar', 'v4.2.0.3');
  });

    Att02.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxAtualizacoes/releases/download/Base4.3.0.1/BASEFARMAX5.zip', 'Base v4.3.0.1');
  });

  Att04.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxAtualizacoes/releases/download/Base4.2.0.3/BASEFARMAXFB50.zip', 'Base v4.2.0.3');
  });


  function baixarArquivo(url, nomeArquivo) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



