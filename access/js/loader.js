var data ={
    body: "",
    link: ""
};


OnLoad();

function OnLoad() {
    var link = window.location.pathname; //Ссылка страницы без домена

    LinkClick(link);
}

function LinkClick(href) {
    var props = href.split("/");
    data.link = href;
    //Получаем параметры из ссылки. 1 - раздел, 2 - идентификатор
    var Handler = function (Request) {
        data.body = Request.responseText;
        UpdatePage();
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
    else if (props[1] == 'checkout') {
        SendRequest("GET", "/views/checkout.html", "", Handler);
    }

}

function handler(e) {
    e.preventDefault();
    LinkClick(e.currentTarget.getAttribute("href"));
    return false;
}

function UpdatePage() {
    document.getElementById("content").innerHTML = data.body;
    history.pushState(data.body, "Robots-Live", data.link);
    InitLinks();
}


function InitLinks() {
    var links = document.getElementsByClassName("spec-a"); //Находим все ссылки на странице

    for (var i = 0; i < links.length; i++) {
        //Отключаем событие по умолчанию и вызываем функцию LinkClick
        links[i].addEventListener("click", handler);
    }
}