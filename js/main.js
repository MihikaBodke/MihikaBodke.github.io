  
$(document).ready(function () {




    // Owl-carousel

    $('.sitemain .aboutarea .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:3000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    

   

});