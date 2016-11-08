/*
	Descripción de la práctica
	• 
*/

function validarDeportes(){
	var formulario = document.getElementById("formulario");
	var resultadoHtml = "<html><body><h2>Resultados</h2>";
	
	for( var i=0 ; i<(formulario.length -1) ; i++ ){
		
		if( formulario[i].checked ){
			resultadoHtml += formulario[i].value +"<br/>";
		}
	}
	resultadoHtml += "</body></html>";
	//alert("Prueba: "+ resultadoHtml);
	var myWindow = window.open("", "", "left=412,top=284,width=200,height=200");
	myWindow.document.write(resultadoHtml);
}