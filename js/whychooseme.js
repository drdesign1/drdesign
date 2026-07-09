document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".single-why-me");

    // Initial State: Pehle elements ko transparent aur thoda niche rakhein
    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
    });

    // Scroll check karne ka function
    const triggerAnimation = () => {
        const triggerPoint = (window.innerHeight / 5) * 4.2;

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerPoint) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    // Scroll aur page load dono par animation run hoga
    window.addEventListener("scroll", triggerAnimation);
    triggerAnimation(); 
});