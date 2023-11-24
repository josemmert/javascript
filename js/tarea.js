// Tarea

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

// let numero;
// numero=prompt('Introducir número')

// if (numero % 2 === 0) {
//     console.log('El numero ', numero ,' es par');
//     document.write('El número ' + numero + ' es Par');
// } else {
//     console.log('El numero ', numero ,' es impar');
//     document.write('El número ' + numero + ' es Impar');
// }

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

// let numero
// numero=prompt('Introducir número')

// if (numero < 0) {
//     console.log('El numero ', numero ,' es Negativo');
//     document.write('El número ' + numero + ' es Negativo');
// } else if (numero > 0) {
//     console.log('El numero ', numero ,' es Positivo');
//     document.write('El número ' + numero + ' es Positivo');
// } else {
//     console.log('El numero ', numero ,' es igual a Cero');
//     document.write('El número ' + numero + ' es igual a Cero');
// }

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

// let numero1;
// let numero2;
// numero1 = prompt("Introduzca su primer número");
// numero2 = prompt("Intruduzca su segundo número");

// if (numero1 > numero2) {
//   console.log("El primer número ", numero1, " es Mayor al segundo", numero2);
//   document.write(
//     "El primer número " + numero1 + " es Mayor al segundo " + numero2
//   );
// } else if (numero2 > numero1) {
//   {
//     console.log("El segundo número ", numero2, " es Mayor al primero", numero1);
//     document.write(
//       "El segundo número " + numero2 + " es Mayor al primero " + numero1
//     );
//   }
// } else {
//   console.log("Sus números son Iguales");
//   document.write("Sus números son Iguales");
// }

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

let contraseña;
contraseña=prompt('Introduzca una contraseña valida, debera contener como minimo 6 caracteres y 12 como máximo, una mayuscula, una minusculo, un digito y un caracter especial')
const regexContraseña= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;

if (contraseña!==null) {
    if (contraseña.length >= 6 && contraseña.length <= 12 && regexContraseña.test(contraseña.trim())) {
        console.log("Contraseña valida en longitud y caracteres");
       document.write("Contraseña valida en longitud y caracteres");
    } else {
        console.log("Contraseña invalida");
       document.write("Contraseña invalida");
    }
} else {
    console.log('El usuario presiono cancelar');
}



// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

//TAREA 2 Ciclos

// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

//TAREA 3 Arrays

// Dado un array de números, escribir una función que retorne el número más grande del array.

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
