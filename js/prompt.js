//crear un imput para que el usuario ingrese datos

//Solicitando string al usuario
/*
let nombreUsuario;
let apellidoUsuario;
let dniUsuario;

console.log('El valor de nombreusuario es: -->',nombreUsuario);
console.log('El valor de apellidoUsuario es: -->',apellidoUsuario);
console.log('El valor de dniUsuario es: -->',dniUsuario);
//aqui hariamos que el usuario ingrese su nombre
nombreUsuario=prompt('Ingrese su nombre por favor!!');
apellidoUsuario=prompt('Ingrese su apellido por favor!!')
dniUsuario=prompt('Ingrese su número de dni por favor!!')

console.log('El nombre de nombreUsuario es: -->',nombreUsuario);
console.log('El nombre de apellidoUsuario es: -->',apellidoUsuario);
console.log('El nombre de dniUsuario es: -->',dniUsuario);

document.write('<br> El nombre de usuario ingresado es:' + nombreUsuario)
document.write('<br> El apellido de usuario ingresado es:' + apellidoUsuario + ' y su numero de dni es:' + dniUsuario)
*/

//Solicitando números al usuario

let numero_1;
let numero_2;

numero_1=parseInt(prompt('Ingrese el primer número'));
numero_2=parseInt(prompt('Ingrese el segundo número'));

// let numero_1_parseado=parseInt(numero_1)
// let numero_2_parseado=parseInt(numero_2)

//let suma=numero_1_parseado+numero_2_parseado;
// let otraSuma=parseInt(numero_1)+parseInt(numero_2)
let sumaDirecta=numero_1+numero_2
document.write('El resultado de  sumar los dos números ingresados es:' +sumaDirecta)