const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

const slides = [
    {
        title: "TATA Tiago",
        price: "Price starts at ₹4.69 Lakh*",
        tagline: "Just WOW!",
        image: "images/desktop-tiago-new.avif",

        // Interactivity Studio SmartLink
        smartlink: "https://interactivity.studio/ugc/barukula_snehitha8870/demo-tiago"
    },

    {
        title: "TATA Punch",
        price: "Price starts at ₹6.13 Lakh*",
        tagline: "Go Anywhere!",
        image: "images/d-home-new-punch-banner-new.avif",

        smartlink: ""
    }
];

let currentSlide = 0;

const title = document.querySelector(".content-box h1");
const price = document.querySelector(".content-box p");
const tagline = document.querySelector(".content-box h3");
const heroImage = document.querySelector(".hero-image");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateSlide() {

    title.textContent = slides[currentSlide].title;
    price.textContent = slides[currentSlide].price;
    tagline.textContent = slides[currentSlide].tagline;

    heroImage.src = slides[currentSlide].image;

    // Attach SmartLink to current image
    heroImage.setAttribute(
        "data-smartlink",
        slides[currentSlide].smartlink
    );
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener("click", () => {
    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    updateSlide();
});

// Initialize first slide
updateSlide();