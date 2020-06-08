const homeImage = document.querySelector('.homeImage');
const arrow = document.querySelector('.icon');

const tl = new TimelineMax();

tl.fromTo(homeImage,1,{height: "0%"},{height:"100%",ease: Power2.easeInOut})
.fromTo(arrow,1,{y:50},{y:0,ease: Power2.easeInOut}, "-=0.5");
