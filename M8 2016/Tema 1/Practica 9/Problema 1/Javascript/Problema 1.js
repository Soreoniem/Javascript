// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	• 
*/
// Cantidad de triangulos (variable solo visual)
var numTriangulos = 0;

function miFuncion(){
	var triangulos = new Array();	// Array que almacenará triangulos.
	
	var i=0;						// 1ª variable para los bucles for.
	var areaTriangulo;				// Calculará el area de cada triangulo.
	
	document.write("<h2>Mostrar triangulos</h2>");
	// Crear triangulos y muestra el area de cada triangulo
	for( i=0 ; i<3 ; i++ ){
		// Añadir nuevos triangulos
		triangulos.push( nuevoTriangulo() );
		
		// Calcular el area (antes de imprimir)
		areaTriangulo = parseFloat(triangulos[i][0]) * parseFloat(triangulos[i][1]) /2;
		
		document.write("<p>");
		document.write("Triángulo "+ i +" → ["+ triangulos[i][0] +", "+ triangulos[i][1] +"], area:"+ areaTriangulo);
		document.write("</p>");
	}
	
	document.write("<h2>Mostrar triangulos de area superior a 12</h2>");
	// NOTA: El ejercicio dicta "superiores a 12" no "superiores o iguales a", por lo que entran los 12,1
	for( i=0 ; i<3 ; i++ ){
		// area
		areaTriangulo = triangulos[i][0] * triangulos[i][1] /2;
		// condición a 12
		if( areaTriangulo > 12 ){
			document.write("<p>");
			document.write("Triángulo "+ i +" → ["+ triangulos[i][0] +", "+ triangulos[i][1] +"], area:"+ areaTriangulo);
			document.write("</p>");
		}
	}
}
// Crea un nuevo triangulo
function nuevoTriangulo(){
	numTriangulos++;
	
	var base = parseInt(prompt("["+ numTriangulos +"] Nuevo triángulo"
		+"\nintrodice la base: ", nuevoAleatorio(1, 10)));
	var altura = parseInt(prompt("["+ numTriangulos +"] Nuevo triángulo"
		+"\nintrodice la altura: ", nuevoAleatorio(1, 10)));
	return new Array(base, altura);
}