$(function(){
    $("button").click(function(){
      var txt1,txt2,txt3;
      txt1 = "<b> I </b>";
      txt2 = $("<em></em>").text(" Love ");
      txt3 = document.createElement("b");
      txt3.innerHTML= " Jquery";
      $("div").after(txt1,txt2,txt3);
    });
  });