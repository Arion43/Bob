const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const slideInfo = document.getElementById("bottom"); // Элемент для отображения информации о слайде

let currentSlideIndex = 0;

// Добавление подписи к каждому слайду
const captions = [
    "Подводный футбол",
    "Лучшие друзья",
    "Весёлый пляж",
    "Телеыонный звонок",
    "Справедливость"
];

function updateSlideInfo() {
    slideInfo.textContent = `${currentSlideIndex + 1} слайд из ${slides.length} — ${captions[currentSlideIndex]}`;
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * slider.clientWidth}px)`;
    updateSlideInfo();
}

function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        showSlide();
    }
}

function previousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide();
    }
}

// Инициализация слайдера
updateSlideInfo();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

// Проверка, есть ли данные пользователя в localStorage
if (!localStorage.getItem('username')) {
    window.location.href = 'index.html';
  }
