const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const slides = [
  {
    title: "TATA Tiago",
    price: "Price starts at ₹4.69 Lakh*",
    tagline: "Just WOW!"
  },
  {
    title: "TATA Punch",
    price: "Price starts at ₹6.13 Lakh*",
    tagline: "Go Anywhere!"
  },
  {
    title: "TATA Nexon",
    price: "Price starts at ₹8.00 Lakh*",
    tagline: "New Forever!"
  }
];

let currentSlide = 0;

const title = document.querySelector(".content-box h1");
const price = document.querySelector(".content-box p");
const tagline = document.querySelector(".content-box h3");

function updateSlide() {
  title.textContent = slides[currentSlide].title;
  price.textContent = slides[currentSlide].price;
  tagline.textContent = slides[currentSlide].tagline;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});