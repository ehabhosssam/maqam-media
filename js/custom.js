$(window).load(function() {
    $('.preloader').fadeOut(500);
});

$(window).load(function() {
    $('body').removeClass("preload");
});
let track = [{

        audio: document.querySelector(".music-audio1"),
        disk: document.querySelector(".music-disk1"),
        title: document.querySelector(".music-title1"),
    },
    {

        audio: document.querySelector(".music-audio2"),
        disk: document.querySelector(".music-disk2"),
        title: document.querySelector(".music-title2"),
    },
    {

        audio: document.querySelector(".music-audio3"),
        disk: document.querySelector(".music-disk3"),
        title: document.querySelector(".music-title3"),
    },
    {

        audio: document.querySelector(".music-audio4"),
        disk: document.querySelector(".music-disk4"),
        title: document.querySelector(".music-title4"),
    }, {

        audio: document.querySelector(".music-audio5"),
        disk: document.querySelector(".music-disk5"),
        title: document.querySelector(".music-title5"),
    },
    {

        audio: document.querySelector(".music-audio6"),
        disk: document.querySelector(".music-disk6"),
        title: document.querySelector(".music-title6"),
    },
    {

        audio: document.querySelector(".music-audio7"),
        disk: document.querySelector(".music-disk7"),
        title: document.querySelector(".music-title7"),
    },
    {

        audio: document.querySelector(".music-audio8"),
        disk: document.querySelector(".music-disk8"),
        title: document.querySelector(".music-title8"),
    },
    {

        audio: document.querySelector(".music-audio9"),
        disk: document.querySelector(".music-disk9"),
        title: document.querySelector(".music-title9"),
    },
    {

        audio: document.querySelector(".music-audio10"),
        disk: document.querySelector(".music-disk10"),
        title: document.querySelector(".music-title10"),
    },
    {

        audio: document.querySelector(".music-audio11"),
        disk: document.querySelector(".music-disk11"),
        title: document.querySelector(".music-title11"),
    },
    {

        audio: document.querySelector(".music-audio12"),
        disk: document.querySelector(".music-disk12"),
        title: document.querySelector(".music-title12"),
    },
    {

        audio: document.querySelector(".music-audio13"),
        disk: document.querySelector(".music-disk13"),
        title: document.querySelector(".music-title13"),
    },
    {

        audio: document.querySelector(".music-audio14"),
        disk: document.querySelector(".music-disk14"),
        title: document.querySelector(".music-title14"),
    },
    {

        audio: document.querySelector(".music-audio15"),
        disk: document.querySelector(".music-disk15"),
        title: document.querySelector(".music-title15"),
    },
    {

        audio: document.querySelector(".music-audio16"),
        disk: document.querySelector(".music-disk16"),
        title: document.querySelector(".music-title16"),
    }

];


const gram = document.getElementById("music-gramophone");


//loops sections
for (let i = 0; i < track.length; i++) {
    var audio = track[i].audio;
    var disk = track[i].disk;
    var title;
    var index;
    var it = 0;

    disk.addEventListener("dragstart", dragStart);

    function dragStart(ev) {

        audio = track[i].audio;
        disk = track[i].disk;
        dragged = ev.target;
        if (it == 0) {
            index = i;
            it++;
        }
        title = track[i].title;
        ev.target.style.opacity = .5;
        console.log(title)

    };
    disk.addEventListener("mousemove", function(event) {

        gram.style.opacity = ".7";

        track[i].title.classList.add("music-title-hovered");

    });

    document.querySelector("#showreel").addEventListener('mouseenter', function() {
        PauseTrack();
    });
    document.querySelector("#about").addEventListener('mouseenter', function() {
        PauseTrack();
    });
    disk.addEventListener("dragend", function(event) {

        event.target.style.opacity = 0.7;
        track[i].disk.classList.add("disk-rotate");

    });
    disk.addEventListener("dragover", function(event) {

        event.preventDefault();

    });


    disk.addEventListener("mouseleave", function(event) {
        gram.style.opacity = "";
        track[i].title.classList.remove("music-title-hovered")

    })

    function allowDrop(event) {
        event.preventDefault();
    }

    disk.addEventListener("dragenter", function(event) {

        if (event.target.className == "dropzone") {
            event.target.style.opacity = "";
        }

    });

    disk.addEventListener("dragleave", function(event) {

        if (event.target.className == "dropzone") {
            event.target.style.opacity = "1";
        }

    });
    disk.addEventListener("mousedown", PauseTrack);


    function PauseTrack(e) {

        audio.pause();
        audio.currentTime = 0;
        disk.style.opacity = 1;
        title.classList.remove("music-title-played");
        disk.classList.remove("disk-rotate");

    }
    gram.addEventListener("drop", function(event) {
        event.preventDefault();
        if (event.target.className == "dropzone") {
            audio.play();

            title.classList.add("music-title-played");
            gram.style.opacity = 0.4;
        }
    });

}


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

