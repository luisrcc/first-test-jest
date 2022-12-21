const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
  let valueInYen = valueInDollar * 106.5;

  return valueInYen;
}

const fromYenToPound = function(valueInYen){
  let valueInPound = valueInYen * 159.8;

  return valueInPound;
}

const sum = (a, b)=>{
   return a + b
}

console.log(sum(7,3));

module.exports ={ sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };