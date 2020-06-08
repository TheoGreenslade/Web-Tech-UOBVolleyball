const navLogo = document.getElementById('nav-logo');
const navHome = document.getElementById('nav-home');
const navClub = document.getElementById('nav-club');
const navTraining = document.getElementById('nav-training');
const navSquads = document.getElementById('nav-squads');
const navContact = document.getElementById('nav-contact');
const navCalender = document.getElementById('nav-calender');
const navShop = document.getElementById('nav-shop');
const navHallOfFame = document.getElementById('nav-hall-of-fame');
const navLogin = document.getElementById('nav-login');

const tlnav = new TimelineMax();

tlnav.fromTo(navLogo,1, {opacity:0,x:30}, {opacity:1,x:0})
.fromTo(navHome,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.5")
.fromTo(navClub,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.8")
.fromTo(navTraining,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.8")
.fromTo(navSquads,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.8")
.fromTo(navContact,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.8")
.fromTo(navCalender,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.8")
.fromTo(navShop,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.8")
.fromTo(navHallOfFame,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=0.8")
.fromTo(navLogin,1, {opacity:0,x:30}, {opacity:1,x:0}, "-=1")