var result,btn;
btn = document.querySelector("#btn"); 
btn.onclick = function() {
    getNumber = prompt("Lütfen Karekökü Alınacak Sayıyı Giriniz:","Sayınız");
    result = Math.sqrt(getNumber);
    document.querySelector("#result").innerHTML=result;
}
