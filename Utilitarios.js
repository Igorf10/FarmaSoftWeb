document.querySelectorAll('.grupo-utilit').forEach(grupo => {
  const header = grupo.querySelector('.grupo-header');
  const toggle = grupo.querySelector('.toggle-icon8');
  const conteudo = grupo.querySelector('.utilitarios-container');

  header.addEventListener('click', () => {
    conteudo.classList.toggle('show');
    toggle.classList.toggle('bi-plus');
    toggle.classList.toggle('bi-dash');

    toggle.classList.toggle('active');
  });

  const inputPesquisar = document.getElementById("Pesquisar");

inputPesquisar.addEventListener("focus", () => {
  if (inputPesquisar. placeholder === "Número/Descrição") {
    inputPesquisar. placeholder = "";
  }
});

});
const permissoes = {
  loja: [
    "47. Vendas - Vendas - LOJA",
    "48. Etiquetas Avulso - Compras - LOJA",
    "49. Vendas no Check-Out - Vendas - LOJA",
    "50. Alteração de Quantidade - Vendas - LOJA",
    "51. Conceder Descontos - Vendas - LOJA",
    "52. Aplicar Preços Promocionais - Vendas - LOJA",
    "53. Arredondamento - Vendas - LOJA",
    "54. Rotinas Fiscais (ECF) - Vendas - LOJA",
    "55. Iniciar Dia Fiscal (ECF) - Vendas - LOJA",
    "56. Leitura X (ECF) - Vendas - LOJA",
    "57. Redução Z (ECF) - Vendas - LOJA",
    "58. Trocar Bobina (ECF) - Vendas - LOJA",
    "59. Sangria (ECF) - Vendas - LOJA",
    "60. Suprimento (ECF) - Vendas - LOJA",
    "61. Horário de Verão (ECF) - Vendas - LOJA",
    "62. Visualizar Formas de Pagamento (ECF) - Vendas - LOJA",
    "63. Status do ECF (ECF) - Vendas - LOJA",
    "64. Leitura da Memória Fiscal (ECF) - Vendas - LOJA",
    "65. Alíquotas de ICMS (ECF) - Vendas - LOJA",
    "66. Cancelar Último Cupom (ECF) - Vendas - LOJA",
    "67. Fecha Cupom Aberto (ECF) - Vendas - LOJA",
    "68. Abrir Operador de Caixa - Vendas - LOJA",
    "69. Encerrar Operador de Caixa - Vendas - LOJA",
    "70. Configurações do Check-Out - Vendas - LOJA",
    "71. Configurações da Balança - Vendas - LOJA",
    "72. Verificar Portas Seriais - Vendas - LOJA",
    "73. Controle de Entregas - Vendas - LOJA",
    "75. Excluir Pré-Vendas - Vendas - LOJA",
    "76. Cadastro de Operadores - Cadastros - LOJA",
    "77. Cadastro de Estados - Cadastros - LOJA",
    "78. Monitoramento de PA's - Gerencial - LOJA",
    "79. Câmeras - Gerencial - LOJA",
    "80. Chat - Gerencial - LOJA",
    "81. Vendas em Modo CallCenter - Vendas - LOJA",
    "82. Transferência de Produtos entre as LOJAS - Transferências - LOJA",
    "85. Etiquetas por Filtro - Compras - LOJA",
    "93. Inclusão de Clientes - Vendas - LOJA",
    "94. Alteração de Clientes - Vendas - LOJA",
    "95. Balanço - Estoque - LOJA",
    "96. Autoriza Limite de Credito - Vendas - LOJA",
    "97. Fechamento Detalhado de Caixa - Financeiro - LOJA",
    "98. Cancelamento de Item de Venda - Vendas - LOJA",
    "99. Troca de Mercadorias - Vendas - LOJA",
    "107. Cadastro de Alíquotas - Cadastros - LOJA",
    "110. Altera Preço de Venda no Balcão - Vendas - LOJA",
    "112. Venda Cheque a Vista - Vendas - LOJA",
    "113. Venda ChequePre - Vendas - LOJA",
    "114. Venda Crediário - Vendas - LOJA",
    "115. Venda Convênio - Vendas - LOJA",
    "120. Entrada Avulsa de Mercadorias - Compras - LOJA",
    "122. Cancelamento de Item de Pré-Venda - Vendas - LOJA",
    "123. Bloquear / Desbloquear Caixa - Vendas - LOJA",
    "131. Cadastro de Concorrentes - Cadastros - LOJA",
    "132. Preços da Concorrência - Gerencial - LOJA",
    "134. Atualiza Tabela ABCFarma - Gerencial - LOJA",
    "135. Abandonar Venda - Vendas - LOJA",
    "146. Liberar a Venda de um Produto com Estoque Negativo - Vendas - LOJA",
    "147. Cancelar uma Venda Concluída - Vendas - LOJA",
    "148. Autoriza Venda Cliente Bloqueado - Vendas - LOJA",
    "149. Abrir Gaveta - Vendas - LOJA",
    "150. Importar Nota Fiscal para Conferência - Compras - LOJA",
    "152. Concluir Venda PDV - Vendas - LOJA",
    "155. Conferência de Notas Fiscais - Compras - LOJA",
    "156. Consulta de Conferência de Notas Fiscais - Compras - LOJA",
    "158. Consulta das Entregas no PDV - Vendas - LOJA",
    "159. Altera Crédito do Cliente - Vendas - LOJA",
    "160. Estoque Previsto - Vendas - LOJA",
    "161. Recebimento de Conta a Crédito - Vendas - LOJA",
    "163. Alterar Preço Maximo Durante a Venda - Vendas - LOJA",
    "164. Visualiza Tela de Detalhes do Produto Durante a Venda (F11) - Vendas - LOJA",
    "165. Solicitar Transferência a Outra Filial - Transferências - LOJA",
    "166. Alterar o Preço Total da Venda - Vendas - LOJA",
    "167. Reenvio de Dados (Interligação) - Gerencial - LOJA",
    "168. Acerto de Estoque - Estoque - LOJA",
    "169. Compra de Emergência - Compras - LOJA",
    "170. Omitir Uso Continuo - Vendas - LOJA",
    "172. Transferências - Gerar em LOJA de Rede - Transferências - LOJA",
    "177. Cancelar Item Bloqueado - Vendas - LOJA",
    "178. Encerra Caixa Pré-Venda Pendente - Vendas - LOJA",
    "181. Consulta de Encartes - Vendas - LOJA",
    "185. Cancelamento Item Balcão (Pré-Venda Resgatada) - Vendas - LOJA",
    "186. Cancelar Escolha da Venda na Troca - Vendas - LOJA",
    "188. Altera Item de Pré-Venda Resgatada - Vendas - LOJA",
    "189. Conlusão de Troca no Checkout - Vendas - LOJA",
    "209. Consulta de Produtos no Checkout (F10) - Vendas - LOJA",
    "210. Alteração do custo do produto na LOJA - Cadastros - LOJA",
    "212. Cadastro de Lançamentos de Plano de Contas no Checkout - Vendas - LOJA",
    "213. Abandonar Pré-Venda - Vendas - LOJA",
    "214. Inicia Balanço - Estoque - LOJA",
    "215. Concluir Balanço - Estoque - LOJA",
    "216. NFCeContingenciaOffLine - Vendas - LOJA",
    "217. Controle de NFCes - Vendas - LOJA",
    "218. Desbloqueio de Pré-Vendas - Vendas - LOJA",
    "219. Altera Vendedor dos produtos na venda - Vendas - LOJA",
    "220. Farmax Fiscal - Fiscal - LOJA",
    "222. Movimentos de Estoque (LOJA) - Estoque - LOJA",
    "223. Pesquisa Produto por Descrição Checkout - Vendas - LOJA",
    "227. Desbloqueia Produto na Conferência no Checkout pela Descrição - Vendas - LOJA",
    "229. Entrada de Estoque por Acerto de Estoque - Estoque - LOJA",
    "230. Saída de Estoque por Acerto de Estoque - Estoque - LOJA",
    "232. Tela de controle SAT - SAT - LOJA",
    "233. Abandonar Captação de CRM - Vendas - LOJA",
    "235. Excluir Produto na Captação de CRM - Vendas - LOJA",
    "236. Permite Venda na forma pagamento PIX - Vendas - LOJA",
    "238. Permite Venda com Desconto em outra forma de pagamento - LOJA",
    "239. Define margem mínima do produto para a venda - LOJA",
    "240. Coletar mais de 2 vezes para o mesmo CRM no mesmodia - LOJA",
    "244. Permite dar desconto até o Preço de Promoção - LOJA"
  ],
  gestor: [
    "5. Cadastro de Cartões - Cadastros - GESTOR",
    "6. Cadastro de Centros de Custos - Cadastros - GESTOR",
    "7. Cadastro de Contas - Cadastros - GESTOR",
    "8. Cadastro de Códigos Fiscais - Cadastros - GESTOR",
    "9. Cadastro de Forma de Pagamento - Cadastros - GESTOR",
    "10. Cadastro de Históricos - Cadastros - GESTOR",
    "11. Cadastro de Observações - Cadastros - GESTOR",
    "12. Cadastro de Plano de Contas - Cadastros - GESTOR",
    "13. Cadastro de Praças de Clientes - Cadastros - GESTOR",
    "14. Cadastro de Transportadoras - Cadastros - GESTOR",
    "20. Lista de Preços - Estoque - GESTOR",
    "31. Apuração de Resultado - Financeiro - GESTOR",
    "32. Consulta de Saldo - Financeiro - GESTOR",
    "34. Planilha de Caixa Diário - Financeiro - GESTOR",
    "39. Movimentos de Estoque (Matriz) - Estoque - GESTOR",
    "40. Análises - Gerencial - GESTOR",
    "86. Cadastro de Bancos - Cadastros - GESTOR",
    "87. Controle de Cheques Pré-datados - Financeiro - GESTOR",
    "88. Borderos - Financeiro - GESTOR",
    "91. Inventário - Estoque - GESTOR",
    "92. Antecipação de Cartões - Financeiro - GESTOR",
    "103. Exclusão de Perdas - Estoque - GESTOR",
    "111. Cadastro de Curva ABC - Cadastros - GESTOR",
    "116. Controle de Cheques Emitidos - Financeiro - GESTOR",
    "117. Extrato de Contas - Financeiro - GESTOR",
    "118. Controle de Cartões - Financeiro - GESTOR",
    "124. Metas da Rede - Gerencial - GESTOR",
    "127. Cadastro de Metas das Filiais - Cadastros - GESTOR",
    "128. Cadastro de Metas dos Vendedores - Cadastros - GESTOR",
    "129. Comparativo de Metas - Gerencial - GESTOR",
    "130. Cadastro de Redes - Cadastros - GESTOR",
    "133. Cadastro de Famílias - Cadastros - GESTOR",
    "136. Recebimento de Fatura de Convênio - Financeiro - GESTOR",
    "137. Recebimento de Contas (Contas a Receber) - Financeiro - GESTOR",
    "138. Exportação de Cadastros - Gerencial - GESTOR",
    "139. Criar Balanços - Estoque - GESTOR",
    "140. Consulta de Balanços - Estoque - GESTOR",
    "142. Cadastro de Farmacêuticos - Cadastros - GESTOR",
    "144. Cadastro de Faixa de Desconto sobre Comissão - Cadastros - GESTOR",
    "145. Cadastro de Parâmetros de Compra - Cadastros - GESTOR",
    "182. Apuração do Lucro Líquido - Financeiro - GESTOR",
    "183. Resultado de Estoque - Gerencial - GESTOR",
    "234. Preços Site - Cadastros - GESTOR"
  ],
  todos : [
    "1. Cadastros (Menu) - Cadastros - TODOS",
    "2. Cadastro de Classes - Cadastros - TODOS",
    "3. Cadastro de Grupos de Produtos - Cadastros - TODOS",
    "4. Cadastro de Laboratórios - Cadastros - TODOS",
    "15. Cadastro de Permissões - Cadastros - TODOS",
    "16. Cadastro de Usuários - Cadastros - TODOS",
    "17. Cadastro de Filiais - Cadastros - TODOS",
    "18. Cadastro de Produtos - Cadastros - TODOS",
    "21. Cadastro de Fornecedores - Cadastros - TODOS",
    "22. Cadastro de Clientes - Cadastros - TODOS",
    "23. Cadastro de Funcionários - Cadastros - TODOS",
    "24. Cadastro de Convênios - Cadastros - TODOS",
    "26. Entrada de Notas Fiscais - Compras - TODOS",
    "27. Cotações - Compras - TODOS",
    "28. Financeiro (Menu) - Financeiro - TODOS",
    "29. Relatórios Financeiros - Financeiro - TODOS",
    "30. Consulta de Vendas Realizadas - Vendas - TODOS",
    "35. Parametros - Gerencial - TODOS",
    "36. Configurações Gerais da Empresa - Gerencial - TODOS",
    "37. Cópias de Backup - Gerencial - TODOS",
    "38. Conexão com o Banco de Dados - Gerencial - TODOS",
    "41. Internet - Gerencial - TODOS",
    "42. Logoff - Gerencial - TODOS",
    "43. Ajuda - Gerencial - TODOS",
    "45. Informações Sobre o Sistema - Gerencial - TODOS",
    "46. Sair - Gerencial - TODOS",
    "83. Controle de Contas a Pagar - Financeiro - TODOS",
    "84. Controle de Contas a Receber - Financeiro - TODOS",
    "100. Auditoria - Gerencial - TODOS",
    "105. Preços Alterados - Estoque - TODOS",
    "109. Pedidos de Compra - Compras - TODOS",
    "119. Alterar Forma de Pagamento da Venda - Vendas - TODOS",
    "121. Devolução de Mercadorias - Vendas - TODOS",
    "125. Metas da Filial - Gerencial - TODOS",
    "126. Metas dos Vendedores - Gerencial - TODOS",
    "151. Reajuste de Preços na Conclusao da Nota Fiscal - Compras - TODOS",
    "153. Cadastro de Grupos de Compras - Cadastros - TODOS",
    "154. Cadastro de Grupos de Balanço - Cadastros - TODOS",
    "171. Cancelamento de Nota Fiscal Concluída - Compras - TODOS",
    "180. Exportação Acode - Gerencial - TODOS",
    "184. Endereçamento dos Produtos - Cadastros - TODOS",
    "187. Cadastro dos Projetos Pharmalink - Cadastros - TODOS",
    "190. FarmaxDanfe - Outros - TODOS",
    "191. Cadastro de Perfis de Cliente - Cadastros - TODOS",
    "192. Preços Reajustados - Estoque - TODOS",
    "193. Controle de Lotes - Estoque - TODOS",
    "194. Análise de Estoque dos Produtos - Estoque - TODOS",
    "195. Parametros de Ressuprimento - Compras - TODOS",
    "196. Análise de Preços dos Concorrentes - Vendas - TODOS",
    "197. Cadastro de Médicos - Cadastros - TODOS",
    "198. Análise de Compras - Compras - TODOS",
    "199. Meta de Compras - Compras - TODOS",
    "200. Reduções Z - Vendas - TODOS",
    "201. Preços Farmácia Popular - Vendas - TODOS",
    "202. Fechamento de Convênio - Financeiro - TODOS",
    "203. Preços Cartão Fidelidade - Vendas - TODOS",
    "204. Fechamento de Caixa Transferência Pendente - Financeiro - TODOS",
    "205. Princípio Ativo dos Produtos - Cadastros - TODOS",
    "206. Cadastro de SubGrupos de Produtos - Cadastros - TODOS",
    "207. Cadastro de Grupos de Filiais - Cadastros - TODOS",
    "208. Bloqueia Inclusão de Produto na Venda no Checkout - Vendas - TODOS",
    "211. Auditoria Especial - Gerencial - TODOS",
    "221. Concluir nota fiscal com custo maior que preço de venda - Compras - TODOS",
    "224. Cadastro de CST PIS/COFINS - Cadastros - TODOS",
    "225. Sangria na Conferência de Caixa - Financeiro - TODOS",
    "226. Relaciona Produtos não Cadastrados da NF-e - Compras - TODOS",
    "228. Alterar Código de Barras dos Produtos - Cadastros - TODOS",
    "231. Visualiza Somente o Movimento de Venda - Estoque - TODOS",
    "237. Permite que o usuário Logue no Sistema - Login - TODOS",
    "241. Permite a inclusão de uma Forma de Pagamento (Caixa) - TODOS",
    "242. Permite a altreração do valor de uma Forma de Pagamento (Caixa) - TODOS",
    "243. Permite a exclusão de uma Forma de Pagamento (Caixa) - TODOS",
    "245. Permite alterar o preço de venda do produto a partir do cadastro. (F7) - TODOS"
  ]
  
  
};

