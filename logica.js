let mostrar = document.getElementById("mostrar");


let bnt1 = document.getElementById("bnt1");
let bnt2 = document.getElementById("bnt2");
let bnt3 = document.getElementById("bnt3");
let bnt4 = document.getElementById("bnt4");
let bnt5 = document.getElementById("bnt5");
let bnt6 = document.getElementById("bnt6");
let bnt7 = document.getElementById("bnt7");
let bnt8 = document.getElementById("bnt8");
let bnt9 = document.getElementById("bnt9");
let bnt0 = document.getElementById("bnt0");

let bntSuma = document.getElementById("bntSuma");
let bntResta = document.getElementById("bntResta");
let bntMultiplicacion = document.getElementById("bntMultiplicacion");
let bntDivision = document.getElementById("bntDivision");
let bntIgual = document.getElementById("bntIgual");
let bntRaizCuadrada = document.getElementById("bntRaizCuadrada");
let bntRaizCubica = document.getElementById("bntRaizCubica");
let bntPotencia = document.getElementById("bntPotencia");
let bntBorrar = document.getElementById("bntBorrar");
let bntRetroceso = document.getElementById("bntRetroceso");


//funciones y eventos
const fn1 = () => {

    mostrar.innerHTML += "1";

}
bnt1.onclick = function () {
    fn1();
}

const fn2 = () => {

    mostrar.innerHTML += "2";

}
bnt2.onclick = function () {
    fn2();
}
const fn3 = () => {

    mostrar.innerHTML += "3";

}
bnt3.onclick = function () {
    fn3();
}
const fn4 = () => {

    mostrar.innerHTML += "4";

}
bnt4.onclick = function () {
    fn4();
}
const fn5 = () => {

    mostrar.innerHTML += "5";

}
bnt5.onclick = function () {
    fn5();
}
const fn6 = () => {

    mostrar.innerHTML += "6";

}
bnt6.onclick = function () {
    fn6();
}
const fn7 = () => {

    mostrar.innerHTML += "7";

}
bnt7.onclick = function () {
    fn7();
}
const fn8 = () => {

    mostrar.innerHTML += "8";

}
bnt8.onclick = function () {
    fn8();
}
const fn9 = () => {

    mostrar.innerHTML += "9";

}
bnt9.onclick = function () {
    fn9();
}
const fn0 = () => {

    mostrar.innerHTML += "0";

}
bnt0.onclick = function () {
    fn0();
}




//metodos
const fnSuma = ()=>{

   
    let numero1 = mostrar.innerHTML;
   
    console.log(numero1);
    mostrar.innerHTML = mostrar.innerHTML;
    let numero2 = mostrar.innerHTML;
    let res = numero1 + numero2;
    mostrar.innerHTML = res;
    

}
bntSuma.onclick = function () {
    fnSuma();
}


const fnIgual = () => {

}

bntIgual.onclick = function () {
    fnIgual();
}