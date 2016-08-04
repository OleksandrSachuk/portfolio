jQuery(document).ready(function($) {
	
	$('.header__order button').on('click',function(event) {
		//function show popup block and overlay
		$('#pop-up, .overlay').show();
	});
	//catch event click on close button or anywhere on overlay (out popUp block)
	$('.close, .overlay').on('click', function(event) {
		////function hide popup block and overlay
		$('#pop-up, .overlay').hide();
	})
});
