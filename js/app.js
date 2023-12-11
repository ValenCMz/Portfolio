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
        let img = section.querySelector(".section__proyectos-proy_img");
        img.style.transform = "scale(1.1)";
    });

    section.addEventListener("mouseout", () => {
        let img = section.querySelector(".section__proyectos-proy_img");
        img.style.transform = "scale(1)";
    });
});


let section_proy_small = document.querySelectorAll(".section__proyectos-proy_small");
section_proy_small.forEach(section => {
    section.addEventListener("mouseover", () => {
        let arrow = section.querySelector(".arrow_up");
        arrow.style.opacity = "1";
        section.style.transform = "translateY(-5px)";
        let recuadro = section.querySelector(".section__proyectos-proy_small-item");
        recuadro.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
    });
    section.addEventListener("mouseout", () => {
        let arrow = section.querySelector(".arrow_up");
        arrow.style.opacity = "0";
        section.style.transform = "translateY(0px)";
        let recuadro = section.querySelector(".section__proyectos-proy_small-item");
        recuadro.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0.75)";
    });
});