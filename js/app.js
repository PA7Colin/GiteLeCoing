const swiper = new Swiper('.mySwiper', {
    /* effect: 'coverflow', */
    grabCursor: true,
    centeredSlider: true,
    loop: true,
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        slidesshadow: true

    },
    slidesPerview: 'auto',
    /* pagination:{
        el: '.swiper-pagination'
    } */
})