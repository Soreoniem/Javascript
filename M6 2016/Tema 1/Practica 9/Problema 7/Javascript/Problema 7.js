/* Ejercicios javascript 9 problema Nº 7
	Descripción de la práctica
	• Obtener 10 valores numericos por teclado.
	• Mostrar la cantidad de valores negativos.
	• Mostrar la cantidad de valores positivos.
	• Mostrar la cantidad de valores mutiplos de 15.
	• Y mostrar el valor acomulado de los numeros pares.
*/
function ejecutarProblema7(){
	
	var numeros			= new Array();	// Array que contendrá los 10 números.
	var numNegativos	= 0;			// Almacenará la cantidad de números negatios.
	var numPositivos	= 0;			// Almacenará la cantidad de números positivos.
	var numMultiplos15	= 0;			// Almacenará la cantidad de números multiplos de 15.
	var sumaPares		= 0;			// Almacenará la cantidad de números pares.
	
	
	// Variables opcionales
	var respuesta;						// Se depositará la respuesta del usuario. (Se puede poner el prompt dentro del push del array miArray.push( prompt("···") ))
	var fraseError = "Introduce un número:";	// Al introducir una respuesta no numerica mostrará el error en el mismo globo de introducir un número.
	
	// Obtiene los 10 números del usuario mediante
	for( var i=0 ; i<10 ; i++ ){
		
		// (Opcional) Mantiene un bucle si el usuario no pone un número
		do{
			
			respuesta = prompt("["+ (i+1) +"/10] "+ fraseError, nuevoAleatorio(-100, 100));
			
			// (Opcional) modifica la frase para mostrar al usuario su error
			if( isNaN(respuesta) ){ fraseError = "Problema: \""+ respuesta +"\" no es numerico"; }
				else { fraseError = "Introduce un número:"; }
			
			respuesta = parseInt(respuesta);
			// NOTA: El parse int se pone después de modificar la frase o de lo contrario al usuario vería "NaN" como error al no introducir un número.
			
		} while( isNaN(respuesta) )
		
		// La respuesta numerica se introduce en la lísta
		numeros.push(respuesta);
		
		if( numeros[i] < 0 ){numNegativos++;}	//	-	-	-	Si el número es negativo
		else {numPositivos++;}	//	-	-	-	-	-	-	-	Si el número es positivo
		
		if( numeros[i] %15 == 0	//	-	-	-	-	-	-	-	Si número es multiplo de 15 evitando el 0
			&& numeros[i] != 0 ){numMultiplos15++;}
		
		if( numeros[i] %2 == 0 ){ sumaPares += numeros[i]; }	// Si número es par
	}
	
	// Metodo para ver el contenido de un array por la función "alert()"
	imprimirArray( "Prueba Array", numeros );
	
	// Se imprimen los diversos datos obtenidos
	document.write("<h2>Cantidad de números negativos</h2>");
		document.write("<p>Negativos: <b>"+ numNegativos +"</b></p>");
		
	document.write("<h2>Cantidad de números positivos</h2>");
		document.write("<p>Negativos: <b>"+ numPositivos +"</b></p>");
		
	document.write("<h2>Cantidad de números multiplos de 15</h2>");
		document.write("<p>Negativos: <b>"+ numMultiplos15 +"</b></p>");
		
	document.write("<h2>Suma de los números pares</h2>");
		document.write("<p>Negativos: <b>"+ sumaPares +"</b></p>");
}