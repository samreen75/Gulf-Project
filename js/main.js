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

  var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	     90000:{
	        items:1
	      },
	      80000:{
	        items:1
	      },
	      20000:{
	        items:1
	      }
	    }
		});

		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

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

<<<<<<< HEAD
  	// magnific popup
	$('.image-popup1').magnificPopup({
  // flaticon popup
	$('.image-popup-mechanic-section').magnificPopup({
>>>>>>> aef88abaeb9c9f3598bb9be03399204d0d7b23e9
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

<<<<<<< HEAD
		  // magnific popup
		  
	$('.image-popup2').magnificPopup({
=======
	$('.image-popup-computerized-diagnostics').magnificPopup({
>>>>>>> aef88abaeb9c9f3598bb9be03399204d0d7b23e9
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

<<<<<<< HEAD
=======
	$('.image-popup-painting-denting').magnificPopup({
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

	$('.image-popup-electrical-section').magnificPopup({
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

	$('.image-popup-AC-maintenance').magnificPopup({
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

	$('.image-popup-approved-accident-quotation').magnificPopup({
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

	$('.image-popup-providing-spare-parts').magnificPopup({
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

	$('.image-popup-PM-check-maintenance').magnificPopup({
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

	$('.image-popup-restoration-classic-cars').magnificPopup({
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

	$('.image-popup-engine-repair').magnificPopup({
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

	$('.image-popup-modification-cars').magnificPopup({
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

	$('.image-popup-car-maintenance').magnificPopup({
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
	  
	  

>>>>>>> aef88abaeb9c9f3598bb9be03399204d0d7b23e9
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

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


// 	var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("modalBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


$('#exampleModal1').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	modal.find('.modal-title').text('New message to ' + recipient)
	modal.find('.modal-body input').val(recipient)
  });
  
	$('#exampleModal2').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	modal.find('.modal-title').text('New message to ' + recipient)
	modal.find('.modal-body input').val(recipient)
  });


  function getCourse(courseId){
	var id =document.getElementById(courseId);
	alert("id-fgfghfd->"+id.id)
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

var coll = document.getElementsByClassName("collapsible");
var i;
// alert("gfffffffffffh22222222222222222-------------"+i);
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function getCourse(courseId) {
    this.classList.toggle("active");
    
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
	  content.style.maxHeight = content.scrollHeight + "px";
	  
    } 
  });
}

function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }
  
   

// jQuery(document).ready(function()
// { window.Lightbox = new jQuery().visualLightbox({
// 	autoPlay:true,
// 	borderSize:39,
// 	classNames:'vlightbox1',
// 	descSliding:true,
// 	enableRightClick:false,
// 	enableSlideshow:true,
// 	resizeSpeed:7,
// 	slideTime:4,
// 	startZoom:true}) });

	$('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();


})(jQuery);

