// Get references for buttons
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const heading = document.querySelector('h1');
const wrapper = document.querySelector('.wrapper');

let yesButtonSize = 16;

noButton.addEventListener('click', function(){
  yesButtonSize += yesButtonSize;
  yesButton.style.fontSize = `${yesButtonSize}px`;

  const currentPadding = parseInt(window.getComputedStyle(yesButton).padding);
  yesButton.style.padding = `${currentPadding + 2}px ${currentPadding + 6}px`;

  heading.innerHTML = 'You may try again, this is no joke!<br><span class="small-text">You dont want to make the lovely boy cry, do you?</span>'

  if(!document.getElementById('valentine-img')){
    const img = document.createElement('img');
    img.src = 'cat.jpg';
    img.alt = "This is text";
    img.id = 'valentine-img';
    img.style.width = '200px';
    img.style.display = 'block';
    img.style.margin = '0 auto 20px';

    wrapper.prepend(img);
  }

});

yesButton.addEventListener('click', function(){
  heading.innerHTML = "I knew it, lets fucking do this! 💜"
  yesButton.style.fontSize = '0px';
  yesButton.style.padding = '0px 0px';
  noButton.style.fontSize = '0px';
  noButton.style.padding = '0px 0px';

  const existingImg = document.getElementById('valentine-img');
  if (existingImg){
    existingImg.remove();
  }

  if(!document.getElementById('valentine-img')){
    const img = document.createElement('img');
    img.src = 'frog.jpg';
    img.alt = "This is text";
    img.id = 'valentine-img';
    img.style.width = '200px';
    img.style.display = 'block';
    img.style.margin = '0 auto 20px';

    wrapper.prepend(img);
  }
});