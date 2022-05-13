// burger menu
var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
const burger = document.querySelector(".burger-wrapper");

burger.addEventListener("click", function (e) {
    this.classList.toggle('active');
})

var bgmenu1 = document.querySelector('.nav-items1');
var bgmenu2 = document.querySelector('.nav-items2');

var bgmenuBackGround = document.querySelector('.menu');

burger.addEventListener("click", function () {

    bgmenu1.classList.toggle('display');
    bgmenu2.classList.toggle('display');

    bgmenuBackGround.classList.toggle('body-opacity')
})
