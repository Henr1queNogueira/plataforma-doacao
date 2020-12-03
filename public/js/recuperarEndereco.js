
export const recuperarEndereco = (input) => {
    const cepNumeros = input.value.replace(/\D/g, "");

    https://developer.chrome.com/apps/xhr

       /*
        const cep = document.querySelector("#cep")

        const showData = (result)=>{
            for(const campo in result){
                if(document.querySelector("#"+campo)){
                    document.querySelector("#"+campo).value = result[campo]
                }
            }
        }

        cep.addEventListener("blur",(e)=>{
            let search = cep.value.replace("-","")
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            }
            

            fetch(`https://viacep.com.br/ws/${search}/json/`, options)
            .then(response =>{ response.json()
                .then( data => showData(data))
            })
            .catch(e => console.log('Deu Erro: '+ e,message))
        })
        */
       var xhr = new XMLHttpRequest();
        xhr.open ("GET", `http://cep.la/${cepNumeros}`, true);
        xhr.setRequestHeader ("Accept", "application/json");
        xhr.onreadystatechange = function(){
            if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200){
                preecherCampos(input);
                input.setCustomValidity("");
                return
            }else{
                input.setCustomValidity("Este não é um Cep válido");
                return

            }    
        };
        xhr.send(null);
    
};
    

const preecherCampos = (input) => {
    const campoEndereco1 = document.getElementById("endereco1");
    const campoCidade = document.getElementById("cidade");
    const campoEstado = document.getElementById("estado");

    campoEndereco1.value = xhr.responseText("logradouro");
    campoCidade.value = xhr.responseText("cidade");
    campoEstado.value = xhr.responseText("uf")


}