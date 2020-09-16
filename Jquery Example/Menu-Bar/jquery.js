
        $(function(){
            var i =0;
            $(window).scroll(function(){
                //console.log(i+=1);
                var uzaklik = $(window).scrollTop()
                //console.log(uzaklik)
                if(uzaklik > 300){
                    $("#kontrolEt").removeClass("container").addClass("container2");
                }
                else{
                    $("#kontrolEt").removeClass("container2").addClass("container");
                }
            });
        });