setTimeout(function () {
    // CSS class for colored border
const populatedClass = 'populated';

// Get all input elements with the specified class
const inputElements = document.getElementsByClassName('input-field');

// Loop through each input element
for (let i = 0; i < inputElements.length; i++) {
  const inputElement = inputElements[i];
  
    // Check if the input has a value since page load
    if (inputElement.value.trim() !== '') {
      // Add a CSS class to the input element when it is populated
      inputElement.classList.add(populatedClass);
    } else {
      // Remove the CSS class if the input is empty
      inputElement.classList.remove(populatedClass);
    }

  // Add event listener to each input element (tracks if input has a new value)
  document.addEventListener('mousemove', function() {
    // Check if the input has a value
    if (inputElement.value.trim() !== '') {
      // Add a CSS class to the input element when it is populated
      inputElement.classList.add(populatedClass);
    } else {
      // Remove the CSS class if the input is empty
      inputElement.classList.remove(populatedClass);
    }
  });

}   
  }, 1.5 * 1000);


// TO BE FIXED!!
  function togglePasswordVisibility() {
    const passwordCheckbox = document.getElementById('user_password');
    console.log(passwordCheckbox)

    if (passwordCheckbox.type === "password") {
      passwordCheckbox.type = "text";
    } else {
      passwordCheckbox.type = "password";
    }
  }


  
  




