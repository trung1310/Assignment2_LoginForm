function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  const handleValidationForm = function (fields) {
    var errors = {};
  
    //Email
    if (fields.hasOwnProperty("email")) {
      if (!fields.email) {
        errors.email = "Email cannot be empty";
      } else if (!validateEmail(fields.email)) {
        errors.email = "Invalid Email";
      }
    }
  
    //Password
    if (fields.hasOwnProperty("password")) {
      if (!fields.password) {
        errors.password = "Cannot be empty";
      }
    }
  
    // New password
    if (fields.hasOwnProperty("newPassword")) {
      if (!fields.newPassword) {
        errors.newPassword = "Cannot be empty";
      }
    }
  
    // Confirm new password
    if (fields.hasOwnProperty("confirmNewPassword")) {
      if (!fields.newPassword) {
        errors.newPassword = "Cannot be empty";
      }
    }
  
    // Name
    if (fields.hasOwnProperty("name")) {
      if (!fields.name) {
        errors.name = "Cannot be empty";
      }
    }
  
    // Phone
    if (fields.hasOwnProperty("phone")) {
      if (!fields.phone) {
        errors.phone = "Cannot be empty";
      }
    }
  
    return errors;
  };
  
  export { handleValidationForm };
  