
    var hour,min,sec;
    hour = prompt("Kronometre Saatini Giriniz:",0)
    min = prompt("Kronometre Dakikasını Giriniz:",0)
    sec = prompt("Kronometre Saniyesini Giriniz:",10)



    var cInterval = setInterval(function(){
        document.querySelector(".hour").innerHTML = hour;
        document.querySelector(".min").innerHTML = min;
        document.querySelector(".sec").innerHTML = sec--;

        if(Number( document.querySelector(".sec").innerHTML) == 0){
            
            min--;
            sec = 59;
        }

        if(Number( document.querySelector(".min").innerHTML) == 0 &&
           Number( document.querySelector(".sec").innerHTML) == 0){
            
            hour--;
            min = 59;
        }

        if(Number( document.querySelector(".hour").innerHTML) == 0 &&
           Number( document.querySelector(".min").innerHTML) == 0 &&
           Number( document.querySelector(".sec").innerHTML) == 0 ){

                clearInterval(cInterval);
        }
    },1000)