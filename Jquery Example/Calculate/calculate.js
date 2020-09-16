$(function () {

    $("input").keyup(function(){
    $("#toplam").text(parseInt($("#sayi1").val())+parseInt($("#sayi2").val()));
    $("#fark").text(parseInt($("#sayi1").val())-parseInt($("#sayi2").val()));
    $("#carp").text(parseInt($("#sayi1").val())*parseInt($("#sayi2").val()));
    $("#bol").text(parseInt($("#sayi1").val())/parseInt($("#sayi2").val()));
    });
     });