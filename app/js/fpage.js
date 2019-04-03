$(document).ready(function() {

	$('#screen').fullpage({
		//options here
		//autoScrolling:true,
		//scrollHorizontally: true,
		//scrollBar:true,
		css3: true,
		//anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide'],
		navigation: true,
		sectionSelector: '.screen-item',
		//scrollOverflow:true,
		verticalCentered:false,
		responsiveWidth: 900,

		//Хз
		scrollOverflow: true,
		responseiveSlides:true,
		//hybrid:true,
		// afterLoad:function(anchorLink,index){
		// 	if(anchorLink=='section-0'){
		// 		$('#navigation').hide();
		// 	}
		// 	else{
		// 		$('#navigation').show();
		// 	}
		// },
	});

	//methods
	// $.fn.fullpage.setAllowScrolling(false);



	if ($('.raffle-slider').length>0) {
		var $gallery = $('.raffle-slider');
		$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var next = nextSlide; 
            $('.raffle-slider__pager a').removeClass('active');
            $('.raffle-slider__pager .slide-' + next + ' a').addClass('active');
        });

	    $gallery.slick({
			//speed: 1250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:false,
			dots:false,
			fade: true,
			useTransform:true,
			accessibility: false,
			infinite: false,
			// slidesToShow: 3,
  	// 		slidesToScroll: 1,
  	// 		responsive: [
			//     {
			//       breakpoint: 800,
			//       settings: {
			//         slidesToShow: 2,
			//         slidesToScroll: 1,
			//       }
			//     },
			// ]
	    });
	    $('.raffle-slider__pager ul li').each( function( i ) {
            $('.raffle-slider__pager .slide-' + i + ' a').click(function(e){
                e.preventDefault();
                $('.raffle-slider__pager a').removeClass('active');
                $(this).addClass('active');
                $('.raffle-slider').slick('slickGoTo', i);
            })
        })
	};

	if ($('.top-slider').length>0) {
		var $gallery = $('.top-slider');

	    $gallery.slick({
			//speed: 1250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:false,
			dots:false,
			fade: true,
			useTransform:true,
			accessibility: false,
			infinite: false,
			// slidesToShow: 3,
  	// 		slidesToScroll: 1,
	    });
	};
	$("body").on("click", ".js-changeDish", function(e){
		e.preventDefault();
		$('.top-slider').slick('slickNext');
	});


	$("body").on("click", ".js-page-footer__link", function(e){
		e.preventDefault();
		$('.popup-catalog').fadeIn();
		//fullpage_api.moveTo('catalog', 1);
	});
	$("body").on("click", ".js-popup-catalog__close", function(e){
		e.preventDefault();
		$('.popup-catalog').fadeOut();
	});
	$("body").on("click", ".js-scrollToHistory", function(e){
		e.preventDefault();
		fullpage_api.moveTo('history', 1);
	});
	$("body").on("click", ".js-scrollToRaffle", function(e){
		e.preventDefault();
		fullpage_api.moveTo('raffle', 1);
	});



	var $btns = $('.product-filter__item').click(function(e) {
		e.preventDefault();
	  	if (this.id == 'all') {
	    	$('.product__item').fadeIn(450);
	    	$('.group-title').show();
	  	} else {
	    	var $el = $('.' + this.id).fadeIn(450);
	    	$('.product__item').not($el).hide();
	    	$('.group-title').hide();
	  	}
	  	$btns.removeClass('active');
	  	$(this).addClass('active');
	});


	//POPUP-INLINE
	$('.js-popup-inline').magnificPopup({
		type: 'inline',
		removalDelay: 500,
        fixedContentPos: false,
        closeBtnInside:true,
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
            open: function(){
                $('body').addClass('noscroll');
            },
            close: function() {
                 $('body').removeClass('noscroll');
            }
		},

		//midClick: true,
	});
});