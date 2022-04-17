function resizeView () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

resizeView();

window.addEventListener('resize', resizeView);

