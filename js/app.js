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
        console.log(value)
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
            <div class="form-content__grid ">
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
            <div class="form-content__grid ">
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
        }
        return html;
    }
    let radioButtons = document.querySelectorAll('.search-form__option');
    let container = document.querySelector('.form-content');
    console.log(radioButtons)
    radioButtons.forEach(radio => {
        radio.addEventListener("click", () => {
            console.log("wyszlo")
            let result = renderForm(radio.value);
            container.innerHTML = result;
        })
    })
}

//start 

setMenuHeight();
textAnimation(2000);
changeForm();

window.addEventListener("resize", () => {
    setMenuHeight();
})