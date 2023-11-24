console.log('POO');

/**
 * EN OBJETOS TENEMOS PROPIEDADES O ATRIBUTOS Y METODOS O FUNCIONALIDADES
 * 
 * ANALOGIA PROPIEDAD O ATRIBUTO = VARIABLE
 * METODOS O FUNCIONALIDADES = FUNCIONES
 * 
 * 
 */

let nombre='Alan';
let apeliido='Chibilisco';
let edad='35';

let nombre1='Valentin';
let apellido1='Quiroga';
let edad1=27;

console.log(nombre+apellido+edad);
console.log(nombre1+apellido1+edad1);

/**
 * CREACION DE UN OBJETO LITERAL
 * SINTAXIS
 * 
 * CONST (NOMBRE+IDENTIFICADOR)={
 *  PROPIEDADES O ATRIBUTOS...
 *  KEY: VALOR
 * 
 * }
 */

const profesor={
    nombre: 'Alan',
    apellido: 'Chibilisco',
    edad: 35,
};

const tutor={
    nombre: 'Valentin',
    apellido: 'Quiroga',
    edad: 27,
}

console.log('Este es el objeto profesor-->', profesor);
console.log('Este es el objeto tutor-->', tutor);

//Acceder al valor de los atributos!!
//1- OBJETO.PROIPIEDAD
//2- OBJETO("PROPIEDAD")

console.log('El nombre del profesor es:', profesor.nombre);
console.log('El apeliido del profesor es:', profesor('apellido'));

console.log('El nombre del tutor es:', tutor.nombre);
console.log('La edad del tutor es:', tutor.edad);

//AGREGAR UNA NUEVA PROPIEDAD O ATRIBUTO A UN OBJETO

//OBJETO.NUEVAPROP=NUEVO-VALOR;

profesor.sexo='Masculino';
tutor.sexo='Masculino';
console.log('El objeto tutor modificado es-->', tutor);
console.log('El sexo del profesor es:', profesor.sexo);

//MODIFICAR UN VALOR DE UN ATRIBUTO DE UN ABJETO
//OBJETO.PROPIEDAD=NUEVO-VALOR;

profesor.edad=40;

console.log('Profesor modificado-->', profesor);    

//ELIMINAR UNA PROPIEDAD DE UN OBJETO
//delete OBJETO.PROPIEDAD

delete profesor.sexo;

console.log('Profesor con prop.sexo eliminado-->', profesor);