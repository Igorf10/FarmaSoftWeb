
  
    const utilit01 = document.querySelector('.utilit01');
    const utilit02 = document.querySelector('.utilit02');
    const utilit03 = document.querySelector('.utilit03');
    const utilit04 = document.querySelector('.utilit04');
    const utilit05 = document.querySelector('.utilit05');
    const utilit06 = document.querySelector('.utilit06');
    
    
  
  
    utilit01.addEventListener('click', () => {
      baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios/Dll5.0.rar', 'Dll5.0');
    });
  
    utilit02.addEventListener('click', () => {
      baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios1/Dll.Comunicador.rar', 'Dll.Comunicador');
    });
  
    
    utilit03.addEventListener('click', () => {
      baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios2/Dll.Instalador.rar', 'Dll.Instalador')
    });
  
    utilit04.addEventListener('click', () => {
      baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios3/DllTodas.rar', 'DllTodas')
    });
  
    utilit05.addEventListener('click', () => {
      baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios4/Dll.Libeay.rar', 'Dll.Libeay')
    });
  
    utilit06.addEventListener('click', () => {
      baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios5/Dll.PDV.rar', 'Dll.PDV')
    });
  
  
    function baixarArquivo(url, nomeArquivo) {
      const link = document.createElement('a');
      link.href = url;
      link.download = nomeArquivo;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }