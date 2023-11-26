// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

// 1 sätt
/* function capitalizeWords(arr) {
  return arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

console.log(capitalizeWords(["apple", "banana", "cherry"])); // Skulle ge ['Apple', 'Banana', 'Cherry']
 */

// 2 sätt
function capitalizeWords(arr) {
  let capitalizedWords = [];
  arr.forEach((word) => {
    let capitalizedWord =
      word[0].toUpperCase() + word.substring(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  });
  return capitalizedWords;
}

console.log(capitalizeWords(["apple", "banana", "cherry"])); // Skulle ge ["Apple", "Banana", "Cherry"]
