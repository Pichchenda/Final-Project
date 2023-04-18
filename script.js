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

// New Arrivals 


// const newArrivals = [
//   {
//     "img1src" : "./img/New Arrivals 1.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Squirrel Crew Neck Jumper",
//     "price": "$39.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 2.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Pink Casual Summner Dress",
//     "price": "$29.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 3.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Girls High Top Casual Shoes",
//     "price": "$49.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 4.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Denim Jacket",
//     "price": "$39.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 5.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Super Mario Licence T-Shirt",
//     "price": "$14.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 6.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Rabbits Knit Jumper",
//     "price": "$39.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 7.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Baby Overalls Set",
//     "price": "$34.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 8.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Girl's Denim Dungaree Set",
//     "price": "$44.99",
//     "button" : "Shop Now",
//   },
//   {
//     "img1src" : "./img/New Arrivals 9.jpeg", 
//     "img2src" : "./heart-icon.svg",
//     "name": "Bunny Knit Jumper",
//     "price": "$24.99",
//     "button" : "Shop Now",
//   }
// ];


// const newArrivalsContainer = document.querySelector('#new-arrivals-container');


// for(let i = 0; i < newArrivals.length; i++){
  
//   const newArrival = newArrivals[i];
//   const div = document.createElement('div');
//   div.classList.add('auskids-new-arrivals-indi-container');

//   const img1 = document.createElement('img');
//   img1.classList.add('new-arrivals-image');
//   img1.src = newArrival.img1src;
//   div.append(img1);
   
//   const img2 = document.createElement('img');
//   img2.src = newArrival.img2src;
//   img2.classList.add('heart-icon');
//   div.append(img2);
    
//   const name = document.createElement('p');
//   name.textContent = newArrival.name;
//   div.append(name);

//   const price = document.createElement('p');
//   price.textContent = newArrival.price;
//   div.append(price);

//   const btn = document.createElement('button');
//   btn.classList.add('shop-now-btn');
//   btn.textContent = newArrival.button;
//   div.append(btn);

//   newArrivalsContainer.append(div);
//   console.log(newArrivalsContainer);

// }


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
  
  searchResults.innerHTML = "";
  const results = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  if(results){
    for(let i = 0; i < results.length; i++){
      const item = results[i];
      const resultElement = createResultElement(item);
      searchResults.append(resultElement); 
    }
  } else {
    searchResults.innerHTML = '<p>Not Found</p>';
  } 
  return;
}

searchForm.addEventListener('submit', searchProducts); 