// document.querySelector('.movieGo1').addEventListener('mouseenter', function() {
//     document.querySelector('.movieGo1').style.zIndex = "1";

// });
// document.querySelector('.item').addEventListener('mouseenter', function() {
//     document.getElementById("movieGo2").style.zIndex = "1";

// });
// document.querySelector('.movieGo3').addEventListener('mouseenter', function() {
//     document.querySelector('.movieGo3').style.zIndex = "1";

// });


///////////////movies-second-version/////////

// document.querySelector('.movies2-first-poster').addEventListener('mousemove', parallax);
// document.querySelector('.movies2-second-poster').addEventListener('mousemove', parallax);
// document.querySelector('.movies2-third-poster').addEventListener('mousemove', parallax);
// document.querySelector('.overlayer').addEventListener('mousemove', parallax);

// function parallax(e) {
//     this.querySelectorAll('.layer').forEach(layer => {
//         const speed = layer.getAttribute('data-speed')
//         const x = (window.innerWidth - e.pageX * speed) / 50
//         const y = (window.innerHeight - e.pageY * speed) / 50

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     })
// }




// ///////////////////////////////MOVIES-SECTION//////////////////////
// var moviesCursor1 = document.querySelector('.movies-section')
// var cursor1 = document.querySelector(".movies-cursor");

// moviesCursor1.addEventListener("mousemove", moviesMouse);

// function moviesMouse(e) {
//     cursor1.style.top = (e.pageY) + "px";
//     cursor1.style.left = (e.pageX) + "px";
// }

// ///////
// var des1 = document.querySelector("#description1");
// var des2 = document.querySelector("#description2");
// var des3 = document.querySelector("#description3");

// function pa(x, x2, x3) {
//     let x1 = document.querySelector("#" + x);
//     let getNone1 = document.querySelector("#" + x3);
//     let getNone2 = document.querySelector("#" + x2);

//     getNone1.style.display = "none";
//     x1.style.display = "block";
//     getNone2.style.display = "none";
// };


//movies trasnsation ////////////////////




function displayMovieTwo() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
};

function displayMovieThree() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
};

function displayMovieOne() {
    document.getElementById("page3").style.display = "none";
    document.getElementById("page1").style.display = "block";
};

//////////////////////////////////////end movies////////////////////////////////////////////////////////

(function() {

    function scrollHorizontally(e) { // function name
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta * 300); // Multiplied by 300
        document.body.scrollLeft -= (delta * 300); // Multiplied by 40

    }

    if (window.addEventListener) {
        // Versions of : IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
})();


// mouse shape

var cursor1 = document.querySelector('.cursor1');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e) {
    cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX +
        "px; top: " + e.clientY + "px;";
});


//maqam hero movie

var maqamHero = document.querySelector("svg#lion_svg g#Layer_79");

document.addEventListener("mousemove", function(e) {
    maqamHero.style.top = e.pageY / 30 + "px";
    maqamHero.style.right = e.pageX / 30 + "px";

})


var imageSwap = function() {
    var $this = $(this);
    var newSource = $this.data("swap");
    $this.data("swap", $this.attr("src"));
    $this.attr("src", newSource);
};

$(function() {
    $("img.item-bg").hover(imageSwap, imageSwap);
    $("img.item-bg").addClass("large")
});

//mob movies

var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';


/*--------------------
Close
--------------------*/






//music responsive///////////////////////////////////////////



