let first_name;
let last_name;
let email;
let birth_date;
let kid_date;
let password_repeat;
let password;
let sing_up=$('#sing_up');
let valid ='no'
var jsonString ;


sing_up.on("click",()=>{
    
    testpassword()
    $.ajax({
        url: 'https://mut-project.onrender.com/momSignUp',
        type: 'POST',
        data:  JSON.stringify({
              "firstName":first_name,
        "lastName":last_name,
        "dateOfBirth":birth_date,
        "email":email,
        "password":password,
        "confirmPassword": password_repeat
        }),
        contentType: 'application/json; charset=utf-8',
        success: function (res) {
            console.log(res);
        },
        error: function(xhr, status, error) {
            let e = Object.keys(xhr.responseJSON.errors );
            e.forEach((errorKey)=>{
                console.log(xhr.responseJSON.errors[errorKey].message)
            })
            
          }
    });


   
})

let testpassword = ()=> {

     first_name=$('#first_name').val();
     last_name=$('#last_name').val();
     email=$('#email').val();
     birth_date=$('#birth_date').val();
     kid_date=$('#kid_date').val();
     password_repeat=$('#password_repeat').val();
     password=$('#password').val();
     
    if(password == password_repeat)  {
        valid = 'yes'
        var jsonData={
            
                "firstName":"محمد",
                "lastName":"gabr",
                "dateOfBirth":"1/5/2001",
                "email":"mh@hotmail.com",
                "password":"Mo@12345",
                "confirmPassword":"Mo@12345"
            
        }
        var jsonString = JSON.stringify(jsonData);
        
    }else{
        valid= 'no'  
      
        
    }
    return valid
}
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        testpassword()
        alert('password does not match ')
        
    }
});
