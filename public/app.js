console.log("I'm running in the browser!");

const factButton = document.getElementsByClassName('change-fact')[0];

function onClick() {
  console.log('tehe');
}

factButton.addEventListener('click', onClick);
