$(document).ready(function() {
    setup_slight_scroll_to_anchors();
});
 
function setup_slight_scroll_to_anchors() {
   $('a[href^="#"]').click(function(){
        var link = $(this);
        if (link.attr('href') == '#') return;
        var target = link.attr('href');
        var target_top = $(target).offset().top;
        $('html, body').animate({scrollTop: target_top}, 1000);
        return false; 
   });
}