// complete the given function

function palindrome(str){
  // Convert string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[\W_]/g, '');
  
  // Check if string is equal to its reverse
  return str === str.split('').reverse().join('');
}


}
module.exports = palindrome
