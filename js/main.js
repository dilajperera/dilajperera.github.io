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

    var images = [ 'DAM_2350','ABC_3275', 'ABC_3279', 'ABC_3287', 'ABC_3294', 'DAM_2742', 'ABC_3302','ABC_3305', 'ABC_3314', 'ABC_3317', 'ABC_3327', 'ABC_3331', 'ABC_3337',
	'ABC_3343', 'DAM_2773', 'DAM_2810', 'DAM_2815', 'DAM_2820', 'DAM_2822', 'DAM_2824', 'ABC_3395', 'ABC_3398', 'ABC_3410', 'ABC_3413', 'ABC_3417',
	'ABC_3426', 'ABC_3427', 'ABC_3430', 'ABC_3448', 'ABC_3462', 'ABC_3466', 'ABC_3470', 'ABC_3487', 'ABC_3493', 'ABC_3502', 'ABC_3503', 'ABC_3507', 'ABC_3514', 'ABC_3516', 'ABC_3529', 'ABC_3535', 'ABC_3552', 'ABC_3555', 'ABC_3558',
	'ABC_3562', 'ABC_3566', 'ABC_3585', 'ABC_3591', 'ABC_3594', 'ABC_3610', 'ABC_3630', 'ABC_3634', 'ABC_3638', 'ABC_3640', 'ABC_3642', 'ABC_3644', 'ABC_3645', 'ABC_3648',
	'ABC_3649', 'ABC_3572', 'ABC_3658', 'ABC_3667', 'ABC_3682', 'ABC_3684', 'ABC_3686', 'ABC_3694', 'ABC_3698', 'ABC_3711', 'ABC_3712', 'ABC_3717', 'ABC_3718', 'ABC_3721',
	'ABC_3723', 'ABC_3735', 'ABC_3741', 'ABC_3752', 'ABC_3769', 'ABC_3773', 'ABC_3775', 'ABC_3783', 'ABC_3790', 'ABC_3845', 'ABC_3857', 'ABC_3859',
	'ABC_3888', 'DAM_3011', 'ABC_3942', 'ABC_3956', 'ABC_4016', 'ABC_4029', 'DAM_3056', 'ABC_4076', 'ABC_4079', 'ABC_4081', 'ABC_4083', 'ABC_4085', 'ABC_4087', 'ABC_4092',
	'ABC_4097', 'ABC_4099', 'ABC_4131', 'ABC_4139', 'ABC_4155', 'ABC_3824', 'ABC_3960', 'ABC_4226', 'DAM_2914', 'DAM_2929', 'ABC_4240', 'ABC_4278', 'DAM_2951', 'DAM_2999',
    'ABC_4354', 'ABC_4362', 'ABC_4366', 'ABC_4370', 'ABC_4386', 'DAM_3064', 'DAM_3066', 'ABC_4413', 'ABC_4416', 'ABC_4419', 'ABC_4430', 'ABC_4440', 'DAM_1981', 'DAM_1994',
    'DAM_1998', 'DAM_2011', 'DAM_2014', 'DAM_2020', 'DAM_2030', 'DAM_2038', 'DAM_2041', 'DAM_2052', 'DAM_2062', 'DAM_2069', 'DAM_2071', 'DAM_2077', 'DAM_2081', 'DAM_2090', 'DAM_2096',
    'DAM_2103', 'DAM_2109', 'DAM_2114', 'DAM_2116', 'DAM_2122', 'DAM_2127', 'DAM_2134', 'DAM_2142', 'DAM_2145', 'DAM_2165', 'DAM_2169', 'DAM_2174', 'DAM_2201', 'DAM_2204',
    'DAM_2208', 'DAM_2211', 'DAM_2222', 'DAM_2227', 'DAM_2229', 'DAM_2237', 'DAM_2243', 'DAM_2246', 'DAM_2249', 'DAM_2263', 'DAM_2266', 'DAM_2276', 'DAM_2284', 'DAM_2287', 'DAM_2296',
    'DAM_2302', 'DAM_2310', 'DAM_2317', 'DAM_2323', 'DAM_2342', 'DAM_2363', 'DAM_2392', 'DAM_2404', 'DAM_2413', 'DAM_2416', 'DAM_2426', 'DAM_2431', 'DAM_2441', 'DAM_2443', 'DAM_2450', 'DAM_2457', 'DAM_2538', 'DAM_2544', 'DAM_2563',
    'DAM_2571', 'DAM_2580', 'DAM_2596', 'DAM_2603', 'DAM_2606', 'DAM_2622', 'DAM_2645', 'DAM_2656', 'DAM_2661', 'DAM_2669', 'DAM_2675', 'DAM_2677', 'DAM_2685', 'DAM_2694',
    'DAM_2710', 'DAM_2715', 'DAM_2745', 'DAM_2782', 'DAM_2832', 'DAM_2992',
    'DSC_0458', 'DSC_0329', 'DSC_0359', 'DSC_0378', 'DSC_0382', 'DSC_0392', 'DSC_0400', 'DSC_0416', 'DSC_0421', 'DSC_0434', 'DSC_0485', 'DSC_0496', 'DSC_0500', 'DSC_0504',
    'DSC_0509', 'DSC_0515', 'DSC_0529', 'DSC_0555', 'DSC_0563', 'DSC_0577', 'DSC_0606', 'DSC_0613', 'DSC_0627', 'DSC_0628', 'DSC_0643', 'DSC_0683', 'DSC_0709', 'DSC_0712',
    'DSC_0720', 'DSC_0736', 'DSC_0797', 'DSC_0847', 'DSC_0855', 'DSC_0813'];
	  images.forEach(function(image){
	  		var imageDiv = $('<div></div>').attr({ class : 'col-md-4 ftco-animate'});
	  		var imagePath = 'images/' + image + '.jpg';
	  		var imageStyle = 'background-image: url(' + imagePath + ')';
	  		var aTag = $('<a></a>').attr({ href : imagePath, class : 'lazy photography-entry img image-popup d-flex justify-content-center align-items-center', style : imageStyle})
	  					.append($('<div></div>').attr({class : 'overlay'}));
	  		imageDiv.append(aTag);
	  	    $('#galleryContainer').append(imageDiv);
	  });

 	$("img.lazy").Lazy({
                placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."
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

