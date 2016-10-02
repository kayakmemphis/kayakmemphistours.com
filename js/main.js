;(function () {

	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	var sliderMain = function() {

	  	$('#kmt-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#kmt-hero .flexslider .slides > li').css('height', $(window).height());
	  	$(window).resize(function(){
	  		$('#kmt-hero .flexslider .slides > li').css('height', $(window).height());
	  	});

	};

	var centerBlock = function() {
		$('.kmt-section-with-image .kmt-box').css('margin-top', -($('.kmt-section-with-image .kmt-box').outerHeight()/2));
	  	$(window).resize(function(){
	  		$('.kmt-section-with-image .kmt-box').css('margin-top', -($('.kmt-section-with-image .kmt-box').outerHeight()/2));
	  	});
	};

	var responseHeight = function() {
		setTimeout(function(){
			$('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
		}, 1);

		$(window).resize(function(){
			setTimeout(function(){
				$('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
			}, 1);
		})
	};


	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#kmt-offcanvas, .js-kmt-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas-visible') ) {

    			$('body').removeClass('offcanvas-visible');
    			$('.js-kmt-nav-toggle').removeClass('active');

	    	}


	    }
		});

	};


	var offcanvasMenu = function() {
		$('body').prepend('<div id="kmt-offcanvas" />');
		$('#kmt-offcanvas').prepend('<ul id="kmt-side-links">');
		$('body').prepend('<a href="#" class="js-kmt-nav-toggle kmt-nav-toggle"><i></i></a>');
		$('#kmt-offcanvas').append($('#kmt-header nav').clone());
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-kmt-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('kmt-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-kmt-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-kmt-nav-toggle').removeClass('active');
		   }
		});

	};


	var toggleBtnColor = function() {
		if ( $('#kmt-hero').length > 0 ) {
			$('#kmt-hero').waypoint( function( direction ) {
				if( direction === 'down' ) {
					$('.kmt-nav-toggle').addClass('dark');
				}
			} , { offset: - $('#kmt-hero').height() } );

			$('#kmt-hero').waypoint( function( direction ) {
				if( direction === 'up' ) {
					$('.kmt-nav-toggle').removeClass('dark');
				}
			} , {
				offset:  function() { return -$(this.element).height() + 0; }
			} );
		}
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};




	$(function(){
		fullHeight();
		sliderMain();
		centerBlock();
		responseHeight()
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		toggleBtnColor();
		contentWayPoint();
	});


}());
