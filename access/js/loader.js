
OnLoad();

function OnLoad() {
    var link = window.location.pathname; //Ссылка страницы без домена

    LinkClick(link);
}

function LinkClick(href) {
    var props = href.split("/");
    //Получаем параметры из ссылки. 1 - раздел, 2 - идентификатор
    var Handler = function (Request) {
        document.getElementById("content").innerHTML = Request.responseText;
        InitLinks();
    }

    if (props[1] == '') {
        SendRequest("GET", "/views/home.html", "", Handler);
    }
    else if (props[1] == 'catalog') {
        SendRequest("GET", "/views/catalog.html", "", Handler);
    }
    else if (props[1] == 'staff') {
        SendRequest("GET", "/views/staff.html", "", Handler);
    }
    else if (props[1] == 'basket') {
        SendRequest("GET", "/views/basket.html", "", Handler);
    }

}

function handler(e) {
    e.preventDefault();
    LinkClick(e.currentTarget.getAttribute("href"));
    history.pushState(null, null, e.currentTarget.getAttribute("href"));
    return false;
}

function InitLinks() {
    var links = document.getElementsByClassName("spec-a"); //Находим все ссылки на странице

    for (var i = 0; i < links.length; i++) {
        //Отключаем событие по умолчанию и вызываем функцию LinkClick
        links[i].addEventListener("click", handler);
    }
}