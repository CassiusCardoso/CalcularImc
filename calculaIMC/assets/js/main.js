// Pegar o evento de submit do formulário
const form = document.querySelector(".form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const {peso, altura} = getInput();
    const imc = calcImc(peso, altura);
    const faixaImc = calcFaixaImc(imc);  
    if (valueInvalid(peso, altura)) return;
    const message = `Seu IMC É ${imc} (${faixaImc}).`;
    setResult(message, true);

});



function calcImc(peso, altura){
    const imc = peso / (altura * altura)
    return imc.toFixed(2);
};

function calcFaixaImc(imc){
    const faixaImc = [
        "Abaixo do peso", "Peso normal", "Sobrepeso",
        "Obesidade Grau 1", "Obesidade Grau 2", "Obesidade Grau 3"
    ]
    if (imc >= 39.9) return faixaImc[5];
    if (imc >= 34.9) return faixaImc[4];
    if (imc >= 29.9) return faixaImc[3];
    if (imc >= 24.9) return faixaImc[2];
    if (imc >= 18.5) return faixaImc[1];
    if (imc < 18.5) return faixaImc[0];
    

}

// Função para pegar o input dos valores inseridos e converter para o tipo number pegando somente os
// e.target.querySelector() = querySelector

function getInput(){
    const inputPeso = form.querySelector("#peso");
    const inputAltura = form.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    return {peso, altura};
}

// Função para verificar a condicional de um dos valores serem inválidos
function valueInvalid(peso, altura){
    if(!peso){
        setResult("Peso inválido", false);
        return true;
    }
    if(!altura){
        setResult("Altura inválida", false);
        return true;
    }
    return false;
}

// Função somente para exibir o resultado
// .appendChild(p) - serve para adicionar o const p ao corpo da função setResult
function setResult(message, isValid){
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";   
    const p = getParagraph();
    
    if (isValid){
        p.classList.add("paragraph-result");
    }else{
        p.classList.add('paragraph-not-result');
    }
    
    p.innerHTML = message;
    resultado.appendChild(p);
    
}   
// Função somente para criar um parágrafo para exibir o resultado
function getParagraph(){
    const p = document.createElement("p");
    return p;
}

