// ==========================================
// STORY SCROLL ANIMATION
// ==========================================

const storyCards = document.querySelectorAll(".story-card");

window.addEventListener("scroll", () => {

    storyCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});


// INITIAL STYLE

storyCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "all 0.8s ease";

});