$(document).ready(function() {
	flexibility(document.documentElement);

	var shrinkHeader = 80;
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
       $('.page-header').addClass('fixed');
    }
    else {
        $('.page-header').removeClass('fixed');
    }
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })



	$("body").on("click", ".js-menu-mobile-toggle", function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('.menu-mobile__bg').fadeToggle();
		$('.menu-mobile').slideToggle(100);
		$('.page-header').toggleClass('active');
		$('body').toggleClass('fixed');
		$('html').toggleClass('fixed');
	});


});


$(function(){
    var shrinkHeader = 80;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
           $('.page-header').addClass('fixed');
        }
        else {
            $('.page-header').removeClass('fixed');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


//links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 15px; font-size: 18px;margin:0; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="blog.html">Блог</a></li> \
		<li><a href="index.html">Главная</a></li> \
	</ol> \
</div>');
