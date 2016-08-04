jQuery(document).ready(function($) {
	var menuDefault = $(".menu-default");
	if (menuDefault.width() < 688) {
		$("#menu").removeClass('menu-default');
		$("#menu").addClass('menu-adaptive');
	};
	if (menuDefault.width() > 688) {
		$("#menu").addClass('menu-default');
		$("#menu").removeClass('menu-adaptive');
	}

	

	$(".menu__adaptive_button").click(function(event) {
		 // Act on the event 
		 
		 var flag=0;

		 if(flag == 0) {
		 	$(".menu-adaptive nav").show();
		 	$('.scrollup').hide();
		 	flag = 1;
		 } else if (flag == 1){
		 	$(".menu-adaptive nav").hide();
		 	$('.scrollup').show();
		 	flag = 0;
		 }
		});
		$(".menu-adaptive nav a").click(function(event) {
			/* Act on the event */
			$(".menu-adaptive nav").hide();
		});
});