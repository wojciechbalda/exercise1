//global variables
let menu = document.querySelector('.menu-container'), navbar = document.querySelector('.navbar');


//functions

function setMenuHeight()
{
    if (window.innerWidth < 1024)
        menu.style.height = `calc(100vh - ${navbar.offsetHeight}px)`;
    else 
        menu.style.height = ``;
}

let dropdownMenus = document.querySelectorAll(".dropdown-menu-container");
dropdownMenus.forEach(element => {
    element.querySelector('a').addEventListener("click", () => element.classList.toggle('dropdown-menu-container--active'))
});

let hamburger = document.querySelector('.navbar__hamburger-button');
hamburger.addEventListener("click", function() 
{
    menu.classList.toggle('menu-container--active');
    this.classList.toggle('navbar__hamburger-button--active');
})


function resize()
{
    setMenuHeight();
}

//start 

setMenuHeight();

window.addEventListener("resize", () => {
    setMenuHeight();
})