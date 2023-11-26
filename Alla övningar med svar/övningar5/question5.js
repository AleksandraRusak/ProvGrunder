//5.  Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(
  findLongestWord(
    "Denna mening innehåller flera ord som kan vara långa till exempel hemförsäkring"
  )
); // Skulle ge "hemförsäkring"
