document.querySelectorAll('.grupo-install').forEach(grupo => {
  const header = grupo.querySelector('.grupo-header');
  const toggle = grupo.querySelector('.toggle-icon1');
  const conteudo = grupo.querySelector('.installider-container');

  header.addEventListener('click', () => {
    conteudo.classList.toggle('show');
    toggle.classList.toggle('bi-plus');
    toggle.classList.toggle('bi-dash');

    toggle.classList.toggle('active');
  });
});

// Downloads automáticos
document.querySelectorAll('.implantacao').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const url = `https://github.com/Igorf10/FarmaxArquivos/releases/download/teste${index + 1}/IMPLANTACAOS.BANCO${index + 1}.rar`;
    baixarArquivo(url, 'IMPLANTACAO.BANCO');
  });
});

function baixarArquivo(url, nomeArquivo) {
  const link = document.createElement('a');
  link.href = url;
  link.download = nomeArquivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  const install01 = document.querySelector('.install01');
  const install02 = document.querySelector('.install02');
  const install03 = document.querySelector('.install03');
  const install04 = document.querySelector('.install04');
  const install05 = document.querySelector('.install05');
  const install06 = document.querySelector('.install06');
  const install07 = document.querySelector('.install07');
  const install08 = document.querySelector('.install08');
  const install09 = document.querySelector('.install09');
  const install10 = document.querySelector('.install10');
  const install11 = document.querySelector('.install11');
  const install12 = document.querySelector('.install12');
  const install13 = document.querySelector('.install13');
  const install14 = document.querySelector('.install14');
  const install15 = document.querySelector('.install15');
  const install16 = document.querySelector('.install16');
  const install17 = document.querySelector('.install17');
  const install18 = document.querySelector('.install18');
  const install19 = document.querySelector('.install19');
  const install20 = document.querySelector('.install20');
  const install21 = document.querySelector('.install21');
  const install22 = document.querySelector('.install22');
  const install23 = document.querySelector('.install23');
  const install24 = document.querySelector('.install24');
  const install25 = document.querySelector('.install25');
  const install26 = document.querySelector('.install26');
  const install27 = document.querySelector('.install27');
  const install28 = document.querySelector('.install28');
  const install29 = document.querySelector('.install29');
  const install30 = document.querySelector('.install30');
  const install31 = document.querySelector('.install31');
  const install32 = document.querySelector('.install32');
  const install33 = document.querySelector('.install33');


  install01.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/install25/farmaxinstall.exe', 'FarmaxInstall25');
  });

  install02.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/install23/FarmaxInstall.exe', 'FarmaxInstall23');
  });

  
  install03.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/install17/farmaxinstall_antigo_maquinas.sem.sp1.exe', 'FarmaxInstall17')
  });

  install04.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/SNGPC/Sngpc.rar', 'SNGPC')
  });

  install05.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/Firebird2/Firebird-5.0.1.1469-0-windows-x86.exe', 'FireBird5.0.1')
  });

  install06.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/Firebird/Firebird-5.0.2x86.exe', 'FireBird5.0.2')
  });

  install07.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PBMs/FARMACIA.POPULAR.rar', 'FarmaciaPopular')
  });

  install08.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PBMs2/FUNCIONAL.CARD.rar', 'FuncionalCard')
  });
  
  install09.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PBMs4/VIDA.LINK.rar', 'VidaLink')
  });

  install10.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PBMs7/TRN.CENTRE.rar', 'TRN Center')
  });

  install11.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PBMs5/ORIZON.rar', 'Orizon')
  });
  
  install12.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PBMs6/PHARMASYSTEM.rar', 'PharmaSystem')
  });
  install13.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PBMs3/E-.PHARMA.rar', 'E-Pharma')
  });
  install14.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/TEF/TEF.rar', 'TEF')
  });
    install15.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/SPED/SPED.rar', 'SPED')
  });

    install16.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico1/Fidelize.rar', 'Fidelize');
  });

  install17.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico2/DrogaCenter.rar', 'DrogaCenter');
  });

  
  install18.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico3/Emefarma.rar', 'EmeFarma');
  });

  install19.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico4/ItaAthosfarma.rar', 'ItaAthosfarma')
  });

  install20.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico5/Lunar.rar', 'Lunar')
  });

  install21.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronicot6/Panarello.rar', 'Panarello')
  });

  install22.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico7/Profarma.rar', 'Profarma')
  });

  install23.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico8/SantaCruz.rar', 'Santa Cruz')
  });
  
  install24.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico9/Servimed.rar', 'Servimed')
  });

  install25.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/PedidoEletronico10/SF-comprofarma.rar', 'SF-comprofarma')
  });

  install26.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/TerminalConsulta/Terminal.Consulta.rar', 'Terminal Consulta')
  });
  install27.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/Imendes/Imendes.rar', 'Imendes')
  });

  install28.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/Avant/Avant.rar', 'Avant')
  });
  install29.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/SuporteRemoto/AnyDesk.rar', 'AnyDesk')
  });
  install30.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/SuporteRemoto2/rustdesk-1.3.1-x86_64.rar', 'RustDesk')
  });

  install31.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/SuporteRemoto3/MicroSIP.rar', 'MicroSIP')
  });

  install32.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/Firebird3/Firebird-5.0.3.1683-0-windows-x86.exe', 'FireBird5.0.3')
  });

  
  install33.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxInstaladores/releases/download/Firebird4/Firebird-2.5.9.27139_0_Win32.exe', 'FireBird5.0.3')
  });



  function baixarArquivo(url, nomeArquivo) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

