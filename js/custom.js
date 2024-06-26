 document.getElementById('loginForm').addEventListener('submit', function(event) {
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      var emailError = document.getElementById('emailError');
      var passwordError = document.getElementById('passwordError');
      var valid = true;

      if (!email.value) {
        emailError.style.display = 'inline-block';
        valid = false;
      } else {
        emailError.style.display = 'none';
      }

      if (!password.value) {
        passwordError.style.display = 'inline-block';
        valid = false;
      } else {
        passwordError.style.display = 'none';
      }

      if (!valid) {
        event.preventDefault();
      }
    });