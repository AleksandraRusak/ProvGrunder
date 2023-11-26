// removeDuplicates
// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

// 1 sätt
/* function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 4, 4, 5])); // Skulle ge [1, 2, 3, 4, 5]
 */

// 2 sätt
function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 4, 4, 5])); // Skulle ge [1, 2, 3, 4, 5]
