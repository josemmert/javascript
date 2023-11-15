console.log('Clase string');

let texto=" Hola Halentin ";

console.log('El valor del texto es: ', texto);

//propiedad unica propiedad segun Doc.Oficial

//lenght sirve para obtener la longitud de un string

let longitud = texto.length;

console.log('la longitud de texto es: ', longitud);

//Metodos

let mayusculas=texto.toUpperCase();
console.log('el resultado de mayusculas es: ', mayusculas);

let minus=texto.toLowerCase();
console.log('el resultado de minus es: ', minus);

let posicion=texto.indexOf(' ');
console.log('el resultado de posicion es: ', posicion);

let subCadena=texto.slice(0,4);
console.log('el resultado de subCadena es: ', subCadena);

let remplazo=texto.replace('Valentin', 'Alan');
console.log('el resultado de remplazo es: ', remplazo);

//Eliminar espacios en blanco al principio y final del string

let sinEsp=texto.trim();
console.log('el resultado de aplicar trim es: ', sinEsp);

let trimStart=texto.trimStart();
console.log('el resultado de aplicar trimStart es: ', trimStart);

//## MATH

let num=-5
let valorAbs=Math.abs(num)
console.log('El valor absoluto de num es: ', valorAbs);

/* ARRAYS --> */ let arrayNumeros=[3,5,7,78,90,0, num];
console.log('El contenido de array de numeros es: ', arrayNumeros);

//max y min

let max=Math.max(...arrayNumeros);
console.log('El valor maximo del array de numeros es: ', max);

let max2=Math.max(num,10,100,25);
console.log('El valor maximo del array de numeros 2 es: ', max2);

let min=Math.min(0,6,3,num);
console.log('El valor minimo del array de numeros es: ', min);

//El metodo Math.round() devuelve el valor de un numero redondeado al entero mas cercano. Por ejemplo:

let numero2=5.5;
let numeroRedondeado=Math.round(numero2)
console.log('El valor del numero redondeado2 es: ', numeroRedondeado);

let numero3=5.6;
let numeroRedondeado2=Math.floor(numero3)
console.log('El valor del numero redondeado2 es: ', numeroRedondeado2);

let numero4=5.4;
let numeroRedondeado3=Math.ceil(numero4)
console.log('El valor del numero redondeado43 es: ', numeroRedondeado3);