/*
	Descripción de la práctica
	• Obtener un número del 1 al 10.
	• Mostrar la tabla de multiplicar del número pedido.
*/
function miFuncion(){
	var num	= parseInt(prompt("Tabla de multiplicar del: ", nuevoAleatorio(1, 10)));
	
	var tablaHTML = "";
	tablaHTML	+=
		"<table>"
			+"<caption>Tabla del "+ num +"</caption>"
			+"<thead>"
				+"<tr class=\"bordeExterior\">"
					+"<th>Producto</th>"
					+"<th>Resultado</th>"
				+"</tr>"
			+"</thead>"
			+"<tbody>"
	;
	
	for( var i=0 ; i<=10 ; i++ ){
		tablaHTML	+= "<tr class=\"bordeExterior\">";
			tablaHTML	+= "<td>"+ num +" ✖ "+ i +"</td><td>"+ (num * i) +"</td>";
		tablaHTML	+= "</tr>";
	}
			
	tablaHTML	+= "</tbody>"
		+"</tfoot><tr><th colspan=\"2\">©Creado por Juan Lu</th></tr></tfoot>"
		+"</table>"
	;
	
	document.getElementById("divTabla").innerHTML	= tablaHTML;
	
}