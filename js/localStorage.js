let arrUsuario=[];

const user1={
    nombre: 'Alan',
    rol: 'Admin',
};

const user2={
    nombre: 'Valentin',
    rol: 'Admin',
};

arrUsuario.push(user1);
arrUsuario.push(user2);

console.log(arrUsuario);

//LOCAL STORAGE

/**
 * ALMACENA DE LA SIGUIENTE MANERA --> KEY - VALOR (STRING - STRING)
 * 
 * METODOS:
 * 
 * SET ITEMS --> ES PARA CREAR NUEVOS REGISTROS
 * 
 * GET ITEMS --> ES PARA OBTENER UN REGISTRO
 * 
 */

//GUARDAMOS ALGO EN EL LOCALSTORAGE

localStorage.setItem('TEST', 'PROBANDO EL ALMACENAMIENTO EN EL LOCAL STORAGE');

//OBTENER UN REGISTRO DEL LOCALSTORAGE

console.log(localStorage.getItem('TEST'));

//MODIFICAR EL VALOR DE UN REGISTRO YA CREADO

localStorage.setItem('TEST', 'PROBANDO LA MODIFICACIÓN');

//ELIMINAR UN REGISTRO DE LOCALSTORAGE

localStorage.removeItem('TEST')

localStorage.setItem('TEST', 'PROBANDO EL ALMACENAMIENTO EN EL LOCAL STORAGE');
localStorage.setItem('TEST1', 'PROBANDO EL ALMACENAMIENTO EN EL LOCAL STORAGE');

localStorage.clear();

//JSON


localStorage.setItem('usuarios', JSON.stringify(arrUsuario));

const user=localStorage.getItem('usuarios');
const usersLS=JSON.parse(user);
console.log(user);
console.log(usersLS);