/*FUNÇÃO que serve para confirmar ou não a removação de usuario. */
function confirmDelete(event, form){
    //impede que o formulário seja submetido
    event.preventDefault();
    var decision = confirm('Você tem certeza que quer excluir?');

    if(decision == true){
        form.submit();
    }

};

function tipoPagamento(paymentMethod){
    if(paymentMethod == "creditCard"){
        $('.creditCard').show();
        $('.paypal').hide();
        $('.debitCard').hide();
    }
    if(paymentMethod == "paypal"){
        $('.creditCard').hide();
        $('.paypal').show();
        $('.debitCard').hide();
    }
    if(paymentMethod == "debitCard"){
        $('.creditCard').hide();
        $('.debitCard').show();
        $('.paypal').hide();
    }
}


/*$('.datepicker').datepicker({
    format: 'dd/mm/yyyy', 
    language: 'pt-BR'
    
});*/
