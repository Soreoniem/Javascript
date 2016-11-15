/*
	Descripción de la práctica
	• Obtener una fecha(día, mes, año).
	• Y compruebe que la fecha sea correcta
*/
var meses		= new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var mesesING	= new Array("January", "February", "March", "April", "May", "June","July","August","September","October","November","December");
var diasSemana	= new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

function miFuncion(){
	var f1	= obtenerFecha();
	
	
	var f2;
	do{
		f2	= obtenerFecha()
		if( f2 >= f1 ){
			alert("La segunda fecha debe ser inferior a la primera"
				+"\n1ª fecha: "+ f1.getDate() +" de "+ meses[f1.getMonth()] +" de "+ f1.getFullYear()
				+"\n2ª fecha: "+ f2.getDate() +" de "+ meses[f2.getMonth()] +" de "+ f2.getFullYear());
		}
	}while(f2 >= f1)

	imprimir("<h2>Fechas</h2>");
	imprimir("1ª Fecha: "+ diasSemana[f1.getDay()] +", "+ f1.getDate() +" de "+ meses[f1.getMonth()] +" de "+ f1.getFullYear());
	imprimir("<br/>2ª Fecha: "+ diasSemana[f2.getDay()] +", "+ f2.getDate() +" de "+ meses[f2.getMonth()] +" de "+ f2.getFullYear());
	
	imprimir("<h2>[1.1] 1ª fecha: Semana</h2>");
	imprimir("La fecha 1 cayó en la semana: <b>"+ diasSemana[f1.getDay()] +"</b>");
	// Comprobar que la fecha sea posterior a la primera
	
	imprimir("<h2>[2.1] 2ª fecha: Semana</h2>");
	imprimir("La 2ª fecha cayó en la semana: <b>"+ diasSemana[f2.getDay()] +"</b>");
	
	imprimir("<h2>[3] Distancia entre fechas</h2>");
	imprimir("Los días transcurridos son: <b>"+ distanciaEntreFechas(f1, f2) +"</b>");
}

function distanciaEntreFechas(f1, f2){
	var f1 = f1.getDate() +"/"+ (f1.getMonth() +1) +"/"+ f1.getFullYear();
	var f2 = f2.getDate() +"/"+ (f2.getMonth() +1) +"/"+ f2.getFullYear();
	var aFecha1 = f1.split('/');
	var aFecha2 = f2.split('/');
	
	var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1]-1, aFecha1[0]);
	var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1]-1, aFecha2[0]);
	
	var diferencia = fFecha2 - fFecha1;
	var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
	return dias * -1;
}

function obtenerFecha(){
	// Datos
	
	var dia, mes, año, f, mensaje="", fechaIncorrecta = false;
	
	//Bucle para crear una buena fecha
	do{
		// preguntas
		dia	= parseInt(prompt(mensaje +"Introduce una fecha [1/3]\nDía:", nuevoAleatorio(1, 31)));
		mes	= parseInt(prompt("Introduce una fecha [2/3]\nMes (número):", nuevoAleatorio(1, 12)));
		año	= parseInt(prompt("Introduce una fecha [3/3]\nAño (número):", nuevoAleatorio(1992, 2017)));
		
		// fecha
		f	= new Date(mesesING[mes -1] +" "+ dia +", "+ año +" 01:15:00");
		
		fechaIncorrecta	= false;
		
		// Comprobar: fecha
		if( f == "Invalid Date" ){
			fechaIncorrecta = true;
			mensaje = "► La fecha introducida no es correcta\n";}
		
		// Comprobar: Días 
		else if( f.getDate() != dia ){
			fechaIncorrecta	= true;
			mensaje = "► El día introducido no es correcto.\n";}
		
		// Comprobar: Meses
		else if( mes > 12 || mes < 1 ){
			fechaIncorrecta	= true;
			mensaje = "► El Mes introducido no es correcto.\n";}
	}while(fechaIncorrecta);

	
	// devuelve la fecha correcta
	return f;
}