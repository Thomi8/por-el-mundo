let numDeTabla = Number(prompt("Ingresa el número de la tabla de multiplicar"))
    for(i = 1; i <=8; i++){
        let res = numDeTabla * i;
        alert("Resultado " + numDeTabla + "*" + i + " = " + res);
}

const array = [];
    for(let i=1; i<3; i++){
        array.push(i);
        array.unshift("Hola");
}
console.log(array);

function calculadora(primernumero, segundonumero, operacion) {
    switch(operacion){
        case "+":
            return primernumero + segundonumero;
        break;
        case "-":
            return primernumero - segundonumero;
        break;
        case "*":
            return primernumero * segundonumero;
        break;
        case "/":
            return primernumero / segundonumero;
        break;
        default:
            return "Valores nulos";
        break;
    }
}

let pregunta1 = Number (prompt("Ingresa el primer num"));
let pregunta2 = Number (prompt("Ingresa el segundo num"));
let operadorMat = prompt("Ingresa + para sumar, - para restar, * para multiplicar, / para dividir");

console.log(calculadora(pregunta1, pregunta2, operadorMat));


let subtitulo = document.getElementsByClassName("subtitulo");
console.log(subtitulo);

let divs = document.getElementsByTagName("div");
console.log(divs[1].innerText);