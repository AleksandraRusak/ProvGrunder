//6.  Skriv en funktion, generateRandomNumbers, som tar
// två parametrar: min och max. Funktionen ska generera
// och returnera en array med 10 slumpmässiga heltal mellan min och max.
// tips Math.random() ger en slumpad siffra mellan 0 och 1

function generateRandomNumbers(min, max) {
  let randomNumbers = [];

  for (let i = 0; i < 10; i++) {
    let randomNumb = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumb);
  }

  return randomNumbers;
}
console.log(generateRandomNumbers(1, 80)); // Skulle ge en array med 10 slumpmässiga tal mellan 1 och 80
