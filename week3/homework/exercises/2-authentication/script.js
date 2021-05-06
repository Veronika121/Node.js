/**
 * 2. Authentication
 *
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
const fetch = require('node-fetch');
async function printBooks() {
  try {
    const fetchResponse = await fetch(
      'https://restapiabasicauthe-sandbox.mxapps.io/api/books',
      {
        headers: { Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==' },
      },
    );
    const objWithBooks = await fetchResponse.json();
    console.log(objWithBooks);
  } catch (err) {
    console.log('Error: ', err);
  }
}

printBooks();
