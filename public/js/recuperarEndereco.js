export const recuperarEndereco = (input) => {
    const cepNumeros = input.value.replace(/\D/g, "");

    if(input.validity.valid){
       /* const url = `http://cep.la/${cepNumeros}/json/`;
        const options = {
            method: 'GET',
            mode: "cors",
            headers: {
                'content-type': 'application/json;charset=utf-8'
            }
        };
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            if(data.erro){
                input.setCustomValidity("Este não é um Cep válido");
                return
            }
            preecherCampos(data);
            input.setCustomValidity("");
                return
        });
        */
       const xhr = new XMLHttpRequest();
        xhr.open ("GET", `http://cep.la/${cepNumeros}`, true);
        xhr.setRequestHeader ("Accept", "application/json");
        xhr.onreadystatechange = function(){
            if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200){
                preecherCampos(xhr);
                input.setCustomValidity("");
                return
            }else{
                input.setCustomValidity("Este não é um Cep válido");
                return

            }    
        };
        xhr.send(null);
    }
};
    

const preecherCampos = (xhr) => {
    const campoEndereco1 = document.getElementById("endereco1");
    const campoCidade = document.getElementById("cidade");
    const campoEstado = document.getElementById("estado");

    campoEndereco1.value = xhr.logradouro;
    campoCidade.value = xhr.cidade;
    campoEstado.value = xhr.uf;


}