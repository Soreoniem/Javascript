/*
	Descripción de la práctica
	• 
*/

function generarPie(){
	var pie = document.getElementById("pie");
	var fecha = new Date();
	pie.innerHTML = "Generado por Instituto Ribera Baixa 2"
		+" el "+ fecha.getDay()
		+" de "+ obtenerMes(fecha.getMonth())
		+" del "+ fecha.getFullYear()
		+" a las "+ fecha.getHours() +":"+ fecha.getMinutes() +"h"
		+"<br/>&copy; "+ nuevoAleatorio((fecha.getFullYear() -6), (fecha.getFullYear() -2))
		+" - "+ nuevoAleatorio((fecha.getFullYear() +1), (fecha.getFullYear() +3))
		+" Copyright by Juan Lu. all rights reserved.";
}

function obtenerMes(numero){
	var meses = [
		"Enero", "Febrero", "Marzo",
		"Abril", "Mayo", "Junio",
		"Julio", "Agosto", "Septiembre",
		"Octubre", "Noviembre", "Diciembre"
	];
	return meses[numero];
}