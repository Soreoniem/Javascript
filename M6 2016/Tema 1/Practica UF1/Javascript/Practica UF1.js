// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	• 
*/
/*
	function pruebaOtraWeb(){
		location = "../Practica 17/Problema 5/Problema 5.html"
	}
// */

// TABLA
	var tablaTitulo		= "Horario";
	var tablaCabecera	= new Array("Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo");
	var tablaPieAncho	= 8;
	var tablaDatos		= new Array( tablaPieAncho -3 );
	
	/* variable tablaDatos
		Un ejemplo:
		tablaDatos[
			["Lunes",	[HORAS, MINUTOS, VALOR], [HORAS, MINUTOS, VALOR]],
			["Martes"	[HORAS, MINUTOS, VALOR]],
			["Miercoles"]
		]
	*/

// HORAS
	var horaInicial	= nuevoAleatorio(8, 11);
	var horaFinal	= 16;
	var horaTiempo	= nuevoAleatorio(25, 60);

function iniciar(){
	
	// Mostrar tabla con datos aleatorios
	
	var doc = document;
	var aleaHoraInicio = nuevoAleatorio(8, 13);
	doc.getElementById("confIniCajDato").innerHTML = aleaHoraInicio;
	
	var aleaHoraFinal;
	do{
		aleaHoraFinal = nuevoAleatorio(11, 21);
	} while( aleaHoraInicio >= aleaHoraFinal );
		
	doc.getElementById("confFinCajDato").innerHTML = aleaHoraFinal;
	
	doc.getElementById("confIntCajDato").innerHTML = nuevoAleatorio(24, 60);
	doc.getElementById("confSemCajDato").innerHTML = tablaCabecera[nuevoAleatorio(3, 7) +1];

	actualizarDatos();
	actualizarTamañoVentana();
}

function crearTablaDatos(){
	for( var i=0 ; i<tablaDatos.length ; i++ ){
		tablaDatos[i] = new Array();				// Cada fila será un array
		tablaDatos[i].push( tablaCabecera[i +1] );	// El primer dato es texto
		tablaDatos[i].push( new Array() );			// El resto son datos(horas, minutos, valor)
		
		//imprimirArray("Datos: "+ tablaCabecera[i +1], tablaDatos[i] );
	}
	//imprimirArray("tablaDatos", tablaDatos);
	//imprimirArray("tablaDatos[0]", tablaDatos[0]);
	//imprimirArray("tablaDatos[0][0]", tablaDatos[0][0]);
}

// Guarda los datos de la tabla (los que hayan puestos)
function guardarDatos(){
	
	crearTablaDatos();
	// obtener los TD de las tablas
	var TDs = document.getElementsByTagName("td");
	var horas, minutos, tdActual;
	
	for( var i=0, j=0 ; i<TDs.length ; i++, j++ ){
		tdActual = TDs[i];
		// Son horas
		if( tdActual.getAttribute("horas") != null ){
			horas = tdActual.getAttribute("horas");
			minutos = tdActual.getAttribute("minutos");
		}
		// No son horas
		if( tdActual.getAttribute("horas") == null ){
			
			// del 1(Lunes) al máximo
			// j = días de la semana: Si se pasa la variable vuelve a 1(Lunes)
			if( j > tablaPieAncho ){ j = 1; }
			
			// td → input → valor
			var valor = tdActual.firstChild.value;
			
			// palabra	= variable
			// Semanas	= j
			// Horas	= horas
			// minutos	= minutos
			// datos	= valor
			if( valor != "" ){// Contiene datos útiles
				
				// Recorre las semanas para introducir los datos
				for( var k=0 ; k<tablaDatos.length ; k++ ){
					
					//NOTA:	[k][0] Cero es "Lunes", "Martes", etc.
					//		[k][1] 1 son las array de datos
					// if( semana actual == semana de los datos )
					if( tablaCabecera[j] == tablaDatos[k][0] ){
						
						// Quedara: ["Lunes",[8, 34, "M8"]]
						tablaDatos[k].push( new Array( horas, minutos, valor ) );
					}
				}
			}
		}
	}
	// */
}

