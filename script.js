

// ======================TYPOGRAPHY=======================
var typed = new Typed(".auto-type", {
    strings: ["DATA SCIENCE CLUB","VIT BHOPAL"],
    typeSpeed : 80,
    backSpeed: 40,
    loop: true
});


// ================GIF playback speed=============
video = document.querySelector('video');
video.playbackRate = 0.70;


// ============Menu open close===========
burger = document.querySelector('.burger');
navlist = document.querySelector('.navshow');

burger.addEventListener('click',toggle=()=>{
    console.log("Hello");
    navlist.classList.toggle('navshow') ;
})

