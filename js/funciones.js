// let nombre='Alan';
// let apeliido='Chibilisco';
// let edad=25;
// let sexo='masculino';

let a=2;

let b=3;

let suma=a + b;

console.log('El resultado de sumar a + b es: ', suma);

a=5;
b=10;

suma=a+ b;

console.log('El resultado de sumar a + b es: ', suma);

//Funciones declarativa

function funcionSuma(numero1,numero2) {
    let suma=numero1 + numero2;
    console.log('El resultado de sumar numero1 y numero2 es: ', suma);
}


a=100;
b=200;

//utilizo la funcion

funcionSuma(a,b);
 
a=27;
b=13;

funcionSuma(a,b);

//Esta es una funcion que no retorna nada

function saludar(nombre,apellido) {
    console.log('Hola, mucho gusto ' + nombre + ' ' + apellido + ', ¿Como estas?');
}

saludar('Alan', 'Chibilisco');

saludar('Chibilisco', 'Alan');

//Esta es una funcion que retorna un numero

function division(divisor,dividendo) {
    return divisor / dividendo
}

let resultado=division(4,2);
console.log('El resultado de la division es: ', resultado);

console.log('El resultado de dividir 0 en 0 es: ', division(0,0));