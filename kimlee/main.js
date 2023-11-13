const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
  const slideWidth = slides[currentIndex].offsetWidth;
  const translateX = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function autoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

carousel.addEventListener("click", nextSlide);
carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", autoSlide);

autoSlide();

updateCarousel();