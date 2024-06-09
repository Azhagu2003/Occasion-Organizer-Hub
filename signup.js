document.getElementById("organizer-signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
  // Here you can add further validation or send the form data to a backend server
  alert("Thank you for signing up, " + name);
});
