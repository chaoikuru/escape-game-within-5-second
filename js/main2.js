$(function($){


    $('.imagess').slick({
        arrows: true,
        autoplay: false,
        dots: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    });
    