document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Here you can add further validation or send the form data to a backend server
  alert("Email: " + email + "\nPassword: " + password);
});
