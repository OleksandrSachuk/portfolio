jQuery(document).ready(function($) {
	//using function scroll to the object window
	$(window).scroll(function(event) {
		//checking if scroll for the top of the window is more then 100
		if($(this).scrollTop() > 100) {
			//apearing scrollUp link
			$('.scrollup').fadeIn();
			//reverse condition (if scroll for the top of the window is less then 100) scrollUp link disappear
		} else {
			//scrollUp link disappear
			$('.scrollup').fadeOut();
		}
	});
	//event click on the scrollUp link
	$('.scrollup').on('click',function(event) {
		//using function aminate to the scrolTop
		$('html,body').animate({
			scrollTop: 0}, 600); 
			return false;
		});
});