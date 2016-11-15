/*
	Descripción de la práctica
	1 • Obtener por teclado:
		· Nombre de usuario
		· email
	2 • Mostrar los datos.
*/
function miFuncion(){
	// [1] Obtener los datos
	var nombre = prompt("[1/2] Nombre de usuario", "Anonimo");
	var email = prompt("[2/2] Correo electrónico", "anonimo@alguno.com");
	
	document.write("<p>");
		document.write("Nombre de usuario: <b>"+ nombre +"</b>");
		document.write("<br/>Correo electrónico: <b>"+ email +"</b>");
	document.write("</p>");
}