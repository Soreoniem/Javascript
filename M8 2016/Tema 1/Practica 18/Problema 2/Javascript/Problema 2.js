/*
	Descripción de la práctica
	• Cargar 2 objetos de tipo texto y al presionar un botón mostrar el mayor de los dos.
*/
function comprobarMayor(){
	// Obtener Valores
	var input1 = document.getElementById("numero1").value;
	var input2 = document.getElementById("numero2").value;
	
	// ponerlos a numero
	var numero1 = parseInt( input1 );
	var numero2 = parseInt( input2 );
	
	// Comprobar si son numeros
	if( isNaN(numero1) ){
		alert("Error numero 1: \""+ input1 +"\" no es un número");
	} else if( isNaN(numero2) ){
		alert("Error numero 2: \""+ input2 +"\" no es un número");
	} else {
		// Comparar los números
		if(numero1 > numero2){
			alert("Mayor: Número 1 → "+ input1 );
		} else if(numero1 < numero2) {
			alert("Mayor: Número 2 → "+ input2 );
		} else {
			alert("Los números son iguales");
		}
	}
}