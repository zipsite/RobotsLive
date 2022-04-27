var btnToggle = document.getElementById("toggle-theme");
var bodybox = document.getElementById("bodybox");

btnToggle.onclick = function () {
    bodybox.classList.toggle("day-theme");
    bodybox.classList.toggle("night-theme");
    if (document.querySelector('meta[name="theme-color"]').getAttribute("content") == "#000000"){
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
    }
    else {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
    }
};