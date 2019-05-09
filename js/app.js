$(document).ready(function(){

    $(".hamburger").click(function(){
        $(".mobile-nav-menu").css({"transform": "translateY(0px)", "visibility": "visible", "opacity": "1"});
        $(".mobile-nav-menu li").hide().delay(500).fadeIn(500);
        $(".close-menu").hide().delay(200).fadeIn(400);
    });

    $(".close-menu").click(function(){
        $(".mobile-nav-menu").delay(400).css({"transform": "translateY(-600px)", "visibility": "visible"});
    });

    $(".mobile-nav-links li").click(function(){
        $(".mobile-nav-menu").css("transform", "translateY(-600px)");
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