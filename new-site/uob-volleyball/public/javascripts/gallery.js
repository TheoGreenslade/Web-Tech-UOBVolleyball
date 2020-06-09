let galleryImages = document.querySelectorAll(".gallery-image");
let latestOpenedImage;
let windowWidth = window.innerWidth;
console.log(windowWidth)

if (galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImageUrl = getElementCss.getPropertyValue("background-image");
            let getImageUrlPosition = getFullImageUrl.split("/images/gallery/thumbnails/");
            let setNewImageUrl = getImageUrlPosition[1].replace('png")','jpg');
            
            latestOpenedImage = index + 1;

            let container = document.body;
            let newImageWindow = document.createElement("div");
            container.appendChild(newImageWindow);
            newImageWindow.setAttribute("class", "image-window");
            newImageWindow.setAttribute("onclick", "closeImage()");

            let newImage = document.createElement("img");
            newImageWindow.appendChild(newImage);
            newImage.setAttribute("src", "images/gallery/games/" + setNewImageUrl);
            newImage.setAttribute("id", "current-image")

            newImage.onload = function() {
                let imageWidth = this.width;
                let calcImageToEdge = ((windowWidth - imageWidth)/2)-87;
                
                let newNextButton = document.createElement("a");
                let buttonNextText = document.createTextNode(">");
                newNextButton.appendChild(buttonNextText);
                container.appendChild(newNextButton);
                newNextButton.setAttribute("class", "image-button-next");
                newNextButton.setAttribute("onclick", "changeImage(1)");
                newNextButton.style.cssText = "right: " + calcImageToEdge + "px;";

                let newPreviousButton = document.createElement("a");
                let buttonPreviousText = document.createTextNode("<");
                newPreviousButton.appendChild(buttonPreviousText);
                container.appendChild(newPreviousButton);
                newPreviousButton.setAttribute("class", "image-button-previous");
                newPreviousButton.setAttribute("onclick", "changeImage(0)");
                newPreviousButton.style.cssText = "left: " + calcImageToEdge + "px;";
            }
        }
    });
}

function closeImage() {
    document.querySelector(".image-window").remove();
    document.querySelector(".image-button-next").remove();
    document.querySelector(".image-button-previous").remove();
}

function changeImage(changeDirection) {
    document.querySelector("#current-image").remove();
    let imageWindow = document.querySelector(".image-window");
    let newImage = document.createElement("img");
    imageWindow.appendChild(newImage);

    let calcNewImage;

    if(changeDirection === 1) {
        calcNewImage = latestOpenedImage + 1;
        if(calcNewImage > galleryImages.length){
            calcNewImage = 1;
        }
    }
    else if(changeDirection === 0) {
        calcNewImage = latestOpenedImage - 1;
        if(calcNewImage < 1){
            calcNewImage = galleryImages.length;
        }
    }

    newImage.setAttribute("src", "images/gallery/games/" + calcNewImage + ".jpg");
    newImage.setAttribute("id","current-image");

    latestOpenedImage = calcNewImage;

    newImage.onload = function() {
        let imageWidth = this.width;
        let calcImageToEdge = ((windowWidth - imageWidth)/2)-87;

        let nextButton = document.querySelector(".image-button-next");
        nextButton.style.cssText = "right: " + calcImageToEdge + "px;";
        

        let previousButton = document.querySelector(".image-button-previous");
        previousButton.style.cssText = "left: " + calcImageToEdge + "px;";
    }
}