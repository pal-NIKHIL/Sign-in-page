const form = document.getElementById('form');
form.addEventListener('submit',e=>{
    e.preventDefault();
    const firstname=form['firstname'].value;
    const lastname=form['lastname'].value;
    const email=form['email'].value;
    const password=form['password'].value;
    if(firstname==""){
        addError('firstname','FirstName cannot be Empty');
    }
    else{
        removeerror('firstname');
    }
    if(lastname===''){
        addError('lastname','Lastname cannot be Empty');
    }
    else{
        removeerror('lastname');
    }
    if(email===''){
        addError('email','Email cannot be Empty');
    }
    else{
        removeerror('email');
    }
    if(!isvalid(email)){
        addError('email','Email cannot be Empty');
    }
    else{
        removeerror('email');
    }
    if(password===''){
        addError('password','Password cannot be Empty');
    }
    else{
        removeerror('password');
    }
});
function addError(id,data){
    const formcontrol=form[id].parentNode;
    formcontrol.classList.add('error');
    const small=formcontrol.querySelector('small');
    small.innerText=data;
    small.style.opacity=1;
}
function isvalid(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.emailAddr.value))
    {
      return (true)
    }
      return (false)
}
function removeerror(id){
    const formcontrol=form[id].parentNode;
    formcontrol.classList.remove('error');
    const small=formcontrol.querySelector('small');
    small.style.opacity=0;
}