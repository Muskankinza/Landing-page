// JavaScript for smooth scrolling and form validation

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Form validation
  document.getElementById('form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    if (!email) {
      alert('Please enter your email address.');
      e.preventDefault();
    }
  });
  