function actualizarDatos(objeto){
	if( ! comprobarVariable(objeto, "undefined") ){
		var doc			= document;
		var id			= objeto.getAttribute("id");
		var imagen		= objeto.children[0];
		var carpetaIMGs	= "./Imgs/";
		var flecha		= imagen.getAttribute("src").substr(7);
			flecha		= flecha.substr(0, (flecha.length -4));
		
		
		if( flecha != "oculto" ){
			
			// Inicial
			if( id == "confIniCajSubir" ){ horaInicial++; }
			if( id == "confIniCajBajar" ){ horaInicial--; }
			// Final
			if( id == "confFinCajSubir" ){ horaFinal++; }
			if( id == "confFinCajBajar" ){ horaFinal--; }
			// Semanas
			if( id == "confSemCajSubir" ){ tablaPieAncho++; }
			if( id == "confSemCajBajar" ){ tablaPieAncho--; }
			// Intervalo
			if( id == "confIntCajSubir" ){ horaTiempo++; }
			if( id == "confIntCajBajar" ){ horaTiempo--; }
		}
	}
	// Guardar datos de la tabla
	guardarDatos();
	
	// Hora inicial: Evita poner un -1
	if( horaInicial < 0 ){
		horaInicial = 0;
	}
	
	// Hora final: Solo puede poner de (1h a 24h)
	if( horaFinal < 1 ){
		horaFinal = 1;
	} else if( horaFinal > 24 ) {
		horaFinal = 24;
	}
	
	// Evita que hora Inicial y final tenga en mismo número
	if( horaInicial >= horaFinal ){
		horaFinal	= horaInicial;
		horaInicial	= horaFinal -1;
	}
	
	// Hora inicial y final correcto
	document.getElementById("confIniCajDato").innerHTML = horaInicial;
	document.getElementById("confFinCajDato").innerHTML = horaFinal;
	
	// El intervalo de horas no podrá ser menor a 1
	if( horaTiempo < 1 ){
		horaTiempo = 1;
	}
	document.getElementById("confIntCajDato").innerHTML	= horaTiempo;
	
	// El ancho de la tabla no podrá ser inferior a 2 (Hora y Lunes)
	if( tablaPieAncho < 2 ){
		tablaPieAncho = 2;
	
	// Y tampoco superior a 8 (Hora + semanas)
	} else if( tablaPieAncho > 8 ){
		tablaPieAncho = 8;
	}
	document.getElementById("confSemCajDato").innerHTML = tablaCabecera[tablaPieAncho -1];
	actualizarTabla()
	visualizarFlechas();
}

function mouseEnterFlecha(objeto){
	//var doc			= document;
	var id			= objeto.getAttribute("id");
	var imagen		= objeto.children[0];
	var carpetaIMGs	= "./Imgs/";
	var flecha		= imagen.getAttribute("src").substr(7);
		flecha		= flecha.substr(0, (flecha.length -4));
	
	if( flecha != "oculto" ){
		imagen.setAttribute("src", carpetaIMGs +"flecha hover.png");
	}
}
function mouseSalirFlecha(objeto){
	//var doc			= document;
	var id			= objeto.getAttribute("id");
	var imagen		= objeto.children[0];
	var carpetaIMGs	= "./Imgs/";
	var flecha		= imagen.getAttribute("src").substr(7);
		flecha		= flecha.substr(0, (flecha.length -4));
	
	if( flecha != "oculto" ){
		imagen.setAttribute("src", carpetaIMGs +"flecha.png");
	}
}
function mousePresionarFlecha(objeto){
	//var doc			= document;
	var id			= objeto.getAttribute("id");
	var imagen		= objeto.children[0];
	var carpetaIMGs	= "./Imgs/";
	var flecha		= imagen.getAttribute("src").substr(7);
		flecha		= flecha.substr(0, (flecha.length -4));
	
	if( flecha == "flecha hover" ){
		imagen.setAttribute("src", carpetaIMGs +"flecha active.png");
	}
}

