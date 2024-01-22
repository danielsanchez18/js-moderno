

class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }

}

const nombre1   = 'Daniel',
      apellido1 = 'Sanchez',
      pais1      = 'Peru';

const juan = {
    nombre:   'Juan',
    apellido: 'Pisfil',
    pais:     'Argentina'
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( juan );

persona1.getInfo();
persona2.getInfo();