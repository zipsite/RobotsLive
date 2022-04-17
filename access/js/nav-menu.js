var btn = document.getElementById("nav-btn");
var nav = document.getElementById("nav-menu");

btn.onclick = function () {
    if(nav.getAttribute("class") == "nav nav-close transition") {
        nav.setAttribute("class", "nav transition");
    }
    else {
        nav.setAttribute("class", "nav nav-close transition");
    }
};