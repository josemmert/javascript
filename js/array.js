console.log('Array');

/**
 * 
 * let dias=[0,1,2,3,n]
 */

let dias=['lunes','martes','miercoles'];

let longitud=dias.length;

console.log('La longitud del array dias es: ', longitud);

//acceder a los elementos de un array

console.log('El valor de la posicion 0 del array es: ', dias[0]);
console.log('El valor de la posicion 6 del array es: ', dias[6]); //Esto es una posicion que no existe
console.log(dias.length);

//agregar elementos a un array
//array.push() agrega un nuevo elemento al final del array
longitud=dias.push('jueves');
longitud=dias.push('viernes')
console.log('El valor de la longitud es:', longitud);
console.log(dias);

//array.unshift() agrega un nuevo elemento al inicio del array

dias.unshift('Domingo');
console.log('El array modificado es: ', dias);

//agregar un elemento a un array en una posicion especifica--splice

let array=[1,2,3];
console.log('el array es-->', array);
array.splice(1,0,5)
console.log('el array es-->', array);

//borrar elementos de un array

//eliminar el ultimo elemento
let arr=[1,2,3,4,5,6,7];
console.log('el arr es--> ', arr);
arr.pop()
console.log('el arr es--> ', arr);

//aliminar el primer elemento

arr.shift();
console.log('el arr es--> ', arr);

//eliminar un elemento de cierta posicion de un array

arr.splice(2,1);
console.log('el arr es--> ', arr);

//averiguar la posicion de un elemento
let arrayNumeros=[1,2,3,4,5,6,7,8,9];
let index=arrayNumeros.indexOf(5);
arrayNumeros.splice(index,1)
console.log('ArrayNumeros-->', arrayNumeros);

//averiguar el valor maximo de un array de numeros

let precios=[100,23,45,67,324,31,65]
let valorMax=Math.max(...precios);
console.log('el precio máximo es: ', valorMax);

//averiguar el valor minimo de un array de numeros

let valorMin=Math.min(...precios);
console.log('El precio minimo es: ', valorMin);

//recorrer un array

//1:
for (let i = 0; i < precios.length; i++) {
    console.log(precios[i]);
};

//2:
precios.forEach(element => {
    console.log(element);
});

//3:
const newPrecios=precios.map(element=>{
    console.log(element);
    return
});
console.log(newPrecios);

//4:
for (const iterator of newPrecios) {
    console.log(iterator);
}

//ORDENAR ARRAYS

let arrString=['a','z','x','c','h'];
console.log('El array origina -->', arrString);

let arrSortStr=arrString.sort();
console.log('El array ORDENADO -->', arrSortStr);

let arrNum=[2,10,54,3,6,9];
console.log('El arrNum origina -->', arrNum);

arrNum.sort((a,b)=> a - b);
console.log('El arrNum ordenado -->', arrNum);

//Filtrar array

let arrOriginal=['perro','gato','conejo','elefante','rata'];
console.log('Array original -->', arrOriginal);

let arrFilter=arrOriginal.filter((element)=> element !== 'rata')
console.log('Array filtrado es-->', arrFilter);
