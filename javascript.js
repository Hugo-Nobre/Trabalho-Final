/*
API JS que vai ler JSON
*/
$.getJSON("json.json", function(json){


class soma {
	   constructor (Local, viagem){
	   	this.loc = Local;
	   	this.viag = viagem;

	   }
	   get valor(){
	   	return this.loc + this.viag;
	   }
};

	//praia transportes

let somaPC = new soma(json.férias[0].valor, json.transporte[0].valor);
let somaPA = new soma(json.férias[0].valor, json.transporte[1].valor);
let somaPV = new soma(json.férias[0].valor, json.transporte[2].valor);

	//ilha transportes

let somaIC = new soma(json.férias[1].valor, json.transporte[0].valor);
let somaIA = new soma(json.férias[1].valor, json.transporte[1].valor);
let somaIV = new soma(json.férias[1].valor, json.transporte[2].valor);

	//campo e transportes

let somaCC = new soma(json.férias[2].valor, json.transporte[0].valor);
let somaCA = new soma(json.férias[2].valor, json.transporte[1].valor);
let somaCV = new soma(json.férias[2].valor, json.transporte[2].valor);


document.getElementById("CA").innerHTML = somaCA.valor;
document.getElementById("CC").innerHTML = somaCC.valor;
document.getElementById("CV").innerHTML = somaCV.valor;

document.getElementById("PA").innerHTML = somaCA.valor;
document.getElementById("PC").innerHTML = somaCC.valor;
document.getElementById("PV").innerHTML = somaCV.valor;

document.getElementById("IA").innerHTML = somaCA.valor;
document.getElementById("IC").innerHTML = somaCC.valor;
document.getElementById("IV").innerHTML = somaCV.valor;






/*

console.log('PRAIA');

console.log(somaPC.valor);
console.log(somaPA.valor);
console.log(somaPV.valor);

console.log('ILHAS');

console.log(somaIC.valor);
console.log(somaIA.valor);
console.log(somaIV.valor);

console.log('CAMPO');

console.log(somaCC.valor);
console.log(somaCA.valor);
console.log(somaCV.valor);

*/

});



/*---------------------*/

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });