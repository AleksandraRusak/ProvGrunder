// 7.1 (3p) Hämta data med fetch från denna url: https://restcountries.com/v3.1/all
// Visa följande för varje land:
// Officiellt namn
// Valuta
// bild på flagga med tillhörande alt-text

// 7.2 (3p) Gör sidan responsive:
// I desktop-vy ska varje land visas i 3 kolumner.
// I mobil-vy ska varje land visas i en kolumn med 100% width.

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((countries) => {
    countries.forEach((country) => {
      // Skapa HTML-element för att visa landets information
      const countryDiv = document.createElement("div");
      countryDiv.innerHTML = `
        <h2>${country.name.official}</h2>
        <p>Valuta: ${Object.keys(country.currencies)[0]}</p>
        <img src="${country.flags.png}" alt="Flagga av ${
        country.name.official
      }">
      `;
      document.body.appendChild(countryDiv);
    });
  })
  .catch((error) => console.error("Error:", error));