$(function() {
    var playerTrack = $("#player-track"),
        bgArtwork = $("#bg-artwork"),
        bgArtworkUrl,
        albumName = $("#album-name"),
        trackName = $("#track-name"),
        albumArt = $("#album-art"),
        sArea = $("#s-area"),
        seekBar = $("#seek-bar"),
        trackTime = $("#track-time"),
        insTime = $("#ins-time"),
        sHover = $("#s-hover"),
        playPauseButton = $("#play-pause-button"),
        i = playPauseButton.find("i"),
        tProgress = $("#current-time"),
        tTime = $("#track-length"),
        seekT,
        seekLoc,
        seekBarPos,
        cM,
        ctMinutes,
        ctSeconds,
        curMinutes,
        curSeconds,
        durMinutes,
        durSeconds,
        playProgress,
        bTime,
        nTime = 0,
        buffInterval = null,
        tFlag = false,
        albums = [
            "Dawn",
            "Me & You",
            "Electro Boy",
            "Home",
            "Proxy (Original Mix)"
        ],
        trackNames = [
            "Skylike - Dawn",
            "Alex Skrindo - Me & You",
            "Kaaze - Electro Boy",
            "Jordan Schor - Home",
            "Martin Garrix - Proxy"
        ],
        albumArtworks = ["_1", "_2", "_3", "_4", "_5"],
        trackUrl = [
            "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3",
            "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3",
            "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3",
            "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3",
            "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3"
        ],
        playPreviousTrackButton = $("#play-previous"),
        playNextTrackButton = $("#play-next"),
        currIndex = -1;

    function playPause() {
        setTimeout(function() {
            if (audio.paused) {
                playerTrack.addClass("active");
                albumArt.addClass("active");
                checkBuffering();
                i.attr("class", "fas fa-pause");
                audio.play();
            } else {
                playerTrack.removeClass("active");
                albumArt.removeClass("active");
                clearInterval(buffInterval);
                albumArt.removeClass("buffering");
                i.attr("class", "fas fa-play");
                audio.pause();
            }
        }, 300);
    }

    function showHover(event) {
        seekBarPos = sArea.offset();
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / sArea.outerWidth());

        sHover.width(seekT);

        cM = seekLoc / 60;

        ctMinutes = Math.floor(cM);
        ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

        if (ctMinutes < 0 || ctSeconds < 0) return;

        if (ctMinutes < 0 || ctSeconds < 0) return;

        if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
        if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

        if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
        else insTime.text(ctMinutes + ":" + ctSeconds);

        insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
    }

    function hideHover() {
        sHover.width(0);
        insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
    }

    function playFromClickedPos() {
        audio.currentTime = seekLoc;
        seekBar.width(seekT);
        hideHover();
    }

    function updateCurrTime() {
        nTime = new Date();
        nTime = nTime.getTime();

        if (!tFlag) {
            tFlag = true;
            trackTime.addClass("active");
        }

        curMinutes = Math.floor(audio.currentTime / 60);
        curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

        durMinutes = Math.floor(audio.duration / 60);
        durSeconds = Math.floor(audio.duration - durMinutes * 60);

        playProgress = (audio.currentTime / audio.duration) * 100;

        if (curMinutes < 10) curMinutes = "0" + curMinutes;
        if (curSeconds < 10) curSeconds = "0" + curSeconds;

        if (durMinutes < 10) durMinutes = "0" + durMinutes;
        if (durSeconds < 10) durSeconds = "0" + durSeconds;

        if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
        else tProgress.text(curMinutes + ":" + curSeconds);

        if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
        else tTime.text(durMinutes + ":" + durSeconds);

        if (
            isNaN(curMinutes) ||
            isNaN(curSeconds) ||
            isNaN(durMinutes) ||
            isNaN(durSeconds)
        )
            trackTime.removeClass("active");
        else trackTime.addClass("active");

        seekBar.width(playProgress + "%");

        if (playProgress == 100) {
            i.attr("class", "fa fa-play");
            seekBar.width(0);
            tProgress.text("00:00");
            albumArt.removeClass("buffering").removeClass("active");
            clearInterval(buffInterval);
        }
    }

    function checkBuffering() {
        clearInterval(buffInterval);
        buffInterval = setInterval(function() {
            if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
            else albumArt.removeClass("buffering");

            bTime = new Date();
            bTime = bTime.getTime();
        }, 100);
    }

    function selectTrack(flag) {
        if (flag == 0 || flag == 1) ++currIndex;
        else --currIndex;

        if (currIndex > -1 && currIndex < albumArtworks.length) {
            if (flag == 0) i.attr("class", "fa fa-play");
            else {
                albumArt.removeClass("buffering");
                i.attr("class", "fa fa-pause");
            }

            seekBar.width(0);
            trackTime.removeClass("active");
            tProgress.text("00:00");
            tTime.text("00:00");

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];

            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if (flag != 0) {
                audio.play();
                playerTrack.addClass("active");
                albumArt.addClass("active");

                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find("img.active").removeClass("active");
            $("#" + currArtwork).addClass("active");

            bgArtworkUrl = $("#" + currArtwork).attr("src");

            bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
        } else {
            if (flag == 0 || flag == 1) --currIndex;
            else ++currIndex;
        }
    }

    function initPlayer() {
        audio = new Audio();

        selectTrack(0);

        audio.loop = false;

        playPauseButton.on("click", playPause);

        sArea.mousemove(function(event) {
            showHover(event);
        });

        sArea.mouseout(hideHover);

        sArea.on(touchEvent, playFromClickedPos);

        $(audio).on("timeupdate", updateCurrTime);

        playPreviousTrackButton.on(touchEvent, function() {
            selectTrack(-1);
        });
        playNextTrackButton.on(touchEvent, function() {
            selectTrack(1);
        });
    }

    initPlayer();
});

