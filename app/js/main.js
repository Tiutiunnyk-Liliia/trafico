$(function () {

    $('.faq__item').on('click', function () {
        $(this).toggleClass('active')
    });

    $('.about__slider').slick({
        infinite: true,
        //centerMode: true,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/prev.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/next.png" alt="">',
    });
});