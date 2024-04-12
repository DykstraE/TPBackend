import { Persona } from './persona.js';
import { Empleado } from './empleado.js';
import { Estudiante } from './estudiante.js';
import { Profesor } from './profesor.js';
import { PersonalDeServicio } from './personalServicio.js';



export class CentroEducativo {

    constructor() {
        this.personas = [];
        this.infoDiv = document.getElementById('info');
    }



    darDeAlta(persona) {
        this.personas.push(persona);
        this.mostrarInfo();
    }

    darDeBaja(id) {
        this.personas = this.personas.filter(persona => persona.id !== id);
        this.mostrarInfo();
    }

    mostrarInfo() {

        let searchTerm = document.getElementById('searchInput').value.toLowerCase();

        let filteredPersonas = this.personas.filter(persona => {
            // Filtrar las personas cuyo nombre o apellidos contengan el término de búsqueda
            return persona.nombre.toLowerCase().includes(searchTerm) ||
                persona.apellidos.toLowerCase().includes(searchTerm);
        });

        let infoHTML = '';


        filteredPersonas.forEach(persona => {

            let atributosEspecificos = '';
            if (persona instanceof Estudiante) {
                atributosEspecificos += `Curso matriculado: ${persona.cursoMatriculado}`;
            } else if (persona instanceof Profesor) {
                atributosEspecificos += `Año de incorporación: ${persona.annoIncorporacion}, -  Despacho: ${persona.numeroDespacho} - Departamento: ${persona.departamento}`;
            } else if (persona instanceof PersonalDeServicio) {
                atributosEspecificos += `Año de incorporación: ${persona.annoIncorporacion}, - Despacho: ${persona.numeroDespacho} - Sección asignada: ${persona.seccionAsignada}`;
            }


            // Agregar cada persona como un elemento de lista
            infoHTML += `<li>${persona.nombre} ${persona.apellidos} (${persona.estadoCivil}) - ${persona.cargo} - ID: ${persona.id} - ${atributosEspecificos}</li>`;

        });



        this.infoDiv.innerHTML = infoHTML;
    }
}


