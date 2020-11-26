/*FUNÇÃO que serve para confirmar ou não a removação de usuario. */
function confirmDelete(event, form){
    //impede que o formulário seja submetido
    event.preventDefault();
    var decision = confirm('Você tem certeza que quer excluir?');

    if(decision == true){
        form.submit();
    }

};

$('#btn-first').click(function(){
    $('#cartaoCredito').show();
    $('#cartaoDebito').hide();
    $('#paypal').hide();
});

$('#btn-second').click(function(){
    $('#cartaoDebito').show();
    $('#cartaoCredito').hide();
    $('#paypal').hide();
});

$('#btn-third').click(function(){
    $('#paypal').show();
    $('#cartaoCredito').hide();
    $('#cartaoDebito').hide();
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
  