const nodemon = require("nodemon");

function insereParametros() {
    var cafe = 50;
    var agua = 30;
    var cha = cafe + agua;
    return cha;
  }
  console.log(insereParametros());

//   function (a, b) {
//     return a + b;
//   }

var morango = 5;
var uva = 10;
var melancia = 15;
var manga = 7;

function frutadin(frutas, dinehiro){
    var compras = Math.floor(dinehiro/frutas);
    console.log("Você pode comprar "+ compras +" frutas desse tipo")
}
console.log(frutadin(morango,21));

function inverte(nome){
    return nome.split('').reverse('').join('');   
}
console.log(inverte("bruna"));

function jogoPi(qnt,pi){
    for (let i = 1; i <= qnt; i++) {
        if (i % pi === 0) {
            console.log("PI");
        } else {
            console.log(i);
        }
  }
}
console.log(jogoPi(9,3));