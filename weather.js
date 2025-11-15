/**
 * My simple YAGNI current weather tracking CLI
 *
 * @author Tegar Wijaya Kusuma
 * @date 15 November 2025
 */

const API_KEY = Bun.env.API_KEY;

// We need the name of the city to pinpoint the location.
// Apparently prompt() is a browser API, not a standard Node.js/Bun CLI pattern. Copilot said.
// So I'll be using Bun.argv instead of prompt
let cityName = Bun.argv[2];

if (!cityName) {
  console.log("Error: Please provide a city name.");
  console.log("Usage: bun weather.js [city-name]");
  process.exit(1);
}

if (!API_KEY) {
  console.log("Error: Please provide the API key!");
  process.exit(1);
}

// Passed the value of city name that the user entered previously-
// -and fetch a response.
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
);

// This is just so that the user couldn't fucking pass null as value.
if (!response.ok) {
  if (response.status === 404) {
    console.log(`Error: City ${cityName} not found.`);
    console.log("Check the spelling and try again.");
  } else if (response.status === 401) {
    console.log("Error: Invalid API Key");
    console.log("Check your API.");
  } else {
    console.log(`Error: API returned status ${response.status}`);
  }
  process.exit(1);
}

const data = await response.json();

// Initialize it once for reference.
// const writeToJson = fs.writeFileSync(
//   "weather.json",
//   JSON.stringify(data, null, 2)
// );

// Show user what they wanted.
// I was thinking of adding the icon since I have the API for it ready.
// But, we're working in a CLI so no icon for now.
console.log(`\n${cityName} weather:`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Temperature: ${data.main.temp.toFixed(2)}°C`);
console.log(`Feels Like: ${data.main.feels_like.toFixed(2)}°C`);
console.log(`Condition: ${data.weather[0].main}`);
console.log(`Humidity: ${data.main.humidity}%`);
console.log(`Wind Speed: ${data.wind.speed} km/h`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
