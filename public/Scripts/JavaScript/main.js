"use strict";
$(document).ready(() => {
    particlesJS.load(
        "particles-js",
        "./public/assets/particlesjs-config.json",
        () => {
            $("#particles-js").css("position", "absolute");
        }
    );
    particlesJS.load("particle", "./public/assets/particlejs.json", () => {
        $("#particle").css("position", "absolute");
    });

    let typed = new Typed("#typed", {
        strings: ["Bineet.", "being creative."],
        typeSpeed: 90,
        smartBackspace: true,
        startDelay: 60,
        loop: true,
        loopCount: Infinity,
    });

    $("#menuCheckbox").click(() => humburgerTrigger());

    $("#horizontalLine").on("click", () => goScroll());

    // animations
    animateLists(".yelpcamp", -150, 0);
    animateLists(".socialite", 250, 0);
    animateLists(".zoomClone", -150, 0);
    animateLists(".travelZilla", 150, 0);

    $("#contact").click(() => {
        $("#contact-me ul").toggleClass("contactMELINKS");
    });
});

const humburgerTrigger = () => {
    $("#hamburger-sidemenu").toggleClass("translate");
    $("#hamburger-sidemenu").addClass("translateBack");
};

const goScroll = () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#projects", offsetX: 50 },
    });
};

const animateLists = (target, startP, endP) => {
    gsap.from(target, {
        scrollTrigger: {
            trigger: target,

            start: "20px 80%",
            end: "bottom 75%",
            // end: () => "+=" + document.querySelector(target).offsetWidth,
            scrub: 1,
            toggleActions: "restart pause resume pause",
        },
        // x: -150,
        x: startP,
        duration: 1,
        opacity: 0,
    });
    gsap.to(target, {
        scrollTrigger: {
            trigger: target,

            start: "20px 80%",
            end: "bottom 75%",
            // end: () => "+=" + document.querySelector(target).offsetWidth,
            scrub: 1,
            toggleActions: "resume pause restart pause",
        },
        x: endP,
        duration: 1,
        opacity: 0.75,
    });
};
