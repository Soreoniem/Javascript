/*
	Problema 1
		• Obtener el lado de un cuadrado.
		• Mostrar el perímetro del mismo.
		
	Problema 2
		• Ingresar 4 números.
		• Calcular:
			· Suma de los 2 primeros.
			· El producto del 3º y 4º.
		
	Problema 3
		• Ingresar 4 números.
			· Mostrar la suma y el producto.
		
	Problema 4
		• Pedir precio de un artículo.
		• Pedir la cantidad.
		• Mostrar al cliente lo que debe abonar.
*/
function miFuncion(){
	problema1();
	problema2();
	problema3();
	problema4();
}

function problema4(){
	imprimir("<h2>Problema 4</h2>");
	var preProducto	= parseInt(prompt("• Problema 4 [1/2]\nPrécio del producto:", nuevoAleatorio(1, 20)));
	var canProducto	= parseInt(prompt("• Problema 4 [2/2]\nCantidad del producto:", nuevoAleatorio(1, 7)));
	imprimir("<h3>Precio</h3>"+ preProducto +"€");
	imprimir("<h3>Cantidad</h3>"+ canProducto);
	imprimir("<h3>Precio total</h3>"+ (preProducto * canProducto) +"€");
}

function problema3(){
	imprimir("<h2>Problema 3</h2>");
	var num1 = parseInt( prompt("• Problema 3 [1/4]\nNúmero 1", nuevoAleatorio(4, 44)) );
	var num2 = parseInt( prompt("• Problema 3 [2/4]\nNúmero 2", (num1 + nuevoAleatorio(3, 33))) );
	var num3 = parseInt( prompt("• Problema 3 [3/4]\nNúmero 3", (num2 + nuevoAleatorio(2, 22))) );
	var num4 = parseInt( prompt("• Problema 3 [4/4]\nNúmero 4", (num3 + nuevoAleatorio(1, 11))) );
	
	imprimir("<h3>La suma de los 4 números</h3>");
	imprimir(num1 +" + "+ num2 +" + "+ num3 +" + "+ num4 +" = "+ (num1 + num2 + num3 + num4));
	imprimir("<h3>El producto de los 4 números</h3>");
	imprimir(num1 +" * "+ num2 +" * "+ num3 +" * "+ num4 +" = "+ (num1 * num2 * num3 * num4));
}

function problema2(){
	imprimir("<h2>Problema 2</h2>");
	var num1 = parseInt( prompt("• Problema 2 [1/4]"
		+"\nNúmero 1", nuevoAleatorio(4, 44)) );
	
	// • Suma de los 2 primeros
	var num2 = parseInt( prompt("• Problema 2 [2/4]"
		+"\nNúmero 2", (num1 + nuevoAleatorio(3, 33))) );
	
	imprimir("<h3>Suma de numero "+ num1 +" y "+ num2 +"</h3>"+ (num1 +num2));
	
	var num3 = parseInt( prompt("• Problema 2 [3/4]"
		+"\nNúmero 3", nuevoAleatorio(2, 22)) );
	
	// • Producto de 3 y 4
	var num4 = parseInt( prompt("• Problema 2 [4/4]"
		+"\nNúmero 4", (num3 * nuevoAleatorio(1, 11))) );
	
	imprimir("<h3>El producto de "+ num3 +" y "+ num4 +"</h3>"+ (num3 *num4));
}

function problema1(){
	imprimir("<h2>Problema 1</h2>");
	var lado	= parseInt( prompt("• Problema 1"
		+"\nCalcular perímetro"
		+"\nLado del cuadrado:", nuevoAleatorio(3, 10)) );
		
	imprimir("Perímetro del cuadrado: "+ lado *4);
}