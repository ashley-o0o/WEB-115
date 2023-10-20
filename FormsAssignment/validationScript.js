  // JavaScript code for form validation
	// Prevent form from submitting

// Retrieve the input field value
var inputElement = document.getElementById('inputField');
var inputValue = inputElement.value;

document.getElementById('myForm').addEventListener('submit', function(event) {
  // Regular expression pattern for alphanumeric input
  let textInput = document.getElementById('inputField').value;
  let regex = /^[a-zA-Z0-9]*$/;

  if (textInput === ""){
    // Invalid input: display error message
    alert("Error: Entry form blank");
    event.preventDefault();
  }
  // Check if the input value matches the pattern
  else if(!regex.test(textInput)) {
    // Invalid input: display error message
    alert("Error: Invalid format. Please enter again.");
    event.preventDefault();
  } 
  // Valid input: display confirmation and submit the form
  else{
    alert("Submission confirmed. Thank you!");
  }
});