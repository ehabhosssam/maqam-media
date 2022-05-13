//////////////////////////////////////start 3d////////////////////////////////////////////////////////

let media = document.querySelector(".video-media")
let container = document.querySelector(".video-holder")
let videotitle = document.querySelector(".video-title")
let btn = document.querySelector(".video-button")
var elem = document.getElementById("myVideo");


container.addEventListener("mousemove", (e) => {
    let xAxis = (media.offsetWidth / 2 + e.pageX * 4) / 55;
    let yAxis = (media.offsetHeight / 2 - e.pageY) / 20;
    media.style.transform = `rotateY(${xAxis }deg) rotateX(${yAxis }deg)`;


});


container.addEventListener("mouseenter", (e) => {
    media.style.transition = "none";

    videotitle.style.transform = "translateZ(320px)";
});

container.addEventListener("mouseleave", (e) => {
    media.style.transition = "all 0.9s ease";
    media.style.transform = `rotateY(0deg) rotateX(0deg)`;
    videotitle.style.transform = "translateZ(320px)";
});


let mouseCursor = document.querySelector(".video-button");
let imagesHover = document.querySelectorAll(".about-images");
let textHover = document.querySelector(".about-info-p");
let homeImageHover = document.querySelector(".img-home");
let navLinks = document.querySelectorAll(".navbar-nav li");
let titleText = document.querySelector(".video-title");



document.addEventListener("backbutton", function() {
    document.exitFullscreen();
});



//mouse move detector


//video resize
// let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
elem.muted = true;
container.addEventListener(touchEvent, openFullscreen);
media.addEventListener(touchEvent, openFullscreen);
media.addEventListener("touchstart", openFullscreen);



function openFullscreen() {
    elem.currentTime = 0;
    elem.muted = false;
    titleText.classList.toggle("hidden")
    container.classList.toggle("widthfull")
    media.classList.toggle("widthfull");

    if (container.classList.contains('widthfull')) {
        container.requestFullscreen();
        document.querySelector('.border-layer').classList.add('movies-layer-hidden')


    } else {
        document.exitFullscreen();
        document.querySelector('.border-layer').classList.remove('movies-layer-hidden')
    }


    //cursor pointer
    if (mouseCursor.innerHTML == "press") {
        mouseCursor.innerHTML = "close";

        container.addEventListener("mousemove", (e) => {
            media.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });


    } else {

        mouseCursor.innerHTML = "press";
        elem.currentTime = 2;
        container.addEventListener("mousemove", (e) => {
            let xAxis = (media.offsetWidth / 2 + e.pageX * 4) / 55;
            let yAxis = (media.offsetHeight / 2 - e.pageY) / 20;
            media.style.transform = `rotateY(${xAxis }deg) rotateX(${yAxis }deg)`;

        });
        elem.muted = true;
    }
}