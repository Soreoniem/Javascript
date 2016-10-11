/**
 Metodos de ayuda versión: 2.3.1
 © Copyright 2058, JuanLu Corp.
 */
// Math.* w3schools		→ w3schools.com/js/js_math.asp
// Typeof				→ developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof

/* ╔═══♦ Acciones con ratón y teclas ♦═══╗

	✪ No seleccionar	→ <body onselectstart="return false"  ondragstart="return false">

	✪ Saber el botón pulsado: event.which
		event.which == 1 → Botón Izquierdo
		event.which == 2 → Botón Central
		event.which == 3 → Botón Derecho

	✪ Detectar tecla w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
		event.which = 13

*/

/* ╔═══♦ INFO: Metodos ♦═══╗

__Metodos__
 	✪ comprobarVariable( variable, tipoVariable )
		► variable		▬ (Variable)	variable a comprobar
		► tipoVariable	▬ (String)		"string" "number" "Array" "function" "object" o "undefined"
		◄ return		▬ true / false

		📖 Ejemplo:	comprobarVariable( miVariable, "string" );


	✪ error( lugar, variable, valorVariable, mensaje )
		► lugar			▬ (String)		Lugar del error.
		► variable		▬ (String)		Nombre de la variable.
		► valorVariable	▬ (Variable)	Mostrará el dato erroneo.
		► mensaje		▬ (String)		Mensaje de error.
		return		▬ (html)		Muestra una caja con el error.

		📖 Ejemplo:	error("nombreMetodo(<u>parametro1</u>, parametro2, parametro3, parametro4)", "miVariable", miVariable, "Mensaje de error personalizado");


	✪ nuevoAleatorio( numMin, numMax )
		► numMin		▬ (Int)			Número mínimo.
		► numMax		▬ (Int)			Número máximo.
		◄ return		▬ (Int)			Valor aleatorio.

		📖 Ejemplo:	nuevoAleatorio(1, 8);

		NOTA:
			1. No importa el orden de los parametros.
			2. Los parametros se incluyen en el número aleatorio.


	✪ imagenCarga()
		►◄ Sin parametros de entrada o salida
		• Usa esta función paraactivar o desactivar la imagen gif de carga.

		📖 Ejemplo:	imagenCarga();

		NOTA:
			1. (1 vez) Requiere ejecutar antes la función iniciarConfiguraciónGIFCarga().
			2. No es necesario poner en tu código la ejecución de iniciarConfiguraciónGIFCarga()
			Puedes activar o desactivar lo bajando a la sección de EJECUTAR.
			3. Aconsejable ejecutar iniciarConfiguraciónGIFCarga() en un $(document).ready de JQuery.


	✪ imprimirArray( titulo, arrayDatos )
		► titulo		▬ Para saber que array es.
		► arrayDatos	▬ (Array)	Array para imprimir.
		return		▬ (Alert)	Devuelve el Array en un alert().

		📖 Ejemplo:	imagenCarga("miTitulo", [0, "valor2", 3]);


	✪ regla3Porciento( maximo, numero )
		► maximo		▬ (Int)	Número máximo.
		► numMax		▬ (Int)	Numero a comrpobar.
		◄ return		▬ (Int)	Devuelve el porcentaje de la regla de 3.

		📖 Ejemplo:	nuevoAleatorio(30, 15);

		NOTA:
			1. Solo dará el número y no el signo de porcentaje(%).
			2. nuevoAleatorio(30, 15) dará 50.


	✪ regla3( maximo, otroMaximo, numero )
		► maximo		▬ (Int)	Número máximo.
		► otroMaximo	▬ (Int)	El otro número máximo.
		► numMax		▬ (Int)	Valor a comrpobar.
		◄ return		▬ (Int)	Devuelve el resultado de la regla de 3.

		📖 Ejemplo:	nuevoAleatorio(30, 300, 15);

		NOTA:
			2. nuevoAleatorio(30, 300, 15) dará 150 que es la mitad de 30.


	✪ activarDesactivar( etiqueta )
		► etiqueta		▬ (<etiqueta/>)	Etiqueta que queremos osultar/mostrar: $("h1"), $("iframe"), $("#miId"), etc.

		📖 Ejemplo:	activarDesactivar( $("#menu") );


	✪ activarDesactivar_Forzar( etiqueta, boleano )
		► etiqueta		▬ (<etiqueta/>)	Etiqueta que queremos osultar/mostrar: $("h1"), $("iframe"), $("#miId"), etc.
		► boleano		▬ (Boolean)		Valor true o false (true activa, false desactiva).

		📖 Ejemplo:	activarDesactivar_Forzar( $("#cabecera"), false );

		NOTA:
			1. true:	Muestra la etiqueta.
			2. false:	Oculta la etiqueta


	✪ alinearImagen_Horizontal│alinearImagen_Horizontal│alinearImagen = function( imagen )
		► imagen	▬ (<etiqueta/>)	debe pasarse un tag de imagen de Jquery.

		📖 Ejemplo:	 activarDesactivar_Forzar( $("#cabecera img") );

		NOTA:
			1. Horizontal:	Centra la imagen en Horizontal.
			2. Vertical:	Centra la imagen Verticalmente.
			2. Normal:		Centra la imagen Vertical y Horizontalmente.
 */
