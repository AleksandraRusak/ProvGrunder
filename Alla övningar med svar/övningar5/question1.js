// calculateAverage
// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal

function calculateAverage(arr) {
  let sum = 0;
  arr.forEach((number) => {
    sum += number;
  });
  return sum / arr.length;
}
console.log(calculateAverage([10, 20, 30])); // Detta skulle ge resultatet (0+10+20+30)/3=60/3=20, vilket är det korrekta medelvärdet av talen i arrayen.
