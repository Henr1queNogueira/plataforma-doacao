/*FUNÇÃO que serve para confirmar ou não a removação de usuario. */
function confirmDelete(event, form){
    //impede que o formulário seja submetido
    event.preventDefault();
    var decision = confirm('Você tem certeza que quer excluir?');

    if(decision == true){
        form.submit();
    }
};

$(document).ready(function(){
  //CRÉDITO
  $("#btn-first").on('click',function(){
    $('#cartaoDebito').hide();
    $('#paypal').hide();

    $("#cartaoCredito").toggle(function() {
      $(this).next().toggle(4000)
      
  })});

  //DÉBITO
  $("#btn-second").on('click',function(){
    $('#cartaoCredito').hide();
    $('#paypal').hide();

    $("#cartaoDebito").toggle(function() {
      $(this).next().toggle(4000)
      
  })});

  //PAYPAL
  $("#btn-third").on('click',function(){
    $('#cartaoCredito').hide();
    $('#cartaoDebito').hide();

    $("#paypal").toggle(function() {
      $(this).next().toggle(4000)
      
  })});

});

//Funções para colocar Nome do titular do cartão em maiúsculo
document.getElementById('nomeCredito').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
});

document.getElementById('nomeDebito').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
});


/**Validação - lado cliente */
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();