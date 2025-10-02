document.querySelectorAll('.grupo-script').forEach(grupo => {
  const header = grupo.querySelector('.grupo-header');
  const toggle = grupo.querySelector('.toggle-icon6');
  const conteudo = grupo.querySelector('.script-container');

  header.addEventListener('click', () => {
    conteudo.classList.toggle('show');
    toggle.classList.toggle('bi-plus');
    toggle.classList.toggle('bi-dash');

    toggle.classList.toggle('active');
  });


  /*const copy = document.querySelectorAll('.copiar');

  copy.forEach(copy =>{
  copy.addEventListener('click', function() {
  let copy =  copy.nextElementSibling;  
  
  if (copy.navigator.clipboard.writeText()) {
  console.log('Texto copiado para a área de transferência!'); 

} else {
   console.error('Erro ao copiar texto: ', err);
};
});*/



  const downloadtitle = document.querySelector('.downloadtitle');
  const downloadtitle1 = document.querySelector('.downloadtitle1');
  const downloadtitle2 = document.querySelector('.downloadtitle2');
  const downloadtitle3 = document.querySelector('.downloadtitle3');
  const downloadtitle4 = document.querySelector('.downloadtitle4');
  const downloadtitle5 = document.querySelector('.downloadtitle5');
  const downloadtitle6 = document.querySelector('.downloadtitle6');
  const downloadtitle7 = document.querySelector('.downloadtitle7');
  const downloadtitle8 = document.querySelector('.downloadtitle8');
  const downloadtitle9 = document.querySelector('.downloadtitle9');
  const downloadtitle10 = document.querySelector('.downloadtitle10');
  const downloadtitle11 = document.querySelector('.downloadtitle11');
  const downloadtitle12 = document.querySelector('.downloadtitle12');
  const downloadtitle13 = document.querySelector('.downloadtitle13');
  const downloadtitle14 = document.querySelector('.downloadtitle14');
  const downloadtitle15 = document.querySelector('.downloadtitle15');
  const downloadtitle16 = document.querySelector('.downloadtitle16');
  const downloadtitle17 = document.querySelector('.downloadtitle17');
  const downloadtitle18 = document.querySelector('.downloadtitle18');
  const downloadtitle19 = document.querySelector('.downloadtitle19');
  






  downloadtitle.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script1/1-SP_ACERTA_PRICINCIOATIVO.txt', 'SP_ACERTA_PRICINCIOATIVO.');
  });

  downloadtitle1.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script2/2-SP_CORRIGE_CD_PRINCIPIO_ATIVO.txt', 'SP_CORRIGE_CD_PRINCIPIO_ATIVO');
  });

  
  downloadtitle2.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script3/cliente.cartao.sql', 'Dll.Instalador')
  });

  downloadtitle3.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script4/SP_corrige_promocao_maior_que_venda.sql', 'SP_corrige_promocao_maior_que_venda')
  });

  downloadtitle4.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script6/SP_CSOSN.sql', 'SP_CSOSN')
  });

  downloadtitle5.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script7/SP_LIMPA_BANCO.sql', 'SP_LIMPA_BANCO')
  });

  downloadtitle6.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script8/SP_NFEMUNICIPIOS.sql', 'SP_NFEMUNICIPIOS')
  });

  downloadtitle7.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script9/NFEPAISES.sql', 'NFEPAISES')
  });

  downloadtitle8.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script10/SP_script.limpeza.de.matriz.para.interligacao.completo.sql', 'impeza.de.matriz')
  });
  downloadtitle9.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script11/SP_FILIAIS_GRUPOS-4.2.0.3.EM.CASO.DE.ERRO.AO.CRIAR.GRUPOS.NOVOS.sql', 'SP_FILIAIS_GRUPOS-4.2.0.3')
  });
  downloadtitle10.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script12/SCRIPT_FILIAIS_GRUPOS-4.3.0.1.EM.CASO.DE.ERRO.AO.CRIAR.GRUPOS.NOVOS.sql', 'SP_FILIAIS_GRUPOS-4.3.0.1')
  });
  downloadtitle11.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script13/SP_MODULOS_ORIGEM_PIS_COFINS_NOVOS.sql', 'SP_MODULOS_ORIGEM_PIS_COFINS_NOVOS')
  });

  downloadtitle12.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script14/Scripts_Cfop_Equivalente.sql', 'Scripts_Cfop_Equivalente.sql')
  });

  downloadtitle13.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Scritp15/ScriptUFAliquotas.sql', 'ScriptUFAliquotas.sql')
  });
  
  downloadtitle14.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script16/SomenteSeTiverERRO_CD_DISTRIBUIDOR.sql', 'SomenteSeTiverERRO_CD_DISTRIBUIDOR.sql')
  });
  
  downloadtitle15.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Scritp17/SP_ACERTA_PRECO_VENDA_MENOR_PRECO_PROMOCAO.SQL', 'SP_ACERTA_PRECO_VENDA_MENOR_PRECO_PROMOCAO.SQL')
  });
   
  downloadtitle16.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Scritp18/SP_TROCA_FP_TPAG_PIX.sql', 'SP_TROCA_FP_TPAG_PIX.SQL')
  });
     
  downloadtitle17.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script19/SP_ULTIMO_MOVIMENTO_COMPRA.sql', 'SP_ULTIMO_MOVIMENTO_COMPRA.SQL')
  });
     
  downloadtitle18.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/Script20/SP_ULTIMO_MOVIMENTO_VENDA.sql', 'SP_ULTIMO_MOVIMENTO_VENDA.SQL')
  });

       
  downloadtitle19.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxScripts/releases/download/SP_Precos_Corrigido/PrecosCorrigido.sql', 'SP_Precos_Corrigido.SQL')
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
   
   function copiar(copy) {

    const texto = document.getElementById('text0');
    let textcopiado = ''
    try {
     textcopiado = copy.innerText || copy.textContent;
      navigator.clipboard.writeText(textcopiado);
       
        texto.classList.add('fade-in');
      
    setTimeout(()=> {
     
      texto.classList.remove("fade-in");
    }, 3000);
  
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
    }
  }
