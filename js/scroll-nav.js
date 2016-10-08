$(document).ready(function(){

	$(window).scroll(function(){

		var scrollPosition = $(window).scrollTop();
		var nav = $('#nav');

		if( scrollPosition > 40 ) {
			 nav.css('background-color', 'orange');
		} else {
			nav.css('background-color', 'transparent');
		}

	});

});