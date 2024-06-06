document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("icon-sun");
    const img = document.querySelector(".logo");
    const openBtn = document.querySelector("#menu-icon");
    const closeBtn = document.querySelector(".close-nav");
    const nav = document.querySelector(".respo-nav");
    const menuIcon = document.getElementById("menu-icon");
    const closeNavButton = document.querySelector(".close-nav");
    const respoNav = document.querySelector(".respo-nav");
    let isOpen = false;

    gsap.utils.toArray(".pro-row").forEach((row, index) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 80%", 
                end: "bottom 10%",
                scrub: 1,
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            ease: "power2.out",
        });
    });

    gsap.utils.toArray(".pro-row").forEach((row) => {
        const layer = row.querySelector(".pro-layer");

        gsap.set(layer, {
            height: 0,
            opacity: 0,
        });

        row.addEventListener("mouseenter", () => {
            gsap.to(layer, {
                height: "100%",
                opacity: 1, 
                duration: 0.5,
                ease: "power2.inOut",
            });
        });

        row.addEventListener("mouseleave", () => {
            gsap.to(layer, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
            });
        });
    });

    gsap.from("#contact", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".input-box input", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 70%", 
        },
        opacity: 0,
        y: 20, 
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out",
    });

    gsap.from(".input-group-2 textarea, .input-group-2 .btn", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
    });
    icon.onclick = () => {
        document.body.classList.toggle("dark-theme");
        const darkMode = document.body.classList.contains("dark-theme");
        icon.src = darkMode ? "images/moon.png" : "images/sun.png";
        img.src = darkMode ? "images/logoLight.png" : "images/logoDark.png";
    };

    const openNav = () => {
        gsap.to(nav, {
            x: '0%',
            duration: 0.5,
            ease: 'power2.inOut'
        });
        isOpen = true;
    };

    const closeNav = () => {
        gsap.to(nav, {
            x: '-100%',
            duration: 0.5,
            ease: 'power2.inOut'
        });
        isOpen = false;
    };

    openBtn.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);
    document.addEventListener('click', (e) => {
        if (isOpen && !nav.contains(e.target) && e.target !== openBtn) {
            closeNav();
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".home-content", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".home-img", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power1.out"
    });

    gsap.utils.toArray(".time-item").forEach((item, index) => {
        const xDirection = index % 2 !== 0 ? -100 : 100;
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1
            },
            opacity: 0,
            x: xDirection,
            duration: 1,
            ease: "power2.out"
        });
    });

    gsap.from(".about-img", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out"
    });

    menuIcon.addEventListener("click", () => {
        gsap.to(respoNav, {
            display: "block",
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power1.out"
        });
    });

    closeNavButton.addEventListener("click", () => {
        gsap.to(respoNav, {
            opacity: 0,
            x: 100,
            duration: 0.5,
            ease: "power1.in",
            onComplete: () => {
                respoNav.style.display = "none";
            }
        });
    });
});