// Mostra a lista com base na opção selecionada
function mostrarlista() {
  const tipo = document.getElementById("opcoes").value;
  const result = document.getElementById("result");
  if (tipo && permissoes[tipo]) {
    result.innerHTML = permissoes[tipo].join("<br>");
  } else {
    result.innerHTML = "";
  }
}

// Pesquisa dentro da lista filtrada

function Pesquisar2() {
  const termo = document.getElementById("Pesquisar").value.toLowerCase();
  const tipo = document.getElementById("opcoes").value;
  const result = document.getElementById("result");


  if (tipo && permissoes[tipo]) {
    const filtrados = permissoes[tipo].filter(item =>
      item.toLowerCase().includes(termo)
    );
    result.innerHTML = filtrados.length > 0 ? filtrados.join("<br>") : "Nenhum resultado encontrado.";
  } else {
    result.innerHTML = "Selecione uma opção primeiro.";
  }
}





  const utilit01 = document.querySelector('.utilit01');
  const utilit02 = document.querySelector('.utilit02');
  const utilit03 = document.querySelector('.utilit03');
  const utilit04 = document.querySelector('.utilit04');
  const utilit05 = document.querySelector('.utilit05');
  const utilit06 = document.querySelector('.utilit06');
  const utilit07 = document.querySelector('.utilit07');
  const utilit08 = document.querySelector('.utilit08');
  const utilit09 = document.querySelector('.utilit09');
  const utilit10 = document.querySelector('.utilit10');
  const utilit11 = document.querySelector('.utilit11');
  const utilit12 = document.querySelector('.utilit12');





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

  utilit07.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilizarios6/DriverElgin.rar', '/DriverElgin')
  });

  utilit08.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios7/DriverEpson.rar', 'DriverEpson')
  });

  utilit09.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios8/Driver.Bematech.rar', '/Driver.Bematech')
  });
  utilit10.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios10/SWEDA.rar', 'SWEDA')
  });
  utilit11.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios11/DARUMA.rar', 'DARUMA')
  });
  utilit12.addEventListener('click', () => {
    baixarArquivo('https://github.com/Igorf10/FarmaxUtilitarios/releases/download/FarmaxUtilitarios12/Argox.rar', 'Argox')
  });

  function baixarArquivo(url, nomeArquivo) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


