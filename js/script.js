const btnPlaces = document.querySelector("#btn-places");
const btnClose = document.querySelector(".close > span");
let boxMenu;

eventListeners();


function eventListeners() {
   btnPlaces.addEventListener('click', showMenu);
   btnClose.addEventListener('click', hiddenMenu);

}

function showMenu(e) {
    boxMenu = e.target.nextElementSibling;
    boxMenu.style.visibility="visible";
    boxMenu.style.left = '0px';
}

function hiddenMenu() {
    boxMenu.style.left = '-380px';

    setTimeout(() => {
        boxMenu.style.visibility = 'hidden';
    }, 1000);
}