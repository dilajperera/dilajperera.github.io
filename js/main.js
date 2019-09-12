 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	var images = [ 'DAM_2350','ABC_3275', 'ABC_3279', 'ABC_3287', 'ABC_3294', 'ABC_3302', 'ABC_3305', 'ABC_3314', 'ABC_3317', 'ABC_3327', 'ABC_3331', 'ABC_3337',
	'ABC_3343', 'DAM_2773', 'DAM_2810', 'ABC_3374', 'DAM_2820', 'ABC_3380', 'ABC_3388', 'DAM_2824', 'ABC_3395', 'ABC_3398', 'ABC_3410', 'ABC_3413', 'ABC_3417',
	'ABC_3426', 'ABC_3427', 'ABC_3430', 'ABC_3448', 'ABC_3374', 'ABC_3470', 'ABC_3493', 'ABC_3502', 'ABC_3524', 'ABC_3535', 'ABC_3552', 'ABC_3555', 'ABC_3558',
	'ABC_3562', 'ABC_3566', 'ABC_3591', 'ABC_3594', 'ABC_3610', 'ABC_3630', 'ABC_3634', 'ABC_3638', 'ABC_3640', 'ABC_3642', 'ABC_3644', 'ABC_3645', 'ABC_3648',
	'ABC_3649', 'ABC_3658', 'ABC_3667', 'ABC_3682', 'ABC_3684', 'ABC_3686', 'ABC_3694', 'ABC_3698', 'ABC_3711', 'ABC_3712', 'ABC_3717', 'ABC_3718', 'ABC_3721',
	'ABC_3723', 'ABC_3735', 'ABC_3741', 'ABC_3752', 'ABC_3769', 'ABC_3773', 'ABC_3775', 'ABC_3783', 'ABC_3790', 'ABC_3819', 'ABC_3845', 'ABC_3857', 'ABC_3859',
	'ABC_3888', 'DAM_3011', 'ABC_3942', 'ABC_3956', 'ABC_3957', 'ABC_4016', 'ABC_4029', 'ABC_4076', 'ABC_4079', 'ABC_4081', 'ABC_4083', 'ABC_4085', 'ABC_4087', 'ABC_4092',
	'ABC_4097', 'ABC_4099', 'ABC_4131', 'ABC_4139', 'ABC_4155', 'ABC_3824', 'ABC_3960', 'ABC_4226', 'DAM_2914', 'DAM_2929', 'ABC_4240', 'ABC_4278', 'DAM_2951',
	'ABC_4099', 'ABC_4354', 'ABC_4362', 'ABC_4366', 'ABC_4370', 'ABC_4386', 'DAM_3064', 'ABC_4413', 'ABC_4416', 'ABC_4419', 'ABC_4430', 'ABC_4440' ];
	  images.forEach(function(image){
	  		var imageDiv = $('<div></div>').attr({ class : 'col-md-4 ftco-animate'});
	  		var imagePath = 'images/' + image + '.jpg';
	  		var imageStyle = 'background-image: url(' + imagePath + ');';
	  		var aTag = $('<a></a>').attr({ href : imagePath, class : 'photography-entry img image-popup d-flex justify-content-center align-items-center', style : imageStyle})
	  					.append($('<div></div>').attr({class : 'overlay'}));
	  		imageDiv.append(aTag);
	  		$('#galleryContainer').append(imageDiv);
	  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();


   var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
		});

	};
	mobileMenuOutsideClick();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

})(jQuery);

