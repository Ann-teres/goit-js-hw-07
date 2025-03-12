const loginUser = document.querySelector(".login-form")


loginUser.addEventListener("submit", function (event){
    event.preventDefault();
    
const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
      
    
  if (login === "" || password === "") {
      alert ('All form fields must be filled in')
      return;
  }
    
    
  const formData = {
    email: email,
    password: password,
  };
    
    
    console.log(`Login: ${email}, Password: ${password}`);
    
   loginUser.reset();
})
