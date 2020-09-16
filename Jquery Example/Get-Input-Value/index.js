$(function(){
    var getAllValue=[];
    $("button").click(function(){
      $("input:text").each(function(){
        getAllValue.push($(this).val());
      });

    $("div").html(getAllValue.join("<br>"));
    });
});