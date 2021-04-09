
const painel = document.getElementById('painel');

let text = '';


let number1=30; number2=10;
//função com parâmetros e com retorno

function plus(variable1, variable2){
    return variable1+variable2;

}
//função sem parâmetros e com retorno
function address(){
    return "Rua pedrinho dos corre";

}
//função sem nada
function helloWolrd(){
    
}

text = address();

const result = document.createTextNode(text);
painel.appendChild(result);