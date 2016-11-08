function Rectangulo(base, altura){
//╔═════  ATRIBUTOS  ═════╗
	this.lado1		= parseInt(base);
	this.lado2		= parseInt(altura);

//╔═════  GET | SET  ═════╗
	this.getLado1 = function(){
		return parseInt(this.lado1);
	}
	this.getLado2 = function(){
		return parseInt(this.lado2);
	}
	
//╔═════  METODOS  ═════╗
	this.area = function(){
		var areaR =  this.getLado1() * this.getLado2();
		return "Area: "+ areaR;
	}
	
	this.perimetro = function(){
		var perimetro = this.getLado1() *2 + this.getLado2() *2;
		return "Perimetro: "+ perimetro;
	}
}