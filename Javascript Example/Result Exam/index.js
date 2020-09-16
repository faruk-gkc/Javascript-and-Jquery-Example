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

var getVize1,getVize2,getFinal,hesap;


function calculate(){

getVize1 = Number(document.querySelector("#vize1").value);
getVize2 = Number(document.querySelector("#vize2").value);
getFinal = Number(document.querySelector("#final").value);

hesap = Number (((getVize1 * 0.3) + (getVize2 * 0.3) + (getFinal * 0.4 )));

if( (hesap <= 100) && (hesap >= 90)){
    document.querySelector("#result").innerText = "AA";
}
else if( (hesap < 90) && (hesap >= 80)){
    document.querySelector("#result").innerText = "BA";
}
else if( (hesap < 80) && (hesap >= 70)){
    document.querySelector("#result").innerText = "BB";
}
else if( (hesap < 70) && (hesap >= 60)){
    document.querySelector("#result").innerText = "CB";
}
else if( (hesap < 60) && (hesap >= 50)){
    document.querySelector("#result").innerText = "CC";
}
else if( (hesap < 50) && (hesap > 40)){
    document.querySelector("#result").innerText = "FD";
}
else if( (hesap < 40) && (hesap >= 0)){
    document.querySelector("#result").innerText = "FF";
}
else if(  (getVize1 > 100) && (getVize2 > 100) (getFinal > 100) && (getVize1 < 0) && (getVize2 < 0) && (getFinal < 0) ){
    document.querySelector("div").innerHTML = "You entered the wrong number";
}
else{
    document.querySelector("div").innerHTML = "You entered the wrong number";
}

}
