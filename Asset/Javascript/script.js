// slider

var swiper = new Swiper(".card_slider", {
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },

    speed: 3000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
        320: {
            slidesPerView: 2,

        },
        640: {
            slidesPerView: 3,

        },
        768: {
            slidesPerView: 4,

        },
        1024: {
            slidesPerView: 5,
        },
    },

});

var swiper = new Swiper(".highlights", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".OfferingMain", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1450: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".Offering", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1450: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".managedSpaceswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
});