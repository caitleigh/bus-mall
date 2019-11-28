'use strict';

//Global Variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');
var picArray = [];

//display images 



//constructor funciton for products
function Product (src, name) {
  this.src = '../img/${src}.jpg';
  this.title = name;
  this.alt = name;

  picArray.push(this);

}

//Random number function from MDN.
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
  var index = randomIndex(picArray.length);
  console.log (index);

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

generateImages();


createOnPageLoad();

console.table(picArray);

console.log (generateImages());


