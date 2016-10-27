// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	• 
*/


var nombres = new Array();

function obtenerDatos(){
	var datos	= document.getElementById("formulario");
	
	//var inputs = document.getElementsByTagName("input");
	
	for( var i=0 ; i<datos.length ; i++ ){
		if( datos[i].type != "submit" ){
			nombres.push( document.getElementById("nom"+ (i +1)).value );
		}
	}
}

function Organizar(arrTraI, i) {
	
	document.getElementById("imprimirDatos").innerHTML += "<span style=\"color: red;\">"+ arrTraI +"</span><br/>";
}