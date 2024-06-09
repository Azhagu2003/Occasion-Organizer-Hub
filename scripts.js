// Function to switch between sections
function switchSection(sectionId) {
  document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', function() {
  switchSection('login-section'); // Show login section by default
});

// Example event listener for switching to registration section
document.getElementById('register-link').addEventListener('click', function() {
  switchSection('registration-section');
});

// Example event listener for switching to event details section
document.getElementById('event-details-link').addEventListener('click', function() {
  switchSection('event-details-section');
});
