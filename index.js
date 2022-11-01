// console.log('family is the basic unit');

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor (apples,mangoes){
   const applePieces = cutFruitPieces(apples);
  const mangoPieces = cutFruitPieces(mangoes);

    const juice =`juice with ${applePieces} pieces of apples and ${mangoPieces} pieces mangoes.`;
    return juice;
}
console.log(fruitProcessor(2,3));