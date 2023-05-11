
$(document).on('keypress',function(e) {
    if(e.which == 13) {
       
        let email=$('input').val();
   
      
        $.ajax({
            url: 'https://mut-project.onrender.com/login',
            type: 'POST',
            data:  JSON.stringify({
            "email":email,
            "password":password,
            }),
            contentType: 'application/json; charset=utf-8',
            success: function (res) {
                console.log(res);
            },
            error: function(xhr, status, error) {
                
             alert(xhr.responseText )
                
              }
        });
    }
});