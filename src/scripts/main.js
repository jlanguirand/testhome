// src/scripts/main.js

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is loaded
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Fun Facts Rotator
    const funFacts = [
        "I once taught a squirrel to code in assembly language. It's now a lead developer.",
        "My coffee brews itself, out of sheer respect.",
        "I can parallel park a spaceship on the first try.",
        "My shadow has its own fan club.",
        "I'm fluent in sarcasm, ancient Sumerian, and the language of dolphins.",
        "Even my typos are grammatically perfect.",
        "I've counted to infinity. Twice.",
        "My ideas are so good, they often spontaneously generate confetti.",
        "I can make a grown-up cry... tears of joy, of course.",
        "My smile is known to increase local market value."
    ];
    let currentFactIndex = 0;
    const factDisplay = document.getElementById('fact-display');
    const nextFactBtn = document.getElementById('next-fact-btn');

    function displayFact() {
        if (factDisplay) {
            factDisplay.style.opacity = 0; // Fade out
            setTimeout(() => {
                factDisplay.textContent = funFacts[currentFactIndex];
                factDisplay.style.opacity = 1; // Fade in
            }, 300); // Match this to CSS transition duration if any
        }
    }

    if (nextFactBtn) {
        nextFactBtn.addEventListener('click', () => {
            currentFactIndex = (currentFactIndex + 1) % funFacts.length;
            displayFact();
        });
    }

    // Initial fact display
    displayFact();

    // Automatic fact rotation (optional)
    setInterval(() => {
        currentFactIndex = (currentFactIndex + 1) % funFacts.length;
        displayFact();
    }, 8000); // Change fact every 8 seconds

    // Particle background effect
    const particleContainer = document.querySelector('.particle-container');
    function createParticle() {
        if (!particleContainer) return; // Ensure container exists

        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 2; // Size between 2px and 7px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // Duration between 5s and 15s
        particle.style.animationDelay = `-${Math.random() * 10}s`; // Random start delay
        particleContainer.appendChild(particle);

        // Remove particle after animation to prevent DOM bloat
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // Generate a continuous stream of particles (increased frequency for more "crazy")
    setInterval(createParticle, 100); // Create a new particle every 100ms

    // Logic for "Uncover My Legendary Status" button
    const uncoverButton = document.getElementById('uncover-button');
    const hiddenRevelationSection = document.getElementById('hidden-revelation');

    if (uncoverButton && hiddenRevelationSection) {
        uncoverButton.addEventListener('click', () => {
            // Toggle the 'hidden' class
            hiddenRevelationSection.classList.toggle('hidden');

            // Add/remove classes for a smooth reveal animation
            if (!hiddenRevelationSection.classList.contains('hidden')) {
                // If it's now visible, trigger the reveal animation
                setTimeout(() => {
                    hiddenRevelationSection.classList.remove('scale-95', 'opacity-0');
                    hiddenRevelationSection.classList.add('scale-100', 'opacity-100');
                    // Scroll to the revealed section
                    hiddenRevelationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 10); // Small delay to allow 'hidden' to be removed before transition starts
            } else {
                // If it's becoming hidden, reverse the animation before hiding
                hiddenRevelationSection.classList.remove('scale-100', 'opacity-100');
                hiddenRevelationSection.classList.add('scale-95', 'opacity-0');
                // After the transition, truly hide it
                setTimeout(() => {
                    hiddenRevelationSection.classList.add('hidden');
                }, 700); // Match this to the transition duration
            }
        });
    }
});
