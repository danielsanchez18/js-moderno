

class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre );
        console.log( 'Hola a todos soy un método estático' );
    }

    nombre;
    codigo;
    frase;
    comida;

    constructor( nombre, codigo, frase ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        // Si quiero llamar a una function fuera del scope
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy ironman');

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de manza de la tia May';
// spiderman.nemesis = 'Duende Verde'; //Es posible establecer un atributo sin declararlo antes

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// console.log(ironman);

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedaExterna = 'Hola Mundo';

console.log(Persona.propiedaExterna);
console.log(Persona);