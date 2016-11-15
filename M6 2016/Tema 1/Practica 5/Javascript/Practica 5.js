function miFuncion(){
	problema1();
	problema2();
	problema3();
}

function problema3(){
	imprimir("<h2>Problema 3</h2>");
	var numero	= parseInt(prompt("Elige un número del 0 al 99:", nuevoAleatorio(0, 99)));
	
	imprimir("El número "+ numero +" es de");
	if( numero < 10 ) imprimir(" 1 dígito");
	else imprimir(" 2 dígitos.");
}

function problema2(){
	imprimir("<h2>Problema 2</h2>");
	
	// Obtener notas
	var nota1	= parseInt(prompt("[1│3] Problema 2"
		+"\nNota1:", nuevoAleatorio(0, 10)));
	var nota2	= parseInt(prompt("[2│3] Problema 2"
		+"\nNota2:", nuevoAleatorio(0, 10)));
	var nota3	= parseInt(prompt("[3│3] Problema 2"
		+"\nNota3:", nuevoAleatorio(0, 10)));
	
	// Promedio
	var promedio	= ((nota1 + nota2 + nota3) /3).toFixed(2);
	
	// Condicionales
	imprimir("Promedio alumno: "+ promedio +" (");
	if( promedio >= 4 ){
		imprimir("regular)");
	} else {
		imprimir("reprobado)");
	}
}

function problema1(){
	imprimir("<h2>Problema 1</h2>")
// Leer 2 números.
	var numero1	= parseInt(prompt("[1│2] Introduce 2 números."
		+"\nNúmero 1: ", nuevoAleatorio(1, 11)));
	var numero2	= parseInt(prompt("[2│2] Introduce 2 números."
		+"\nNúmero 2: ", nuevoAleatorio(2, 12)));
	
	imprimir("<h3>Números</h3>");
		imprimir("Número 1: "+ numero1);
		imprimir("<br/>Número 2: "+ numero2);
	// Número 1 mayor
	if( numero1 > numero2 ){
		imprimir("<h3>Sumar y Restar</h3>");
		imprimir("<p>Sumar: "+ (numero1 + numero2)
			+"<br/>Restar: "+ (numero1 - numero2) +"</p>");}

	else if( numero2 > numero1 ) {
		if(numero2 <= 0)numero2 = 1;
		imprimir("<h3>Multiplicar y Dividir</h3>");
		imprimir("<p>Multiplicación: "+ (numero1 * numero2)
			+"<br/>División: "+ (numero1 / numero2).toFixed(2) +"</p>");
	} else {
		imprimir("<br/>• Los números son iguales •");
	}
}