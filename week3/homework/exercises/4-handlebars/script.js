/**
 * 4. Fun with Handlebars
 *
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 *
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */
const handlebars = require('handlebars');
const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];
function getRandomElement(array) {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

const card = '{{subject}} is great to {{punchline}}';
const template = handlebars.compile(card);
function drawCard() {
  const cardData = {
    subject: getRandomElement(subjects),
    punchline: getRandomElement(punchlines),
  };
  const result = template(cardData);
  console.log(result);
}

drawCard();
