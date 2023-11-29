class Persona{

    constructor(nombbre, apellido, edad){
        this.name=nombre;
        this.surName=apellido;
        this.age=edad;
    }
    saludar(){
        console.log(`Hola soy ${this.name}`);
    }
    mostrarInformacion(){
        console.log(`Hola mi nombre es ${this.name}, mi apellido es ${this.surName} y mi edad es ${this.age}`);
    }

    cambiarDatos(nuevoNombre, nuevoApellido, nuevaEdad){
        this.name=nuevoNombre;
        this.apellido=nuevoApellido;
        this.edad=nuevaEdad;

        console.log(`Los datos fueron actualizados`);
        this.mostrarInformacion();
    }
    obtenerEdad(){
        return this.age;
    }

    get GetDatos(){
        return `${this.name}, ${this.surName}, ${this.age}`;
    }

    get GetEdad(){
        return this.edad;
    }

    set SetName(newName){
        this.name=newName;
    }

    get GetName(){
        return this.name;
    }

};



//CREAR UN OBJETO EN BASE A LA CLASE --> ISNTANCIAR UNA CLASE, QUIE ES LO MISMO QUE DECIR QUE CREO UNA NUEVA INSTANCIA DE UNA CLASE

const alan=new Persona('Alana', 'Chibilisco', 35)

console.log(alan);
alan.mostrarInformacion();

const valentin=new Persona('Valentin', 'Quiroga', 27);

valentin.mostrarInformacion();

alan.cambiarDatos('Pedro', 'Gomez', 36);

a//lan.mostrarInformacion();

console.log(alan.obtenerEdad());

const edadTutor=valentin.obtenerEdad();
if (edadTutor < 40) {
    console.log('es menor de 40 años');
} else {
    console.log('es mayor de 40 años');
}

alan.name='Jose';
console.log(alan);

alan.SetName='Alan';

console.log(alan.GetDatos);