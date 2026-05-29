document.querySelectorAll('.grupo-servicos').forEach(grupo => {
  const header = grupo.querySelector('.grupo-header');
  const toggle = grupo.querySelector('.toggle-icon4');
  const conteudo = grupo.querySelector('.servicos-container');

  header.addEventListener('click', () => {
    conteudo.classList.toggle('show');
    toggle.classList.toggle('bi-plus');
    toggle.classList.toggle('bi-dash');

    toggle.classList.toggle('active');
  });


  const serviceEx01 = document.querySelector('.serviceEx01');
  const serviceEx02 = document.querySelector('.serviceEx02');
  const serviceEx03 = document.querySelector('.serviceEx03');
  const serviceEx04 = document.querySelector('.serviceEx04');
  const serviceEx05 = document.querySelector('.serviceEx05');
  const serviceEx06 = document.querySelector('.serviceEx06');
  const serviceEx07 = document.querySelector('.serviceEx07');
  /*const serviceEx08 = document.querySelector('.serviceEx08');*/
  const serviceEx09 = document.querySelector('.serviceEx09');
  /*const serviceEx10 = document.querySelector('.serviceEx10');*/
  const serviceEx11 = document.querySelector('.serviceEx11');
  /*const serviceEx12 = document.querySelector('.serviceEx12');*/
  const serviceEx13 = document.querySelector('.serviceEx13');
  const serviceEx14 = document.querySelector('.serviceEx14');


  serviceEx01.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/Exporter/Exporter.exe', 'Exporter');
  });

  serviceEx02.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ServiceFarmaciasAPP/ServiceFarmaxFarmaciasAPP.exe', 'ServiceFarmaciasAPP');
  });

  
  serviceEx03.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ServiceRetransfer/ReTransferServico.exe', 'ReTransferServico')
  });

  serviceEx04.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ServiceDemanda/ServiceFarmaxDemanda.exe', 'ServiceFarmaxDemanda')
  });

  serviceEx05.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ExporterClient3/ExporterClient.exe', 'ExporterClient04.05.26')
  });

  serviceEx06.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/FarmaxAPI/FarmaxApi.rar', 'FarmaxAPI')
  });

  serviceEx07.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ExporterTrigger/ExporterTrigger.exe', 'ExporterTrigger')
  });

  /*serviceEx08.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ExporterQuick/ExporterClientQuick.exe', 'ExporterClientQuick08.01')
  });*/
  serviceEx09.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ExporterClientQuick2/ExporterClientQuick.exe', '1ExporterClientQuick.04.05.26')
  });

  /*serviceEx10.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/FarmaxServer/ExporterServer.exe', 'ExporterServer12.08')
  });*/

  serviceEx11.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/FarmaxServer2/ExporterServer.exe', 'ExporterServer05.05.26')
  });

  /*serviceEx12.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/FarmaxRefresher/FarmaxRefresher.exe', 'FarmaxRefresher30.07')
  });*/
    serviceEx13.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ServiceRefresher2/FarmaxRefresher.exe', 'FarmaxRefresher25.06')
  });

  serviceEx14.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxServicoExportadores/releases/download/ServiceIfood/ServiceFarmaxIfood.exe', 'ServiceFarmaxIfood');
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
