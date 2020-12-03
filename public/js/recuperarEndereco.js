

export const recuperarEndereco = (input) => {
    const cepNumeros = input.value.replace(/\D/g, "");

    var xhr = new XMLHttpRequest();
    xhr.open ("GET", `http://cep.la/${cepNumeros}`, true);
    xhr.setRequestHeader ("Accept", "application/json");

    xhr.onreadystatechange = function(input){
        if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200){
            
            var json = JSON.parse(xhr.response);
            var cidade = json.cidade;
            var logradouro = json.logradouro;
            var uf = json.uf;
            document.getElementById("logradouro").value = logradouro;
            document.getElementById("cidade").value = cidade;
            document.getElementById("uf").value = uf;
            console.log(cidade)
            return

        }
            
        };
        xhr.send (null);
    

 }
    

   