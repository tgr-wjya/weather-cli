/**
 * The refactored version of my YAGNI current weather tracking CLI.
 *
 * @author Tegar Wijaya Kusuma
 * @date 16 November 2025
 */

// Need the shipping manifest to retain my sanity.
interface WeatherResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

// We need the API_KEY to make our API fetch valid.
const API_KEY = Bun.env.API_KEY;

// Uses Copilot's previous suggestion of Bun.argv for CLI.
let cityName = Bun.argv[2];

// To ensure that we didn't pass null value to our API fetch.
if (!cityName) {
  console.log("Error: Please provide a valid city's name.");
  console.log("Usage: bun weather.ts [city-name]");
  process.exit(1);
}

// To ensure that I'm not dumb enough to forget the API Key.
if (!API_KEY) {
  console.log("Error: Don't forget your API_KEY.");
  process.exit(1);
}

// Finally fetch the API here.
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
);

// This is catch an error that the API might cause.
if (!response.ok) {
  if (response.status === 404) {
    console.log(`Error: ${cityName} not found.`);
    console.log("Check the spelling and try again.");
  } else if (response.status === 401) {
    console.log("Error: Invalid API Key.");
    console.log("Are you sure you have initialized your API Key?");
  } else {
    console.log(`Error: API returned status ${response.status}`);
  }
  process.exit(1);
}

// To ensure that TS doesn't complain about our interface annotation.
// So we're asserting its content as our interface.
const data = (await response.json()) as WeatherResponse;

// For proper capitalization if the user were to insert a lowercase city's name.
const displayName = data.name;

// this helped me a lot, really.
console.log(`\n${displayName} weather:`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Temperature: ${data.main.temp.toFixed(2)}°C`);
console.log(`Feels Like: ${data.main.feels_like.toFixed(2)}°C`);
console.log(`Condition: ${data.weather[0]?.main}`);
console.log(`Condition Description: ${data.weather[0]?.description}`);
console.log(`Humidity: ${data.main.humidity}%`);
console.log(`Wind Speed: ${data.wind.speed} m/s`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
