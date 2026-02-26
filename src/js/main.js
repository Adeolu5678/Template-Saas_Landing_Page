document.addEventListener("DOMContentLoaded", () => {
    // --- GSAP ScrollTrigger Orchestration ---
    gsap.registerPlugin(ScrollTrigger);

    // Initial Load Animations
    const tl = gsap.timeline();

    // Fade in Nav
    tl.to(".reveal-nav", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, 0);

    // Stagger Hero Content
    tl.to(".reveal-hero", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
    }, 0.2);

    // Scroll Animations for sections
    gsap.utils.toArray('.reveal-scroll').forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Stagger Bento Cards
    gsap.from(".bento-card", {
        scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    // Parallax Hero Glow
    gsap.to(".hero-glow", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200,
        opacity: 0.5
    });

    // --- Interactive Hover Glow for Bento Cards ---
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouseX', `${x}px`);
            card.style.setProperty('--mouseY', `${y}px`);
        });
    });
});