//
// EJECUTAR
//
$(document).ready(function(){
	/* Activar / Desactivar Gif de carga
		iniciarConfiguraciónGIFCarga();
	// */
});


// ╔═══♦ Variables (html) ♦═══╗

	TAB = "<span style=\"padding-left:2em;\"></span>";
	ENTER = "<br/>";


// ╔═══♦ Metodos ♦═══╗

comprobarVariable = function(variable, tipoVariable)
{
// Comprueba que la llamada al metodo le pasen las variables correctamente
	if( typeof tipoVariable != "string" )
	{
		this.error("comprobarVariable(lugar, nombreVariable, valorVariable, <u>tipoVariable</u>, mensaje)",
			"tipoVariable", tipoVariable,
			"Necesita ser de tipo texto: \"string\", \"number\", \"boolean\", etc.");
	}

	// Comprueba si los parametros recibidos son correctos
	//y en caso afirmativo ejecuta el código
	else
	{
		var resultado;

		if( typeof variable != tipoVariable )
		{ resultado = false; }

		else
		{ resultado = true; }

		// Si es un Array
		if(variable instanceof Array)
		{ resultado = true }

		return resultado;
	}
};

error = function(lugar, variable, valorVariable, mensaje)
{
	// error si no llama correctamente al metodo error
	if( this.comprobarVariable(lugar, "string") == false )
	{ this.error("error(<u>lugar</u>, variable, valorVariable, mensaje)", "lugar", lugar,"Pasale el metodo que ha dado el error mediante texto → mifuncion( posibleParametro)"); }

	else if( this.comprobarVariable(variable, "string") == false )
	{ this.error("error(lugar, <u>variable</u>, valorVariable, mensaje)", "variable", variable,"Pasale el nombre de la variable como texto → miVariable"); }

	else if( this.comprobarVariable(mensaje, "string") == false )
	{ this.error("error(lugar, variable, valorVariable, <u>mensaje</u>)", "mensaje", mensaje,"El mensaje de error debe ser texto (algo lógico XD)."); }


	// Imprime el error si se ha llamado correctamente al metodo
	else
	{
		$("body").prepend(
			"<p style=\"border: dashed 2px red; background-color: whitesmoke;\">"
			+"<b>• Error</b> en "+ lugar + this.ENTER
			+ this.TAB +"Variable: "+ variable +" = '"+ valorVariable +"'"+ this.ENTER
			+ this.TAB + "<i>"+ mensaje +"</i>"
			+"</p>"
		);
	}
};

