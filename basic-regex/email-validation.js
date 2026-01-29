function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\w+$/.test(email);
}
console.log(isValidEmail("test@gmail.com"));  
