import { Persona } from './persona.js';

export class Estudiante extends Persona {
    constructor(nombre, apellidos, estadoCivil, cargo, cursoMatriculado) {
        super(nombre, apellidos, estadoCivil, cargo);
        this.cursoMatriculado = cursoMatriculado;
    }

    cambiarCursoMatriculado(idPersona, nuevocursoMatriculado) {
        if (this.id === idPersona) {
            this.cursoMatriculado = nuevocursoMatriculado;
        }
    }
}
