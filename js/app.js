//global variables
let menu = document.querySelector('.menu-container'), navbar = document.querySelector('.navbar');
let textToAnimation = Array.from(document.querySelectorAll(".isHidden"))

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

function textAnimation(time = 1000, index = 0)
{
    let value = index;
    let previousElement = textToAnimation.find(el => el.classList.contains("active"))
    textToAnimation[value].classList.toggle("active");
    previousElement.classList.toggle("active");
    setTimeout(textAnimation, time, time, ++value < textToAnimation.length ? value : 0);
}

function changeForm()
{
    const renderForm = function(value)
    {
        let html;
        switch (value)
        {
            case "Hotels" : html = `<div class="form-content__container">
            <label class="form-content__label">Search for Hotels</label>
            <div class="form-content__input-box">
                <input type="text" class="form-content__input" placeholder="Search for Hotels">
            </div>
        </div>
        <div class="form-content__container">
            <label class="form-content__label">Check in</label>
            <div class="form-content__input-box">
                <input type="date" class="form-content__input" placeholder="MM//DD/YY" onfocus="(this.type='date')" onblur="(this.type='text')">
            </div>
        </div>
        <div class="form-content__container">
            <label class="form-content__label">Check out</label>
            <div class="form-content__input-box">
                <input type="text" class="form-content__input" placeholder="MM/DD/YY" onfocus="(this.type='date')" onblur="(this.type='text')">
            </div>
        </div>
        <div class="form-content__container">
            <div class="form-content__grid form-content__grid--hotels">
                <div class="form-content__element">
                    <label>Adults</label>
                    <input type="number">
                </div>
                <div class="form-content__element">
                    <label>Children</label>
                    <input type="number">
                </div>
                <div class="form-content__element">
                    <label>Rooms</label>
                    <input type="number">
                </div>
            </div>
        </div>
        <div class="form-content__container">
            <button type="submit" class="form-content__input form-content__input--submit"><i class="bi bi-search form-content__icon"></i>Search Now</button>
        </div>`
            break;
            case "Tours" : html = `<div class="form-content__container">
            <label class="form-content__label">Your destination</label>
            <div class="form-content__input-box">
                <input type="text" class="form-content__input" placeholder="Enter a destination">
            </div>
        </div>
        <div class="form-content__container">
            <label class="form-content__label">Travel date</label>
            <div class="form-content__input-box">
                <input type="date" class="form-content__input" placeholder="MM//DD/YY" onfocus="(this.type='date')" onblur="(this.type='text')">
            </div>
        </div>
        <div class="form-content__container">
            <label class="form-content__label">Return date</label>
            <div class="form-content__input-box">
                <input type="text" class="form-content__input" placeholder="MM/DD/YY" onfocus="(this.type='date')" onblur="(this.type='text')">
            </div>
        </div>
        <div class="form-content__container">
            <div class="form-content__grid form-content__grid--tours">
                <div class="form-content__element">
                    <label>Adults</label>
                    <input type="number">
                </div>
                <div class="form-content__element">
                    <label>Children</label>
                    <input type="number">
                </div>
            </div>
        </div>
        <div class="form-content__container">
            <button type="submit" class="form-content__input form-content__input--submit"><i class="bi bi-search form-content__icon"></i>Search Now</button>
        </div>`
            break;
        }
        return html;
    }
    let radioButtons = document.querySelectorAll('.search-form__option');
    let container = document.querySelector('.form-content');
    radioButtons.forEach(radio => {
        radio.addEventListener("click", () => {
            let result = renderForm(radio.value);
            container.innerHTML = result;
        })
    })
}

function chooseGallery()
{
    let buttons = Array.from(document.querySelectorAll(".our-destinations__button"));
    let galleries = Array.from(document.querySelectorAll(".our-destinations__gallery"));
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            let prevActiveButton = buttons.find(el => el.classList.contains("active"));
            prevActiveButton.classList.remove("active");
            button.classList.add("active");
            let prevActiveGallery = galleries.find(gallery => gallery.classList.contains("active"));
            prevActiveGallery.classList.remove("active");
            let valueOfAttribute = button.getAttribute("data-gallery");
            let appropriateGallery = galleries.find(gallery => gallery.getAttribute("data-gallery") === `${valueOfAttribute}`);
            appropriateGallery.classList.add("active");
        })
    })
}

//start 

setMenuHeight();
textAnimation(2000);
changeForm();
chooseGallery();


var swiper = new Swiper('.swiper', {
    autoHeight: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
  });

let swiper_html = document.querySelector(".swiper");
let swiper_container = document.querySelector(".swiper-container")
// swiper_html.style.height = swiper_container.height;
swiper_container.style.height = `${swiper_html.clientHeight}px`;

window.addEventListener("resize", () => {
    setMenuHeight();
})