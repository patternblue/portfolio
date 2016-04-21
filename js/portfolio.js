$(document).ready(main);

function main(){

	// AnimateScroll jQuery plugin
	$('.nav a').on('click', function(){
		var sectionToScrollTo = $(this).attr('href');
		$(sectionToScrollTo).animatescroll({
			easing: 'easeInBack', 
			scrollSpeed:800, 
			padding: 110
		});	
	});

}