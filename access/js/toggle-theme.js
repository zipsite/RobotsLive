var btnToggle = document.getElementById("toggle-theme");
var bodybox = document.getElementById("bodybox");

var themeStatus = localStorage.getItem('themeapp');
if (themeStatus == 'day-theme' || themeStatus == 'night-theme') {
    if(themeStatus == 'day-theme') {
        bodybox.classList.toggle("day-theme");
        bodybox.classList.toggle("night-theme");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
    }
}

function toggleTheme() {
    bodybox.classList.toggle("day-theme");
    bodybox.classList.toggle("night-theme");
    if (document.querySelector('meta[name="theme-color"]').getAttribute("content") == "#000000"){
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
        localStorage.setItem('themeapp', 'day-theme');
    }
    else {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
        localStorage.setItem('themeapp', 'night-theme');
    }
}

btnToggle.onclick = toggleTheme;