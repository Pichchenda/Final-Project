//Modal Close
// document.body.addEventListener('click', (event) => {
//   if (!event.target.closest('.modal') || event.target.closest('.modal-content')) {
//     return
//   }
//   modal.classList.remove('show');
// })





//Side Menu
const sideMenu = document.getElementById('side-menu');
const menuTrigger = document.getElementById('menu-trigger');
const menuClose = document.getElementById('menu-close');

function sideMenuAppears (){
  sideMenu.classList.add('show-menu');  
}

menuTrigger.addEventListener('click',sideMenuAppears);

function sideMenuDisappears (){
  sideMenu.classList.remove('show-menu');
}

menuClose.addEventListener('click', sideMenuDisappears);


//Right Header Hover
const rhh1 = document.getElementById('rhh1');
const rhh2 = document.getElementById('rhh2');
const rhh3 = document.getElementById('rhh3');
const icon1 = document.getElementById('icon-1');
const icon2 = document.getElementById('icon-2');
const icon3 = document.getElementById('icon-3');
const rhh1Close = document.getElementById('rhh1-close');
const rhh2Close = document.getElementById('rhh2-close');
const rhh3Close = document.getElementById('rhh3-close');

function displayText1() {
  rhh1.classList.add('display');
  rhh2.classList.remove('display');
  rhh3.classList.remove('display');
}

function displayText2() {
  rhh1.classList.remove('display');
  rhh2.classList.add('display');
  rhh3.classList.remove('display');
}

function displayText3() {
  rhh1.classList.remove('display');
  rhh2.classList.remove('display');
  rhh3.classList.add('display');
}


function hideText() {
  rhh1.classList.remove('display'); 
  rhh2.classList.remove('display'); 
  rhh3.classList.remove('display');

}

icon1.addEventListener('click', displayText1);
icon2.addEventListener('click', displayText2);
icon3.addEventListener('click', displayText3);


rhh1Close.addEventListener('click', hideText);
rhh2Close.addEventListener('click', hideText);
rhh3Close.addEventListener('click', hideText);



// Mid Year Sales - Slide Show

const prevBtn =  document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const tvScreen = document.querySelector('#tv-screen');
const slideShows = document.querySelectorAll('.slide-show');

function nextSlide() {
  const currentSrc = tvScreen.getAttribute('src');
  if(currentSrc === './img/Mid Year Sales.jpeg'){
    tvScreen.src = './img/mid-year-sales 2.jpg';
  } else if (currentSrc === './img/mid-year-sales 2.jpg'){
    tvScreen.src = './img/mid-year-sales 3.jpg';
  } else {
    tvScreen.src = 'img/mid-year-sales 4.jpg';
  } 
  
}
nextBtn.addEventListener('click', nextSlide);

function prevSlide (){
  const currentSrc = tvScreen.getAttribute('src');
  if(currentSrc === "img/mid-year-sales 4.jpg"){
   tvScreen.src = "./img/mid-year-sales 3.jpg";
  } else if(currentSrc === "./img/mid-year-sales 3.jpg"){
    tvScreen.src = "img/mid-year-sales 2.jpg";
  } else {
    tvScreen = "./img/Mid Year Sales.jpeg";
  }
}

prevBtn.addEventListener('click', prevSlide );

for (let i = 0; i < slideShows.length; i++) {
  const slideShow = slideShows[i];
  const imgSrc = slideShow.getAttribute('src');
  
  function changeSlide(){
    tvScreen.src = imgSrc;
  }
  
  slideShow.addEventListener('click', changeSlide);
}
// Wishlist 

const wishListCount = document.querySelector('#wish-list-count');
const heartIcons = document.querySelectorAll('.heart-icon');

for(let i = 0; i < heartIcons.length; i++){
  let heartIcon = heartIcons[i]; 
  function backgroundFill (color){
  heartIcon = heartIcon.style.fill = color;
  increment();
}
  // heartIcon.addEventListener('click', backgroundFill("red"));
  heartIcon.addEventListener('click', function checkStyleIcon(e) {
    // let getSvg = document.getElementsByClassName('.heart-icon')[i].style.fill;
    // console.log("fdshjfkdshfkdslhf" + heartIcons[i].getAttribute('fill'))
    if (heartIcons[i].getAttribute('fill') === "none") {
      backgroundFill("red");
      console.log(e)
    }
})
}


function addToWishList(){
  //if hearticon background fill === 'none',
  // backgroundFill = 'red';
  //increment(); 
}

var globalCounter = 0;
function increment(){
  globalCounter += 1;
  let counter = wishListCount;
  counter.textContent = globalCounter;
}



// JS Dom - Sales

const salesContainer= document.querySelector('#sales-container');


for(let i = 0; i < sales.length; i++){
  const sale = sales[i];
  const div = document.createElement('div');
  div.classList.add('auskids-sales-indi');
  

  const img = document.createElement('img')
  img.src = sale.source;
  img.classList.add('sales-image');
  div.append(img);

  const detail1 = document.createElement('p');
  detail1.textContent = sale.detail1;
  detail1.classList.add('sales-detail')
  div.append(detail1);

  
  const detail2 = document.createElement('button');
  detail2.classList.add('shop-now-btn');
  detail2.textContent = sale.detail2;
  div.append(detail2);

  salesContainer.append(div);

}

// Search Products


let items = [
  {
    'name': '2pcs Girls Fashion Off Shoulder Tops+Bowknot Pants', 'source':'.img/search product 1.jpeg'
  }, 
  { 
    'name': 'Girl Tutu Dress', 'source': './img/search product 2.jpeg'
  }, 
  {
    'name': 'Baby Boy outfit Set', 'source' : './img/search product 3.jpeg'
  },
  {
    'name': 'Unisex Newborn Hooded Romper Jumpsuit','source' : './img/search product 4.jpeg'
  }, 
  {
    'name' : '2pcs Newborn Outfit Gift set', 'source': './img/search product 5.jpeg'
  }, 
  {
    'name' : 'Kid Pokemon School Bag', 'source' : './img/search product 6.jpeg'
  }, 
  {
    'name' : 'Unisex Mickey Mouse Travel Backpack', 'source': './img/search product 7.jpeg'
  },
  {
    'name' : 'Kids Love Heart Anti-UV Sunglasses', 'source' : './img/search product 8.jpeg'
  }, 
  {
    'name' : 'Kids Spiderman Watch', 'source' : './img/search product 9.jpeg'
  },
  {
    'name' : 'Kids Winter Jacket', 'source' : './img/search product 10.jpeg'
  }
];
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

function createResultElement(result){
  const product = document.createElement('img');
  product.src = result.imgSrc;
  return product;
}

function searchProducts(event){
  event.preventDefault();
  const search = searchInput.value.trim();
  if (search) {
    return;
  }
  // searchInput.value = "";
  // searchInput.focus();
  searchResults.innerHTML = "";
  const results = items;
  if(results){
    for(let i = 0; i < items.length; i++){
      const item = items[i];
      const resultElement = createResultElement(item);
      searchResults.append(resultElement); 
    }
  } else {
    searchResults.innerHTML = '<p>Not Found</p>';
  } 
}

searchForm.addEventListener('submit', searchProducts); 