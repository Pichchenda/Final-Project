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

//Dropdown Menu
const menu1 = document.getElementById('menu-1');
const menu2 = document.getElementById('menu-2');
const menu3 = document.getElementById('menu-3');
const menu4 = document.getElementById('menu-4');
const menu5 = document.getElementById('menu-5');
const menu1Btn = document.getElementById('menu-1-button');
const menu2Btn = document.getElementById('menu-2-button');
const menu3Btn = document.getElementById('menu-3-button');
const menu4Btn = document.getElementById('menu-4-button');
const menu5Btn = document.getElementById('menu-5-button');


function showMenu1() {
  menu1.classList.add('show');
  menu2.classList.remove('show');
  menu3.classList.remove('show');
  menu4.classList.remove('show');
  menu5.classList.remove('show');
}

function showMenu2() {
  menu1.classList.remove('show');
  menu2.classList.add('show');
  menu3.classList.remove('show');
  menu4.classList.remove('show');
  menu5.classList.remove('show');
}

function showMenu3() {
  menu1.classList.remove('show');
  menu2.classList.remove('show');
  menu3.classList.add('show');
  menu4.classList.remove('show');
  menu5.classList.remove('show');
}

function showMenu4() {
  menu1.classList.remove('show');
  menu2.classList.remove('show');
  menu3.classList.remove('show');
  menu4.classList.add('show');
  menu5.classList.remove('show');
}

function showMenu5() {
  menu1.classList.remove('show');
  menu2.classList.remove('show');
  menu3.classList.remove('show');
  menu4.classList.remove('show');
  menu5.classList.add('show');
}

function hideMenu() {
  menu1.classList.remove('show'); 
  menu2.classList.remove('show'); 
  menu3.classList.remove('show');
  menu4.classList.remove('show');
  menu5.classList.remove('show');
}

menu1Btn.addEventListener('mouseover', showMenu1);
menu2Btn.addEventListener('mouseover', showMenu2);
menu3Btn.addEventListener('mouseover',showMenu3);
menu4Btn.addEventListener('mouseover',showMenu4);
menu5Btn.addEventListener('mouseover',showMenu5);

menu1.addEventListener('mouseleave', hideMenu);
menu2.addEventListener('mouseleave', hideMenu);
menu3.addEventListener('mouseleave', hideMenu);
menu4.addEventListener('mouseleave', hideMenu);
menu5.addEventListener('mouseleave', hideMenu);




//Right Header Hover
const rhh1 = document.getElementById('rhh1');
const rhh2 = document.getElementById('rhh2');
const rhh3 = document.getElementById('rhh3');
const icon1 = document.getElementById('icon-1');
const icon2 = document.getElementById('icon-2');
const icon3 = document.getElementById('icon-3');

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

icon1.addEventListener('mouseover', displayText1);
icon2.addEventListener('mouseover', displayText2);
icon3.addEventListener('mouseover', displayText3);


rhh1.addEventListener('mouseleave', hideText);
rhh2.addEventListener('mouseleave', hideText);
rhh3.addEventListener('mouseleave', hideText);

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
  const heartIcon = heartIcons[i]; 
  function backgroundFill (){
    heartIcon.style.fill = "red";
    increment();
  }
  heartIcon.addEventListener('click', backgroundFill);

  
}
var globalCounter = 0;
function increment(){
  globalCounter += 1;
  let counter = wishListCount;
  counter.textContent = globalCounter;
}

  
  // wishListCount.textContent = heartIcons.length;



// wishListCount.addEventListener('event', addToWishlist);

console.log(sales);
const saleIndi = document.querySelector('#sales-indi');
for(let i = 0; i < sales.length; i++){
  const sale = sales[i];
  const div = document.createElement('div');
  div.classList.add('sales-image-container');

  // const img = document.createElement('img')
  // img.src = `${sales.source}`;
  // img.classList.add('sales-image');
  // div.append(img);

  const detail1 = document.createElement('p');
  detail1.textContent =`${sales.detail1}`;
  console.log(detail1);

}