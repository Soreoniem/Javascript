// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	• 
*/


var trabajos = ["1r Nombre", "2º Nombre", "3r Nombre", "4º Nombre"];

function Organizar(arrTraI, i) {
	
	document.getElementById("imprimirDatos").innerHTML += arrTraI +": <span style=\"color: red;\">"+ document.getElementById("nom"+ (i +1)).value +"</span><br/>";
}