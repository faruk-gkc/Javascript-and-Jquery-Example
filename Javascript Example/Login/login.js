var txt;

function randomBgColor(){

var color = "ABCDEF0123456789";
txt ="#";
var i;

for (i = 0; i < 6; i++){
    var random = Math.round(Math.random() *15);
    txt += color.charAt(random);
    }
}
setInterval(function(){

    randomBgColor();

    document.body.style.backgroundColor = txt;        
    
},3500)

var kullanicilar = [{ kullaniciadi : "Faruk", parola: "123456"},
                { kullaniciadi : "admin", parola: "parola"},
                { kullaniciadi : "HTML", parola: "web"},
                { kullaniciadi : "user", parola: "faruk"}];
    
    var girilenKullaniciAdi;
    var girilenParola;
    var x;

    function kontrolEt(){

        girilenKullaniciAdi = document.querySelector("#user").value;
        girilenParola = document.querySelector("#pwd").value;

        for(x of kullanicilar){
            
            if( (x.kullaniciadi == girilenKullaniciAdi)  &&  (x.parola == girilenParola) ) {
                return true;
            }
        }   
    } 

    function girisOnay(){

        kontrolEt();
        
        if( kontrolEt() ){
            var myWindow = window.open("", "", "width=750,height=450");
             myWindow.document.write("<p>Welcome 'myPage'</p>");
             
        }
        else{
            alert("Yanlış Seçim Yaptınız..");
        }
    }
