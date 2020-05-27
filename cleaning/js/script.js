$(document).ready(function () {
    $(".first-button").on("click", function () {
        $(".animated-icon").toggleClass("open");
    });
});

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.padding = ".3em";
        document.getElementById("logo").style.height = "60px";
        document.getElementById("logo").style.width = "auto";
    } else {
        document.getElementById("nav").style.padding = ".8em";
        document.getElementById("logo").style.height = "68px";
        document.getElementById("logo").style.width = "auto";
    }
}
