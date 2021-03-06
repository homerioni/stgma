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
    slidesPerView: 3,
    spaceBetween: rem(5),

    grid: {
        rows: 2,
        fill: 'row',
    },

    autoplay: {
        duration: 3000,
    },
});

const advantages_slider = new Swiper('.advantages__slider', {
    direction: 'horizontal',
    slidesPerView: 2.2,
    spaceBetween: rem(7.4),
    loop: true,
    centeredSlides: true,

    autoplay: {
        duration: 5000,
    },

    pagination: {
        el: '.advantages__pagination',
        type: 'bullets',
    },
});