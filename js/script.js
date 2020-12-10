
  // FORM
  const form = document.getElementById('form');
   const name = document.getElementById('name');
   const email = document.getElementById('email');
   const number = document.getElementById('number');
   const date = document.getElementById('date');
   const submit = document.getElementById('submit');
  


   name.addEventListener('blur',()=> {
    if(name.value == ""){
       name.classList.toggle('error');
       
     }else {
      name.classList.toggle('success');
     }
  });
  
  email.addEventListener('blur',()=> {
    if(email.value == "" || !(email.value.includes('@'))){
       email.classList.toggle('error');
      
     }else{
      email.classList.toggle('success');
     }
  });
  
  number.addEventListener('blur',()=> {
    console.log(number.value.length);
    if(number.value == "" || number.value.length > 10){
       number.classList.toggle('error');
   
     }else{
      number.classList.toggle('success');
     }
  });
  
  date.addEventListener('blur',()=> {
    if(date.value == ""){
       date.classList.toggle('error');
      
     }else{
      date.classList.toggle('success');
     }
  });


    submit.addEventListener('click',(e)=>{
   
    if(name.classList.contains('success') && email.classList.contains('success') && number.classList.contains('success') && date.classList.contains('success')){
        
        window.confirm('Uspesno zakazan trening!');
      }else{
        e.preventDefault();
        window.alert('Ponovo unesi podatke!');
      }
   });


   //  Date

  const time = new Date();
  document.getElementById("time").textContent = time;




     

   
  
   
  
  
  














