const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlider: true,
    loop: false,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        slideShadows: false
    },
    slidesPerView: 'auto',
})