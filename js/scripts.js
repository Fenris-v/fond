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
        autoplay: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', function (e) {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });
});