// Oculta o muestra las flechas que pueden usarse
function visualizarFlechas(){
	var doc = document;
	var carpetaIMGs = "./Imgs/";
	
	//• Preparar array de datos
	var ocultarFlechas = [
		["confIniCaj", false, false],
		["confFinCaj", false, false],
		["confIntCaj", false, false],
		["confSemCaj", false, false]
		];
	
	//• Preguntas (if)
	
	// Hora Inicial
	if( horaInicial +1 == horaFinal ){
		ocultarFlechas[0][1] = true;
	}
	if( horaInicial == 0 ){
		ocultarFlechas[0][2] = true;
	}
	
	// Hora Final
	if( horaFinal == 24 ){
		ocultarFlechas[1][1] = true;
	}
	if( horaFinal == 1 ){
		ocultarFlechas[1][2] = true;
	}
	
	// Hora Intervalo
	// No hay condición en subir
	if( horaTiempo == 1 ){
		ocultarFlechas[2][2] = true;
	}
	
	// Semanas
	if( tablaPieAncho == 8 ){
		ocultarFlechas[3][1] = true;
	}
	if( tablaPieAncho == 2 ){
		ocultarFlechas[3][2] = true;
	}
	
	var subirBajar = [null, "Subir", "Bajar"];
	// Recorre las cajas
	for( var i=0 ; i<ocultarFlechas.length ; i++ ){
		
		// Recorre subir o bajar
		for( var j=1 ; j<=2 ; j++ ){
			
			// Llama al id
			//	.childen[0] es la imagen
			// cambio el atributo
			var imagen = doc.getElementById(ocultarFlechas[i][0] + subirBajar[j]).children[0];
			
			if( ocultarFlechas[i][j] ){
				imagen.setAttribute("src", carpetaIMGs +"oculto.png");
			
			} else {
				if( imagen.getAttribute("src") == carpetaIMGs +"flecha active.png" ){
					imagen.setAttribute("src", carpetaIMGs +"flecha hover.png");
				} else {
					imagen.setAttribute("src", carpetaIMGs +"flecha.png");
				}
			}
		}
	}
}

