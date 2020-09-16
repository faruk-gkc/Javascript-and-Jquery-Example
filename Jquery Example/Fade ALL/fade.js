$(document).ready(function(){
    $("#btn1").click(function(){
    $(".pencere").fadeIn();//fadeIn 
    });
    
    $("#btn2").click(function(){
    $(".pencere").fadeOut();
    });
    
    $("#btn3").click(function(){
    $(".pencere").fadeToggle();
    });
    
    $("#btn4").click(function(){
     $(".pencere").fadeTo("slow", 0.7);
     //$(".pencere").fadeTo("fast",  0.2)
    });
    
       
});