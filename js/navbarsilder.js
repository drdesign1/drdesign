document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector("nav");
    const modal = document.getElementById("slider");
    const sliderImg = document.getElementById("slider-img");

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const closeBtn = document.querySelector(".close");

    let currentIndex = 0;
    let currentGallery = [];

    const galleries = {
        brand: ["images/brand/logo1.jpg", "images/brand/logo2.jpg"],
        packaging: ["images/packaging/p1.jpg", "images/packaging/p2.jpg"],
        marketing: ["images/marketing/m1.jpg", "images/marketing/m2.jpg"],
        print: ["images/print/n1.jpg", "images/print/n2.jpg"],
        web: ["images/web/w1.jpg", "images/web/w2.jpg"],
        outdoor: ["images/outdoor/o1.jpg", "images/outdoor/o2.jpg"]
    };

    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", () => {

            const category = item.getAttribute("data-category");

            currentGallery = galleries[category];
            currentIndex = 0;

            sliderImg.src = currentGallery[currentIndex];
            modal.style.display = "block";

            navbar.classList.add("hide");
        });
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        sliderImg.src = currentGallery[currentIndex];
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        sliderImg.src = currentGallery[currentIndex];
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        navbar.classList.remove("hide");
    });

});

// ✅ Fixed toggleMenu function (removed duplicate)
function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    }
}

// ✅ Close menu when clicking outside (fixed condition)
document.addEventListener("click", function (e) {
    let menu = document.getElementById("menu");
    let toggle = document.querySelector(".menu-toggle");

    if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
});

// ✅ Close menu when clicking on any menu link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", (e) => {
        // Don't close if clicking on dropdown parent link (Services)
        const parentLi = link.closest('li.dropdown');
        if (parentLi && window.innerWidth <= 768) {
            // Allow dropdown to toggle, don't close menu
            return;
        }
        document.getElementById("menu")?.classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});



















// 1. Hamburger Menu Toggle Function
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// 2. Mobile Click Dropdown & Auto-Close Logic
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const menu = document.getElementById("menu");

  // Dropdown open/close karne ke liye
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation(); // Click event ko upar tak jaane se rokega
        const parent = this.closest(".dropdown");
        
        // Baki sabhi dropdowns ko band karein sirf isko chhod kar
        document.querySelectorAll(".dropdown").forEach(d => {
          if (d !== parent) d.classList.remove("open");
        });

        parent.classList.toggle("open");
      }
    });
  });

  // Jab dropdown ke andar ke kisi LINK par click ho, toh menu auto-close ho jaye
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
  dropdownLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        // Main menu ko band karein
        menu.classList.remove("active");
        // Saare khule hue dropdowns ko band karein
        document.querySelectorAll(".dropdown").forEach(d => {
          d.classList.remove("open");
        });
      }
    });
  });
});














  function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("active");
    }

    document.addEventListener("DOMContentLoaded", function () {
      const dropdownToggle = document.querySelector(".dropdown-toggle");
      const dropdownParent = document.querySelector(".dropdown");

      if (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownParent.classList.toggle("open");
          }
        });
      }
    });










    
    // Hamburger Menu
    function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("active");
    }

    // Mobile Click Dropdown Logic
    document.addEventListener("DOMContentLoaded", function () {
      const dropdownToggle = document.querySelector(".dropdown-toggle");
      const dropdownParent = document.querySelector(".dropdown");

      if (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownParent.classList.toggle("open");
          }
        });
      }
    });
