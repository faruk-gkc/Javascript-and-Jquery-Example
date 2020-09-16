$(function(){
    $("button").click(function(){
        var div = $("div");  
        div.animate({left: '100px'}, "slow");
        div.animate({width: '400px'},"slow");
        div.animate({height: '400px'},"slow");
        div.animate({fontSize: '3em'}, "slow");
    });
  });