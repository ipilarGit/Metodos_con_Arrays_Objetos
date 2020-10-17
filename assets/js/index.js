const consultasDentales = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

const consultasRadiologicas = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const consultasTraumatologicas = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

function cuerpoTabla(consultas) {
  for (consulta of consultas) {
    $("#tbody").append(`
  <tr>
    <td>${consulta.hora}</td>
    <td>${consulta.especialista}</td>
    <td>${consulta.paciente}</td>
    <td>${consulta.rut}</td>
    <td>${consulta.prevision}</td>
  </tr>
    `);
  }
}

function mostrarConsultas(tipo) {
  let consultas = [];
  if (tipo == "dental") consultas = consultasDentales;
  if (tipo == "radio") consultas = consultasRadiologicas;
  if (tipo == "trauma") consultas = consultasTraumatologicas;
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  cuerpoTabla(consultas);
}

let indiceCero = 0;
let ultimoIndiceDental = consultasDentales.length - 1;
let ultimoIndiceRadio = consultasRadiologicas.length - 1;
let ultimoIndiceTrauma = consultasTraumatologicas.length - 1;

const primeraAtencionDental = consultasDentales[indiceCero];
const ultimaAtencionDental = consultasDentales[ultimoIndiceDental];

const primeraAtencionRadio = consultasRadiologicas[indiceCero];
const ultimaAtencionRadio = consultasRadiologicas[ultimoIndiceRadio];

const primeraAtencionTrauma = consultasTraumatologicas[indiceCero];
const ultimaAtencionTrauma = consultasTraumatologicas[ultimoIndiceTrauma];

// Cantidad consulta dental
let cantidadDental = document.getElementById("cantidad-dental");
cantidadDental.innerHTML = `<h3>Cantidad de Atenciones para Consultas Dentales: ${consultasDentales.length}<h3>`;

// Cantidad consulta radiologicas
let cantidadRadio = document.getElementById("cantidad-radio");
cantidadRadio.innerHTML = `<h3>Cantidad de Atenciones para Consultas Radiológicas: ${consultasRadiologicas.length} </h3>`;

// cantidad consulta traumatologicas
let cantidadTrauma = document.getElementById("cantidad-trauma");
cantidadTrauma.innerHTML = `<h3>Cantidad de Atenciones para Consultas Radiológicas: ${consultasTraumatologicas.length}</h3>`;

// Atencion consulta dental
let parrafoUno = document.getElementById("parrafoUno");
parrafoUno.innerHTML = `PRIMERA ATENCIÓN: ${primeraAtencionDental.paciente} - ${primeraAtencionDental.prevision} | ÚLTIMA ATENCIÓN: ${ultimaAtencionDental.paciente} - ${ultimaAtencionDental.prevision}`;
parrafoUno.style.color = "black";
parrafoUno.style.textAlign = "center";
parrafoUno.style.fontSize = "20px";

// Atencion consulta Radiologicas
let parrafoDos = document.getElementById("parrafoDos");
parrafoDos.innerHTML = `PRIMERA ATENCIÓN: ${primeraAtencionRadio.paciente} - ${primeraAtencionRadio.prevision} | ÚLTIMA ATENCIÓN: ${ultimaAtencionRadio.paciente} - ${ultimaAtencionRadio.prevision}`;
parrafoDos.style.color = "black";
parrafoDos.style.textAlign = "center";
parrafoDos.style.fontSize = "20px";

// Atencion consulta traumatologicas
let parrafoTres = document.getElementById("parrafoTres");
parrafoTres.innerHTML = `PRIMERA ATENCIÓN: ${primeraAtencionTrauma.paciente} - ${primeraAtencionTrauma.prevision} | ÚLTIMA ATENCIÓN: ${ultimaAtencionTrauma.paciente} - ${ultimaAtencionTrauma.prevision}`;
parrafoTres.style.color = "black";
parrafoTres.style.textAlign = "center";
parrafoTres.style.fontSize = "20px";

let botonDental = document.getElementById("btn-dental");
botonDental.addEventListener("click", function (e) {
  e.preventDefault();
  mostrarConsultas("dental");
});

let botonRadio = document.getElementById("btn-radio");
botonRadio.addEventListener("click", function (e) {
  e.preventDefault();
  mostrarConsultas("radio");
});
let botonTrauma = document.getElementById("btn-trauma");
botonTrauma.addEventListener("click", function (e) {
  e.preventDefault();
  mostrarConsultas("trauma");
});
