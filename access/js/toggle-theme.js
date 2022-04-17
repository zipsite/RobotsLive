var btn = document.getElementById("toggle-theme");
var bodybox = document.getElementById("bodybox");

btn.onclick = function () {
    bodybox.classList.toggle("day-theme");
    bodybox.classList.toggle("night-theme");
};