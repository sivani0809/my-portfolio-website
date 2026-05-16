let form=document.getElementById('myform')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const email=document.getElementById('email')
    const message=document.getElementById('message')
    if (email.value===''){
        message.innerHTML=`please enter the email`
        message.style.color='red'
        
    }
    else if(!email.value.includes('@')){
        message.innerHTML=`invalid email`
        message.style.color='yellow'
    }
    else{
        message.innerHTML='sucessfully submit'
        message.style.color='green'
             window.location.href = "web5.html";
    }
})