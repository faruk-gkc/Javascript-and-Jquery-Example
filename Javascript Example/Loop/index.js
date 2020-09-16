
        var dizi=["Asus","MSI","Dell","Monster","Lenovo","HP","Casper"];
        var i, text = "", y= dizi.join("--");
        var len=dizi.length;
        for (i = 0 ; i < len ; i++ ){
            text += y + "<br>";
        }
             document.getElementById("demo").innerHTML=text ;