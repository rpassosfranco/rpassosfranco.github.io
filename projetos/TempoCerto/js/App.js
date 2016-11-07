//dados.js
//Inicialização do módulo
 var module = angular.module('appSistemaDeCompras', []);

//Configuracoes padroes
 module.controller('configuracaoDoPortal', function($scope){
 	$scope.footer =[{
           'texto':'rpassosfranco',
           'link' :'http://rpassosfranco.github.io'
 	}];
 });


//Adiçaõ do Controller do Menu
 module.controller('menuPortal', function($scope){
 	$scope.menuBar =menuJSONObject;
 });


//Adiçaõ do Controller do Road Map
 module.controller('roadMap', function($scope){
 	$scope.RoadMap =roadMapJSONObject;
 });

//Adiçaõ do Controller do Historico de pagamentos
 module.controller('historicoDeCompras', function($scope){
 	$scope.Historico =historicoDeComprasJSONObject;
 });

//Adiçaõ do Controller de acompanhe seus pedidios
 module.controller('acompanhePedidosCompras', function($scope){
 	$scope.Pedidos =acompanhePedidosComprasJSONObject;
 });

//Agendar Compras
module.controller('firstCtrl', ['$scope','$window', function($scope,$window) {

  $scope.delete = function(id) {
    deleteUser = $window.confirm('Deseja deletar este agendamento?');
      if(deleteUser){
         //Your action will goes here
        alerta("success","Deletado com sucesso");
      }
   };
 }])

//Adição do Controller ao módulo para a lista
  module.controller('ListaComprasController', function($scope){
    $scope.itens =produtosJSONObject;
    $scope.itensSelecionados = [];
    $scope.confirmed = false;
    $scope.ngQtd =1;
   
	    $scope.adicionaItem = function (e) {
			    var itemSelecionado = this.confirmed;  
			    var idItemClicado = e;

			    if (itemSelecionado)
			    {
			    	//Adiciona produto
			 		angular.forEach(produtosJSONObject.produtos, function(value, key) {
			  		 	if (value.id == idItemClicado)
				  		{				 
							 $scope.itensSelecionados.push(value);
				  		 }
					 });
			    }else{
			  		//Remover produto
					angular.forEach( $scope.itensSelecionados, function(value, key) {
						if (value.id == idItemClicado)
				  		{				 
							 $scope.itensSelecionados.splice(key, 1);
						 }
					 });
			    }
	   };
 });