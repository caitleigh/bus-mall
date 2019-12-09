'use strict';

//Global Variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');
var productOptions = document.getElementById('product-options');
var picArrayContainers = [picOne, picTwo, picThree];
var maxCount = 25;
var picArray = [];
var picDupeArray = [];
var picNames = [];
var picViews = [];
var picClicks = [];

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

//function to generate images

function generateImages() {
  var currentImages = [];
  for (var i = 0; i <picArrayContainers.length; i++) {
    var currentRandoIndex = randomIndex(picArray.length);

    while (currentImages.includes(currentRandoIndex) || picDupeArray.includes(currentRandoIndex)) {
      currentRandoIndex = randomIndex(picArray.length);
    }
    currentImages.push(currentRandoIndex);

    picArrayContainers[i].src = picArray[currentRandoIndex].src;
    picArrayContainers[i].title = picArray[currentRandoIndex].title;
    picArrayContainers[i].alt = picArray[currentRandoIndex].alt;
    picArray[currentRandoIndex].viewed++;
  }
  picDupeArray = currentImages;
}

// Function that pushes click, views, and names into arrays to be used in chart
function dataInArrays () {
  for (var i = 0; i < picArray.length; i++) {
    picNames.push(picArray[i].title);
    picViews.push(picArray[i].viewed);
    picClicks.push(picArray[i].clicked);
  }
}
//Event listener that allows user to click on preferred product

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

  } else {
    var stringPicArr = JSON.stringify(picArray);
    localStorage.setItem('picArr', stringPicArr);

    productOptions.removeEventListener('click', handleClick);
    hide(productOptions);
    dataInArrays ();
    makeChart();
    console.log('voting complete');
  }

}

// function show(elem) {
//   elem.style.display = 'block';
// }

function hide(elem) {
  elem.style.display = 'none';
}

var ctx = document.getElementById('myChart').getContext('2d');

function makeChart(){

  var chart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: picNames,
      datasets: [{
        label: 'Item Views',
        backgroundColor: '',
        borderColor: 'rgb(255, 99, 132)',
        data: picViews,
      },
      {
        label: 'Times Clicked',
        backgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgb(255, 99, 132)',
        data: picClicks,
      }]
    },

    // Configuration options go here
    options: {
    }
  });
}

function pageRefresh () {
  if (localStorage.getItem('picArr')) {
    var getPicArr = localStorage.getItem('picArr');
    var parsedPicArr = JSON.parse(getPicArr);
    picArray = parsedPicArr;
  }
}
function createOnPageLoad() {

  if (picArray.length === 0){
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
  pageRefresh();
}

createOnPageLoad();
productOptions.addEventListener('click', handleClick);

generateImages();

// console.table(picArray);
