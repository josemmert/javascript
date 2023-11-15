console.log('Estoy en operadores');

// Operadores de asignación
let numero=5 //declarando una variable del tipo let y la estamos asignando/inicializando con el operador = y con el valor 5
console.log('Valor del numero: ' , numero);

let numero2=3
console.log('Valor del numero2: ', numero2);

numero2=numero
console.log('Valor del numero2 luego de igualarla a numero: ', numero2);

//OPERADORES ARITMETICOS +,-,*,/,%

let valor=10;
let valor2=10;

//operador suma

let suma=valor + valor2  //Tener en cuenta que si el valor de las variables es distinto de numeros el operador funciona como concatenacion;
console.log('El valor de la suma es; ', suma);

//operador resta

let resta=valor - valor2;

console.log('El valor de resta es: ', resta);

//operador multiplicación

let multiplicacion=valor + valor2;
console.log('El valor de multiplicación es: ', multiplicacion);

//operador division

let division=valor/valor2;
console.log('El valor de la división es: ', division);

//operador modulo o resto

let resto=valor % valor2;
console.log('El valor de resto es: ', resto);

//OPERADORES UNITARIOS

//operador de incremento

//valor = valor + 1
//valor++ //esto significa que se va a incrementar en 1 el valor de la variable
valor+=3;
console.log('El valor de let valor es: ', valor);

//operador de decremento
//valor--;
valor-=3
console.log('El valor de let valor es: ', valor);

//operador de negación solo funciona con variables de tipo boolean

let=logica=true;
console.log('El valor de la let logica es: ', logica);
console.log('El valor de la let logica NEGADO es: ', !logica);

//OPERADORES CONDICIONALES (RELACIONALES - LOGICOS)

//RELACIONALES

let variable1='10';
let variable2='10';

//op == 'igual a'
console.log('el op==', variable1==valor);

//op === 'estrictamente igual' comprueba no solo el valor de la variable sino tambien los tipos de las mismas
console.log('El resultado del op === es: ', variable1===valor);  //importante

//op!= 'es distinto'
console.log('el op != ', variable1!=valor);

//op !== 'estrictamente distinto'
console.log('el op !== es: ', variable1!==valor);

//op >, <, >=, <=
console.log('El valor > es: ', valor>valor2);
console.log('El valor < es: ', valor<valor2);
console.log('El valor >= es: ', valor>=valor2);
console.log('El valor >= es: ', valor>=valor2);

//LOGICOS

//--AND LOGICO &&; Es true si ambas condiciones son true, en caso contrario es false

console.log('PROBANDO EL &&', variable1!=valor && variable1!==valor);

//--OR LOGICO ||, esto retorno true si al menos una de las condiciones evaluadas es true;

console.log('PROBANDO EL ||', variable1!=valor || variable1!==valor);

