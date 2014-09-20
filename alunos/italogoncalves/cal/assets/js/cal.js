var calculadora = {};
calculadora.nomeAluno = "italo goncalves flores";
calculadora.numeros = [1,2,3,4,5,6,7,8,9,0];
calculadora.operacoes = ['+' , '=' , '*' , '/'];

calculadora.obterValorVisor = function(){
	var visor = document.querySelector("#visor");
	return visor.innerHTML;
}
calculadora.escreverNoVisor = function(valor){
	var visor = document.querySelector("#visor");
	visor.innerHTML = valor;
}
calculadora.clicarEmNumero = function(numero){
	var valorVisor = calculadora.obterValorVisor();
	
	var novoValor = valorVisor + numero;
	calculadora.escreverNoVisor = novoValor;
}

window.onload =  function(){
	console.log('Calculadora carregada...');
	console.log('Aluno' , calculadora.nomeAluno);
	console.log('Numeros', calculadora.numeros)
	console.log('Operacoes', calculadora.operacoes)
	var i;
	var megaBomba = document.querySelector(".numero");
	var teclasNumero = document.querySelectorAll(".numero");
	for(i=0;i<calculadora.numeros.length;i++){	
		var novaTecla = document.createElement("div");
		novaTecla.setAttribute("class" , "btNum");
		novaTecla.innerHTML = calculadora.numeros[i];
		megaBomba.appendChild(novaTecla);
		novaTecla.addEventListener("click" , function(event){
			calculadora.clicarEmNumero(event.srcElement.innerHTML);
		});
	}

}