console.log("I'm running in the browser!");

const factButton = document.getElementsByClassName('change-fact')[0];

const factArray = [
  'Ducks love to eat grapes!',
  'Courage the cowardly dog was initially based on a duck.',
  'The creators of spongebob squarepants are actually ducks.',
  'Ducks love to commit tax fraud.',
  'I love ducks.',
  'Ducks can be very beautiful creatures.',
  'Ducks are covered in hydrophobic feathers.',
  'Ducks are birds.',
  'A baby duck is called a duckling.',
  'Some ducks are very colorful.',
];

function onClick() {
  console.log('tehe');
  const i = Math.floor(Math.random() * factArray.length);
  document.getElementsByClassName('duck-fact')[0].innerText = factArray[i];
}

factButton.addEventListener('click', onClick);
