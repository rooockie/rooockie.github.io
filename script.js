// Get references for buttons
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const heading = document.querySelector('h1');

let yesButtonSize = 16;

noButton.addEventListener('click', function(){
  yesButtonSize += yesButtonSize;
  yesButton.style.fontSize = `${yesButtonSize}px`;

  const currentPadding = parseInt(window.getComputedStyle(yesButton).padding);
  yesButton.style.padding = `${currentPadding + 2}px ${currentPadding + 6}px`;

  heading.textContent = "You may try again, this is no joke!\nYou dont want to make the lovely boy cry, do you?"

});

yesButton.addEventListener('click', function(){
  heading.textContent = "I knew it, lets fucking do this! 💜"
  yesButton.style.fontSize = '0px';
  yesButton.style.padding = '0px 0px';
  noButton.style.fontSize = '0px';
  noButton.style.padding = '0px 0px';
});