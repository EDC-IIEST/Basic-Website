$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
        if ($("#mainListDiv").hasClass("show_list")) {
            $("#mainListDiv").removeClass("show_list");
            $("#mainListDiv").fadeOut();
            $(".navTrigger").toggleClass('active');
        }
    } else {
        $('.nav').removeClass('affix');
    }
   
});

$(document).ready(function() {
    $('.resources-hover').click(function(event) {
        event.preventDefault(); // Prevent the default link behavior
        $('.resources-box').toggle(); // Toggle the display of the resources box
    });

    // Optional: Hide the resources box if clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.resources').length) {
            $('.resources-box').hide();
        }
    });
});
