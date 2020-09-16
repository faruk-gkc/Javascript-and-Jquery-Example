var box = document.querySelector("#div1");

box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid";
box.style.background = "red";
box.style.borderRadius = "100%";
box.style.position = "absolute";
box.style.top = "1px";
box.style.left = "1px";  

var yukariDon = false;
var solaDon = false;

function animasyon (box , top , left){

    var ustKonum = Number(box.style.top.split("px")[0]);   // 1,px -- > [0]
    var solKonum = Number(box.style.left.split("px")[0]); 

    if ( ustKonum >= (window.innerHeight - 100 )){
        yukariDon = true;
    }
    
    else if ( ustKonum <= 0){
        yukariDon = false;
    }

    box.style.top = (ustKonum + top).toString() + "px" // 1+5=6 + "px" ==> 6px
    
    if ( solKonum >= (window.innerWidth - 100 )){
        solaDon = true;
    }
    
    else if ( solKonum <= 0){
        solaDon = false;
    }

    box.style.left = (solKonum + left).toString() + "px" // 1+5=6 + "px" ==> 6px
}


setInterval(function () {

    if ( yukariDon == true && solaDon == true ){
        animasyon(box, -1,-1);
    }
    else if ( yukariDon == false && solaDon == true ){
        animasyon(box, 1,-1);
    }
    else if ( yukariDon == true && solaDon == false ){
        animasyon(box, -1, 1);
    }
    else if ( yukariDon == false && solaDon == false ){
        animasyon(box, 1, 1);
    }

},5)
