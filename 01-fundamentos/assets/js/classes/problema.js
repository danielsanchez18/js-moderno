const fher = {
    nombre: 'Fernando',
    edad: 30
}

const pedro = {
    nombre: 'Pedro',
    edad: 15
}

function Persona (nombre, edad) {
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(` Nombre: ${this.nombre} - edad: ${this.edad} `);
    }
}

const maria = new Persona("Maria", 19);
const juan = new Persona("Juan", 25);

console.log(maria);
maria.imprimir();
juan.imprimir();