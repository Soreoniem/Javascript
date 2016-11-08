/*
	Descripción de la práctica
	• 
*/

var maxImpresoras = 2;
var idImpresora = nuevoAleatorio(1, maxImpresoras);
var carpetaImpresoras	= "./Imgs/impresora/";

function generarImpresoras(){
	document.getElementById("iconPrint").innerHTML			= "<img src=\""+ carpetaImpresoras +"imprimir"+ idImpresora +".png\"/>";
	document.getElementById("iconPrintCancelar").innerHTML	= "<img src=\""+ carpetaImpresoras +"imprimir"+ idImpresora +"_cancelar.png\"/>";
}

// Se encarga de imprimir
function impRatClick(){
	document.getElementById("estilosExtra").innerHTML =
		"h1{display: none;}"
		+"#configuracion{display:none;}"
		+"body{background-image:none;}"
		+"#iconPrint{display:none;}"
		+"#iconPrintCancelar{display:none;}"
	;
	
	window.print();
	
	document.getElementsByTagName("h1")[0].innerHTML = "Imprimir";
	
	document.getElementById("estilosExtra").innerHTML =
		"#configuracion{display:none;}"
		+"body{background-image:none;}"
		+"#iconPrintCancelar{display:initial;}"
	;
}
// Se encarga de cancelar imprimir
function impRatClickCancelar(){
	document.getElementsByTagName("h1")[0].innerHTML = "Crea tu propio horario";
	document.getElementById("estilosExtra").innerHTML =
		"#iconPrintCancelar{display:none;}"
	;
}

// parametro objeto = <DIV> y dentro <IMG>
function impresoraObtenerNombre(objeto){
	var imagenUrl	= objeto.children[0]	// Div → objeto img html
		.getAttribute("src")				// img obtener src=""
		.substr(carpetaImpresoras.length)	// obtener "impresoraX.png"
	;
	
	// obtener "imprimirX"
	return imagenUrl.substr(0, 9);
}

// Cambia la imagen de la impresora
	// objeto	= <DIV> y dentro <IMG>
	// extra	= "", "_active", "_hover" etc.
function impresoraCambiarImagen(objeto, extra){
	objeto.children[0]
		.setAttribute("src", carpetaImpresoras + impresoraObtenerNombre(objeto) + extra +".png")
	;
}

function impRatAbajo(objeto){
	impresoraCambiarImagen(objeto, "_active");
}

function impRatAbajoCancelar(objeto){
	impresoraCambiarImagen(objeto, "_active_cancelar");
}

function impRatArriba(objeto){
	impresoraCambiarImagen(objeto, "_hover");
}

function impRatArribaCancelar(objeto){
	impresoraCambiarImagen(objeto, "_hover_cancelar");
}

function impRatEntrar(objeto){
	impresoraCambiarImagen(objeto, "_hover");
}

function impRatEntrarCancelar(objeto){
	impresoraCambiarImagen(objeto, "_hover_cancelar");
}

function impRatSalir(objeto){
	impresoraCambiarImagen(objeto, "");
}

function impRatSalirCancelar(objeto){
	impresoraCambiarImagen(objeto, "_cancelar");
}