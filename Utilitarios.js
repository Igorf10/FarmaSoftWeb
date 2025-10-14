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
    "43. Vendas - Vendas - LOJA",
    "44. Etiquetas Avulso - Compras - LOJA",
    "45. Vendas no Check-Out - Vendas - LOJA",
    "46. Alteração de Quantidade - Vendas - LOJA",
    "47. Conceder Descontos - Vendas - LOJA",
    "48. Aplicar Preços Promocionais - Vendas - LOJA",
    "49. Arredondamento - Vendas - LOJA",
    "50. Rotinas Fiscais (ECF) - Vendas - LOJA",
    "51. Iniciar Dia Fiscal (ECF) - Vendas - LOJA",
    "52. Leitura X (ECF) - Vendas - LOJA",
    "53. Redução Z (ECF) - Vendas - LOJA",
    "54. Trocar Bobina (ECF) - Vendas - LOJA",
    "55. Sangria (ECF) - Vendas - LOJA",
    "56. Suprimento (ECF) - Vendas - LOJA",
    "57. Horário de Verão (ECF) - Vendas - LOJA",
    "58. Visualizar Formas de Pagamento (ECF) - Vendas - LOJA",
    "59. Status do ECF (ECF) - Vendas - LOJA",
    "60. Leitura da Memória Fiscal (ECF) - Vendas - LOJA",
    "61. Alíquotas de ICMS (ECF) - Vendas - LOJA",
    "62. Cancelar Último Cupom (ECF) - Vendas - LOJA",
    "63. Fecha Cupom Aberto (ECF) - Vendas - LOJA",
    "64. Abrir Operador de Caixa - Vendas - LOJA",
    "65. Encerrar Operador de Caixa - Vendas - LOJA",
    "66. Configurações do Check-Out - Vendas - LOJA",
    "67. Configurações da Balança - Vendas - LOJA",
    "68. Verificar Portas Seriais - Vendas - LOJA",
    "69. Controle de Entregas - Vendas - LOJA",
    "70. Excluir Pré-Vendas - Vendas - LOJA",
    "76. Vendas em Modo CallCenter - Vendas - LOJA",
    "77. Transferência de Produtos entre as LOJAS - Transferências - LOJA",
    "80. Etiquetas por Filtro - Compras - LOJA",
    "88. Inclusão de Clientes - Vendas - LOJA",
    "89. Alteração de Clientes - Vendas - LOJA",
    "90. Balanço - Estoque - LOJA",
    "91. Autoriza Limite de Credito - Vendas - LOJA",
    "92. Fechamento Detalhado de Caixa - Financeiro - LOJA",
    "93. Cancelamento de Item de Venda - Vendas - LOJA",
    "94. Troca de Mercadorias - Vendas - LOJA",
    "100. Cadastro de Alíquotas - Cadastros - LOJA",
    "103. Altera Preço de Venda no Balcão - Vendas - LOJA",
    "105. Venda Cheque a Vista - Vendas - LOJA",
    "106. Venda ChequePre - Vendas - LOJA",
    "107. Venda Crediário - Vendas - LOJA",
    "108. Venda Convênio - Vendas - LOJA",
    "113. Entrada Avulsa de Mercadorias - Compras - LOJA",
    "115. Cancelamento de Item de Pré-Venda - Vendas - LOJA",
    "116. Bloquear / Desbloquear Caixa - Vendas - LOJA",
    "124. Cadastro de Concorrentes - Cadastros - LOJA",
    "125. Preços da Concorrência - Gerencial - LOJA",
    "127. Atualiza Tabela ABCFarma - Gerencial - LOJA",
    "128. Abandonar Venda - Vendas - LOJA",
    "137. Liberar a Venda de um Produto com Estoque Negativo - Vendas - LOJA",
    "138. Cancelar uma Venda Concluída - Vendas - LOJA",
    "139. Autoriza Venda Cliente Bloqueado - Vendas - LOJA",
    "140. Abrir Gaveta - Vendas - LOJA",
    "141. Importar Nota Fiscal para Conferência - Compras - LOJA",
    "143. Concluir Venda PDV - Vendas - LOJA",
    "146. Conferência de Notas Fiscais - Compras - LOJA",
    "147. Consulta de Conferência de Notas Fiscais - Compras - LOJA",
    "148. Consulta das Entregas no PDV - Vendas - LOJA",
    "149. Altera Crédito do Cliente - Vendas - LOJA",
    "150. Estoque Previsto - Vendas - LOJA",
    "151. Recebimento de Conta a Crédito - Vendas - LOJA",
    "152. Alterar Preço Maximo Durante a Venda - Vendas - LOJA",
    "153. Visualiza Tela de Detalhes do Produto Durante a Venda (F11) - Vendas - LOJA",
    "154. Solicitar Transferência a Outra Filial - Transferências - LOJA",
    "155. Alterar o Preço Total da Venda - Vendas - LOJA",
    "156. Reenvio de Dados (Interligação) - Gerencial - LOJA",
    "157. Acerto de Estoque - Estoque - LOJA",
    "158. Compra de Emergência - Compras - LOJA",
    "159. Omitir Uso Continuo - Vendas - LOJA",
    "161. Transferências - Gerar em LOJA de Rede - Transferências - LOJA",
    "166. Cancelar Item Bloqueado - Vendas - LOJA",
    "167. Encerra Caixa Pré-Venda Pendente - Vendas - LOJA",
    "170. Consulta de Encartes - Vendas - LOJA",
    "174. Cancelamento Item Balcão (Pré-Venda Resgatada) - Vendas - LOJA",
    "175. Cancelar Escolha da Venda na Troca - Vendas - LOJA",
    "177. Altera Item de Pré-Venda Resgatada - Vendas - LOJA",
    "178. Conlusão de Troca no Checkout - Vendas - LOJA",
    "198. Consulta de Produtos no Checkout (F10) - Vendas - LOJA",
    "199. Alteração do custo do produto na LOJA - Cadastros - LOJA",
    "201. Cadastro de Lançamentos de Plano de Contas no Checkout - Vendas - LOJA",
    "202. Abandonar Pré-Venda - Vendas - LOJA",
    "203. Inicia Balanço - Estoque - LOJA",
    "204. Concluir Balanço - Estoque - LOJA",
    "205. NFCeContingenciaOffLine - Vendas - LOJA",
    "206. Controle de NFCes - Vendas - LOJA",
    "207. Desbloqueio de Pré-Vendas - Vendas - LOJA",
    "208. Altera Vendedor dos produtos na venda - Vendas - LOJA",
    "209. Farmax Fiscal - Fiscal - LOJA",
    "211. Movimentos de Estoque (LOJA) - Estoque - LOJA",
    "212. Pesquisa Produto por Descrição Checkout - Vendas - LOJA",
    "216. Desbloqueia Produto na Conferência no Checkout pela Descrição - Vendas - LOJA",
    "218. Entrada de Estoque por Acerto de Estoque - Estoque - LOJA",
    "219. Saída de Estoque por Acerto de Estoque - Estoque - LOJA",
    "221. Tela de controle SAT - SAT - LOJA",
    "222. Abandonar Captação de CRM - Vendas - LOJA",
    "224. Excluir Produto na Captação de CRM - Vendas - LOJA",
    "225. Permite Venda na forma pagamento PIX - Vendas - LOJA",
    "227. Permite Venda com Desconto em outra forma de pagamento - LOJA",
    "229. Entrada de Estoque por Acerto de Estoque - Estoque - LOJA",
    "230. Saída de Estoque por Acerto de Estoque - Estoque - LOJA",
    "232. Tela de controle SAT - SAT - LOJA",
    "233. Abandonar Captação de CRM - Vendas - LOJA",
    "235. Excluir Produto na Captação de CRM - Vendas - LOJA",
    "236. Permite Venda na forma pagamento PIX - Vendas - LOJA",
    "238. Permite Venda com Desconto em outra forma de pagamento - LOJA",
    "239. Define margem mínima do produto para a venda - LOJA",
    "240. Coletar mais de 2 vezes para o mesmo CRM no mesmo dia - LOJA"
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
    "19. Lista de Preços - Estoque - GESTOR",
    "29. Apuração de Resultado - Financeiro - GESTOR",
    "30. Consulta de Saldo - Financeiro - GESTOR",
    "31. Planilha de Caixa Diário - Financeiro - GESTOR",
    "36. Movimentos de Estoque (Matriz) - Estoque - GESTOR",
    "37. Análises - Gerencial - GESTOR",
    "81. Cadastro de Bancos - Cadastros - GESTOR",
    "82. Controle de Cheques Pré-datados - Financeiro - GESTOR",
    "83. Borderos - Financeiro - GESTOR",
    "86. Inventário - Estoque - GESTOR",
    "87. Antecipação de Cartões - Financeiro - GESTOR",
    "96. Exclusão de Perdas - Estoque - GESTOR",
    "99. Interligação - Gerencial - GESTOR",
    "101. Cadastro de Lista de Marcação - Cadastros - GESTOR",
    "104. Cadastro de Curva ABC - Cadastros - GESTOR",
    "109. Controle de Cheques Emitidos - Financeiro - GESTOR",
    "110. Extrato de Contas - Financeiro - GESTOR",
    "111. Controle de Cartões - Financeiro - GESTOR",
    "117. Metas da Rede - Gerencial - GESTOR",
    "120. Cadastro de Metas das Filiais - Cadastros - GESTOR",
    "121. Cadastro de Metas dos Vendedores - Cadastros - GESTOR",
    "122. Comparativo de Metas - Gerencial - GESTOR",
    "123. Cadastro de Redes - Cadastros - GESTOR",
    "126. Cadastro de Famílias - Cadastros - GESTOR"
  ],
  todos: [
  "1. Cadastros (Menu) - Cadastros - TODOS",
  "2. Cadastro de Classes - Cadastros - TODOS",
  "3. Cadastro de Grupos de Produtos - Cadastros - TODOS",
  "4. Cadastro de Laboratórios - Cadastros - TODOS",
  "15. Cadastro de Permissões - Cadastros - TODOS",
  "16. Cadastro de Usuários - Cadastros - TODOS",
  "17. Cadastro de Filiais - Cadastros - TODOS",
  "18. Cadastro de Produtos - Cadastros - TODOS",
  "20. Cadastro de Fornecedores - Cadastros - TODOS",
  "21. Cadastro de Clientes - Cadastros - TODOS",
  "22. Cadastro de Funcionários - Cadastros - TODOS",
  "23. Cadastro de Convênios - Cadastros - TODOS",
  "24. Entrada de Notas Fiscais - Compras - TODOS",
  "25. Cotações - Compras - TODOS",
  "26. Financeiro (Menu)] - Financeiro - TODOS",
  "27. Relatórios Financeiros - Financeiro - TODOS",
  "32. Parametros - Gerencial - TODOS",
  "33. Configurações Gerais da Empresa - Gerencial - TODOS",
  "34. Cópias de Backup - Gerencial - TODOS",
  "35. Conexão com o Banco de Dados - Gerencial - TODOS",
  "38. Internet - Gerencial - TODOS",
  "39. Logoff - Gerencial - TODOS",
  "40. Ajuda - Gerencial - TODOS",
  "41. Informações Sobre o Sistema - Gerencial - TODOS",
  "42. Sair - Gerencial - TODOS",
  "78. Controle de Contas a Pagar - Financeiro - TODOS",
  "79. Controle de Contas a Receber - Financeiro - TODOS",
  "84. Conferência de Caixa - Financeiro - TODOS",
  "85. Estatísticas de Caixa - Financeiro - TODOS",
  "95. Auditoria - Gerencial - TODOS",
  "97. Consulta de Vendas Canceladas - Vendas - TODOS",
  "98. Preços Alterados - Estoque - TODOS",
  "102. Pedidos de Compra - Compras - TODOS",
  "112. Alterar Forma de Pagamento da Venda - Vendas - TODOS",
  "114. Devolução de Mercadorias - Vendas - TODOS",
  "118. Metas da Filial - Gerencial - TODOS",
  "119. Metas dos Vendedores - Gerencial - TODOS",
  "142. Reajuste de Preços na Conclusao da Nota Fiscal - Compras - TODOS",
  "144. Cadastro de Grupos de Compras - Cadastros - TODOS",
  "145. Cadastro de Grupos de Balanço - Cadastros - TODOS",
  "160. Cancelamento de Nota Fiscal Concluída - Compras - TODOS",
  "162. Consulta de Produtos a Vencer - Estoque - TODOS",
  "163. Cadastro de Captadores de CRM - Cadastros - TODOS",
  "164. Consulta de Trocas de Mercadorias - Vendas - TODOS",
  "165. Enviar Relatório por Email - Gerencial - TODOS",
  "168. Log de Acessos aos Sistemas - Gerencial - TODOS",
  "169. Exportação Acode - Gerencial - TODOS",
  "173. Endereçamento dos Produtos - Cadastros - TODOS",
  "176. Cadastro dos Projetos Pharmalink - Cadastros - TODOS",
  "179. FarmaxDanfe - Outros - TODOS",
  "180. Cadastro de Perfis de Cliente - Cadastros - TODOS",
  "181. Preços Reajustados - Estoque - TODOS",
  "182. Controle de Lotes - Estoque - TODOS",
  "183. Análise de Estoque dos Produtos - Estoque - TODOS",
  "184. Parametros de Ressuprimento - Compras - TODOS",
  "185. Análise de Preços dos Concorrentes - Vendas - TODOS",
  "186. Cadastro de Médicos - Cadastros - TODOS",
  "187. Análise de Compras - Compras - TODOS",
  "188. Meta de Compras - Compras - TODOS",
  "189. Reduções Z - Vendas - TODOS",
  "190. Preços Farmácia Popular - Vendas - TODOS",
  "191. Fechamento de Convênio - Financeiro - TODOS",
  "192. Preços Cartão Fidelidade - Vendas - TODOS",
  "193. Fechamento de Caixa Transferência Pendente - Financeiro - TODOS",
  "194. Princípio Ativo dos Produtos - Cadastros - TODOS",
  "195. Cadastro de SubGrupos de Produtos - Cadastros - TODOS",
  "196. Cadastro de Grupos de Filiais - Cadastros - TODOS",
  "197. Bloqueia Inclusão de Produto na Venda no Checkout - Vendas - TODOS",
  "200. Auditoria Especial - Gerencial - TODOS",
  "210. Concluir nota fiscal com custo maior que preço de venda - Compras - TODOS",
  "213. Cadastro de CST PIS/COFINS - Cadastros - TODOS",
  "214. Sangria na Conferência de Caixa - Financeiro - TODOS",
  "215. Relaciona Produtos não Cadastrados da NF-e - Compras - TODOS",
  "217. Alterar Código de Barras dos Produtos - Cadastros - TODOS",
  "220. Visualiza Somente o Movimento de Venda - Estoque - TODOS",
  "226. Permite que o usuário Logue no Sistema - Login - TODOS",
  "231. Visualiza Somente o Movimento de Venda - Estoque - TODOS",
  "237. Permite que o usuário Logue no Sistema - Login - TODOS",
  "241. Permite a inclusão de uma forma de pagamento (Caixa) - TODOS",
  "242. Permite a alteração do valor de uma forma de pagamento (Caixa) - TODOS",
  "243. Permite a exclusão de uma Forma de pagamento (Caixa) - TODOS"
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



