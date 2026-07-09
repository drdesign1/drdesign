const upBtn = document.getElementById("upBtn");

// Show/Hide "Scroll to Top" button based on user scroll position
window.onscroll = function() {
    if (window.scrollY > 300) {
        upBtn.classList.add("visible");
    } else {
        upBtn.classList.remove("visible");
    }
};

/**
 * Smoothly scrolls the window to the very top
 */
function goTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

/**
 * Smoothly scrolls the window to the bottom of the document
 */
function goBottom() {
    window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth' 
    });
}