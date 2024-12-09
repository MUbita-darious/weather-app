$(function(){
    $(".exit-slide-menu").click(function(){
        $(".nav-menu-slide").hide(200);
    });
    $(".mob-nav-menu").click(function(){
        $(".nav-menu-slide").slideToggle(200);
    });
})