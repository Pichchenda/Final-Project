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

// const rightBtn = document.querySelector('#channel-up');

// function myFunction(){
//   const element = document.getElementById('myDIV');
//   element.scrollRight = 50;
// }
// rightBtn.addEventListener('onclick',myFunction);