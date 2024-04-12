import { Persona } from './persona.js';
import { Empleado } from './empleado.js';
import { Estudiante } from './estudiante.js';
import { Profesor } from './profesor.js';
import { PersonalDeServicio } from './personalServicio.js';
import { CentroEducativo } from './CentroEducativo.js';




const outputDiv = document.getElementById('output');



document.addEventListener('DOMContentLoaded', function () {
  const altaForm = document.getElementById('altaForm');
  const centro = new CentroEducativo();


    altaForm.addEventListener('submit', function (event) {
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

  document.getElementById('searchInput').addEventListener('input', function () {
    centro.mostrarInfo(this.personas);
  });

  // Mostramos la información inicial al cargar la página
  centro.mostrarInfo(this.personas);

document.getElementById('enviarBtn').addEventListener('click', cambiarAtributo);
document.getElementById('eliminarBtn').addEventListener('click', eliminarPersona);

function eliminarPersona() {
  let idUsuario = parseInt(document.getElementById('idUsuario').value);

  // Buscar al usuario dentro de centro.personas
  let indiceUsuario = centro.personas.findIndex(persona => persona.id === idUsuario);

  if (indiceUsuario !== -1) {
      // Eliminar al usuario del array de personas
      centro.personas.splice(indiceUsuario, 1);
      // Mostrar la información actualizada
      centro.mostrarInfo(centro.personas);
  } else {
      console.error("Usuario no encontrado.");
  }
}

function cambiarAtributo() {
  let atributo = document.getElementById('atributo').value;
  let idUsuario = parseInt(document.getElementById('idUsuario').value);
  let nuevoValor = document.getElementById('nuevoValor').value;

  // Buscar al usuario dentro de centro.personas
  let usuario = centro.personas.find(persona => persona.id === idUsuario);

  if (usuario) {
      switch (atributo) {
          case "despacho":
              usuario.cambiarDespacho(idUsuario, nuevoValor);
              break;
          case "estadoCivil":
              usuario.cambiarEstadoCivil(idUsuario, nuevoValor);
              break;
          case "cursoMatriculado":
              usuario.cambiarCursoMatriculado(idUsuario, nuevoValor);
              break;
          case "departamento":
              usuario.cambiarDepartamento(idUsuario, nuevoValor);
              break;
          default:
              console.error("Atributo no válido.");
      }
      centro.mostrarInfo(centro.personas);
  } else {
      console.error("Usuario no encontrado.");
  }
}

});






