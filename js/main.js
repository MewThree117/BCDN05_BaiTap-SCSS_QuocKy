
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".tabula__list").style.height = "48px";
        document.querySelector(".header .tabula__btn ").style.padding = "8px 20px";
        document.querySelector(".tabula__navbar img").style.display = "none";
        document.querySelector("header").style.boxShadow = "0 0 10px 0 rgba(204, 204, 204, 0.5)";
        document.querySelector("header").style.backgroundColor = "#fff";
    } else {
        document.querySelector(".tabula__list").style.height = "80px";
        document.querySelector(".header .tabula__btn ").style.padding = "14.85px 20.25px";
        document.querySelector(".tabula__navbar img").style.display = "block";
        document.querySelector(".header").style.boxShadow = "0 0 0 0px #fff";
        document.querySelector(".header").style.backgroundColor = "transparent";
    }
}