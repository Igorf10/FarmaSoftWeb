document.querySelectorAll('.grupo-banco').forEach(grupo => {
  const header = grupo.querySelector('.grupo-header');
  const toggle = grupo.querySelector('.toggle-icon');
  const conteudo = grupo.querySelector('.implantar-container');

  header.addEventListener('click', () => {
    conteudo.classList.toggle('show');
    toggle.classList.toggle('bi-plus');
    toggle.classList.toggle('bi-dash');

    toggle.classList.toggle('active');
  });
});

  const implantacao1 = document.querySelector('.implantacao1');
  const implantacao2 = document.querySelector('.implantacao2');
  const implantacao3 = document.querySelector('.implantacao3');
  const implantacao4 = document.querySelector('.implantacao4');
  const implantacao5 = document.querySelector('.implantacao5');
  const implantacao6 = document.querySelector('.implantacao6');
  const implantacao7 = document.querySelector('.implantacao7');
  const implantacao8 = document.querySelector('.implantacao8');


  implantacao1.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/BANCOSN/BANCOv4.3.0.1SN.rar', 'BANCOv4.3.0.1SN');
  });

  implantacao2.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/BANCOMERCADO/MERCADOv4.3.0.1.rar', 'MERCADOv4.3.0.1');
  });

  
  implantacao3.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/BANCOPETSHOP/PETSHOPv4.3.0.1.rar', 'PETSHOPv4.3.0.1')
  });

  implantacao4.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxArquivos/releases/download/teste4/IMPLANTACAOS.BANCO4.rar', 'IMPLANTACAO.BANCO')
  });

  implantacao5.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxArquivos/releases/download/teste5/IMPLANTACAOS.BANCO5.rar', 'IMPLANTACAO.BANCO')
  });

  implantacao6.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxArquivos/releases/download/teste6/IMPLANTACAOS.BANCO6.rar', 'IMPLANTACAO.BANCO')
  });

  implantacao7.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxArquivos/releases/download/teste7/IMPLANTACAOS.BANCO7.rar', 'IMPLANTACAO.BANCO')
  });

  implantacao8.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxArquivos/releases/download/teste8/IMPLANTACAOS.BANCO8.rar', 'IMPLANTACAO.BANCO')
  });

  function baixarArquivo(url, nomeArquivo) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

