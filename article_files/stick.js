

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 180) {
        $("body").addClass("stickHeader");
    } else {
        $("body").removeClass("stickHeader");
    }
});

$(document).foundation();
