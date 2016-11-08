/*
	Descripción de la práctica
	• Cargar un nombre y un apellido con formulario.
	• Presionar un botón → concatenar y mostrarlos en otra caja de texto.
*/
function concatenar(){
	// Obtener Valores
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	
	document.getElementById("resultado").value = nombre +" "+ apellidos;
}