// burger menu

const burger = document.querySelector(".burger-wrapper");

burger.addEventListener(touchEvent, function(e) {
    this.classList.toggle('active');
})

var bgmenu1 = document.querySelector('.nav-items1');
var bgmenu2 = document.querySelector('.nav-items2');
var bgmenu3 = document.querySelector('.nav-items3');
var bgmenu4 = document.querySelector('.nav-items4');
var bgmenu5 = document.querySelector('.nav-items5');
var bgmenu6 = document.querySelector('.nav-items6');
var bgmenu7 = document.querySelector('.nav-items7');
var bgmenu8 = document.querySelector('.nav-items8');
var bgmenuBackGround = document.querySelector('.menu');

burger.addEventListener(touchEvent, function() {

    bgmenu1.classList.toggle('display');
    bgmenu2.classList.toggle('display');
    bgmenu3.classList.toggle('display');
    bgmenu4.classList.toggle('display');
    bgmenu5.classList.toggle('display');
    bgmenu6.classList.toggle('display');
    bgmenu7.classList.toggle('display');
    bgmenu8.classList.toggle('display');

    bgmenuBackGround.classList.toggle('body-opacity')
})

//preloader animation
anime({
    targets: '#Layer_1 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    direction: 'alternate',
    loop: true
});
anime({
    targets: '#txt path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    direction: 'alternate',
    loop: true
});



// var boldItem = document.querySelectorAll(".item ");

// boldItem.addEventListener("click", function() {

//     boldItem.classList.toggle("activate");

// })


$(function() {

    $(".item").on(touchEvent, function() {
        $(".item").removeClass("activate");
        $(this).addClass("activate");

    })
});


// window.addEventListener('mouseover',contactScroll)


// function contactScroll() {
//   setInterval(function () {
//     myScreen.classList.add('contact-us-box-appear');
//     myScreen.classList.remove('contact-us-box-disappear');
//     previousScreen.classList.add('testdata-disappear');
//     previousScreen.classList.remove('testdata-appear');
//   }, 5000);
// }

// contactScroll();

// var x = 0;
// var intervalID = setInterval(function() {

//     myScreen.classList.add('contact-us-box-appear');
//     myScreen.classList.remove('contact-us-box-disappear');
//     previousScreen.classList.add('testdata-disappear');
//     previousScreen.classList.remove('testdata-appear');

//     if (++x === 1) {
//         window.clearInterval(intervalID);
//     }
// }, 10000);




// // smooth scrolling section
// const body = document.body,
//     scrollWrap = document.getElementsByClassName("container")[0],
//     width = scrollWrap.getBoundingClientRect().width - 1,
//     speed = 0.04;

// var offset = 0;

// body.style.width = Math.floor(width) + "px";





// function smoothScroll() {
//     offset += (window.pageXOffset - offset) * speed;

//     var scroll = "translateX(-" + offset + "px) translateZ(0)";
//     body.style.transform = scroll;


//     callScroll = requestAnimationFrame(smoothScroll);

// }

// smoothScroll();
// //contact us





// let myScreen = document.getElementById("contact-us-box");
// let mouseClickTarget = document.getElementById('leftscreen');
// let previousScreen = document.getElementById("o-box");
// let mouseClickBack = document.getElementById('contact-us-box');
// let contactUs = document.getElementsByClassName('contact-us');

// myScreen.addEventListener('mousedown', e => {
//     myScreen.classList.add('contact-us-box-appear');
//     myScreen.classList.remove('contact-us-box-disappear');
// });

// mouseClickTarget.addEventListener('mousedown', e => {
//     myScreen.classList.add('contact-us-box-disappear');
//     myScreen.classList.remove('contact-us-box-appear');

// });

