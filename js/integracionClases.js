/** CREAR UN SISTEMA DONDE SE LE MUESTRE AL USUARIO UN MENU DE OPCIONES PARA CREAR UN MENTOR, ALUMNO, LISTAR TODO, LISTAR MENTOR, LISTAR ALUMNO Y QUE LOS DATOS ESTEN PERSISTIDOS, EL SISTEMA SE DETENDRA CUANDO EL USUARIO LO INDIQUE */

class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apeliido=apellido;
        this.dni=dni;
    };

    mostrarInformacion(){
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}`;
    }
};

class Mentor extends Persona{
    constructor(nombre, apellido, dni, curso){
        super(nombre, apellido, dni);
        this.materia=materia;
        this.rol='Mentor';
    };

    mostrarInformacion(){
        return `Rol: ${this.rol}, Apellido: ${this.apeliido}, Nombre: ${this.nombre}, DNI: ${this.dni}, Materia: ${this.materia}`;
    };
};

class Alumno extends Persona{
    constructor(nombre, apellido, curso, becado){
        super(nombre,apellido, dni);
        this.rol='Alumno';
        this.curso=curso;
        this.becado=becado;
    };

    mostrarInformacion(){
        return `Rol: ${this.rol}, Becado: ${this.becado}, Apellido: ${this.apeliido}, Nombre: ${this.nombre}, DNI: ${this.dni}, Curso: ${this.curso}`;
    };
};

class Sistema{
    constructor(){
        /**const lsValue=localstorage.getItem('almacenamiento')
         * 
         */
        this.almacenamiento=JSON.parse(localStorage.getItem('almacenamiento')) || [];
    };

    existeUsuario(usuario){
        const exist=this.almacenamiento.find((element)=>element.dni===usuario.dni);
        if (exist!==undefined) {
            return true;
        } else{
            return false;
        };
    };

    crearMentor(mentor){
        if (this.existeUsuario(mentor)) {
            console.log('El usuario ya existe');
        } else {
            this.almacenamiento.push(mentor);
            console.log('Exito, se creó el registro');
        }
        
    };

    crearAlumno(alumno){
        if (this.existeUsuario(alumno)) {
            console.log('El usuario ya existe');
        } else {
            this.almacenamiento.push(alumno);
            console.log('Exito, se creó el registro');
        }
    };

    mostrarInformacion(object){
        let str='';
        for (const key in object) {
            str+=`${key}: ${object[key]} - `
        }
        return str;
    }

    listarTodo(){

        if (this.almacenamiento.length===0) {

            console.log('Aun no existen registros');

        } else {

            this.almacenamiento.forEach((element, index)=>{
                console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
            });

        }

    };

    listarMentor(){
        const mentores=this.almacenamiento.filter((element)=>element.rol==='Mentor');
        if (mentores.length>0) {
            mentores.forEach((element, index)=>{
                console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
            })
        } else {
            console.log('Aun no hay registros de MENTORES');
        }
    };

    listarAlumnos(){
        const alumnos=this.almacenamiento.filter((element)=>element.rol==='Alumno');
        if (alumnos.length>0) {
            alumnos.forEach((element, index)=>{
                console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
            })
        } else {
            console.log('Aun no hay registros de ALUMNOS');
        }

    }

};


const system=new Sistema();

do {
    let opcion=parseInt(prompt('Seleccione una opcion, 1-CREAR MENTOR, 2-CREAR ALUMNO, 3-LISTAR TODO, 4-LISTAR MENTORES, 5-LISTAR ALUMNOS'));

    switch (opcion) {
        case 1:
            let nombreM=prompt('Ingrese el nombre');
            let apeliidoM=prompt('Ingrese el apellido');
            let dniM=prompt('Ingrese el dni');
            let materiaM=prompt('Ingrese la materia');
            const mentor=new Mentor(nombreM, apeliidoM, dniM, materiaM);
            system.crearMentor(mentor);
            break;

        case 2:
            let nombreA=prompt('Ingrese el nombre');
            let apeliidoA=prompt('Ingrese el apellido');
            let dniA=prompt('Ingrese el dni');
            let cursoA=prompt('Ingrese el curso');
            let becadoA=confirm('¿Es becado?, Si es si, seleccione aceptar');
            const alumno=new Alumno(nombreA,apeliidoA,dniA,cursoA, becadoA);
            system.crearAlumno(alumno);
            break;
        case 3:
            system.listarTodo();
            break;
        case 4:
            system.listarMentor();
            break;
        case 5:
            system.listarAlumnos();
            break;
        default:
            console.error(`OPCION INGRESADA INVALIDA: INGRESO --> ${opcion} `);
            break;
    }

} while (confirm('¿Desea continuar operando?'));

console.log('###Almacenamiento-->', system.almacenamiento);

localStorage.setItem('almacenamiento', JSON.stringify(system.almacenamiento))

/**
 * PASOS:
 * 1- COMPROBAR SI EXISTE UN LS ALMACENADO --> localStorage.getItem(almacenamiento): puede ser un string o null
 * si es un string, necesito convertirlo de nuevo a un array --> JSON.parse[resultado localStorage];
 * 1-b- si es null, necesitamos crear un localStorage--> localStorage.setItem('almacenamiento', JSON.stringify())
 * 
 * 
 * 
 * 
 */