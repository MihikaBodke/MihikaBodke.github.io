$(document).ready(function () {



    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .mainmenu').addClass('navbar_fixed');
                } else {
                    $('.header_area .mainmenu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});