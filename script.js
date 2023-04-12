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
function showMenu1() {
  document.getElementById('menu-1').classList.add('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
  document.getElementById('menu-5').classList.remove('show');
}

function showMenu2() {
  document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.add('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
  document.getElementById('menu-5').classList.remove('show');
}

function showMenu3() {
  document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.add('show');
  document.getElementById('menu-4').classList.remove('show');
  document.getElementById('menu-5').classList.remove('show');
}

function showMenu4() {
  document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.add('show');
  document.getElementById('menu-5').classList.remove('show');
}

function showMenu5() {
  document.getElementById('menu-1').classList.remove('show');
  document.getElementById('menu-2').classList.remove('show');
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
  document.getElementById('menu-5').classList.add('show');
}

function hideMenu() {
  document.getElementById('menu-1').classList.remove('show'); 
  document.getElementById('menu-2').classList.remove('show'); 
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
  document.getElementById('menu-5').classList.remove('show');
}

document.getElementById('menu-1-button').addEventListener('mouseover', showMenu1);
document.getElementById('menu-2-button').addEventListener('mouseover', showMenu2);
document.getElementById('menu-3-button').addEventListener('mouseover',showMenu3);
document.getElementById('menu-4-button').addEventListener('mouseover',showMenu4);
document.getElementById('menu-5-button').addEventListener('mouseover',showMenu5);

document.getElementById('menu-1').addEventListener('mouseleave', hideMenu);
document.getElementById('menu-2').addEventListener('mouseleave', hideMenu);
document.getElementById('menu-3').addEventListener('mouseleave', hideMenu);
document.getElementById('menu-4').addEventListener('mouseleave', hideMenu);
document.getElementById('menu-5').addEventListener('mouseleave', hideMenu);

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
  }
  heartIcon.addEventListener('click', backgroundFill);

  
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