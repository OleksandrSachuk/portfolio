jQuery(document).ready(function($) {
	//catch event click
	$('.open_popup').on('click',function(event) {
		event.preventDefault();
		//function show popup block and overlay
		$('.popup, .overlay').show();
	});
	//catch event click on close button or anywhere on overlay (out popUp block)
	$('.close, .overlay').on('click', function(event) {
		////function hide popup block and overlay
		$('.popup, .overlay').hide();
	})
});

