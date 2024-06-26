import { Empleado } from './empleado.js';

export class Profesor extends Empleado {
    constructor(nombre, apellidos, estadoCivil, cargo, añoIncorporacion, numeroDespacho, departamento) {
        super(nombre, apellidos, estadoCivil, cargo, añoIncorporacion, numeroDespacho);
        this.departamento = departamento;
    }

    cambiarDepartamento(idPersona, nuevoDepartamento) {
        if (this.id === idPersona) {
            this.departamento = nuevoDepartamento;
        }
    }
}
