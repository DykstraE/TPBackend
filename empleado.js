import { Persona } from './persona.js';

export class Empleado extends Persona {
    constructor(nombre, apellidos, estadoCivil, cargo, añoIncorporacion, numeroDespacho) {
        super(nombre, apellidos, estadoCivil, cargo);
        this.añoIncorporacion = añoIncorporacion;
        this.numeroDespacho = numeroDespacho;
    }

    cambiarDespacho(idPersona, nuevoDespacho) {
        if (this.id === idPersona) {
            this.numeroDespacho = nuevoDespacho;
        }
    }
}