// previousScreen.addEventListener('mousedown', e => {
//     previousScreen.classList.add('testdata-appear');
//     previousScreen.classList.remove('testdata-disappear');
// });

// mouseClickBack.addEventListener('mousedown', e => {
//     previousScreen.classList.add('testdata-disappear');
//     previousScreen.classList.remove('testdata-appear');

// });










// // // keep mouse shape to grab as long as mouse down

// var timer;
// document.addEventListener("mousedown", function() {
//     timer = setInterval(function() {
//         document.querySelector(".container").style.cursor = "grabbing";
//     }, 100); // the above code is executed every 100 ms
// });
// document.addEventListener("mouseup", function() {
//     if (timer) clearInterval(timer)
//     document.querySelector(".container").style.cursor = "grab";

// });

// // //drag to scroll method 2
// function scroller() {

//     var curXPos, curYPos, curDown = false; //resetting cursor position according to 2-d axis, detecting mouse click to false
//     window.addEventListener('mousedown', function(e) {
//         curDown = true; //detect the mouse is clicked
//         curXPos = e.pageX; //assign curYpos to the mouse position on the page y axis
//         console.log("click")
//     });

//     window.addEventListener('mouseup', function(e) { curDown = false; }); // in case of mouse not clicked sleft indicating mouse state

//     window.addEventListener('mousemove', function(e) { //do a function if
//         if (curDown === true) { // check if mouse is clicked


//             window.scrollBy(document.body.scrollLeft + (curXPos - e.pageX), 0); // move scroll of the page according to mouse directions (opposite)
//             document.body.style.filter = "blur(0.8px)";


//         }
//         if (curDown === false) {
//             document.body.style.filter = "blur(0px)";

//         }
//     });

// }
// scroller();



// // language code

//     const langEl = document.querySelector('.langWrap');
//     const langEl1 = document.querySelector('.social-icon-up-div');
// 		const link = document.querySelectorAll('.lang');
// 		const homehEl = document.querySelector('.homeh');
//     const whohEl = document.querySelector('.whoh');
//     const whotEl = document.querySelector('.whot');
//     const whopEl = document.querySelector('.whop');
//     const whomEl = document.querySelector('.whom');
//     const navaEl = document.querySelector('.nava');
//     const navcEl = document.querySelector('.navc');
//     const navtEl = document.querySelector('.navt');
//     const navhEl = document.querySelector('.navh');
//     const teamhEl = document.querySelector('.teamh');
//     const gethEl = document.querySelector('.geth');
//     const getbEl = document.querySelector('.getb');
//     const foothEl = document.querySelector('.footh');
//     const footsEl = document.querySelector('.foots');

// 		link.forEach(el => {
// 			el.addEventListener('click', () => {
//         langEl.querySelector('.active').classList.remove('active');
//         el.classList.add('active');
//         const attr = el.getAttribute('language');
// 				homehEl.textContent = data[attr].homeh;
//         whohEl.textContent = data[attr].whoh;
//         whotEl.textContent = data[attr].whot;
//         whomEl.textContent = data[attr].whom;
//         whopEl.textContent = data[attr].whop;
//         navaEl.textContent = data[attr].nava;
//         navcEl.textContent = data[attr].navc;
//         navtEl.textContent = data[attr].navt;
//         navhEl.textContent = data[attr].navh;
//         teamhEl.textContent = data[attr].teamh;
//         gethEl.textContent = data[attr].geth;
//         getbEl.textContent = data[attr].getb;
//         foothEl.textContent = data[attr].footh;
//         footsEl.textContent = data[attr].foots;

// 			});
//     });

//     let ArbicP = `
// تعمل "شو ميديا" كبوابة لتنفيذ الإنتاج السينمائي والإنتاج التلفزيوني والإعلامي ، وتتمثل رؤية الشركة في بناء مجموعة واسعة من العملاء المحليين والدوليين. كما تهدف الشركة إلى تقديم مستوى عالي من الجودة يتناسب مع توقعات عملائنا وميزانيتهم ، وكسب رضا وثقة العملاء ، ولدينا فريق أكاديمي محترف. ومتكامل صناع الأفلام ، لتسهيل عملية الإنتاج مهما كان حجم الإنتاج
// `;
// 		var data = {
// 			  "english": 
// 			  {
// 			    "homeh": "WE ARE SHOW STUDIO",
// 			    "homep": "Website is Under Implementation  our new creative website , Will Coming Soon!",
//             "whoh": " WHO WE ARE !",
//             "whot": "  This is a showreel of some exciting previous projects our chairman took part in as an executive producer.",
//             "whom":`Show Media Production, founded in 2020 and based in Egypt is an artistic and media production implementation company, and participated in the implementation of more than 100 projects, from films, series, theater, advertising and awareness campaigns, to organizing celebrations and events.`,

