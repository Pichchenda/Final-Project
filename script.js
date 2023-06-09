// Result display

const resultContainer = document.getElementById('result-container');
const  submit= document.getElementById('submit');
const resultClose = document.getElementById('result-close');

function resultAppears (){
  resultContainer.classList.add('show-result');  
}

submit.addEventListener('click',resultAppears);

function resultDisappears (){
  resultContainer.classList.remove('show-result');
}

resultClose.addEventListener('click', resultDisappears);



// Wishlist 

const wishListCount = document.querySelector('#wish-list-count');
const heartIcons = document.querySelectorAll('.heart-icon');

for(let i = 0; i < heartIcons.length; i++){
  let heartIcon = heartIcons[i]; 

  function updateWishList (){

    if (!heartIcon.style.fill || heartIcon.style.fill === "none"  ) {
      heartIcon.style.fill = "red";
      increment();
    } else {
      heartIcon.style.fill = "none";
      decrement();
    }
  }

  heartIcon.addEventListener('click', updateWishList);

}

let list = 0;
function increment(){
  list += 1;
  let counter = wishListCount;
  counter.textContent = list;
}

function decrement(){
  list -= 1
  let counter = wishListCount;
  counter.textContent = list;
}


// Star Rating

const faStars = document.querySelectorAll('.fa-star');

for (let i = 0; i < faStars.length; i++){
  const faStar = faStars [i];

  function colorChange (){
    if (faStar.style.color === "black" ||!faStar.style.color ){
      faStar.style.color = "orange";
    } else {
      faStar.style.color = "black";
    }
    
  }
  faStar.addEventListener('click', colorChange);
}


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


// Mid Year Sales - Slide Show

const prevBtn =  document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const pageScreen = document.querySelector('#page-screen');

function nextSlide() {
  const currentSrc = pageScreen.getAttribute('src');
  if(currentSrc === './img/Mid Year Sales.jpeg' || currentSrc === './img/mid-year-sales 1.jpeg'){
    pageScreen.src = './img/mid-year-sales 2.jpg';
  } else if (currentSrc === './img/mid-year-sales 2.jpg'){
    pageScreen.src = './img/mid-year-sales 3.jpg';
  } else if(currentSrc === './img/mid-year-sales 3.jpg'){
    pageScreen.src = './img/mid-year-sales 4.jpg';
  } else {
    pageScreen.src = './img/mid-year-sales 1.jpeg';
  }
}
nextBtn.addEventListener('click', nextSlide);

function prevSlide (){
  const currentSrc = pageScreen.getAttribute('src');
  if(currentSrc === './img/mid-year-sales 4.jpg'){
   pageScreen.src = './img/mid-year-sales 3.jpg';
  } else if(currentSrc === './img/mid-year-sales 3.jpg'){
    pageScreen.src = './img/mid-year-sales 2.jpg';
  } else if (currentSrc === './img/mid-year-sales 2.jpg'){
    pageScreen.src = './img/mid-year-sales 1.jpeg';
  } else {
    pageScreen.src = './img/mid-year-sales 4.jpg';
  }
}

prevBtn.addEventListener('click', prevSlide );


// JS Dom - Sales

const sales = [
  {
      "source" : "./img/Sales Clothing.jpeg", 
      "detail1": "Clothes",
      "detail2": "Shop Now"
  },
  {
      "source": "./img/Sales Toy.jpeg",
      "detail1": "Toys",
      "detail2":"Shop Now"
  },
  {
      "source":"./img/Sales Accessories.jpeg"
      ,"detail1":"Accessories",
      "detail2":"Shop Now"
  }
];

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

const items = [
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

function createResultElement(item){
  const product = document.createElement('img');
  product.src = item.source;
  return product;
}

function searchProducts(event){
  
  event.preventDefault();
  const search = searchInput.value.trim();
  
  if (!search) {
    return;
  }
  
  searchResults.innerHTML= " ";
  const results = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  if(results.length > 0){
    for(let i = 0; i < results.length; i++){
      const item = results[i];
      const resultElement = createResultElement(item);
      searchResults.append(resultElement); 
    }
  } else {
    searchResults.innerHTML = '<p>Not Found</p>';
  } 
  return;
  searchInput.value = "";
}

searchForm.addEventListener('submit', searchProducts); 




// Pop up chat message
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const chatForm = document.querySelector('#chatForm');

function openForm() {
  chatForm.style.display = "block";
}

function closeForm() {
  chatForm.style.display = "none";
}

openBtn.addEventListener('click', openForm);
closeBtn.addEventListener('click', closeForm);


// Scroll To Top 

const toTop = document.querySelector('.to-top');

window.onscroll = function scrollScreen(){
  if(document.documentElement.scrollTop > 20){
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

function topFunction(){
  document.documentElement.scrollTop = 0;
}

toTop.addEventListener('click', topFunction);


