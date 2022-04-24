var btnToggle = document.getElementById("toggle-theme");
var bodybox = document.getElementById("bodybox");

btnToggle.onclick = function () {
    bodybox.classList.toggle("day-theme");
    bodybox.classList.toggle("night-theme");
};