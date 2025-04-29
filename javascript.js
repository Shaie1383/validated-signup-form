function showError(id, message) {
    document.getElementById(id).innerText = message;
  }
  
  function clearErrors() {
    showError("uidError", "");
    showError("passidError", "");
    showError("usernameError", "");
  }
  
  function userid_validation(uid, mx, my) {
    let uid_len = uid.value.length;
    return uid_len >= mx && uid_len <= my;
  }
  
  function passid_validation(passid, mx, my) {
    let len = passid.value.length;
    let val = passid.value;
    if (len < mx || len > my) return false;
  
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{7,12}$/;
    return regex.test(val);
  }
  
  function allLetter(uname) {
    let letters = /^[A-Za-z]+$/;
    return uname.value.match(letters);
  }
  
  function alphanumeric(uadd) {
    let letters = /^[0-9a-zA-Z\s]+$/;
    return uadd.value.match(letters);
  }
  
  function countryselect(ucountry) {
    return ucountry.value !== "Default";
  }
  
  function allnumeric(uzip) {
    let numbers = /^[0-9]+$/;
    return uzip.value.match(numbers);
  }
  
  function ValidateEmail(uemail) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return uemail.value.match(mailformat);
  }
  
  function validgender() {
    let genders = document.getElementsByName("gender");
    return Array.from(genders).some(g => g.checked);
  }
  
  function formValidation() {
    let uid = document.form1.userid;
    let passid = document.form1.passid;
    let uname = document.form1.username;
    let uadd = document.form1.address;
    let ucountry = document.form1.country;
    let uzip = document.form1.zip;
    let uemail = document.form1.email;
  
    clearErrors();
  
    if (!userid_validation(uid, 5, 12)) {
      showError("uidError", "User ID must be between 5 and 12 characters.");
      uid.focus();
      return false;
    }
  
    if (!passid_validation(passid, 7, 12)) {
      showError("passidError", "Password must be 7–12 chars, with 1 uppercase, number, special char.");
      passid.focus();
      return false;
    }
  
    if (!allLetter(uname)) {
      showError("usernameError", "Name must contain only letters.");
      uname.focus();
      return false;
    }
  
    if (!alphanumeric(uadd)) {
      alert("User address must have alphanumeric characters only");
      uadd.focus();
      return false;
    }
  
    if (!countryselect(ucountry)) {
      alert("Select your country from the list");
      ucountry.focus();
      return false;
    }
  
    if (!allnumeric(uzip)) {
      alert("ZIP code must have numeric characters only");
      uzip.focus();
      return false;
    }
  
    if (!ValidateEmail(uemail)) {
      alert("Invalid email address");
      uemail.focus();
      return false;
    }
  
    if (!validgender()) {
      alert("Please select Male or Female");
      return false;
    }
  
    alert("Form Successfully Submitted!");
    return true;
  }