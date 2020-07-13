"use strict";

function displayTicked() {
    var categories = {{{json categories}}};
    var products = {{{json products}}};
    for (var i = 0; i<categories.length; i++) {
       for(var j = 0; j<products.length; j++) {
            var checkBox = document.getElementById("inlineCheckbox"+categories[i].id);
            var box = document.getElementById("productBox"+products[j].product_id);
            if(products[j].category_name == categories[i].name) {
                if (checkBox.checked == true){
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            }
        }
    }
}

