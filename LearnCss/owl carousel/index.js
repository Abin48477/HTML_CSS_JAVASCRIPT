$('.owl-carousel').owlCarousel({
            loop: true,             // infinite loop
            margin: 10,
            nav: false,
            autoplay: true,         // auto slide
            autoplayTimeout: 2000,  // 2 seconds
            autoplayHoverPause: true, // stop on hover
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });