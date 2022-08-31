/*
const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        0: {},
    },
    pagination: {
        el: '',
        type: '',
    },
    navigation: {
        nextEl: '',
        prevEl: '',
    },
    autoplay: {
    },
});
*/

// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const new_crypto_slider = new Swiper('.new-crypto__slider', {
    direction: 'horizontal',

    autoplay: {
        duration: 4000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: rem(2),

            grid: {
                rows: 3,
                fill: 'row',
            },
        },

        769: {
            slidesPerView: 2,
            spaceBetween: rem(5),

            grid: {
                rows: 2,
                fill: 'row',
            },
        },
    },
});

const advantages_slider = new Swiper('.advantages__slider', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    autoplay: {
        duration: 5000,
    },

    pagination: {
        el: '.advantages__pagination',
        type: 'bullets',
    },

    breakpoints: {
        0: {
            slidesPerView: 1.4,
            spaceBetween: rem(2),
        },

        769: {
            slidesPerView: 2.2,
            spaceBetween: rem(7.4),
        },
    },
});