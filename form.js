document.addEventListener('DOMContentLoaded', function () {
  var teammatesSelect = document.getElementById('teammates');
  var teammatesCount = document.getElementById('teammatesCount');

  teammatesSelect.addEventListener('change', function () {
      if (teammatesSelect.value === 'yes') {
          teammatesCount.style.display = 'block';
      } else {
          teammatesCount.style.display = 'none';
      }
  });

  var registrationForm = document.getElementById('registrationForm');

  registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var formData = new FormData(registrationForm);
      var formValues = {};
      formData.forEach(function (value, key) {
          formValues[key] = value;
      });
      // Display alert message
      alert("Form submitted successfully!");
      // You can perform further actions here, like sending the form data to a server
      console.log(formValues);
  });
});