function actualizarTabla(){
	
	var tablaDiv = document.getElementById("tablaDiv");
	var infoTabla = "";
// Tabla
	infoTabla += "<table>";
// Tabla - Caption
		infoTabla += "<caption>"+ tablaTitulo +"</caption>";
		
// Tabla - Cabecera
		infoTabla += "<thead>";
			infoTabla += "<tr class=\"bordeExterior\">";
				for( var i=0 ; i<tablaPieAncho ; i++ ){
					infoTabla += "<th>";
						infoTabla += tablaCabecera[i];
					infoTabla += "</th>";
				}
			infoTabla += "</tr>";
		infoTabla += "</thead>";

// Tabla - Cuerpo
	infoTabla += "<tbody>";
		
		var horas		= horaInicial;
		var minutos		= 0;
		var ceroExtra	= true;
		var salir		= false
		//*
		do{
			if( horas >= horaFinal ){
				if( minutos > 0 ){
					salir = true;
				}
			}
			if( salir == false ){
					
				infoTabla += "<tr class=\"bordeExterior\">";
					
					// Horas
					infoTabla += "<td horas=\""+ horas +"\" minutos=\""+ minutos +"\">";
					
						// Cero extra
						if( minutos > 9 ){
							ceroExtra = false;
						} else {
							ceroExtra = true;
						}
					
						// Añadiendo datos
						if( ceroExtra ){
							infoTabla += horas +":0"+ minutos;
						} else {
							infoTabla += horas +":"+ minutos;
						}
						
						// Calculando siguiente hora
						// 38 + 38 = 76
						minutos += horaTiempo;
						if( minutos >= 60 ){
							horas++;
							minutos -= 60
						}
					
					// fin td horas
					infoTabla += "</td>";
					
					// Resto tabla
					// Nuevo: Se añadiran los datos anteriores
					for( var j=0 ; j<(tablaPieAncho -1) ; j++ ){
						
						infoTabla += "<td>";
						var infoInput = "";
						//* Si coincide las semanas
						for( var k=0 ; k<tablaDatos.length ; k++ ){
							
							// Coinciden las semanas
							if( tablaDatos[k][0] == tablaCabecera[j +1] ){
								
								// Recorrer las arrays de la semana coincidente
								for( var l=1 ; l<tablaDatos[k].length ; l++ ){
									
									// Si esa semana tiene datos
									//LOOL: Ya tienes acceso a los datos y al input: compara las horas
									if( tablaDatos[k][l] != "" ){
										// Encontrado datos para esa semana
										
										/*
											8:25	-20 (8:20) +5
											8:50	-11 (9:01) +14
											9:15	-14 (9:04) +11
											
											8:40	-15 (8:55) +10	9:05
										*/
										//LOOL: mejorar formula de horas y minutos con respecto al actual
										if( horas >= parseInt(tablaDatos[k][l][0]) ){
											
											// minutos		= horaTiempo
											// minDatos		= tablaDatos[k][l][1]
											// minAlante	= minutos
											// res1			= calculo
											// res2			= distanciaTrasera
											
											// Suma los minutos: distancia entre horas y  los minutos de la tabla de datos
											var calculo				= parseInt(tablaDatos[k][l][1]) + parseInt(horaTiempo);
											
											// Calcula la distancia en minutos entre la hora de la tabla de datos hasta la hora más próxima por debajo
											var distanciaTrasera	= calculo - (parseInt(minutos) + (60 * (parseInt(horas) - parseInt(tablaDatos[k][l][0]))));
											
											// Calcula la distancia en minutos entre la hora de la tabla de datos hasta la hora más próxima por encima
											var distanciaDelantera	= parseInt(horaTiempo) - distanciaTrasera;
											
											// Observa cual es la distancia más corta
											//NOTA: Solo se establece los datos si se añaden hacia atrás (unos minutos más atrás) debido a que si se añaden a la tabla hacia alante y
											// los datos llegan al tope, es posible que ese se elimine
											if( distanciaTrasera <= distanciaDelantera ){
												infoInput = tablaDatos[k][l][2];
												tablaDatos[k].splice(l, 1);
											}
											
											//  8:05	-103(60 +43) (9:48) +104(60 +44)	11:32
												// minutos = 207
												
												// minDatos	+ minutos	= res1
												// 48		+ 207		= 255
												
												// res1	- minAlante	= res2
												// 255		- (32 +120)	= (103)
												
												// minutos	- res2	=
												// 207		- 103	= (104)	distanciaDelantera
												
												// Gana distancia 15 (ir a 9:05)
												/*
												alert("Datos: ("+ tablaDatos[k][l][0] +":"+ tablaDatos[k][l][1] +")"
													+"\nHora: ("+ horas +":"+ minutos +")");
												*/
										}
									}
								}
							}
						}
						// */
							infoTabla += "<input type=\"text\" value=\""+ infoInput +"\"/>";
						infoTabla += "</td>";
					}
				infoTabla += "</tr>";
			// 8 <= 13 && 38 <0
			}
		} while(salir == false);
		// */
	
	infoTabla += "</tbody>";

// Tabla - Pie
	infoTabla += "<tfoot>";
		infoTabla += "<tr>";
			infoTabla += "<th colspan=\""+ tablaPieAncho +"\">Fin de clases</th>";
		infoTabla += "</tr>";
	infoTabla += "</tfoot>";
	infoTabla += "</table>";

	tablaDiv.innerHTML = infoTabla;
}

// Actualiza el tamaño de la ventana poniendo el atributo en el body
	// con las siglas de bootstrap
function actualizarTamañoVentana(){
	// Variables
	var cuerpo			= document.body;
	var ventanaAncho	= parseInt(window.innerWidth);
	
	if( ventanaAncho < 768 ){
		cuerpo.setAttribute("tamaño", "xs");
	
	} else if( ventanaAncho < 992 ){
		cuerpo.setAttribute("tamaño", "sm");
	
	} else if( ventanaAncho < 1200 ){
		cuerpo.setAttribute("tamaño", "md");
	
	} else {
		cuerpo.setAttribute("tamaño", "lg");
	}
}