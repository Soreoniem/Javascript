/*
	Descripción de la práctica
	• ex1.html.
	• cargar 2 listas de 3 valores.
	• Decir cual es la mayor.
*/
function miFuncion(){
// Lista 1
	var lista1		= new Array();
	var lista2		= new Array();
	var sumaLista1	= 0;
	var sumaLista2	= 0;
	for( var i=1 ; i<=3 ; i++ ){
		lista1.push( parseInt(prompt("• Lista 1 ["+ i +"/3]", nuevoAleatorio(1, 10))) );
		sumaLista1	+= lista1[ lista1.length -1];
		
		lista2.push( parseInt(prompt("• Lista 2 ["+ i +"/3]", nuevoAleatorio(1, 10))) );
		sumaLista2	+= lista2[ lista2.length -1];
	}
	
	// impirmir datos:
	imprimir("<h2>Valor acomulado</h2>");
		imprimir("Lista 1: "+ sumaLista1);
		imprimir("<br/>Lista 2: "+ sumaLista2);
	
	imprimir("<h2>Resultado</h2>");
	if( sumaLista1 > sumaLista2 ){
		imprimir("La <b>Lista 1</b> es más grande que la Lista 2.");
	} else if( sumaLista1 < sumaLista2 ) {
		imprimir("La <b>Lista 2</b> es más grande que la Lista 1.");
	} else {
		imprimir("La Lista 1 y la Lista 2 contienen el mismo número acomulable.");
	}
}