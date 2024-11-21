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