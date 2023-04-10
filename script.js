
//Side Menu
function sideMenuAppears (){
  document.getElementById('side-menu').classList.add('show-menu');  
}

document.getElementById('menu-trigger').addEventListener('click',sideMenuAppears);


function sideMenuDisappears (){
   document.getElementById('side-menu').classList.remove('show-menu');
}

document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);

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
  if(currentSrc === 'img/Mid\ Year\ Sales.jpeg'){
    tvScreen.src === 'img/mid-year-sales 2.jpg'
  } else if (currentSrc === 'img/mid-year-sales 2.jpg'){
    tvScreen.src === 'img/mid-year-sales 3.jpg'
  } else {
    tvScreen.src === 'img/mid-year-sales 4.jpg'
  }
}
nextBtn.addEventListener('click', nextSlide);

function prevSlide (){
  const currentSrc = tvScreen.getAttribute('src');
  if(currentSrc === 'img/mid-year-sales 4.jpg'){
   tvScreen.src === 'img/mid-year-sales 3.jpg'
  } else if(currentSrc === './img/mid-year-sales 3.jpg'){
    tvScreen.src === 'img/mid-year-sales 2.jpg'
  } else {
    tvScreen === 'img/Mid\ Year\ Sales.jpeg'
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

// const wishList = document.querySelector('#wish-list');
// const heartIcons = document.querySelectorAll('.heart-icon');

// for(let i = 0; i < heartIcons.length; i++){
//   const heartIcon = heartIcons[i]; 
//   function backgroundFill (){
//       heartIcon.style.fill = "red";
//     }
//   heartIcon.addEventListener('click', backgroundFill);
//   wishList.textContent = heartIcon.length;
//   console.log(wishList);

// }


