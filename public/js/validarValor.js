export const validarValor = input => {
    const outroValor = input.formatToNumber();

    if(outroValor === 0){
        input.setCustomValidity("O valor deve ser maior que R$0,00")
        return
    }else{
        input.setCustomValidity("")
        return
    }
   
}