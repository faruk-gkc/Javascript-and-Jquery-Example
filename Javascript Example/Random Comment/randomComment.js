var obj =[
    {comment:"Yanlış bildiğin yolda; hеrkеslе yürüyеcеğinе, doğru bildiğin yolda; tеk başına yürü…", name:"John Doe"},
    {comment:"Küçük işlere gereğinden çok önem verenler, elinden büyük iş gelmeyenlerdir.", name:"Darryl Rivera"},
    {comment:"Mutluluk elin erişebileceği çiçeklerden bir demet yapma sanatıdır.", name:"Darryl Rivera"},
    {comment:"Mutluluk her şeyden önce vücut sağlığındadır.", name:"Leonard Payne"},
    {comment:"Saadet bizim dilediğimizle, Allah’ın bizim için dilediği şeyin bir araya gelmesinden doğar.", name:"Leonard Payne"}]

    var random;

    function createNumber(){
        random = Math.round(Math.random() *4);
    }

    setInterval(function(){
        
        createNumber();
        document.getElementById("div2").innerHTML = obj[random].comment;
        document.getElementById("div3").innerHTML = obj[random].name;
    },2000);