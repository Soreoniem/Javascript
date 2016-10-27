// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	► cargar un entero en formato texto y mediante un botón mostrar el valor elevado al cubo.
	
*/
function comprobarCubo(){
	var frase = document.getElementById("numero").value
	var numero = parseInt( frase );
	
	if( isNaN(numero) ){
		alert("Error: \""+ frase +"\" no es un número");
	} else {
		alert("Introducido: "+ numero
			+"\nY su cubo: "+ Math.pow(numero, 3));
	}
	
}