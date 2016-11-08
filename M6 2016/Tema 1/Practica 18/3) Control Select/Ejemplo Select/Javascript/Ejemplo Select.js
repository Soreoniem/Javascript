// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	• 
*/
function cambiarColor(){
	var valor = document.getElementById("selColor").value;
	document.body.style.backgroundColor = valor;
}

function decirColor(){
	var cajaSeleccion = document.getElementById("selColor");
	var valor = cajaSeleccion.options[cajaSeleccion.selectedIndex].text;
		alert("Cambiado a "+ valor);
	
	document.getElementById("texto").value = valor;
	
}