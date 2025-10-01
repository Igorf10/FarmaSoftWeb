document.querySelectorAll('.grupo-executaveis').forEach(grupo => {
  const header = grupo.querySelector('.grupo-header');
  const toggle = grupo.querySelector('.toggle-icon3');
  const conteudo = grupo.querySelector('.exe-container');

  header.addEventListener('click', () => {
    conteudo.classList.toggle('show');
    toggle.classList.toggle('bi-plus');
    toggle.classList.toggle('bi-dash');

    toggle.classList.toggle('active');
  });
  const Exe01 = document.querySelector('.Exe01');
  const Exe02 = document.querySelector('.Exe02');
  const Exe03 = document.querySelector('.Exe03');
  const Exe04 = document.querySelector('.Exe04');
  const Exe05 = document.querySelector('.Exe05');
  const Exe07 = document.querySelector('.Exe07');
  const Exe09 = document.querySelector('.Exe09');
  const Exe10 = document.querySelector('.Exe10');
  const Exe11 = document.querySelector('.Exe11');
  const Exe12 = document.querySelector('.Exe12');
  const Exe13 = document.querySelector('.Exe13');
  const Exe14 = document.querySelector('.Exe14');
  const Exe15 = document.querySelector('.Exe15');
  const Exe16 = document.querySelector('.Exe16');
  const Exe17 = document.querySelector('.Exe17');
  const Exe18 = document.querySelector('.Exe18');
  const Exe19 = document.querySelector('.Exe19');
  const Exe20 = document.querySelector('.Exe20');
  const Exe21 = document.querySelector('.Exe21');
  const Exe22 = document.querySelector('.Exe22');
  const Exe23 = document.querySelector('.Exe23');
  const Exe24 = document.querySelector('.Exe24');
  const Exe25 = document.querySelector('.Exe25');
  const Exe26 = document.querySelector('.Exe26');
  const Exe27 = document.querySelector('.Exe27');
  const Exe28 = document.querySelector('.Exe28');
  const Exe29 = document.querySelector('.Exe29');
  const Exe30 = document.querySelector('.Exe30');
  const Exe31 = document.querySelector('.Exe31');
  const Exe32 = document.querySelector('.Exe32');
  const Exe33 = document.querySelector('.Exe33');
  const Exe34 = document.querySelector('.Exe34');


  Exe01.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/PDV/FarmaxPDV.exe', 'FarmaxPDV4.3');
  });

  Exe02.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/PDV2/FarmaxPDV.exe', 'FarmaxPDV4.2');
  });

  
  Exe03.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/Gestor/Gestor.exe', 'Gestor4.3')
  });

  Exe04.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/Gestor2/Gestor.exe', 'Gestor4.2')
  });

  Exe05.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/AtualizardorFarmax/AtualizadorFarmax.exe', 'AtualizadorFarmax')
  });

  Exe07.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/InseriVersao/InsereVersao.exe', 'InsereVersao')
  });
  
  Exe09.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/MonitordeNotas25/FarmaxMonitorNfe.exe', 'MonitordeNotas25')
  });

  Exe10.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/MonitordeNotas22/FarmaxMonitorNfe.exe', 'MonitordeNotas22')
  });

  Exe11.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxDanfe1/FarmaxDanfe.exe', 'Danfe23')
  });
  
  Exe12.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxDanfe2/FarmaxDanfe.exe', 'Danfe20')
  });
  Exe13.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxEtiquetas/FarmaxEtiquetas.1.4.0.exe', 'FarmaxEtiquetas')
  });
  Exe14.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaciasAPP/FarmaciasAPP.exe', 'FarmaciasAPP')
  });
  Exe15.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxIfood2/FarmaxIfood.exe', 'FarmaxIfood')
  });

  Exe16.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxWhatsapp/FARMAXWHATSAPP.rar', 'FARMAXWHATSAPP');
  });

  Exe17.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/farmaxPrecos/FarmaxPrecos.exe', 'FarmaxPrecos');
  });

  
  Exe18.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/MoveXML/MoveXml.exe', 'MoveXml');
  });

  Exe19.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/Avant/AvantFiscal.FIREBIRD.50.exe', 'Avant')
  });

  Exe20.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/Imendes/IMENDES.rar', 'Imendes')
  });

  Exe21.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaciasAPI/FarmaxApi.exe', 'FarmaxApi')
  });

  Exe22.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxColetor/ApiServer.exe', 'FarmaxColetor')
  });

  Exe23.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/farmaxConciliacao/FarmaxConcilia.exe', 'FarmaxConcilia')
  });
  
  Exe24.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxCotefacil/FarmaxCotefacil.exe', 'FarmaxCotefacil')
  });

  Exe25.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxDemanda/FarmaxDemanda.exe', 'FarmaxDemanda')
  });

  Exe26.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxFidelize/geracaoxmlmovimento.exe', 'FarmaxFidelize')
  });
  Exe27.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxNFE/farmaxnfe.exe', 'farmaxNFE')
  });

  Exe28.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxRealocacao/FarmaxRealocacao.exe', 'FarmaxRealocacao')
  });
  Exe29.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxRecarga/FarmaxRecarga.exe', 'FarmaxRecarga')
  });
  Exe30.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxSintegra/FarmaxSintegra2024.exe', 'Sintegra')
  });

  Exe31.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxDDA/FarmaxDDA.exe', 'FarmaxDDA')
  });

  Exe32.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/FarmaxIFOOD/FarmaxIfood.exe', 'FarmaxIfood')
  });

  
  Exe33.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/ExeSNGPC/Sngpc.exe', 'Exe.SNGPC')
  });

  
  
  Exe34.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxExecutaveis/releases/download/ERROContingencias/ERRO.A3.CONTIGENCIA.rar', 'ERRO.A3.CONTIGENCIA')
  });




  function baixarArquivo(url, nomeArquivo) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
