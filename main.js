$(function () {
    var top = $(window).scrollTop();
    var navbar = $('nav.navbar');
    var mainPage = $('.icon-scroll');
    var contactPage = $('.arrow');

    if (!top) {
        $(navbar).removeClass('scrolled');
        $(mainPage).removeClass('scrolled');
        $(contactPage).removeClass('scrolled');
    } else {
        $(navbar).addClass('scrolled');
        $(mainPage).addClass('scrolled');
        $(contactPage).addClass('scrolled');
    }
    $(window).scroll(function () {
        top = $(window).scrollTop();

        if (!top) {
            $(navbar).removeClass('scrolled');
            $(mainPage).removeClass('scrolled');
            $(contactPage).removeClass('scrolled');
        } else {
            $(navbar).addClass('scrolled');
            $(mainPage).addClass('scrolled');
            $(contactPage).addClass('scrolled');
        }
    });
});