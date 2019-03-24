$(document).ready(function() {

	$('#screen').fullpage({
		//options here
		//autoScrolling:true,
		//scrollHorizontally: true,
		//scrollBar:true,
		css3: true,
		//anchors:['firstPage', 'secondPage'],
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


	//slider-doctor
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
  			responsive: [
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			]
	    });
	    $('.raffle-slider__pager ul li').each( function( i ) {
            $('.raffle-slider__pager .slide-' + i + ' a').click(function(e){
                e.preventDefault();
                $('.raffle-slider__pager a').removeClass('active');
                $(this).addClass('active');
                $gallery.slick('slickGoTo', i);
            })
        })
	};
});