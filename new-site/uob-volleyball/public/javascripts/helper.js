function scrollDown(){
    var elmnt = document.getElementById("intro");
    elmnt.scrollIntoView({behavior: "smooth", block: "start"});
}

$(document).ready(function(){
    $("#myModal").modal('show');
});