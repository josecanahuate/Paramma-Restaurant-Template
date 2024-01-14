;(function($){
    "use strict";


    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
	var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	var dropToggle = $('.menu_right > li').has('ul').children('a');
    dropToggle.on('click', function() {
        dropToggle.not(this).closest('li').find('ul').slideUp(200);
        $(this).closest('li').children('ul').slideToggle(200);
        return false;
    });
	
	
	$( ".toggle_icon" ).on('click', function() {
		$( 'body' ).toggleClass( "open" );
	});
	
	
	$('.side_menu .list.menu_right').mCustomScrollbar({
		theme:"dark",
	});
	
	/*----------------------------------------------------*/
    /*  Home Slider js
    /*----------------------------------------------------*/
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 5000,
		},
		speed: 2000,
		loop: true,
    });




    /*-------------------------------------------------------------------------------
    Brand Slider 
	-------------------------------------------------------------------------------*/
    $(".brand-carousel").owlCarousel({
        items: 1,
        autoplay:false,
        loop:true,
        nav:false,
        margin: 30,
        dots:false,
        responsive: {
            0: {
                items: 1,
            },
            420: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            }
        }
      });

	//* TESTIMONIALS
	var review = $('.client_review_part');
	if (review.length) {
	  review.owlCarousel({
		items: 3,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		nav: false,
		margin: 20,
		center: true,
		responsive:{
		  0:{
			  items:1,
			  dots: false
		  },
		  600:{
			  items:2,
		  },
		  1000:{
			  items:3,
		  }
	  }
	  });
	}


	/*----------------------------------------------------*/
    /*  MailChimp Slider
    /*----------------------------------------------------*/

	$('select').niceSelect();

    // Owl Carousel
    if ($('.owl-banner').length) {
        $('.owl-banner').owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          dots: false,
        //   autoplay: 2500,
          nav: true,
          navText: ["<img src='img/next.png'>", "<img src='img/next.png'>"]
        });
      }



    /**
     * Init swiper sliders
     */
    function initSwiper() {
        document.querySelectorAll('.swiper').forEach(function(swiper) {
        let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
        new Swiper(swiper, config);
        });
    }
    window.addEventListener('load', initSwiper);



	// PRELOADER
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


  /**
   * Animation on scroll function and init
   */
    new WOW().init();



})(jQuery)