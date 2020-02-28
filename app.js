let form=document.querySelector('form');
let button=document.querySelector('button');
let regname=/(^[^0-9])+.{8,15}$/i;
let regemail=/(^[^0-9])+([A-Za-z0-9]{5,15})(\@[a-z]{5})\.([a-z]{3})$/i;
let regpassword=/(^[A-Za-z0-9]+.{8,16})/i;

form.name.addEventListener("keyup",()=>{
    if(regname.test(form.name.value)){
        form.name.classList.add("is-valid");
        form.name.classList.remove("is-invalid");
        able();
    }else{
        form.name.classList.remove("is-valid");
        form.name.classList.add("is-invalid");
        able();
    }
});

form.email.addEventListener("keyup",()=>{
    if(regemail.test(form.email.value)){
        form.email.classList.add("is-valid");
        form.email.classList.remove("is-invalid");
        able();
    }else{
        form.email.classList.remove("is-valid");
        form.email.classList.add("is-invalid");
        able();
    }
});

form.password.addEventListener("keyup",()=>{
    if(regpassword.test(form.password.value)){
        form.password.classList.add("is-valid");
        form.password.classList.remove("is-invalid");
        able();
    }else{
        form.password.classList.remove("is-valid");
        form.password.classList.add("is-invalid");
        able();
    }
});


let able=()=>{
    if(regname && regemail && regpassword)form.button.removeAttribute("disabled","");
    else form.button.setAttribute("disabled","");
}