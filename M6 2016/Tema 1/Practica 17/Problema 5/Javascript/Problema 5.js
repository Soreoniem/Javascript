// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	► Crea un programa que permita cargar una dirección de email e
		implementar una función que verifique si el String contiene
		el caracter @
	[] Pedir email
	[] Verificar email
*/
function ejecutarProblema5(){
	var email;
	var emailValido = false;
	var frase = "Correo electrónico:";
	do{
		email = prompt( frase, "eample@correo.com") + "";
		
		if( email.indexOf("@") != -1 ){
			emailValido = true;
		} else {
			frase = "Problema: el correo electronico necesita una \"@\"";
		}
	}while(! emailValido);
	
	alert("Correo valido: "+ email);
}