nuevoAleatorio = function(numMin, numMax)
{
	// Comprueba numMin
	if( this.comprobarVariable(numMin, "number") == false )
	{ this.error("nuevoAleatorio(<u>numMin</u>, numMax)", "numMin", numMin, "El primer parametro debe ser numerico"); }

	// Comprueba numMax
	else if( this.comprobarVariable(numMax, "number") == false )
	{ this.error("nuevoAleatorio(numMin, <u>numMax</u>)", "numMax", numMax, "El segundo parametro debe ser numerico"); }

	// Correcto = return
	else
	{ return parseInt(Math.round(Math.random() * ((numMax - numMin +1) - 1) + numMin)); }
};

iniciarConfiguraciónGIFCarga = function()
{
// HTML
	$("body").prepend(
			"<div id=\"imagenCarga\">"
			+"<img src=\"./Imgs/cargando.gif\"/>"
			+"</div>"
		)

		// CSS
		.append(
			"<style>"
			+"#imagenCarga {"
			+"width: 100%;"
			+"height: 100%;"
			+"background-color: rgba(255, 255, 255, 0.3);"

			+"position: absolute;"
			+"z-index: 100;"
			+"animation: blinker 1s linear infinite; }"

			+"@keyframes blinker{ 50% { opacity: 0.5; } }"

			+"#imagenCarga img{"
			+"width: 20%;"
			+"min-width: 0px;"
			+"max-width: 200px;"
			+"position: absolute;"

			+"top: 40%;"
			+"left: 40%;"
			+"border-radius: 100%; }"
			+"</style>"
		);

// Ocultar
	$("#imagenCarga, #imagenCarga img").css("opacity", "0");
	cargando = $("#imagenCarga");

// Añadir estado
	cargando.data("estado", false)
		.css("width", "0%")
		.css("height", "0%");
};
// Solo llama a esta función para activar o desactivar la imagen de carga
imagenCarga = function()
{
	var cargando	= $("#imagenCarga");
	var cargandoImg	= $("#ImagenCarga img")
	var estado		= $("#imagenCarga").data("estado");

	if( estado != true && estado != false)
	{
		this.error("imagenCarga()", "", "", "Se requiere iniciar antes el metodo <u> iniciarConfi</u>g<u>uraciónGIFCar</u>g<u>a() </u>");
	} else {
		if(estado) {
			cargando.data("estado", false);
			// apagando
			$("#imagenCarga, #imagenCarga img").animate({
				opacity: 0
			}, 1000, function() {
				cargando.css("width", "0%")
					.css("height", "0%");
				cargandoImg.css("min-width", "0px");
			});
		} else {
			cargando.data("estado", true);
			cargando.css("width", "100%")
				.css("height", "100%");
			cargandoImg.css("min-width", "100px");
			// iniciando
			$("#imagenCarga, #imagenCarga img").animate({
				opacity: 1
			}, 1500, function() {
			});
		}
	}
};

imprimirArray = function(titulo, arrayDatos)
{
	if(comprobarVariable(arrayDatos, "Array") == false)
	{
		this.error("imprimirArray(titulo, <u>arrayDatos</u>)",
			"arrayDatos", arrayDatos,
			"La variable no es un Array.");
	} else {// Es un array
// titulo
		var imprimir = titulo + "\n┌";
// línea 1
		for( var x=1 ; x<titulo.length ; x++ ){
			imprimir = imprimir + "─";
		}
// array
		if( arrayDatos.length>0 ){
			for( var x=0 ; x<arrayDatos.length ; x++ ){
				imprimir = imprimir +"\n│ "+ x +" [►"+ arrayDatos[x] +"◄]";
			}
		}
// línea 2
		imprimir = imprimir +"\n└";
		for( var x=1 ; x<titulo.length ; x++ )
		{
			imprimir = imprimir + "─";
		}
// alert final
		alert(imprimir);
	}
};

