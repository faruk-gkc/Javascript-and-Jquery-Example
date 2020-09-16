
      $(function(){
        $("#btn1").click(function(){
            $("p").wrapAll("<div></div>");
        });
        $("#btn2").click(function(){
            $("div").removeAttr("color");
        });
      });
