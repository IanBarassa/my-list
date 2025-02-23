const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelectorAll("#prevBtn");
const nextBtn = document.querySelectorAll("#nextBtn");
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Event listener for "Next" button
nextBtn.forEach(button => {
    button.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});

// Event listener for "Previous" button
prevBtn.forEach(button => {
    button.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
});

// Show the first slide initially
showSlide(currentSlide);