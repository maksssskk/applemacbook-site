gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    tl.from(".hero-media", { scale: 1.2, opacity: 0, duration: 2, ease: "power4.out" })
      .from(".hero-text", { y: 50, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=1")
      .from(".product-price", { y: 20, opacity: 0, duration: 0.8, ease: "power4.out" }, "-=0.5");

    gsap.timeline({
        scrollTrigger: {
            trigger: ".cards-container",
            start: "top 70%",
            end: "top 35%",
            scrub: 1,
        }
    })
    .from(".section-title", {y: 50, opacity: 0})
    .from(".card", {y: 50, opacity: 0});

    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
        const text = card.querySelector(".card-text");
        if (!text) return;
        if (index === 0) {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: card,
                    scroller: ".cards-container", 
                    start: "left 90%",
                    end: "left 20%",
                    scrub: 1,
                    horizontal: true
                },
                y: 50,
                opacity: 0
            });
        } else {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: card,
                    scroller: ".cards-container", 
                    start: "left 95%",
                    end: "left 30%",
                    scrub: 1,
                    horizontal: true
                },
                x: 350,
                opacity: 0
            });
        }
    });

    const chipsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".chips-comparison",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=5000"
        }
    });

    gsap.set(".m5-text, .m5-screen", { autoAlpha: 1 });
    gsap.set(".m4p-text, .m4m-text, .m4p-screen, .m4m-screen", { autoAlpha: 0 });
    gsap.set(".m4p-text, .m4m-text", { y: 40 });

    chipsTl
        .to({}, { duration: 1.5 })
        .addLabel("toM4P")
        .to(".m5-text", { autoAlpha: 0, y: -40, duration: 1 }, "toM4P")
        .to(".m5-screen", { autoAlpha: 0, duration: 1 }, "toM4P")
        .to(".m5-icon", { className: "nav-icon m5-icon", duration: 0.3 }, "toM4P")
        .to(".m4p-text", { autoAlpha: 1, y: 0, duration: 1 }, "toM4P")
        .to(".m4p-screen", { autoAlpha: 1, duration: 1 }, "toM4P")
        .to(".m4p-icon", { className: "nav-icon m4p-icon active", duration: 0.3 }, "toM4P")
        .to({}, { duration: 1.5 })
        .addLabel("toM4M")
        .to(".m4p-text", { autoAlpha: 0, y: -40, duration: 1 }, "toM4M")
        .to(".m4p-screen", { autoAlpha: 0, duration: 1 }, "toM4M")
        .to(".m4p-icon", { className: "nav-icon m4p-icon", duration: 0.3 }, "toM4M")
        .to(".m4m-text", { autoAlpha: 1, y: 0, duration: 1 }, "toM4M")
        .to(".m4m-screen", { autoAlpha: 1, duration: 1 }, "toM4M")
        .to(".m4m-icon", { className: "nav-icon m4m-icon active", duration: 0.3 }, "toM4M")
        .to({}, { duration: 1.5 });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".connect-cont",
            start: "top 70%",
            end: "top 35%",
            scrub: 1,
            ease: "power4.out"
        }
    })
    .from(".connect-subtitle", {y: 50, opacity: 0})
    .from(".connect-title", {y: 50, opacity: 0})
    .from(".connect-txt", { y: 50, opacity: 0 });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".img-1",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2,
        }
    })
    .from(".img-1 img", {x: 250, opacity: 0, ease: "sine.out"})
    .from(".img-2 img", {x: -250, opacity: 0, ease: "sine.out"});


    gsap.timeline({
        scrollTrigger: {
            trigger: ".brigth-cont",
            start: "top top",
            end: "+=4000",
            pin: true,
            scrub: 1,
        }
    })

    .to(".brigth-photo img", {
        opacity: 0.6,
        duration: 2
    })
    .from(".brigth-list span", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 2
    }, "-=2")
    .to({}, { duration: 1 })
    .to(".brigth-list", {
        opacity: 0,
        y: -100,
        stagger: 0.3,
        duration: 2
    })
    .to(".brigth-photo img", {
        opacity: 1,
        duration: 1
    }, "-=1")
    .to(".brigth-photo img", {
        scale: 0.75, 
        clipPath: "inset(0% 0% 0% 0%)", 
        ease: "power1.inOut", 
        duration: 4
    })
    .from(".brigth-desc", {
        y: 50,
        opacity: 0,
        duration: 2
    }, "-=1");
});