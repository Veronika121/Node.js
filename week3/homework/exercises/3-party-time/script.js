/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

async function makeReservation() {
  try {
    const fetch = require('node-fetch');
    const myBody = { name: 'Veronika', numberOfPeople: 3 };
    const fetchResponse = await fetch(
      'https://reservation100-sandbox.mxapps.io/api/reservations',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(myBody),
      },
    );
    const objWithResponse = await fetchResponse.json();
    console.log(objWithResponse);
  } catch (err) {
    console.log('Error: ', err);
  }
}

makeReservation();
