let answers =$('input[type=checkbox] ')
let selected =[];

$('button').on('click',()=>{
    
    for (let index = 0; index < answers.length; index++) {
        if(answers[index].checked){
            selected.push(answers[index])
        }
        
    }

    console.log(selected)
})
