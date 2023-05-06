/*prompt("PAPI ABUSA");
alert("ahorcame has lo que te de la gana");

var numero1= prompt("introduce un numero");
var numero2= prompt("introduce otro numero");

var resultado = pareseInt(numero1) + parseInt(numero2);
alert("El resultado es: " + resultado);*/

/*
let numero1 = 10;
let numero2 = 20;

let resultado = numero1 + numero2;
console.log("Resultado: ", resultado);*/

const form = document.querySelector("form"); //llamar elementos de el documento html
const input = document.getElementById("btn")

input.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(form.elements[0].value);
    console.log(form.elements[1].value);

    const nombre = form.elements[0].value;
    const contrasena = form.elements[1].value;

    if(nombre === "Rabby" && contrasena === "conoelamadre"){
        return window.open("https://runelvissantos.github.io/Practica/");
    } else{
        return alert("Salga de aqui, sapo");
    }
})

console.log({form, input});
 
