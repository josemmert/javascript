//BOM -> Browser Object Model = nos permite manipular el navegador: su historial, barra de direcciones, informacion del navegador, camara, pantalla, entre otras cosas.

//* Funciones de Tiempo

//  setInterval --> ejecuta una tarea cada un determinado lapso de tiempo

const idInterval=setInterval(()=>console.log('Hola Mundo'), 1000);

// clearInterval(idInterval) detiene la ejecucion del setInterval ue le pasamos su ID

//  setTimeout --> ejecuta una tarea una sola vez, pasado determinado tiempo

setTimeout(()=>{
    console.log('detenemos el intervalo');
    clearInterval(idInterval)
}, 10000)


//! Cuenta Regresiva

let contador = 10;

const cuentaRegresiva = setInterval(()=>{
    console.log('Despegue en ', contador);
    contador--;

},1000);

setTimeout(() => {
    console.log('DESPEGUE!!');
    clearInterval(cuentaRegresiva);
}, 11000);

