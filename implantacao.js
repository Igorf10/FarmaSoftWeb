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



  implantacao1.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/BANCOSN5.0/BANCOSIMPLESv52.rar', 'BANCOv5.2.SN');
  });

  implantacao2.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/BANCOLR5.0/BANCOLUCROv52.rar', 'BANCOLUCROv5.2LR');
  });

  
  implantacao3.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/BANCOMERCADO/MERCADOv4.3.0.1.rar', 'MERCADOv4.3.0.1')
  });

  implantacao4.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/BANCOPETSHOP/PETSHOPv4.3.0.1.rar', 'PETSHOPv4.3.0.1')
  });

  implantacao5.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxImplantacao/releases/download/SNGPC/BANCOS.SNGPC.ZERADOS.rar', 'BANCOS.SNGPC.ZERADO')
  });

  function baixarArquivo(url, nomeArquivo) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

