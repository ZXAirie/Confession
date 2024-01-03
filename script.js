document.getElementById('yesButton').addEventListener('click', function() {
  var newDesign = document.getElementById('newDesign');
  newDesign.style.display = 'block';
});
document.getElementById('open-overlay1').addEventListener('click', function() {
  document.getElementById('overlay1').style.display = 'flex';
});

document.getElementById('overlay1-button').addEventListener('click', function() {
  document.getElementById('overlay1').style.display = 'none';
});

var currentPhotoIndex = 0;
var photos = document.getElementsByClassName('photo');

function moveButton() {
  photos[currentPhotoIndex].style.display = 'none';
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  photos[currentPhotoIndex].style.display = 'block';

  var button = document.getElementById("noButton");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var maxX = windowWidth - button.offsetWidth;
  var maxY = windowHeight - button.offsetHeight;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}

function enable() {
  var check = document.getElementById("check");
  var btn = document.getElementById("btn");
  if (check.checked) {
    btn.removeAttribute("disabled");
  }
}

document.getElementById("check").addEventListener("click", function() {
  if (this.checked) {
    this.disabled = true;
  }
});

function closeOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.classList.remove('active');
}

window.onload = function() {
  var overlay = document.getElementById('overlay');
  overlay.classList.add('active');
};

document.getElementById('yesButton').addEventListener('click', function() {
  var newDesign = document.getElementById('newDesign');
  newDesign.style.display = 'block';
  var photo = document.getElementById('photo1');
  photo.style.display = 'none';
  var noButton = document.getElementById('noButton');
  noButton.style.display = 'none';
});

document.getElementById('yesButton').addEventListener('click', function() {
  var newDesign = document.getElementById('newDesign');
  newDesign.style.display = 'block';
  var photo = document.getElementById('photo1');
  photo.style.display = 'none';
  var noButton = document.getElementById('noButton');
  noButton.style.position = 'static';
});

document.getElementById('yesButton').addEventListener('click', function() {
  var photos = document.getElementsByClassName('photo');
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.display = 'none';
  }
});

var buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.style.transition = 'all 0.3s ease';
});

function removeDuplicateButtons() {
  var buttonList = document.querySelectorAll('#yesButton');
  for (var i = 1; i < buttonList.length; i++) {
    buttonList[i].remove();
  }
}

document.getElementById('noButton').addEventListener('click', function() {
  var originalYesButton = document.getElementById('yesButton');
  var cloneYesButton = originalYesButton.cloneNode(true);
  var maxX = window.innerWidth - originalYesButton.offsetWidth;
  var maxY = window.innerHeight - originalYesButton.offsetHeight;
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);
  cloneYesButton.style.position = "absolute";
  cloneYesButton.style.left = randomX + "px";
  cloneYesButton.style.top = randomY + "px";
  cloneYesButton.addEventListener('click', function() {
    originalYesButton.style.display = 'initial';
    cloneYesButton.remove();
    removeDuplicateButtons();
    var newDesign = document.getElementById('newDesign');
    newDesign.style.display = 'block';
    for (var i = 0; i < 200; i++) {
      var heart = document.createElement('img');
      heart.setAttribute('src', 'heart.png');
      heart.style.width = '50px';
      heart.style.position = 'absolute';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = '0';
      document.body.appendChild(heart);
      animateHeart(heart);
    }
  });
  cloneYesButton.style.fontWeight = originalYesButton.style.fontWeight;
  cloneYesButton.style.backgroundColor = originalYesButton.style.backgroundColor;
  cloneYesButton.style.padding = originalYesButton.style.padding;
  cloneYesButton.style.borderRadius = originalYesButton.style.borderRadius;
  cloneYesButton.style.cursor = originalYesButton.style.cursor;

  cloneYesButton.addEventListener('click', function() {
    var newDesign = document.getElementById('newDesign');
    newDesign.style.display = 'block';
  });

  cloneYesButton.addEventListener('click', function() {
    var newDesign = document.getElementById('newDesign');
    newDesign.style.display = 'block';
    var originalNoButton = document.getElementById('noButton');
    originalNoButton.remove();
    var ButtonPhotoContainer = document.getElementById('ButtonPhotoContainer');
    if (ButtonPhotoContainer) {
      ButtonPhotoContainer.remove();
    }
    var cloneYesButton = document.getElementById('cloneYesButton');
    if (cloneYesButton) {
      cloneYesButton.remove();
    }
    var chanceText = document.getElementById('chanceText');
    if (chanceText) {
      chanceText.remove();
    }
    yesButton.remove();
  });
  document.body.appendChild(cloneYesButton);
});

document.getElementById('yesButton').addEventListener('click', function() {
  for (var i = 0; i < 200; i++) {
    var heart = document.createElement('img');
    heart.setAttribute('src', 'heart.png');
    heart.style.width = '50px';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '0';
    document.body.appendChild(heart);
    animateHeart(heart);
  }
});

function animateHeart(heart) {
  var animation = heart.animate([
    { top: '0' },
    { top: '100vh' }
  ], {
    duration: Math.random() * 3000 + 2000,
    iterations: 1,
    fill: 'forwards'
  });
  animation.onfinish = function() {
    heart.remove();
  };
}

document.getElementById('yesButton').addEventListener('click', function() {
  var originalYesButton = document.getElementById('yesButton');
  var chanceText = document.getElementById('chanceText');
  if (originalYesButton) {
    originalYesButton.remove();
  }
  if (chanceText) {
    chanceText.remove();
  }
});

document.getElementById('yesButton').addEventListener('click', function() {
  var buttonList = document.querySelectorAll('#yesButton');
  for (var i = 1; i < buttonList.length; i++) {
    buttonList[i].remove();
  }
  var firstYesButton = document.getElementById('yesButton');
  firstYesButton.remove();
});

