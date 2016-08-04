$(document).ready(function ($) {   
    //find an element of main menu and start function hover
    $('nav>ul>li').hover(function(){

    	//find a list of submenu
        $(this).find('ul')

        //remove class 'noJS'(using if JS doesn't work)
        .removeClass('noJS')

        //using function 'stop' if user sometimes fast hover to the menu element 
        //using function 'slideToggle' to show submenu
        .stop(true, true).slideToggle('slow');
    });
});