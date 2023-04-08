
//Side Men
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

// // scroll to left or right//





// 
// heartIcons.addEventListener('click',backgroundFill);

const wishList = document.querySelector('#wish-list');
const heartIcons = document.querySelectorAll('.heart-icon');

for(let i = 0; i < heartIcons.length; i++){
  const heartIcon = heartIcons[i]; 
  function backgroundFill (){
      heartIcon.style.fill = "red";
    }
  heartIcon.addEventListener('click', backgroundFill);
  const heartCount = heartIcon.length;
  console.log(heartCount);
}



// for (let i = 0; i < heartIcons.lenghth; i++) {
//   const heartIcon = heartIcons[i];
//   console.log(heartIcon);
//   // const heartCount = heartIcon.length;
//   // console.log(heartCount);
// }
