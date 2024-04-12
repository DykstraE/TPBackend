import { Empleado } from './empleado.js';

export class PersonalDeServicio extends Empleado {
    constructor(nombre, apellidos, estadoCivil, cargo, añoIncorporacion, numeroDespacho, seccionAsignada) {
        super(nombre, apellidos, estadoCivil, cargo, añoIncorporacion, numeroDespacho);
        this.seccionAsignada = seccionAsignada;
    }

    cambiarSeccion(nuevaSeccion) {
        this.seccionAsignada = nuevaSeccion;
    }
}
