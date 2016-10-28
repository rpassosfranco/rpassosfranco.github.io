var idProdutoGeral = "ModeloDeNegocio_";

function setaIdProjeto(idProduto)
{
	idProdutoGeral=idProduto;
	console.log(idProdutoGeral);

}

function ajustaHeight()
{
	var sColunas = []; 

	sColunas[0]= $("#produtosEservicos").height();
	sColunas[1]= $("#coluna2").height();
	sColunas[2]= $("#coluna3").height();
	sColunas[3]= $("#trabalhoAserFeito").height();
	//sColunas[4]= $("#produtosEservicos2").height();

	var maiorNumero = Math.max.apply(Math,sColunas);

   $('#produtosEservicos').height(maiorNumero);
   $('#coluna2').height(maiorNumero);
   $('#coluna3').height(maiorNumero);
   $('#trabalhoAserFeito').height(maiorNumero);
   //$('#produtosEservicos2').height(maiorNumero);
}

$(document).ready(function() {
  //Exportar Base Para Json
  //ExportarBase();
  //--------------Deprecate------------->leituraNaBaseLocalStorage();
    lista();
    ajustaHeight();
    //Mapeia eventos de Criar post
    $("#MapaDeValorBtn").click(function() { //NovoPostite
   		var sDivId  = "#NovoPostite";//"#sortable"+ $(this).attr('alt');
	 	CriaPostite(sDivId);
	});
    
    //DragDrop
	 $(".connectedSortable").sortable({
	      connectWith: ".connectedSortable"
	      ,receive: function(event, ui) {
	        var id_origem =  ui.sender.attr("id"),
	            id_clicado = ui.item.attr("id"),
	            id_destino = $(this).attr("id");

	      	var item       = ui.item[0].outerHTML;
	        var itemId     = ui.item[0].id;
	  
            //Salvar item no Destino
	        //-----Deprecate------> cadastroNaBase(item,id_destino,itemId);
	       	cadastra(itemId,id_destino,item);
	        ajustaHeight();
	      
    	}
    }).disableSelection();

   $('#corPost').on('change', function (e) {
		var optionSelected = $("option:selected", this);
		var valueSelected = this.value;
		$('#conteudoPost').css("background-color",valueSelected);
	});



});
//Configura os alertas do sistema 
//Tipo: error,success
function alertaDeTela(Tipo, Titulo, Descricao) {
        Command: toastr[Tipo](Descricao, Titulo)
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "500",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
}

function CriaPostite(sDivId)
{
   var dataAtual = new Date();
 
   var ano     = dataAtual.getFullYear();
   var mes     = dataAtual.getMonth()+1;
   var dia     = dataAtual.getDate();
   var hora    = dataAtual.getHours();
   var minuto  = dataAtual.getMinutes();
   var segundo = dataAtual.getSeconds();
   var milesegundo  = dataAtual.getMilliseconds();
   var ramdon   = Math.floor(Math.random()*10);
   
   var chaveItem = ano+mes+dia+hora+minuto+segundo+milesegundo+ramdon;
   var chaveItemString = chaveItem.toString();

   //Cria item
   var sRemove ="<input type='button' name='removerItem' value='Remover' onclick='removerParceirosChave("+chaveItem+")'><br>";

	$("#mensagem").dialog({
	 	        dialogClass: "no-close",
	            modal: true,
	            title: 'Nova Etiqueta',
	            width: 400,
	            show: {effect: 'fade', duration: 1000},
	            open: function(event, ui) {

	            	  var alturaTela = $(document).height();
        			  var larguraTela = $(window).width();

	            	 $('#mascara').css({'width':larguraTela,'height':alturaTela});
			         $('#mascara').fadeIn(1000); 
			         $('#mascara').fadeTo("slow",0.8);
			 

	                 var corSelecionada = $('#corPost option:selected').val();
    				 $('#conteudoPost').css("background-color",corSelecionada);
	            },
	            close:function(event, ui) {
	            	 $("#mascara").hide();
	            },
	            buttons : {
	                Criar: function() {
	                   
	                    $(this).dialog("close"); //closing on Ok click
							var item = $('#conteudoPost').val() ;
		                    var corSelecionada = $('#corPost option:selected').val();
							var sNovoPostite ="<div style='background-color:"+corSelecionada+"' class='panel postiteItem ui-widget-content' id='"+chaveItemString+"'>"+sRemove+"<div class='panel-heading'>"+item+"</div></div>";
						    var sRenderTo =  $('#mapaDeAtuacao option:selected').val();



						    if (sRenderTo != "NovoPostite"){
						    	sDivId = sRenderTo;
						    	//Salva Item
						    	cadastra(chaveItemString,sDivId,sNovoPostite);
						    	//Adiciona item ao canvas
						    	sDivId = "#"+sDivId;
		  						$(sDivId).html($(sDivId).html()+sNovoPostite);
						    }else{
						    	$(sDivId).html($(sDivId).html()+sNovoPostite);
						    }
				    }
	            }
	 });
}

function removerParceirosChave(chaveItem)
{
    $("#"+chaveItem).remove();
	//--------DEPRECATE------->removeItemDaBase(chaveItem);
	Deleta(chaveItem);
}



