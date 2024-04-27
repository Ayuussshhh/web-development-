document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Your login logic goes here
    // For demonstration, let's just log the values to console
    console.log("Username:", username);
    console.log("Password:", password);
  
    // Clear input fields after login attempt
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
  