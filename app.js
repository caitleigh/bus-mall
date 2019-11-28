'use strict';

//Global Variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');
var productOptions = document.getElementById('product-options');
var maxCount = 0;
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
  var index = randomIndex(picArray.length);
  picOne.src = picArray[index].src;
  picOne.title = picArray[index].title;
  picOne.alt = picArray[index].alt;
  picArray[index].viewed ++;

  while (index2 === index) {
    index2 = randomIndex(picArray.length);
  }

  var index2 = randomIndex(picArray.length);
  picTwo.src = picArray[index2].src;
  picTwo.title = picArray[index2].title;
  picTwo.alt = picArray[index2].alt;
  picArray[index2].viewed ++;


  while (index3 === index || index3 === index2) {
    index3 = randomIndex(picArray.length);
  }

  var index3 = randomIndex(picArray.length);
  picThree.src = picArray[index3].src;
  picThree.title = picArray[index3].title;
  picThree.alt = picArray[index3].alt;
  picArray[index3].viewed ++;


  console.log (index, index2, index3);
}

//add an event listener

function handleClick(event) {
  var vote = event.target.title;

  maxCount++;
  if (maxCount < 25) {
    for (var i = 0; i < picArray.length; i++) {
      if(vote === picArray[i].title) {
        picArray[i].clicked++;
      }
    }
    generateImages();
  }
  console.table(picArray);
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
