var txt;   // txt = #15396B; txt = #AF6587;  txt = #5BFA96;

    
function colorReplace(){  // RENK KODU ÜRETME
        
    var color = "ABCDEF0123456789";
    txt = "#";
    var i;

    for ( i = 0; i < 6; i++ ){
        
        var random = Math.round(Math.random() * 15);
        txt += color.charAt(random);

        }
    }

    setInterval(function(){  // SÜREKLİ ÇALIŞSIN..

        colorReplace();
        document.body.style.backgroundColor = txt;

    },2000);