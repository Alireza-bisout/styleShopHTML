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
    slidesPerView: 1, // mobile
    spaceBetween: 10,
    loop: true,
    speed: 4800,
    autoplay,
    breakpoints: {
        768: {
            slidesPerView: 2, // tablet
        },
        992: {
            slidesPerView: 4, // desktop
        },
        1200: {
            slidesPerView: 4, // large
        },
    },
});



var swiper = new Swiper(".category-slider", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".cat-next",
        prevEl: ".cat-prev",
    },
});


var swiper = new Swiper(".special-ceasonal-clothes-slider", {
    slidesPerView: 2, // mobile
    spaceBetween: 10,
    loop,
    navigation: {
        nextEl: ".special-clothes-next",
        prevEl: ".special-clothes-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2.2, // tablet
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 4, // desktop
        },
        1200: {
            slidesPerView: 4, // large
        },
    },
});

var swiper = new Swiper(".special-sale-slider", {
    slidesPerView: 1.5, // mobile
    spaceBetween: 10,
    loop,
    navigation: {
        nextEl: ".special-sale-next",
        prevEl: ".special-sale-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1.5, // tablet
        },
        992: {
            slidesPerView: 2.5, // desktop
        },
        1200: {
            slidesPerView: 3, // large
        },
    },
});


var swiper = new Swiper(".latest-styles-slider", {
    slidesPerView: 2, // mobile
    spaceBetween: 10,
    loop,
    navigation: {
        nextEl: ".latest-styles-next",
        prevEl: ".latest-styles-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2.2, // tablet
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 4, // desktop
        },
        1200: {
            slidesPerView: 4, // large
        },
    },
});

var swiper = new Swiper(".best-selling-styles-slider", {
    slidesPerView: 2, // mobile
    spaceBetween: 10,
    loop,
    breakpoints: {
        768: {
            slidesPerView: 2.2, // tablet
        },
        992: {
            slidesPerView: 4, // desktop
        },
        1200: {
            slidesPerView: 4, // large
        },
    },
});