//BASE LOCAL STORAGE----------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DEPRECATE
/*
function cadastroNaBase(item,local,idDiv)
{
   var htmlPostite = JSON.stringify({
		html    : item,
		div     : local,
		idItem  : idDiv
	});

	tbModelCanvas.push(htmlPostite);
	localStorage.setItem("tbModelCanvas", JSON.stringify(tbModelCanvas));
	alertaDeTela("success","Msg","Registro adicionado.");
	return true;
}
*/
/*
function buscarValor(_idItem)
{
	var myArrayObject = JSON.parse(localStorage.getItem("tbModelCanvas"));
    for (var i=0; i<myArrayObject.length; i++){
        var personObject = JSON.parse(myArrayObject[i]);
        console.log(" Id: " + personObject.idItem, " DIV: " + personObject.div," HTML: "+personObject.html);
    }    
}
*/
/*
function leituraNaBaseLocalStorage()
{
	for (i in tbModelCanvas)
	{
		var row = JSON.parse(tbModelCanvas[i]);//localStorage.getItem(localStorage.key(i));  
		var sNovoPostite  = row.html;
		var sDivId        = "#"+row.div;
		var sIdItem       = "#"+row.idItem;

		$(sDivId).html($(sDivId).html()+sNovoPostite);
		$(sIdItem).attr('alt',i);
    }
}
*/
/*
function removeItemDaBase(idItem)
{
	
	indice_selecionado = parseInt($(idItem).attr("alt"));	

	tbModelCanvas.splice(indice_selecionado, 1);
	localStorage.setItem("tbModelCanvas", JSON.stringify(tbModelCanvas));
	alertaDeTela("success","Msg","Registro excluido.");
}
*/
//--------------------------------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<----DEPRECATE

//LOCAL STORAGE -------------------------CRUD---------------------------
//Cadastra item
function cadastra(_idItem,_idOndeRenderizar,_htmlDoObjeto)
{
	//Verifica se Item Ja Existe na base
	busca(_idItem, function(callback)
	{
		
		var ObjetoEmJson = JSON.stringify({
				idItem          : _idItem,
				idOndeRenderizar: _idOndeRenderizar,
				htmlDoObjeto    : _htmlDoObjeto
		});



		if (callback != null)
		{
		    //Atualiza Item
            console.log("Atualizar Item");

            _idItem =idProdutoGeral+_idItem;
		    if (_idItem != idProdutoGeral )
		    {
		    	localStorage.setItem(_idItem, ObjetoEmJson);
				alertaDeTela("success","Sucesso","Registro Atualizado na base.");
			}
			
		}else{
			//Grava novo Item
			console.log("Cadastrar Item");

			_idItem =idProdutoGeral+_idItem;
			if (_idItem != idProdutoGeral )
		    {
		    	localStorage.setItem(_idItem, ObjetoEmJson);
				alertaDeTela("success","Sucesso","Registro Salvo na base.");
			}
			
		}

	    return true;
	});
}

//Lista Items
function lista()
{
 	var tamanho = localStorage.length;
    var chave = '';
    var valor = '';

	for(var c = 0; c < tamanho;c++){
       chave = localStorage.key(c);
 	   valor = localStorage.getItem(chave);

 	   //valida Chave base:
 	   if (chave.toLowerCase().indexOf(idProdutoGeral) >= 0)
 	   {
			var row = JSON.parse(valor);
			var sNovoPostite  = row.htmlDoObjeto;
			var sDivId        = "#"+row.idOndeRenderizar;
			var sIdItem       = "#"+row.idItem;

			$(sDivId).html($(sDivId).html()+sNovoPostite);
			$(sIdItem).attr('alt',sIdItem);
		}
	}
}

//Deleta Item
function Deleta(_idItem)
{
	 _idItem =idProdutoGeral+_idItem;
     localStorage.removeItem(_idItem);
	 alertaDeTela("success","excluido","Registro excluido.");
}

//Busca Item
function busca(_idItem,callback)
{
	_idItem =idProdutoGeral+_idItem;
	var row = localStorage.getItem(_idItem);
	callback(row);
}

/*Experimental
//Exporta dados
function ExportarBase()
{
 	var tamanho = localStorage.length;
    var chave = '';
    var valor = '';

    var BaseInteira = [];

	for(var c = 0; c < tamanho;c++){
       chave = localStorage.key(c);
 	   valor = localStorage.getItem(chave);
 	 
		 var htmlJson = JSON.stringify({
				chave    : chave,
				valor     : valor
		  });
		 var htmlObject = JSON.parse(htmlJson)

	
 	 	BaseInteira[c] = htmlObject;


	}

	var JsonFinal = JSON.stringify(BaseInteira);

	console.log(JsonFinal);
	alert(JsonFinal);

}


//Importa Base
function ImportarBase(_Json)
{

	var htmlObject = JSON.parse(_Json);

	for (i=0; i < htmlObject.length;i++)
	{
		var chave = htmlObject[i].chave;
		var valor = htmlObject[i].valor;
	
	//	localStorage.setItem(chave, valor);
	}

}
*/

