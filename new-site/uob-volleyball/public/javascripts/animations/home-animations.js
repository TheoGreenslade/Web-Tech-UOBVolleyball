const homeImage = document.querySelector('.homeImage');
const arrow = document.querySelector('.icon');
const introTitle = document.getElementById('home-title');
const introText = document.getElementById('intro-text');
const video = document.querySelector('.video');


const tl = new TimelineMax();

tl.fromTo(homeImage,1.5,{height: "0%"},{height:"100%",ease: Power2.easeInOut})
.fromTo(arrow,1,{y:50},{y:0,ease: Power2.easeInOut}, "-=0.5");

function scrollDown() {
    var elmnt = document.getElementById("intro");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });

    tl.fromTo(introTitle,2,{opacity:0},{opacity:1,ease: Power2.easeInOut})
    .fromTo(introText,2,{x:-200},{x:0,ease: Power2.easeInOut},"-=2")
    .fromTo(video,2,{x:200},{x:0,ease: Power2.easeInOut}, "-=2")
}