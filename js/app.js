"use strict"

window.addEventListener("scroll", function () {
    let nav = document.querySelector(".nav");
    let header = document.querySelector(".header");

    let rect = header.getBoundingClientRect();
    if (rect.bottom < 0) {
        nav.style.opacity = "1";
    } else {
        nav.style.opacity = "0";
    }
});

let section_proy = document.querySelectorAll(".section__proyectos-proy_contImg");

section_proy.forEach(section => {

    section.addEventListener("mouseover", () => {
        // Si el mouse esta over lo scalo
        let img = section.querySelector(".section__proyectos-proy_img");
        img.style.transform = "scale(1.1)";
        // img.style.transform = "translateY(-10px)";
    });

    section.addEventListener("mouseout", () => {
        // Si el mouse esta fuera lo scalo
        let img = section.querySelector(".section__proyectos-proy_img");

        img.style.transform = "scale(1)";
    });
});

