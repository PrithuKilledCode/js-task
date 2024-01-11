window.addEventListener('load',()=>{
  const form=document.querySelector('#signinform');


  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let flag =false;

    const username=document.querySelector('#username');
    const email=document.querySelector('#email');
    const password=document.querySelector('#password');
    const passwordCheck=document.querySelector('#password-check');

    console.log(username.value,email.value,password.value,passwordCheck.value);
    if(!validateEmail(email.value)){
      email.className='error';
      document.getElementById('emailErr').style.display='flex';
      
     
      // alert('pls enter a valid email');

    }
    else{
      email.className='';
      document.getElementById('emailErr').style.display='none';
      localStorage.setItem('email',email.value)
      // console.log('no error')
    }
    if(!validatePass(password.value,passwordCheck.value)){
      password.className='error';
      document.getElementById('passErr').style.display='flex';
      
      // alert('password dont match or less than 5 charecters')

    }
    else{
      password.className='';
      document.getElementById('passErr').style.display='none';

      // console.log('no error')
    }
    if(!validateUsername(username.value)){
      username.className='error';
      document.getElementById('nameErr').style.display='flex';
     

      // alert('username cannot be empty')

    }
    else{
      username.className='';
      document.getElementById('nameErr').style.display='none';
      localStorage.setItem('username',username.value)
      // console.log('no error')
    }
    if(validateEmail(email.value) && validatePass(password.value,passwordCheck.value) && validateUsername(username.value)){
      window.location.href='next.html'

    }
    


  })
  const validateUsername=(username)=>{
   username= username.trim()
   const re=/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    return (re.test(username))
  }
  const validateEmail = (email) => {
    let obj=email.toString();
    obj=obj.trim()
    var re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return(re.test(obj));
      
  };
  const validatePass=(password,passwordCheck)=>{
    if(password===passwordCheck && password.length>=5){
return true;
    }
    else{
      return false;
    }
  }
  
})