regla3Porciento = function(maximo, numero){
	if( comprobarVariable(maximo, "number") != true )
	{ this.error("regla3Porciento(<u>maximo</u>, numero)", "maximo", maximo, "El primer parametro no es un número."); }

	else if( comprobarVariable(numero, "number") != true )
	{ this.error("regla3Porciento(maximo, <u>numero</u>)", "numero", numero, "El segundo parametro no es un número."); }

	else{ return numero * 100 / maximo; }
};

regla3 = function(maximo, otroMaximo, numero){
	if( comprobarVariable(maximo, "number") != true )
	{ this.error("regla3(<u>maximo</u>, otroMaximo, numero)", "maximo", maximo, "El máximo introducido no es un número."); }

	else if( comprobarVariable(numero, "number") != true )
	{ this.error("regla3Porciento(maximo, otroMaximo, <u>numero</u>)", "numero", numero, "El numero introducido no es un número."); }

	else if( comprobarVariable(otroMaximo, "number") != true )
	{ this.error("regla3Porciento(maximo, <u>otroMaximo</u>, numero)", "otroMaximo", otroMaximo, "El otro máximo introducido no es un número."); }

	else{ return numero * otroMaximo / maximo; }
};

activarDesactivar = function( modificar )
{
	if( modificar.attr("mostrar") == "true" ){
		modificar.hide(450)
			.attr("mostrar", false);
	} else {
		modificar.show(450)
			.attr("mostrar", true);
	}
};

activarDesactivar_Forzar = function( modificar, boleano )
{
	if( !comprobarVariable(boleano, "boolean") ) {
		error("activarDesactivar_Forzar(modificar, <u>boleano</u>>)",
			"boleano", boleano,
			"El valor debe ser de tipo boolean true/false.");}

	if( boleano ){
		modificar.show()
			.attr("mostrar", true);
	} else {
		modificar.hide()
			.attr("mostrar", false);
	}
};

alinearImagen = function(tagImagen){
	alinearImagen_Horizontal(tagImagen);
	alinearImagen_Vertical(tagImagen);
};
alinearImagen_Horizontal = function(tagImagen){
	var anchoImagen = tagImagen.outerWidth();
	var anchoPadre = tagImagen.parent().width();

	// Imagen más pequeña que el padre pequeña
	if( anchoPadre > anchoImagen ){
		var margenH = ((anchoPadre - anchoImagen) /2);

		tagImagen.css("margin-left", margenH +"px");
		tagImagen.css("margin-right", margenH +"px");
	}
};
alinearImagen_Vertical = function(tagImagen){
	var altoImagen = tagImagen.height();
	var altoPadre = tagImagen.parent().height();

	// Imagen más pequeña que el padre pequeña
	if( altoPadre > altoImagen ){
		var margenV = ((altoPadre - altoImagen) /2);

		tagImagen.css("margin-top", margenV +"px");
		tagImagen.css("margin-bottom", margenV +"px");
	}
};

/** Datos de Versiones

►	Versión: 2.3.1
	• Mejorada la "interfaz" del documento.

►	Versión: 2.3
	• Metodos creados:
		· alinearImagen.
		· alinearImagen_Horizontal.
		· alinearImagen_Vertical.

◄	Versión: 2.2
	• Metodos creados:
		· activarDesactivar.
		· activarDesactivar_Forzar.

◄	Versión: 2.1
	• Control de errores.
	• Eliminada lafución error(param1, param2):
	No se pueden tener 2 con diferentes parametros

◄	Versión: 2.0
	• Control de errores.
	• añadidas las funciónes:
		1. imprimirArray
		2. error version reducida
		3. regla3 y regla3Porciento
		4. Nuevo gif de carga: Ahora solo es necesario activar y usar el metodo
	(ya se incluye el CSS y HTML necesarios)
	• Añadida la funcionalidad de Array a la función comprobarVariable
*/