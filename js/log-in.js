$(document).on('keypress',function(e) {
    if(e.which == 13) {
        let password= $('#password').val();
        let email=$('#email').val();
   
    
        $.ajax({
            url: 'https://mut-project.onrender.com/login',
            type: 'POST',
            data:  JSON.stringify({
            "email":email,
            "password":password,
            }),
        
            contentType: 'application/json; charset=utf-8',
            success: function (res) {
                console.log(res);localStorage.removeItem("mut_token");
                sessionStorage.setItem('mut_token', res.token);
                window.location.href = "main.html";
            },
            error: function(xhr, status, error) {
                
             alert(xhr.responseText )
                
              }
        });
    }
});


