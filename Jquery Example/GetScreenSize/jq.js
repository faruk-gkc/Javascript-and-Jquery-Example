$(function(){
  var w,h;
  w = $(window).width();
  h = $(window).height();
  $("#width").text(w);
  $("#height").text(h);

  $(window).resize(function(){

  w = $(window).width();
  h = $(window).height();
  $("#width").text(w);
  $("#height").text(h);
  
  });


});

