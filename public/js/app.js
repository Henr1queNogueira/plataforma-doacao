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
