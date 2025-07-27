// DreamWeave - GSAP Animations
// Cinematic, purposeful animations that guide the user experience

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Set initial states for elements that will animate
    gsap.set('.nav', { y: -100, opacity: 0 });
    gsap.set('.hero-header', { y: 50, opacity: 0 });
    gsap.set('.word', { y: 30, opacity: 0 });
    gsap.set('.tagline', { y: 20, opacity: 0 });
    gsap.set('.animate-section', { y: 40, opacity: 0 });
    gsap.set('.feature', { y: 30, opacity: 0, scale: 0.9 });
    gsap.set('.floating-orb', { scale: 0, opacity: 0 });
    gsap.set('.stars', { opacity: 0 });

    // 1. NAVBAR SLIDE-IN ANIMATION
    // Smooth slide-in from top with elegant easing
    gsap.to('.nav', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
    });

    // 2. HERO SECTION ENTRANCE
    // Orchestrated sequence for maximum impact
    const heroTimeline = gsap.timeline({ delay: 0.8 });
    
    heroTimeline
        .to('.hero-header', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        })
        .to('.word-1', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.6")
        .to('.word-2', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .to('.tagline', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3");

    // 3. BACKGROUND ELEMENTS ANIMATION
    // Floating orbs with staggered entrance
    gsap.to('.floating-orb', {
        scale: 1,
        opacity: 0.6,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
        delay: 1.5
    });

    gsap.to('.stars', {
        opacity: 0.4,
        duration: 3,
        ease: "power1.out",
        delay: 2
    });

    // 4. SCROLL-TRIGGERED FADE-INS
    // Description section
    ScrollTrigger.create({
        trigger: '.description-container',
        start: "top 80%",
        onEnter: () => {
            gsap.to('.description-container', {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            });
        }
    });

    // Features section with staggered animation
    ScrollTrigger.create({
        trigger: '.features',
        start: "top 75%",
        onEnter: () => {
            gsap.to('.features', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            });
            
            gsap.to('.feature', {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.2)",
                stagger: 0.2,
                delay: 0.3
            });
        }
    });

    // CTA section
    ScrollTrigger.create({
        trigger: '.cta-container',
        start: "top 80%",
        onEnter: () => {
            gsap.to('.cta-container', {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            });
        }
    });

    // 5. BUTTON HOVER ANIMATIONS
    // Enhanced button interactions with GSAP
    const animatedButtons = document.querySelectorAll('.animated-btn');
    
    animatedButtons.forEach(button => {
        let hoverTl = gsap.timeline({ paused: true });
        
        hoverTl
            .to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(button.querySelector('.cta-arrow'), {
                x: 8,
                duration: 0.3,
                ease: "power2.out"
            }, 0)
            .to(button, {
                boxShadow: "0 20px 40px rgba(240, 147, 251, 0.4)",
                duration: 0.3,
                ease: "power2.out"
            }, 0);

        button.addEventListener('mouseenter', () => {
            hoverTl.play();
        });

        button.addEventListener('mouseleave', () => {
            hoverTl.reverse();
        });

        // Click pulse effect
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            });

            // Ripple effect
            const ripple = button.querySelector('.cta-ripple');
            gsap.set(ripple, { scale: 0, opacity: 0.3 });
            gsap.to(ripple, {
                scale: 4,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });
        });
    });

    // 6. FEATURE CARD HOVER ANIMATIONS
    const featureCards = document.querySelectorAll('.feature');
    
    featureCards.forEach(card => {
        let cardHoverTl = gsap.timeline({ paused: true });
        
        cardHoverTl
            .to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(card.querySelector('.feature-icon'), {
                rotation: 5,
                scale: 1.1,
                duration: 0.3,
                ease: "back.out(1.7)"
            }, 0);

        card.addEventListener('mouseenter', () => {
            cardHoverTl.play();
        });

        card.addEventListener('mouseleave', () => {
            cardHoverTl.reverse();
        });
    });

    // 7. PARALLAX EFFECTS
    // Subtle parallax for floating orbs
    gsap.to('.orb-1', {
        y: -50,
        rotation: 180,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true
    });

    gsap.to('.orb-2', {
        y: 30,
        rotation: -120,
        duration: 15,
        ease: "none",
        repeat: -1,
        yoyo: true
    });

    gsap.to('.orb-3', {
        y: -30,
        rotation: 90,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true
    });

    // 8. SCROLL-BASED PARALLAX
    gsap.to('.hero-decoration', {
        y: -100,
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // 9. ENHANCED HEADLINE ANIMATION
    // Add extra sparkle to the existing CSS animation
    const headlineWords = document.querySelectorAll('.word');
    
    headlineWords.forEach((word, index) => {
        gsap.to(word, {
            textShadow: "0 0 20px rgba(240, 147, 251, 0.8), 0 0 40px rgba(102, 126, 234, 0.6)",
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.5
        });
    });

    // 10. PERFORMANCE OPTIMIZATION
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0.5);
        ScrollTrigger.batch('.animate-section', {
            onEnter: elements => gsap.set(elements, { opacity: 1, y: 0 }),
            once: true
        });
    }

    console.log('🌟 DreamWeave animations loaded successfully');
});

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: target,
                ease: "power2.inOut"
            });
        }
    });
});
