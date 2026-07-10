document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector("nav");
    const modal = document.getElementById("slider");
    const sliderImg = document.getElementById("slider-img");
    const slideCount = document.getElementById("slide-count");

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const closeBtn = document.querySelector(".close");

    let currentIndex = 0;
    let currentGallery = [];

    // CATEGORY GALLERIES
const galleries = {

    brand: [
        "images/brand/logo1.jpg",
        "images/brand/logo2.jpg",
        "images/brand/logo3.jpg",
        "images/brand/logo4.jpg",
        "images/brand/logo5.jpg",
        "images/brand/logo6.jpg",
        "images/brand/logo7.jpg",
        "images/brand/logo8.jpg",
        "images/brand/logo9.jpg",
        "images/brand/logo10.jpg",
        "images/brand/logo11.jpg",
        "images/brand/logo12.jpg",
        "images/brand/logo13.jpg",
        "images/brand/logo14.jpg",
        "images/brand/logo15.jpg"
    ],

    packaging: [
        "images/packaging/p1.jpg",
        "images/packaging/p2.jpg",
        "images/packaging/p3.jpg",
        "images/packaging/p4.jpg",
        "images/packaging/p5.jpg",
        "images/packaging/p6.jpg",
        "images/packaging/p7.jpg",
        "images/packaging/p8.jpg",
        "images/packaging/p9.jpg",
        "images/packaging/p10.jpg",
        "images/packaging/p11.jpg",
        "images/packaging/p12.jpg",
        "images/packaging/p13.jpg",
        "images/packaging/p14.jpg",
        "images/packaging/p15.jpg"
    ],

    marketing: [
        "images/marketing/m1.jpg",
        "images/marketing/m2.jpg",
        "images/marketing/m3.jpg",
        "images/marketing/m4.jpg",
        "images/marketing/m5.jpg",
        "images/marketing/m6.jpg",
        "images/marketing/m7.jpg",
        "images/marketing/m8.jpg",
        "images/marketing/m9.jpg",
        "images/marketing/m10.jpg",
        "images/marketing/m11.jpg",
        "images/marketing/m12.jpg",
        "images/marketing/m13.jpg",
        "images/marketing/m14.jpg",
        "images/marketing/m15.jpg"
    ],

    print: [
        "images/print/n1.jpg",
        "images/print/n2.jpg",
        "images/print/n3.jpg",
        "images/print/n4.jpg",
        "images/print/n5.jpg",
        "images/print/n6.jpg",
        "images/print/n7.jpg",
        "images/print/n8.jpg",
        "images/print/n9.jpg",
        "images/print/n10.jpg",
        "images/print/n11.jpg",
        "images/print/n12.jpg",
        "images/print/n13.jpg",
        "images/print/n14.jpg",
        "images/print/n15.jpg"
    ],

    web: [
        "images/web/w1.jpg",
        "images/web/w2.jpg",
        "images/web/w3.jpg",
        "images/web/w4.jpg",
        "images/web/w5.jpg",
        "images/web/w6.jpg",
        "images/web/w7.jpg",
        "images/web/w8.jpg",
        "images/web/w9.jpg",
        "images/web/w10.jpg",
        "images/web/w11.jpg",
        "images/web/w12.jpg",
        "images/web/w13.jpg",
        "images/web/w14.jpg",
        "images/web/w15.jpg"
    ],

    outdoor: [
        "images/outdoor/o1.jpg",
        "images/outdoor/o2.jpg",
        "images/outdoor/o3.jpg",
        "images/outdoor/o4.jpg",
        "images/outdoor/o5.jpg",
        "images/outdoor/o6.jpg",
        "images/outdoor/o7.jpg",
        "images/outdoor/o8.jpg",
        "images/outdoor/o9.jpg",
        "images/outdoor/o10.jpg",
        "images/outdoor/o11.jpg",
        "images/outdoor/o12.jpg",
        "images/outdoor/o13.jpg",
        "images/outdoor/o14.jpg",
        "images/outdoor/o15.jpg"
    ]
};

    // ✅ NEW FUNCTION (FIX)
    function showSlide() {
        if (!currentGallery[currentIndex]) return;

        sliderImg.src = currentGallery[currentIndex];
        slideCount.textContent =`${currentIndex + 1} / ${currentGallery.length}`;

        // ❌ agar image load fail ho → next pe jao
        sliderImg.onerror = () => {
            console.log("Skipping:", currentGallery[currentIndex]);
            currentIndex = (currentIndex + 1) % currentGallery.length;
            showSlide();
        };
    }

    // CLICK EVENT
    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", () => {

            const category = item.getAttribute("data-category");
            
            console.log("Category:", category);
            console.log("Gallery:", galleries[category]);
            console.log("Length:", galleries[category]?.length);

            currentGallery = galleries[category];
            currentIndex = 0;

            showSlide(); // 🔥 FIX HERE
            modal.style.display = "flex";
            modal.style.opacity = "1";
            document.querySelector(".wa-widget-container").classList.add("wa-hide");

            navbar.classList.add("hide");
        });
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        showSlide(); // 🔥 FIX HERE
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        showSlide(); // 🔥 FIX HERE
    });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    navbar.classList.remove("hide");

    document.querySelector(".wa-widget-container").classList.remove("wa-hide");
});
});



// ESC KEY CLOSE
document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){
        modal.style.display = "none";
        navbar.classList.remove("hide");

        document.querySelector(".wa-widget-container")
        .classList.remove("wa-hide");
    }

});