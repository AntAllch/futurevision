$(document).ready(function(){

    $(".mobile-nav-menu").hide();

    $(".hamburger").click(function(){
        $(".mobile-nav-menu").show();
        $(".mobile-nav-menu li").hide().delay(200).fadeIn(400);
        $(".close-menu").hide().delay(200).fadeIn(400);
        $(".hamburger").hide();
    });

    $(".mobile-nav-links li").click(function(){
        $(".mobile-nav-menu").hide();
        $(".hamburger").show();
    });

    $(".close-menu").click(function(){
        $(".mobile-nav-menu").hide();
        $(".hamburger").show();
    });




    //Contact form
    $(".contact-activation").click(function(){
        $(".contact").css({"visibility": "visible", "opacity": "1"});
    });

    $(".contact-close").click(function(){
        $(".contact").css({"visibility": "hidden", "opacity": "0", "transition": "none"});
    });



    //Smooth Scrolling          //The "e" in the function means event
    var scrollLink = $(".scroll");
    
    scrollLink.click(function(e){
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        },1000 )
    })

});