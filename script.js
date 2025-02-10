// Get references for buttons
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

let yesButtonSize = 16;

noButton.addEventListener('click', function(){
  yesButtonSize += yesButtonSize;
  yesButton.style.fontSize = `${yesButtonSize}px`;

  const currentPadding = parseInt(window.getComputedStyle(yesButton).padding);
  yesButton.style.padding = `${currentPadding + 2}px ${currentPadding + 6}px`;

  alert('You better try again, this is no joke! This is life or death for someone!');

});

yesButton.addEventListener('click', function(){
  alert('I fucking knew it, lets do this!! 💜');
});