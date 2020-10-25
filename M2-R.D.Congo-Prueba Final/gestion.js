"use strict";
var hospital=new Hospital("El consuelo","Valencia","Pepe");
var personal1=new Personal("Pepe","medico",hospital);
var paciente1=new Paciente("Jose","Infarto",personal1);
console.log(hospital);
console.log(personal1);
console.log(paciente1);