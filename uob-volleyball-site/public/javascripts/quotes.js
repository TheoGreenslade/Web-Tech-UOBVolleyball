"use strict";

var quote = document.getElementById("quote");

var QuoteCount = 7;
var dtNow = new Date();
var TZOffset = dtNow.getTimezoneOffset() * 60000;
var Now = dtNow.getTime() - TZOffset;
var Day = Math.floor(Now / 86400000);
var QuoteToDisplay = Day % QuoteCount;

fetch('text/quotes.txt')
    .then(response => response.text())
    .then((data) => {
        // console.log(data)
        var lines = data.split(/\r\n|\n/);
        quote.innerHTML = lines[QuoteToDisplay];
    });