gsap.from(".hero h1", {
    opacity: 0, // Starts the heading invisible
    y: 40, // Starts the heading slightly lower
    duration: 1.2, // Controls animation speed
    ease: "power3.out" // Makes the movement smooth
});

gsap.from(".stat", {
    opacity: 0, // Starts statistics invisible
    y: 25, // Starts them slightly lower
    duration: 0.8, // Controls animation speed
    stagger: 0.15, // Shows each statistic slightly after the previous one
    delay: 0.5, // Waits briefly after the heading begins
    ease: "power2.out" // Gives a smooth finish
});

gsap.registerPlugin(ScrollTrigger); // Activates GSAP ScrollTrigger

gsap.to(".plant", {
    y: -220,
    scale: 1.35,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1000",
        scrub: 1.2
    }
});

gsap.to(".stem", {
    scaleY: 1.35,
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1000",
        scrub: 1.2
    }
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1000",
        scrub: 1
    }
})
gsap.to(".flower", {
    opacity: 1,
    scale: 1,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1000",
        scrub: 1.2
    }
});

const dots = document.querySelectorAll(".dot");

ScrollTrigger.create({
    trigger: ".hero",
    start: "top top",
    end: "+=1000",
    onUpdate: (self) => {
        const index = Math.min(
            Math.floor(self.progress * dots.length),
            dots.length - 1
        );

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }
});