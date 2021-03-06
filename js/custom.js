// custom js file

    // Created on   : 11/08/2017.
    // Theme Name   : CIRO.
    // Description  : CIRO - Responsive Creative Agency Template.
    // Version      : 1.0.
    // Author       : @Unifytheme.
    // Developed by : @Unifytheme.


// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// scroll header
function stickyHeader () {
  var sticky = $('.theme-main-menu'),
      scroll = $(window).scrollTop();

  if (sticky.length) {
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}

// toggle menu for mobile
function mobileDropdown () {
  if($('.main-menu').length) {
    $('.main-menu nav ul li.dropdown-holder').append(function () {
      return '<i class="fa fa-align-justify" aria-hidden="true"></i>';
    });
    $('.main-menu nav ul li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}


// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



// Theme-banner slider 
function BannerSlider () {
  var banner = $("#theme-main-banner");
  if (banner.length) {
      banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
        height: '51%',
        pagination: true,
        thumbnails: false,
        playPause: false,
        autoplay:true,
        pauseOnClick: false,
        hover: false,
        overlayer: true,
        loader: 'none',
        time: 9000,
        minHeight: '600px',
      });
  };
}



// isoptop Project Gallery
function masanory () {
  if ($("#isotop-gallery-wrapper").length) {
    var $grid = $('#isotop-gallery-wrapper').isotope({
      // options
      itemSelector: '.isotop-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-sizer'
      }

    });

    // filter items on button click
    $('.isotop-menu-wrapper').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

     // change is-checked class on buttons
      $('.isotop-menu-wrapper').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
  };
}



// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}

// W-l- CREATIVE Carousel
function CREATIVEimgCarousel ()  {
	var carouselOne = $("#CREATIVE-img-carousel");
	if(carouselOne.length) {
		carouselOne.owlCarousel({
			items:3,
			margin:40,
			loop:true,
			nav:true,
			navElement:"button",
			dotsEach:3,
			autoplay:true,
			autoplayTimeout:4000,
			autoplaySpeed:2000,
			dragEndSpeed:1000,
			smartSpeed:1000,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					margin:50,
				},
				600:{
					items:2,
					margin:30,
				},
				992:{
					items:3,
					margin:40,
				}
			}
		});
	}
}



// W-l- HOME-Our-Blog Carousel
function HOMEOurBlogCarousel ()  {
	var carouselOne = $("#HOME-Our-Blog-carousel");
	if(carouselOne.length) {
		carouselOne.owlCarousel({
			items:2,
			margin:40,
			loop:true,
			nav:true,
			navElement:"button",
			dotsEach:3,
			autoplay:true,
			autoplayTimeout:3000,
			autoplaySpeed:2000,
			dragEndSpeed:1000,
			smartSpeed:1000,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items:2,
				}
			}
		});
	}
}



// W-l Our partners LOGO carousel
function OurpartnersLOGOcarousel ()  {
	var carouselOne = $("#Our-partners-LOGO-carousel");
	if(carouselOne.length) {
		carouselOne.owlCarousel({
			items:4,
			margin:48,
			loop:true,
			nav:true,
			navElement:"button",
			dotsEach:3,
			autoplay:true,
			autoplayTimeout:2000,
			autoplaySpeed:1000,
			dragEndSpeed:1000,
			smartSpeed:1000,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				450:{
					items:2,
					margin:20
				},
				550:{
					margin:30
				},
				768:{
					items:3
				},
				992:{
					items:4
				}
			}
		});
	}
}



// Wol Carousel Happy-ClienT-HM-TO-carousel
function HappyClienTHMTOcarousel ()  {
	var carouselOne = $("#Happy-ClienT-HM-TO-carousel");
	if(carouselOne.length) {
		carouselOne.owlCarousel({
			items:2,
			margin:64,
			loop:true,
			dotsEach:1,
			autoplay:true,
			autoplayTimeout:5000,
			autoplaySpeed:7000,
			smartSpeed:800,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items:2,
				},
			}
		});
	}
}


// shop price ranger
function priceRanger () {
  if ($('.price-ranger').length) {
    $( '.price-ranger #slider-range' ).slider({
      range: true,
      min: 0,
      max: 350,
      values: [ 25, 250 ],
      slide: function( event, ui ) {
        $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + ui.values[ 0 ] );
        $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + ui.values[ 1 ] );
      }
    });
      $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 0 ) );
    $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 1 ) );        
  };  
}


// Product Slider
function productSlider () {
  var carouselOne = $("#related-product-slider-carousel");
  if(carouselOne.length) {
		carouselOne.owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ["",""],
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1300,
        lazyLoad:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       50,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  }
}


// GALLERY MiXiTup 
function GALLERYMiXiTup () {
	if ($("#mixitup_list").length) {
    $("#mixitup_list").mixItUp()
  };
}


// Fancybox 
function FancypopUp () {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    });
  };
}


//Contact Form Validation
function contactFormValidation () {
  var activeform = $(".form-validation");
  if(activeform.length){
      activeform.validate({ // initialize the plugin
        rules: {
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true
          },
          message: {
            required: true
          }
        },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeform.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeform.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// DOM ready function
jQuery(document).on('ready', function(){
	(function($){
		mobileDropdown ();
		BannerSlider ();
		CREATIVEimgCarousel ();
		HOMEOurBlogCarousel ();
		OurpartnersLOGOcarousel ();
		CounterNumberChanger ();
		wowAnimation ();
		HappyClienTHMTOcarousel ();
		priceRanger ();
		productSlider ();
		GALLERYMiXiTup ();
		FancypopUp ();
		scrollToTop ();
		contactFormValidation ();
		closeSuccessAlert ()
	})(jQuery);
});



// Window scroll function
jQuery(window).on('scroll', function(){
	(function($){
		stickyHeader ();
	})(jQuery);
});



// Window on load function
jQuery(window).on('load', function(){
	(function($){
		prealoader ();
		masanory ();
	})(jQuery);
});

