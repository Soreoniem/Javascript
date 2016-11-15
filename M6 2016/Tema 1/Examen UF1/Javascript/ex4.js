/*
	Descripción de la práctica
	• obtener un número y calcular el producto de sus dígitos.
*/
function miFuncion(){
	var numero	= ""+ parseFloat(prompt("Producto de los dígitos: ", nuevoAleatorio(-300, 1000) +"."+ nuevoAleatorio(0, 9999999999)));
	comenzarMultiplicar = false;
	var productoDecimal	= 1;
	
	imprimir("<h2>Número</h2>"+ numero);
	
	imprimir("<h2>Producto de sus dígitos</h2>");
	imprimir("<div id=\"divTabla\"></div>");
	
	var tablaHTML = "";
	tablaHTML	+=
		"<table>"
			+"<caption>Producto de los dígitos</caption>"
			+"<thead>"
				+"<tr class=\"bordeExterior\">"
					+"<th>Producto</th>"
					+"<th>Resultado</th>"
				+"</tr>"
			+"</thead>"
			+"<tbody>"
	;
	
	for( var i=0 ; i<numero.length ; i++ ){
		var caracter = numero.substr(i, 1);
		
		if( comenzarMultiplicar ){
			
			tablaHTML	+= "<tr class=\"bordeExterior\">";
				tablaHTML	+= "<td>"+ caracter +" ✖ "+ productoDecimal +"</td><td>"+ (productoDecimal * parseInt(caracter)) +"</td>";
			tablaHTML	+= "</tr>";
			
			productoDecimal	= productoDecimal * parseInt(caracter);
		}
		
		if( caracter == "." ) comenzarMultiplicar = true;
	}
	
	tablaHTML	+= "</tbody>"
		+"</tfoot><tr><th colspan=\"2\">©Creado por Juan Lu</th></tr></tfoot>"
		+"</table>"
	;
	
	
	if( productoDecimal != 1 ){
		document.getElementById("divTabla").innerHTML	= tablaHTML;
	} else {
		imprimir("Lamentablemente el número "+ numero +" no tiene dígitos" );
	}
}