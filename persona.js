export class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellidos, estadoCivil, cargo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.id = ++Persona.contadorPersonas;
        this.estadoCivil = estadoCivil;
        this.cargo = cargo
    }

    cambiarEstadoCivil(nuevoEstadoCivil) {
        this.estadoCivil = nuevoEstadoCivil;
    }
}
