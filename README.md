# WEEK 1: WEATHER API CLI

# MONTH 1: JAVASCRIPT & TYPESCRIPT WITH BUN

# DAY 7 - 8 (15 - 16 NOVEMBER 2025)

## BUILT

Built a simple weather API CLI tracking using [OpenWeatherAPI](https://openweathermap.org/)

## STRUGGLE

1. I didn't really struggle that much in this project because besides from refactoring to get the JSON response ready, the code isn't really that demanding.
2. I already cover them all in previous project so I just open my old project and thanks to the _CSV-Parser_ that I remember how to pass JSON and write it into an existing file.
3. Oh, right. At first I struggled to connect the variable to the API url.
4. I struggled to store the JSON into a file but I just open my old project as I explained earlier.
5. I didn't really struggled with the structure again because I check it one by it, it's embarrassing to admit but it definitely works.
6. If you don't know what checking one by one means, I'm referring to you printing the array one by one to get to the exact object/keys or value that you want.
7. Struggled to pass the API fetch to the data const due to TypeScript's type annotation.
8. That's it.

## REALIZATION

1. I didn't use `.map()` at all in this project because the JSON payload was simply predictable and structured already.
2. Fetching an API isn't really that terrifying than I thought it'd be.
3. Saving the response into a JSON also isn't that difficult.
4. I fucking solved these in one day.
5. TypeScript's `interface` was easy to understand, I can define what I want to define.

## DESIGN & FLOW

Again, no design and flow because it's not needed and that I was just struggling nailing the correct API response and call anyway.

## TIME

Apparently I've spent **3 hours 37 mins** in this project.

## NEXT PROJECT

- I intend to deepen my knowledge by solving a challenge first, before moving unto the next project.
- I'm starting to deal with TS from now on, so best to understand it just like `.map()`

## HONORARY MENTION

There's really no one worth mentioning so I'll skip. Ah yeah, kudos to **[Bun](https://bun.com/)** for helping me with this project.

## KEY TAKEAWAYS

- `return` doesn't exit the program, it exit the function so don't use it unless you know what you're doing.
- Use `process.exit(1);` instead because it exit the program.
- You already know to use `const` if you know you won't reassign it twice.
  - Use `camelCase` for a variables that you might reassign or local.
  - Use `SCREAMING_SNAKE_CASE` for variable/constant that never change like your `API_KEY`.
- You can use `Bun.argv[2];` for a cleaner standard CLI arguments rather than `prompt` because its a **browser API** and not really its territory.
- If you're passing a variable that might be shown in the CLI. It's best to make it pretty.

  - ```javascript
    // User types: london
    // Display: London

    const displayName = data.name; // API returns proper capitalization
    console.log(`\n${displayName} Weather:`);
    ```

- You do not need to define the entire, 100-line "shipping manifest" if you're not using all of it.
- I should be more careful with type annotation for my variables from now on.
- Since I'm now dealing with TS, which is static type.

---

<div align=center>

_Tegar Wijaya Kusuma - Backend Engineer_

**[My Profile](https://github.com/tgr-wjya)** | **[My Website](https://tgr-wjya.github.io/)**

_15 - 16 November 2025_

_My Journey To Mastering JavaScript/TypeScript_

**[<- Previous: CSV Parser](https://github.com/tgr-wjya/csv-parser)** | **[Next: Weather API CLI ->](https://github.com/tgr-wjya/weather-cli)**

</div>
