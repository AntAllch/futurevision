$(document).ready(function(){

    $(".mobile-nav-menu").hide();
    // $(".hamburger").show();

    $(".hamburger").click(function(){
        $(".mobile-nav-menu").show();
        $(".mobile-nav-menu li").hide().delay(200).fadeIn(400);
        $(".close-menu").hide().delay(200).fadeIn(400);
        $(".hamburger").hide();
    });

    $(".close-menu").click(function(){
        $(".mobile-nav-menu").hide();
        $(".hamburger").show();
    });

    // $(".mobile-nav-menu a").click(function(){
    //     $(".mobile-nav-menu").hide();
    // });

});

// $(document).ready(function(){
//     $(".hamburger").click(function() {
//         $(".mobile-nav-menu").toggleClass("menu-active");
//     });
// });