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