//Nota: Práctica 9 ejercicio 2
function miFuncion(practica)
{
	// x.0. num cuenta
	// x.1. nomCli
	// x.2. saldo
	clientes = new Array();
	var i=0;
	var salir = false;
	
	do{
		// Número de cuenta
		clientes[i] = new Array();
		clientes[i][0] = prompt("Cliente Nº"+ i +":\nNúmero de cuenta.\n(numero negativo para salir)", "011010");
		
		// Clientes con numero de cuenta positiva
		if( clientes[i][0] >= 0 ){
		
			// Nombre del cliente
			clientes[i][1] = prompt("Cliente Nº"+ i +":\nNombre del cliente.", "Anonimo");
			
			// Saldo del cliente
			clientes[i][2] = parseInt(prompt("Cliente "+ clientes[i][1] +":\nSaldo actual del cliente.", 1));
			
			if( clientes[i][2] > 0 ){
				// Acreedor
				clientes[i][3] = "acreedor";
			} else if( clientes[i][2] == 0 ){
				// Nulo
				clientes[i][3] = "nulo";
			} else {
				// Deudor
				clientes[i][3] = "deudor";
			}
		} else {
			clientes.pop();
			salir = true;
		}
		
		i++;
		
		//salir: valor negativo en numCuenta
	}while(salir != true);
	
	// Imprimir los datos del "banco"
	datosBanco(clientes);
	
	document.write("<h2>Clientes</h2>");
	// imprimir valores
	for( var j=0 ; j<clientes.length ; j++ ){
		imprimirCliente(clientes[j]);
	}
	
}

function datosBanco(clientes){
	document.write("<h2>Banco</h2>");
	// Suma total de los saldos acreedores
	var sumaAcreedores = 0;
	for( var i=0 ; i<clientes.length ; i++ ){
		if( clientes[i][3] == "acreedor" ){
			sumaAcreedores = sumaAcreedores + clientes[i][2];
		}
	}
	
	// Imprimir resultados
	document.write("<p style='margin-bottom: 10px;'>");
	document.write(TAB +"Suma total de los acreedores: "+ sumaAcreedores);
	document.write("</p>");
	
}
	// x.0. num cuenta
	// x.1. nomCli
	// x.2. saldo
function imprimirCliente(arrayCliente){
	document.write("<p style='margin-bottom: 10px;'>");
		document.write("<b>"+ arrayCliente[1] +"</b>");
		document.write("<br/>"+ TAB +"Nº cuenta: "+ arrayCliente[0]);
		document.write("<br/>"+ TAB +"Saldo actual: "+ arrayCliente[2] +"€");
		document.write("<br/>"+ TAB +"Estado: <em class='"+ arrayCliente[3] +"'>"+ arrayCliente[3] +"</em>");
	document.write("</p>");
}