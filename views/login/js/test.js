var myOpenAye = document.getElementById('open'),
    myInput = document.getElementById('op'),
    mySign = document.getElementById('sign'),
    myName = document.getElementById('name'),
    myEmail = document.getElementById('email'),
    myPhone = document.getElementById('phone'),
    myPassword = document.getElementById('password'),
    myMessage = document.getElementById('message'),
    myForm = document.getElementById('main');
    

    
    

myOpenAye.onclick = function(){
    'use strict';
    if(myInput.type==="password"){
        myInput.type ="text";
        
    }else{
        myInput.type="password";
        
    }
       
};

mySign.onclick = function(){
    
    'use strict';
    
    if(myName.value === '' || myName.value == null){
         
       myMessage.innerHTML="you must write your name";
        
    }else if(myEmail.value === '' || myEmail.value == null ){
        
         myMessage.innerHTML="you must write your email";
    
    }else if(myPhone.value === '' || myPhone.value == null || myPhone.value.length < 11 || isNaN(myPhone.value) ){
        
         myMessage.innerHTML="you must write your Phone";
    
    }else if(myPassword.value === '' || myPassword.value == null ){
        
         myMessage.innerHTML="you must write your password";
    
    }else if(myInput.value != myPassword.value){
        
         myMessage.innerHTML="you must confirm your password";
    
    }else{
       location.href ="log-in.html";
    }
  
};

/* for make focus in the first element in form */

window.onload = function(){
    
    'use strict';
    myName.focus();
};

/* for focus on the Email */

myEmail.onfocus = function(){
    'use strict';
    myMessage.innerHTML = 'please write your Gmail';
};

myEmail.onblur = function(){
    'use strict';
    myMessage.innerHTML = '';
};

/* display right click */

// window.oncontextmenu= function(e){
//     'use strict';
//     e.preventDefault();
// };


     
     




