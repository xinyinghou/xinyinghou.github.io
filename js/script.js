
(function($) {
    "use strict"; // Start of use strict

    bibtexify("#bibtex", "pubTable", {
        "visualization" : false,
        "sorting": [[0, "desc"], [1,"asc"]]
    });


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('nav a.nav-item').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        $('nav a.nav-item').removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict