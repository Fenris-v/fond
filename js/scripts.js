$(document).ready(() => {
    /**
     * SLICK
     */
    $('.news__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/news/arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/news/arrow.png"></button>',
        slidesToShow: 1,
        autoplay: true
    });
});
