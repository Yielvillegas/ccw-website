// =========================================
// MOBILE HAMBURGER MENU
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");


// Open / Close menu
menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});


// Close menu after clicking a navigation link
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("active");
    });
});

// =========================================
// IMAGE LIGHTBOX
// =========================================

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");


// Open image
galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});


// Close using X
lightboxClose.addEventListener("click", function () {

    lightbox.classList.remove("active");

});


// Close by clicking outside the image
lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});


// Close using ESC key
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});

// =========================================
// PHONE BACK ARROWS
// =========================================

document.addEventListener("click", function (event) {

    if (event.target.closest(".phone-back")) {

        window.location.hash = "#home";

    }

});

const programDetails = document.getElementById("program-details");

const programLink = document.querySelector(".program-link");

programLink.addEventListener("click", function () {
    programDetails.style.display = "block";
});