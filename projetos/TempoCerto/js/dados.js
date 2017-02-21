var menuJSONObject ={  
   "menu":[  
      {  
         "id":"menu1",
         "descricao":"Conta",
         "link":"profile.html",
         "icone":"images/Minhaconta.png"
      },
      {  
         "id":"menu2",
         "descricao":"Comprar",
         "link":"listadecompras.html",
         "icone":"images/listadecompras.jpg"
      },
      {  
         "id":"menu4",
         "descricao":"Agendar",
         "link":"agendarcompras.html",
         "icone":"images/agendarcompras.png"
      },
      {  
         "id":"menu5",
         "descricao":"Historico",
         "link":"historico.html",
         "icone":"images/historico.png"
      },
      {  
         "id":"menu6",
         "descricao":"Acompanhe",
         "link":"acompanhepedido.html",
         "icone":"images/acompanheseupedido.png"
      }
   ]
};

var roadMapJSONObject = {  
   "roadMap":[  
      {  
         "id":"item0",
         "data":"Hoje",
         "titulo":"POC#1",
         "descricao":"Ambiente apenas para demostrar prova de conceito",
      },
      {  
         "id":"item1",
         "data":"2017-Jan",
         "titulo":"RELEASE#1",
         "descricao":"Comprador pode fazer a compra completa mais simples possivel",
      },
      {  
         "id":"item2",
         "data":"2017-Fev",
         "titulo":"RELEASE#2",
         "descricao":"Comprador pode buscar e pagar nas formas mais comuns do mercado",
      },
      {  
         "id":"item3",
         "data":"2017-Mar",
         "titulo":"RELEASE#3",
         "descricao":"Comprador Tem experiência de compra integrada com redes sociais",
      },
      {  
         "id":"item3",
         "data":"2017-Abr",
         "titulo":"RELEASE#4",
         "descricao":"Comprador sugestões baseadas no historico e amigos",
      },
      {  
         "id":"item4",
         "data":"2017-Mai",
         "titulo":"VERSAO#1",
         "descricao":"Lançamento Oficial",
      }


   ]
}

//DADOS PARA TESTES-------------------------------------
var produtosJSONObject = {  
   "produtos":[  
      {  
         "id":"item_1",
         "setor":"Mercearia",
         "nome":"Arroz",
         "tipoDeMedida":"KL",
         "qtdDeMedida":"1",
         "foto":"images/arrozcamil.png",
         "valorUnitario":"3.50"
      },
      {  
         "id":"item_2",
         "setor":"Mercearia",
         "nome":"Feijão",
         "tipoDeMedida":"KL",
         "qtdDeMedida":"1",
         "foto":"images/feijao.png",
         "valorUnitario":"2.50"
      },
      {  
         "id":"item_3",
         "setor":"Mercearia",
         "nome":"Oleo",
         "tipoDeMedida":"LT",
         "qtdDeMedida":"1",
         "foto":"images/oleo.png",
         "valorUnitario":"5.50"
      },
      {  
         "id":"item_4",
         "setor":"Lanches",
         "nome":"Cafe",
         "tipoDeMedida":"Gr",
         "qtdDeMedida":"500",
         "foto":"images/cafe.png",
         "valorUnitario":"8.50"
      },
      {  
         "id":"item_5",
         "setor":"Mercearia",
         "nome":"Açucar",
         "tipoDeMedida":"Kl",
         "qtdDeMedida":"1",
         "foto":"images/acucar.png",
         "valorUnitario":"3.50"
      },
      {  
         "id":"item_6",
         "setor":"Mercearia",
         "nome":"Leite UHT",
         "tipoDeMedida":"L",
         "qtdDeMedida":"1",
         "foto":"images/leiteninho.png",
         "valorUnitario":"7.50"
      },
      {  
         "id":"item_7",
         "setor":"Mercearia",
         "nome":"Molho de Tomate",
         "tipoDeMedida":"G",
         "qtdDeMedida":"500",
         "foto":"images/molhodetomate.png",
         "valorUnitario":"13.50"
      },
      {  
         "id":"item_8",
         "setor":"Mercearia",
         "nome":"Caldo de Carne",
         "tipoDeMedida":"G",
         "qtdDeMedida":"57",
         "foto":"images/caldodecarne.png",
         "valorUnitario":"4.50"
      },
      {  
         "id":"item_9",
         "setor":"Mercearia",
         "nome":"azeite",
         "tipoDeMedida":"ML",
         "qtdDeMedida":"57",
         "foto":"images/azeite.png",
         "valorUnitario":"22.75"
      }
   ]
};

var historicoDeComprasJSONObject = {  
   "historico":[  
       {  
         "id":"item1",
         "data":"28/07/2016",
         "descricao":"PEDIDO 732589 - VISA ELECTRON CIELO - 359",
         "status":"Cancelado",
         "valor":"490.32",
         "classStatus":"alert-success"
      },
       {  
         "id":"item1",
         "data":"28/08/2016",
         "descricao":"PEDIDO 732589 - VISA ELECTRON CIELO - 359",
         "status":"Cancelado",
         "valor":"190.32",
         "classStatus":"alert-warning"
      },
       {  
         "id":"item1",
         "data":"28/08/2016",
         "descricao":"PEDIDO 732589 - VISA ELECTRON CIELO - 359",
         "status":"Finalizado",
         "valor":"890.32",
         "classStatus":"alert-success"
      },
       {  
         "id":"item1",
         "data":"28/09/2016",
         "descricao":"PEDIDO 732590 - VISA ELECTRON CIELO - 359",
         "status":"Finalizado",
         "valor":"30.25",
         "classStatus":"alert-success"
      },
      {  
         "id":"item1",
         "data":"28/10/2016",
         "descricao":"PEDIDO 732591 - MASTER CAR - 479",
         "status":"Aguardando Pagamento",
         "valor":"320.50",
         "classStatus":"alert-info"
      }
   ]
};

var acompanhePedidosComprasJSONObject = {  
   "historico":[  
      {  
         "id":"item1",
         "data":"28/10/2016",
         "descricao":"PEDIDO 732591 - MASTER CAR - 479",
         "status":"Aguardando Pagamento",
         "valor":"320.50",
         "classStatus":"alert-info"
      }
      ]
};