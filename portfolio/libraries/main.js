// @author Grace Guan. @edited 12/21/16. made with love in CA.
$(".about").click(function() {
	$("#home-container").fadeOut('fast', function() {
        $("#about-container").fadeIn('slow');
    });
});
$(".home").click(function() {
	$("#about-container").fadeOut('fast', function() {
        $("#home-container").fadeIn('slow');
    });
});
$(".home").click();