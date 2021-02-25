import Swiper from "swiper/swiper-bundle";

const swiperSlider = document.querySelector(".swiper-container");

const exampleSlider = new Swiper(swiperSlider, {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    speed: 700,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
    },
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: "<svg><use xlink:href='img/sprites/sprite.svg#arrow-right'></use></svg>",
        prevEl: "<svg><use xlink:href='img/sprites/sprite.svg#arrow-right'></use></svg>",
        hiddenClass: "swiper-button-hidden",
    },
    breakpoints: {
        992: {
            slidesPerView: 2.1,
            allowTouchMove: false,
        }
    }
});

const swiperNext = document.querySelector(".swiper-button-next");
const swiperPrev = document.querySelector(".swiper-button-prev");

swiperNext.addEventListener("click", function() {
    exampleSlider.slideNext();
});

swiperPrev.addEventListener("click", function() {
    exampleSlider.slidePrev();
});