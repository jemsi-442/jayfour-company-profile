document.addEventListener("DOMContentLoaded", () => {

    /* ===== DARK MODE ===== */
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });

    /* ===== MOBILE MENU ===== */
    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    const menuIcon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("active");

        if (mobileNav.classList.contains("active")) {
            menuIcon.classList.replace("fa-bars", "fa-xmark");
        } else {
            menuIcon.classList.replace("fa-xmark", "fa-bars");
        }
    });

    /* ===== SCROLL ANIMATION ===== */
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once on load
});