//             "whop": `
// The company's vision is to build a wide range of local and international customers.
// "Show Media Production" acts as a gateway to the implementation of film production, television and media production,
//   The company also aims to provide a high level of quality commensurate with our clients  expectations and their budget,
//       and gain clients satisfaction and trust, and we have a professional academic team and integrated filmmakers, to facilitate the production process, whatever the production volume.
//             `,  
//             "navh":"Home",
//             "nava":"About",
//             "navt":"Partners",
//             "navc":"Contact Us",
//             "teamh" :"Partners",
//             "geth" : "Get in touch",
//             "getb" : "SEND MESSAGE",
//             "footh":"Show Media Production",
//             "foots":"Our Studio",
//             "footp":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lacus nulla, eget varius justo tristique ut. Etiam a tellus magna.",

// 			  },
// 			  "arabic": 
// 			  {
// 			    "homeh":"WE ARE SHOW STUDIO",
// 			    "homep": "!الموقع تحت الانشاء , موقعنا المذهل يأتي قريبا ",
//             "whoh": "من نحن !",
//             "whot": "هذا عرض لبعض المشاريع السابقة المتميزة التي شارك فيها رئيسنا كمنتج تنفيذي ",
//             "whom": `شو ميديا برودكشن - تأسست عام 2020 ومقرها مصر - وهي  شركة تنفيذية للإنتاج الفني والإعلامي ، وشارك في تنفيذ أكثر من 100 مشروع ، من أفلام ومسلسلات وأعمال المسرح وحملات إعلانية وتوعوية ، إلى تنظيم الإحتفالات والفعاليات ذات أهمية `,
//             "whop": ArbicP,
//             "navh":"الرئيسيه",
//             "nava":"عنا",
//             "navt":"شركاؤنا",
//             "navc":"اتصل بنا",
//             "teamh" : "شركاؤنا",
//             "geth" : "ابقي علي تواصل",
//             "getb" : "أرسل",
//             "footh":"Show Media Production",
//             "foots":"الاستوديو",
//             "footp":"لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا",
// 			  }

//       }




//     //   $(function() {
//     //     $('body').vegas({
//     //         slides: [
//     //           { src: './images/3_4.jpg' ,  delay:7000 , transition: 'zoomOut'},
//     //             { src: './images/tiktok2.jpg' , delay:7000, transition: 'zoomOut'},
//     //             { src: './images/ramadan.jpg' , delay:7000 ,transition: 'zoomOut' },
//     //             { src: './images/30years.jpg'   , delay:7000 ,transition: 'zoomOut'},
//     //             { src: './images/d286d378599593.5d63cfac43c29.png'  , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/badla.jpeg' , delay:7000, transition: 'zoomOut'},
//     //             { src: './images/morgan.jpg' , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/awnta.jpg' , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/KHER.jpg'  , delay:7000 , transition: 'zoomOut'},

//     //         ],
//     //         overlay: '/js/vegas/dist/overlays/05.png',
//     //         transitionDuration: 8000,
//     //         delay:5000,
//     //         animation: [ 'kenburnsLeft'],
//     //         transition: [ 'fade']

//     //     }  );
//     // } );

//     $(document).ready(function(){
//       $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 4
//           }
//         }, {
//           breakpoint: 520,
//           settings: {
//             slidesToShow: 3
//           }
//         }]
//       });
//     });

//     function sendFunAlert() {
//       // Get the snackbar DIV
//       var x = document.getElementById("snackbar");

//       // Add the "show" class to DIV
//       x.className = "show";

//       // After 3 seconds, remove the show class from DIV
//       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//     }
// var style = 1;
//     var textIndentPercent = 150;
// var marqueeCenteringInterval = setInterval(function() {
//     console.log(document.getElementById('my-marquee'));
//     console.log(textIndentPercent);
//     console.log(document.getElementById('my-marquee').style.textIndent);
//     document.getElementById('my-marquee').style.textIndent = -textIndentPercent + '%';
//     textIndentPercent -= 0.00005;
//     if (textIndentPercent < 0) {
//         document.getElementById('my-marquee').style.textIndent = '0px';
//         clearInterval(marqueeCenteringInterval);
//     }
// }, 100);