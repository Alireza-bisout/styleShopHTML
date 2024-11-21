let autoplay = {
    delay: 3000,
    disableOnInteraction: false,
}
let loop = true

var swiper = new Swiper(".headerSliderDesktop", {
    pagination: {
        el: ".swiper-pagination",

    },
    autoplay,
    loop,
    navigation: {
        nextEl: ".button-prev",
        prevEl: ".button-next",
    },
});

var swiper = new Swiper(".headerSliderMobile", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    autoplay,
    centeredSlides: true,
    loop,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper(".season-collection-slider", {
    slidesPerView: 1.5, // mobile
    spaceBetween: 10,
    loop: true,
    speed: 4800,
    autoplay,
    breakpoints: {
        768: {
            slidesPerView: 2.2, // tablet
        },
        992: {
            slidesPerView: 4, // desktop
        },
        1200: {
            slidesPerView: 5, // large
        },
    },
});