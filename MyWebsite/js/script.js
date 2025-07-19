document.addEventListener('DOMContentLoaded', function () {
      // Welcome message
      const welcomeMessageElement = document.getElementById('welcome-message');
      if (welcomeMessageElement) {
        let userName = prompt("Please enter your name:");
        if (userName && userName.trim()) {
          welcomeMessageElement.textContent = `Hi ${userName}! Welcome to Our Website`;
        } else {
          welcomeMessageElement.textContent = `Hi Guest! Welcome to Our Website`;
        }
      }

      // Form handling
      const form = document.getElementById('messageForm');
      const outputTime = document.getElementById('outputTime');
      const outputName = document.getElementById('outputName');
      const outputBirthDate = document.getElementById('outputBirthDate');
      const outputGender = document.getElementById('outputGender');
      const outputMessage = document.getElementById('outputMessage');

      if (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault();

          // Get values from form
          const name = form.elements['name'].value.trim();
          const birthDate = form.elements['birthDate'].value;
          const genderInput = form.querySelector('input[name="gender"]:checked');
          const gender = genderInput ? genderInput.value : '';
          const message = form.elements['message'].value.trim();

          // Validation
          if (!name || !birthDate || !gender || !message) {
            alert('Please fill in all required fields.');
            return;
          }

          // Set output
          outputTime.textContent = new Date().toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          });
          outputName.textContent = name;
          outputBirthDate.textContent = birthDate;
          outputGender.textContent = gender;
          outputMessage.textContent = message;

          form.reset();
        });
      }
    });