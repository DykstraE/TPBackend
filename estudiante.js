import { Persona } from './persona.js';

export class Estudiante extends Persona {
    constructor(nombre, apellidos, estadoCivil, cargo, cursoMatriculado) {
        super(nombre, apellidos, estadoCivil, cargo);
        this.cursoMatriculado = cursoMatriculado;
    }

    cambiarCurso(nuevoCurso) {
        this.cursoMatriculado = nuevoCurso;
    }
}
