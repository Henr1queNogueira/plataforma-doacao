import { validarDataNascimento } from "./validarDataNascimento.js";
import { validarCPF } from "./validarCPF.js";

const retornarMensagemDeErro = (tipo, validity) => {
    
    const tiposDeErro = [
        "valueMissing", 
        "typeMismatch",
        "rangeUnderflow",
        "customError"
    ];
    let mensagemDeErro = "";

    const mensagensDeErro = {
        nome: {
            valueMissing: "Este campo é obrigatório"
        },
        sobrenome: {
            valueMissing: "Este campo é obrigatório"

        },
        cpf: {
            valueMissing: "Este campo é obrigatório",
            customError: "CPF Inválido"
        },
        dataNascimento: {
            valueMissing: "Este campo é obrigatório",
            rangeUnderflow: "A data mínima é 01/01/1901",
            customError: "A idade mínima é 18 anos"
        },

        email: {
            valueMissing: "Este campo é obrigatório",
            typeMismatch: "Este e-mail não é válido"

        },
        contato: {
            valueMissing: "Este campo é obrigatório"

        },
        cep: {
            valueMissing: "Este campo é obrigatório"
        },
        endereco1: {
            valueMissing: "Este campo é obrigatório"

        },
        pais: {
            valueMissing: "Este campo é obrigatório"
        },
        estado: {
            valueMissing: "Este campo é obrigatório"
        },
        cidade: {
            valueMissing: "Este campo é obrigatório"
        }

    };
    tiposDeErro.forEach(erro => {
        if(validity[erro]){
            mensagemDeErro = mensagensDeErro[tipo][erro];
        }
    });
    return mensagemDeErro;


}

export const validarInput = (input, adicionarErro = true) => {
    
    const classeElementoErro = "erro-validacao";
    const classeInputErro = "possui-erro-validacao";
    const elementoPai = input.parentNode;
    const elementoErroExiste = elementoPai.querySelector(
        `.${classeElementoErro}`
    );
    const elementoErro = elementoErroExiste || document.createElement('div');
    const elementoEhValido = input.validity.valid;

    const tipo = input.dataset.tipo;
    const validadoresEspecificos = {
       dataNascimento: input => validarDataNascimento(input),
       cpf: input => validarCPF(input)
   };

   if(validadoresEspecificos[tipo]){
       validadoresEspecificos[tipo](input);
   }
   if(!elementoEhValido){
       elementoErro.className = classeElementoErro;
       elementoErro.textContent = retornarMensagemDeErro(tipo, input.validity);

       if(adicionarErro){
        input.after(elementoErro);
        input.classList.add(classeInputErro);
       }
       

   } else {
        elementoErro.remove();
        input.classList.remove(classeInputErro);

   }

}