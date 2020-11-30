/*FUNÇÃO que serve para confirmar ou não a removação de usuario. */
function confirmDelete(event, form){
    //impede que o formulário seja submetido
    event.preventDefault();
    var decision = confirm('Você tem certeza que quer excluir?');

    if(decision == true){
        form.submit();
    }
};

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

/**VALIDAÇÃO DE CPF */
window.onload = function verificarCPF(c){
  var i;
  s = c;
  var c = s.substr(0,9);
  var dv = s.substr(9,2);
  var d1 = 0;
  var v = false;
  const invalido = 'CPF inválido'
  const valido = 'CPF válido'

  for (i = 0; i < 9; i++){
      d1 += c.charAt(i)*(10-i);
  }
  if (d1 == 0){
      document.getElementById('erroCPF').innerHTML = invalido;
      v = true;
      return false;
  }
  d1 = 11 - (d1 % 11);
  if (d1 > 9) d1 = 0;
  if (dv.charAt(0) != d1){
      document.getElementById('erroCPF').innerHTML = invalido;
      v = true;
      return false;
  }
  d1 *= 2;
  for (i = 0; i < 9; i++){
      d1 += c.charAt(i)*(11-i);
  }
  d1 = 11 - (d1 % 11);
  if (d1 > 9) d1 = 0;
  if (dv.charAt(1) != d1){
      document.getElementById('erroCPF').innerHTML = invalido;
      v = true;
      return false;
  }
  if (!v) {
    document.getElementById('validoCPF').innerHTML = valido;
  }
}


/**Exibir meios de doação */
$(document).ready(function(){
  //1. CRÉDITO
  $("#btn-first").on('click',function(){
    $('#cartaoDebito').hide();
    $('#paypal').hide();

    $("#cartaoCredito").toggle(function() {
      $(this).next().toggle(4000)
      
  })});

  //2. DÉBITO
  $("#btn-second").on('click',function(){
    $('#cartaoCredito').hide();
    $('#paypal').hide();

    $("#cartaoDebito").toggle(function() {
      $(this).next().toggle(4000)
      
  })});

  //3. PAYPAL
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
