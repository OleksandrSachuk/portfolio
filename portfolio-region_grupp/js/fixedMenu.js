$(document).ready(function(){
	var header= $("header");
	var $menu = $(".menu-default");
	$(window).scroll(function(){
            if ( $(this).scrollTop() > header.height()) {
                $menu.css({"position": "fixed", "top": "0", "left": "0", "z-index": "100", "width": "100%"});
            } else if($(this).scrollTop() <= header.height()) {
                $menu.css({"position": "relative"});
            }
        });
    });