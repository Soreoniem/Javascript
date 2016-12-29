var dia = ["hora", "lunes", "martes", "miercoles", "jueves", "viernes"];

function generarTablero(horaMinima, horaMaxima){
	var tabla = "";
	
	tabla += "<table>";
	
	// Primer for que crea la cabecera (variable dia)
	tabla += "<tr>";
	for( var i=0  ; i<dia.length ; i++ ){
		if( i > 0 ){
			tabla += "<td class=\"miClase\">"+ dia[i] +"</td>";
		} else {
			tabla += "<td>"+ dia[i] +"</td>";
		}
	}
	tabla += "<tr>";
	
	// Segundo for para los datos
	for (var j = horaMinima; j <= horaMaxima; j++){
	
		tabla += "<tr>";
		
		for (var n = 0; n < dia.length; n++){
			if( n == 0 ){
				tabla += "<td>"+ j +":00</td>";
			} else {
				tabla += "<td><input type=\"text\"></td>";
			}
		}
		
		tabla += "</tr>";
	}
	
	tabla += "</table>";
	document.getElementById("tabla").innerHTML = tabla;
}