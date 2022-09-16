'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // declaramos la variable decimal vacia en 0, declaramos la esctrutura for para iterar todos los elementos que hayan en (num) con .length y la variable i vaya pasando al otro elemento
  // decimal es igual a num[i]por dos y se eleva **(num.length-1 -i) en el .length ponemos -1 y -i, para que nos de el reverso. retornamos let.
  
  let decimal = 0;
  for (let i = 0; i < num.length; i++){
    decimal += +num[i] *2 **(num.length-1 -i);
    
  }
  return decimal;
 
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario =[];
  while (num>0) {
    let cociente = Math.floor(num/2);
    let resto = num%2;
    binario.unshift(resto);
    num = cociente;
  }
  return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}