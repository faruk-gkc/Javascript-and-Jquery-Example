$(function(){
        

    function isEmail(email) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // "ılflajf" + "@" + "lakdoşkasş" + "." + "adia"
        return pattern.test(email);
    }
    function isPhone(phone) {
        var pattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
        return pattern.test(phone);
    }

    $("#btn").click(function(){

        var errorMessage ="";
        $("#error").html("");

        if($("#email").val() == "" ){
            errorMessage += "<p><b>Email alanı zorunlu alandır.</b></p>";
        }
        if( isEmail($("#email").val()) == false ){
            errorMessage += "<p><b>Email alanı düzgün girilmedi.</b></p>";
        }
        if( isPhone($("#phone").val()) == false ){
            errorMessage += "<p><b>Phone alanı düzgün girilmedi.</b></p>";
        }
        if($("#phone").val() == ""){
            errorMessage += "<p><b>Phone alanı zorunlu alandır.</b></p>";
        }
        if($("#password").val() == ""){
            errorMessage += "<p><b>Password alanı zorunlu alandır.</b></p>";
        }
        if( $("#password").val() != $("#repassword").val() ){
            errorMessage += "<p><b>Password ve Repassword alanı eşleşmiyor.<b></p>";
        }
        if(errorMessage != ""){
            $("#error").html(errorMessage);
        }
    }); 
})