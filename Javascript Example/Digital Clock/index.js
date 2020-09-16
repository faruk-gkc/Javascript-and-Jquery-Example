var date = new Date();
var hour,min,sec;
hour = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();



setInterval(function(){
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec++;

    if(Number( document.querySelector(".sec").innerHTML) == 59){
        
        min++;
        sec = 0;
    }

    if(Number( document.querySelector(".min").innerHTML) > 59){
        
        hour++;
        min = 0;
    }

    if(Number( document.querySelector(".hour").innerHTML) > 23){
        
        
        hour = 0;
        min = 0;
    }
},1000)