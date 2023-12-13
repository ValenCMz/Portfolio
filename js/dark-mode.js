let btn_switch = document.querySelector(".header__switch");
let btn_switch2 = document.querySelector(".nav__container_switch");

btn_switch.addEventListener("click", switchMode);
btn_switch2.addEventListener("click", switchMode);

function switchMode() {
    document.body.classList.toggle("dark");
    btn_switch.classList.toggle("active");

    switch_titles();
    switch_imgs();
    switch_svgs();

    document.querySelector(".header__container-iconGreen").classList.toggle("dark");


    document.querySelectorAll(".section__proyectos-proy_small-item").forEach((element) => {
        element.classList.toggle("dark");
    });
    document.querySelectorAll(".section__tecnologias-item").forEach((element) => {
        element.classList.toggle("dark");
    });
    document.querySelectorAll(".section__contacto-item").forEach((element) => {
        element.classList.toggle("dark");
    });
    document.querySelector(".section__email-cont_email").classList.toggle("dark");

    document.querySelector(".tooltip-box").classList.toggle("dark");
    document.querySelector(".tooltip-box_send").classList.toggle("dark");
    document.querySelector(".tooltip-box_copiar").classList.toggle("dark");
    // Guardamos el modo en localstorage.
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }

}


function switch_titles() {
    let div_header = document.querySelector(".header__info");
    div_header.querySelector("h1").classList.toggle("dark");
    document.querySelectorAll("h2").forEach((element) => {
        element.classList.toggle("dark");
    });
    document.querySelectorAll("p").forEach((element) => {
        element.classList.toggle("dark");
    });
    document.querySelectorAll("h3").forEach((element) => {
        element.classList.toggle("dark");
    });
}

function switch_imgs() {
    let img_perfil = document.querySelector(".section__perfil-img").querySelector("img");
    let img_star = document.querySelector(".section__proyectos-titulo_img").querySelector("img");
    let img_tecnologia = document.querySelector(".section__tecnologias-titulo").querySelector("img");
    let img_arroba = document.querySelector(".section__contacto-titulo").querySelector("img");
    let img_arrow = document.querySelectorAll(".arrow_up");
    img_arrow.forEach((arrow) => {
        let img = arrow.querySelector("img");
        if (document.body.classList.contains("dark")) {
            img.src = "../img/icons/arrow-dark.png";
        }
        else {
            img.src = "../img/icons/icons8-arrow-up-right-24.png";
        }
    });

    if (document.body.classList.contains("dark")) {
        img_perfil.src = "../img/icons/user-dark.png";
        img_star.src = "../img/icons/star-dark.png";
        img_tecnologia.src = "../img/icons/pc-dark.png";
        img_arroba.src = "../img/icons/arroba-dark.png";
    } else {
        img_perfil.src = "../img/icons/user.png";
        img_star.src = "../img/icons/icons8-estrella-64.png";
        img_tecnologia.src = "../img/icons/icons8-monitor-50.png";
        img_arroba.src = "../img/icons/icons8-arroba-24.png";
    }


    document.querySelectorAll("button").forEach((boton) => {
        boton.classList.toggle("dark");
        document.querySelectorAll(".btn_publicacion").forEach((element) => {
            if (boton.classList.contains("dark")) {
                element.querySelector("img").src = "../img/icons/enlazar-dark.png";
            } else {
                element.querySelector("img").src = "../img/icons/icons8-enlazar-24.png";
            }
        });
    });
}

function switch_svgs() {
    var btnSwitch = document.getElementById("btn__switch");
    var nav_switch = document.getElementById("nav_switch");

    if (document.body.classList.contains("dark")) {

        let svgBtnSwitch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgBtnSwitch.setAttribute("id", "btn__switch");
        svgBtnSwitch.setAttribute("height", "25");
        svgBtnSwitch.setAttribute("width", "25");
        svgBtnSwitch.setAttribute("viewBox", "0 0 384 512");

        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "#ffffff");
        path.setAttribute("d", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z");

        svgBtnSwitch.appendChild(path);

        btnSwitch.replaceWith(svgBtnSwitch);


        let svg_nav_switch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg_nav_switch.setAttribute("id", "nav_switch");
        svg_nav_switch.setAttribute("height", "25");
        svg_nav_switch.setAttribute("width", "25");
        svg_nav_switch.setAttribute("viewBox", "0 0 384 512");

        let pathnav_switch = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathnav_switch.setAttribute("fill", "#ffffff");
        pathnav_switch.setAttribute("d", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z");

        svg_nav_switch.appendChild(pathnav_switch);

        nav_switch.replaceWith(svg_nav_switch);

    } else {
        let svgBtnSwitch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgBtnSwitch.setAttribute("id", "btn__switch");
        svgBtnSwitch.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgBtnSwitch.setAttribute("height", "25");
        svgBtnSwitch.setAttribute("width", "25");
        svgBtnSwitch.setAttribute("viewBox", "0 0 512 512");

        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "#1E3050");
        path.setAttribute("d", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z");

        svgBtnSwitch.appendChild(path);

        btnSwitch.replaceWith(svgBtnSwitch);


        let svg_nav_switch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg_nav_switch.setAttribute("id", "nav_switch");
        svg_nav_switch.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg_nav_switch.setAttribute("height", "25");
        svg_nav_switch.setAttribute("width", "25");
        svg_nav_switch.setAttribute("viewBox", "0 0 512 512");

        let pathnav_switch = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathnav_switch.setAttribute("fill", "#1E3050");
        pathnav_switch.setAttribute("d", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z");

        svg_nav_switch.appendChild(pathnav_switch);

        nav_switch.replaceWith(svg_nav_switch);
    }
}