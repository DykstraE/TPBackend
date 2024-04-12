import { Persona } from './persona.js';
import { Empleado } from './empleado.js';
import { Estudiante } from './estudiante.js';
import { Profesor } from './profesor.js';
import { PersonalDeServicio } from './personalServicio.js';
import { CentroEducativo } from './CentroEducativo.js';




const outputDiv = document.getElementById('output');



document.addEventListener('DOMContentLoaded', function() {
    const altaForm = document.getElementById('altaForm');
    const centro = new CentroEducativo();
  
    altaForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const estadoCivilValue = document.getElementById('estadoCivilValue').value;
      const classPersona = document.getElementById('classPersona').value;
      let persona;

      switch (classPersona) {
        case "Estudiante":
          persona = new Estudiante(nombre, apellido, estadoCivilValue, "Estudiante");
          break;
        case "Profesor":
          persona = new Profesor(nombre, apellido, estadoCivilValue, "Profesor");
          break;
        case "PersonalDeServicio":
          persona = new PersonalDeServicio(nombre, apellido, estadoCivilValue, "Personal De Servicio");
          break;
        default:
          persona = new Persona(nombre, apellido, estadoCivilValue, classPersona);
      }
    
      centro.darDeAlta(persona);
      altaForm.reset();
    });
  
    document.getElementById('searchInput').addEventListener('input', function() {
        centro.mostrarInfo();
    });

    // Mostramos la información inicial al cargar la página
    centro.mostrarInfo();
  });


