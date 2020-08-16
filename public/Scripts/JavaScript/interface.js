"use strict";
const sidemenu = document.querySelector("#hamburger-sidemenu");
const sidemenuLinks = document.querySelectorAll("#hamburger-sidemenu h1");
const projects = sidemenuLinks[1];
const yelpcamp = document.querySelector(".yelpcamp h1");
const socialite = document.querySelector(".socialite h1");
const ZoomClone = document.querySelector(".zoomClone h1");
const travelZilla = document.querySelector(".travelZilla h1");
const homeSidebarLink = document.querySelector("#hamburger-sidemenu > h1:nth-child(1) > a");
projects.addEventListener("click", (e) => {
    setTimeout(() => {
        sidemenu.classList.remove("translate");
    }, 1000);
});
const animateProjectBg = (target, cssClass) => {
    target.addEventListener("mouseenter", () => {
        target.parentElement?.classList.add(cssClass);
    });
    target.addEventListener("mouseleave", () => {
        target.parentElement?.classList.remove(cssClass);
    });
};
animateProjectBg(yelpcamp, "yelpcamp-img");
animateProjectBg(socialite, "socialite-img");
animateProjectBg(ZoomClone, "zoomClone-img");
animateProjectBg(travelZilla, "travelZilla-img");
homeSidebarLink?.addEventListener("click", () => {
    location.reload();
});
