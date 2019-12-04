'use strict';

//Global Variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');
var productOptions = document.getElementById('product-options');
var results = document.getElementById('results');
var picArrayContainers = [picOne, picTwo, picThree];
var maxCount = 25;
var picArray = [];

//constructor funciton for products
function Product (src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.clicked = 0;
  this.viewed = 0;

  picArray.push(this);

}

//Random number function from MDN.
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
  var currentImages = [];
  for (var i = 0; i <picArrayContainers.length; i++) {
    var currentRandoIndex = randomIndex(picArray.length);
    while (currentImages.includes(currentRandoIndex)) {
      currentRandoIndex = randomIndex(picArray.length);
    }
    currentImages.push(currentRandoIndex);

    picArrayContainers[i].src = picArray[currentRandoIndex].src;
    picArrayContainers[i].title = picArray[currentRandoIndex].title;
    picArrayContainers[i].alt = picArray[currentRandoIndex].alt;
    picArray[currentRandoIndex].viewed++;
  }

  console.table(picArray);
}

//add an event listener

function handleClick(event) {
  maxCount--;
  if(maxCount !== 0) {
    var vote = event.target.title;
    for (var i = 0; i < picArray.length; i++) {
      if(vote === picArray[i].title) {
        picArray[i].clicked++;
      }
    }
    generateImages();
    console.table(picArray);
  } else {
    productOptions.removeEventListener('click', handleClick);
    voterResults();
    console.log('voting complete');
  }
}

// function show(elem) {
//   elem.style.display = 'block';
// }

function hide(elem) {
  elem.style.display = 'none';
}

function voterResults () {

  var ulEl = document.createElement('ul');

  for (var i = 0; i < picArray.length ; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${picArray[i].title}: ${picArray[i].clicked} clicked and ${picArray[i].viewed} views`;
    ulEl.appendChild(liEl);
  }
  results.appendChild(ulEl);
  hide (productOptions);
}


function createOnPageLoad() {
  new Product('bag', 'bag');
  new Product ('banana', 'banana');
  new Product ('bathroom', 'bathroom');
  new Product ('boots', 'boots');
  new Product ('breakfast', 'breakfast');
  new Product ('bubblegum', 'bubblegum');
  new Product ('chair', 'chair');
  new Product ('cthulhu', 'cthulhu');
  new Product ('dog-duck', 'dog duck');
  new Product ('dragon', 'dragon');
  new Product ('pen', 'pen');
  new Product ('pet-sweep', 'pet sweep');
  new Product ('scissors', 'scissors');
  new Product ('shark', 'shark');
  new Product ('sweep', 'sweep');
  new Product ('tauntaun', 'tauntaun');
  new Product ('unicorn', 'unicorn');
  new Product ('usb', 'usb');
  new Product ('water-can', 'water-can');
  new Product ('wine-glass','wine glass');
}


createOnPageLoad();
productOptions.addEventListener('click', handleClick);

generateImages();

console.table(picArray);



