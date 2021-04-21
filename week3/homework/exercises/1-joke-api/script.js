/**
 * 1. Chuck Norris programs do not accept input
 *
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console.
 * Make use of `async/await` and `try/catch`
 *
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 *
 */

async function printChuckNorrisJoke() {
  try {
    const fetch = require('node-fetch');
    const fetchResponse = await fetch('http://api.icndb.com/jokes/random');
    const objWithJoke = await fetchResponse.json();
    const joke = objWithJoke.value.joke;
    return joke;
  } catch (err) {
    console.log('Oops:', err);
  }
}

printChuckNorrisJoke();
