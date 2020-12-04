import { validarInput } from "./validar.js";

window.onload = () => {
  const inputs = document.querySelectorAll("input");  
    inputs.forEach(input => {
      if (input.dataset.tipo === "outroValor"){
        SimpleMaskMoney.setMask(input, {
          allowNegative: false,
          negativeSignAfter: false,
          prefix: 'R$ ',
          fixed: true,
          fractionDigits: 2,
          decimalSeparator: ',',
          thousandsSeparator: '.',
          cursor: 'end'
          
        })
      }
      input.addEventListener("input", () => {
        validarInput(input, false);
      });
      input.addEventListener('blur', () => {
        validarInput(input);
      })
    })
}


/*FUNÇÃO que serve para confirmar ou não a removação de usuario. */
function confirmDelete(event, form){
    //impede que o formulário seja submetido
    event.preventDefault();
    var decision = confirm('Você tem certeza que quer excluir?');

    if(decision == true){
        form.submit();
    }
};


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


