// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	• 
*/
function presionar(objeto){
  objeto.style.background = '#FFFF00';
}

function levantar(objeto){
  objeto.style.background = '#FFFFFF';
}

var miVentana;
var miVentanaX = 0;
var miVentanaY = 0;
var y = 0;
function nuevaVentana(){
	miVentana = window.open("", "", "width=250, height=250");
}

function moverVentanaA(){
	miVentanaX = parseInt(prompt("Horizontal: ", "0"));
	
		var inputX = document.getElementById("movX");
		inputX.value = (miVentanaX /10);
	
	miVentanaY = parseInt(prompt("Vertical: ", "0"));
	
		var inputY = document.getElementById("movY");
		inputY.value = (miVentanaY /10);
	
	miVentana.moveTo(miVentanaX, miVentanaY);
    miVentana.focus();
	
}

function moverX(objeto){
	miVentanaX = parseInt(objeto.value) * 10;
	miVentana.moveTo(miVentanaX, miVentanaY);
}

function moverY(objeto){
	miVentanaY = parseInt(objeto.value) * 10;
	miVentana.moveTo(miVentanaX, miVentanaY);
}