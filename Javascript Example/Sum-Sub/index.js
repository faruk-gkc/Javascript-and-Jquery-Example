function sum(){
    var sum = document.getElementById("txt").value;
    sum = Number(sum);
    sum +=1;
    document.getElementById("txt").value = sum;
}
function sub(){
    var substr = document.getElementById("txt").value;
    substr = Number(substr);
    substr -=1;
    document.getElementById("txt").value = substr;
}