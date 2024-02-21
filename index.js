// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const writtenCards = [];

function writeCards(names, type) {
    for (let i = 0; i < names.length; i++) {
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return writtenCards;
};

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(count){
    while (count >= 0){
    console.log(count--);
    }
}

countDown(10);

