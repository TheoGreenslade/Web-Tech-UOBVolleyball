"use strict";

$(document).ready(function () {
    $("#myModal").modal('show');
    changeActiveNavItem(document.title);
});

function changeActiveNavItem(title) {
    $('.nav-item').each(function (index, value) {
        this.classList.remove("active");
    });

    var navItem = document.getElementById("nav-home");
    switch (title) {
        case 'Training':
            navItem = document.getElementById("nav-training");
            break;
        case 'Committee':
        case 'About the club':
        case 'Gallery':
            navItem = document.getElementById("nav-club");
            break;
        case 'Squads':
            navItem = document.getElementById("nav-squads");
            break;
        case 'Contact us':
            navItem = document.getElementById("nav-contact");
            break;
        case 'Calender':
            navItem = document.getElementById("nav-calender");
            break;
        case 'Shop':
            navItem = document.getElementById("nav-shop");
            break;
            case 'Hall of fame':
            navItem = document.getElementById("nav-hall-of-fame");
            break;
            case 'Logout':
            navItem = document.getElementById("nav-logout");
            break;
            case 'Login & Register':
            navItem = document.getElementById("nav-login");
            break;
        default:
            navItem = document.getElementById("nav-home");
    }
    navItem.classList.add("active");

}
