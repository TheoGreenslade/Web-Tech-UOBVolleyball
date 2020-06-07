let quote = document.getElementById("quote");

var intQuoteCount = 7; // The number of quotes in your library
var dtNow = new Date();
var intTZOffset = dtNow.getTimezoneOffset() * 60000;
var intNow = dtNow.getTime() - intTZOffset;
var intDay = Math.floor(intNow / 86400000);
console.log(intDay);
var intQuoteToDisplay = intDay % intQuoteCount;
console.log(intQuoteToDisplay);

fetch('text/quotes.txt')
    .then(response => response.text())
    .then((data) => {
        // console.log(data)
        let lines = data.split(/\r\n|\n/);
        quote.innerHTML = lines[intQuoteToDisplay];
    });