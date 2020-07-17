$(function () {

    $('.faq__item').on('click', function () {
        $('.faq__item').removeClass('active')
    });

    $('.faq__item').on('click', function () {
        $(this).toggleClass('active')
    });

    $('.about__slider').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/prev.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/next.png" alt="">',
        responsive:[
            {
            breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }

        },
        ]
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu').toggleClass('active')
    });
});