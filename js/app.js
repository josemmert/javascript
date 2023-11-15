//aqui vamos a comenzar con javascript//
console.log('Hola Mundo!!')

//tipos de datos:

//String: cadenas de caracteres, se lo representa porque esta contenido entre comillas simples o dobles
//Number: todos los numeros
//Booleanos: logicos solo toman dos valores 'true' o 'false'

//Array:
//Object:
//Empty: null, nada.

//Variables (var - let - const)

//var deprecada --> no se usa.

//crear o declarar una variable

//sintaxis:
/*
tipo de variable (nombre de la variable(camelCase/nombre-de-la-variable / nombre_de_la_variable) = [string o number o boolean o array o object])
*/

let mensaje = "Esto es un mensaje"
console.log(mensaje)
document.write('<br>' + mensaje)
const token = 'hola hooola';
// console.log('let mensaje-->',mensaje)
console.log('const token-->',token)

//cambiar valor de una variable

mensaje = 'Esto es otro mensaje distinto'
console.log(mensaje)
document.write('<br>' + mensaje)

mensaje=50
console.log(mensaje)
document.write('<br>' + mensaje)

let numero_1=10;
let numero_2=20;
let suma= numero_1 + numero_2
console.log(numero_1 + numero_2);

document.write('<br>' + (numero_1 + numero_2))

document.write('<br> El resultado de la suma es:' + suma)
// Esto es un error --> token='otro token'; (NO SE PUEDE CAMBIAR EL VALOR DE UNA CONSTANTE)

//imprimir datos en el documento html

// document.write('Esto es un document.write');
//Alert

alert('Hola mundo con un ALERT');
alert('<br> El resultado de la suma es:' + suma);
alert('<br>' + (numero_1 + numero_2));