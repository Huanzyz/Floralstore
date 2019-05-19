$(document).ready(function(){
    $(".lk-page-login-customer-submit").click(function(){
        var a=0;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if($("#email-input").val()===""){
            $("#email-input").css("border-color","red");
            $("#login-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        else if(!regex.test($("#email-input").val())){
            $("#login-alert").text("Email không hợp lệ!");
            a=-1;
        }
        if($("#password-input").val()==""){
            $("#password-input").css("border-color","red");
            $("#login-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        if(a!==-1){
            window.location.replace("/edit");
        }
        a=0;
        if($("#email-input-register").val()===""){
            $("#email-input-register").css("border-color","red");
            $("#register-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        else if(!regex.test($("#email-input-register").val())){
            $("#register-alert").text("Email không hợp lệ!");
            a=-1;
        }
        if($("#password-input-register").val()==""){
            $("#password-input-register").css("border-color","red");
            $("#register-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        if($("#first-name-input").val()==""){
            $("#first-name-input").css("border-color","red");
            $("#register-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        if($("#last-name-input").val()==""){
            $("#last-name-input").css("border-color","red");
            $("#register-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        if($("#phone-input").val()==""){
            $("#phone-input").css("border-color","red");
            $("#register-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        if($("#address-input").val()==""){
            $("#address-input").css("border-color","red");
            $("#register-alert").text("Vui lòng nhật đầy đủ thông tin yêu cầu!");
            a=-1;
        }
        if(a!=-1){
            window.location.replace("/edit");
        }
    })
    $("#email-input").keydown(function(){
        $("#email-input").css("border-color","#e8e8e8");
        $("#login-alert").text("");
    })
    $("#password-input").keydown(function(){
        $("#password-input").css("border-color","#e8e8e8");
        $("#login-alert").text("");
    })
    $("#email-input-register").keydown(function(){
        $("#email-input-register").css("border-color","#e8e8e8");
        $("#register-alert").text("");
    })
    $("#password-input-register").keydown(function(){
        $("#password-input-register").css("border-color","#e8e8e8");
        $("#register-alert").text("");
    })
    $("#first-name-input").keydown(function(){
        $("#first-name-input").css("border-color","#e8e8e8");
        $("#register-alert").text("");
    })
    $("#last-name-input").keydown(function(){
        $("#last-name-input").css("border-color","#e8e8e8");
        $("#register-alert").text("");
    })
    $("#phone-input").keydown(function(){
        $("#phone-input").css("border-color","#e8e8e8");
        $("#register-alert").text("");
    })
    $("#address-input").keydown(function(){
        $("#address-input").css("border-color","#e8e8e8");
        $("#register-alert").text("");
    })   
    
    
})