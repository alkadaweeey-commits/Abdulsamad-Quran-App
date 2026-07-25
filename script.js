window.onload = function() {
    setTimeout(function(){
        document.querySelector(".splash").style.display = "none";
    }, 3000);
};


function goHome(){
    document.getElementById("home").scrollIntoView();
}

function goSurahs(){
    document.getElementById("surahs").scrollIntoView();
}

function goAbout(){
    document.getElementById("about").scrollIntoView();
}