//toastr-master/build/toastr.min.js
//toastr-master/build/toastr.min.css


function alerta(tipo,msg)
{
//Tipo:
//error
//info 
//warning
//success
//warning
//error 
	Command: toastr[tipo](msg);
}
    		
    

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}