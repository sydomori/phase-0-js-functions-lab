




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


function calculateTax(amount){
  return amount * 0.1; // Assuming a tax rate of 10%
}

calculateTax(100); // Example usage, should return 10

function convertToUpperCase(str){
  return str.toUpperCase();
}

convertToUpperCase('hello world'); // Example usage, should return 'HELLO WORLD'

function findMaximum(num1, num2){
  return Math.max(num1, num2);
}

findMaximum(5, 10); // Example usage, should return 10

function isPalindrome(word){
  const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedWord = cleanedWord.split('').reverse().join('');
  if(cleanedWord === reversedWord){
    return true;
  } else {
    return false;
  }
}

isPalindrome('radar'); // Example usage, should return true

function calculateDiscountedPrice(originalPrice, discountPercentage){
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

calculateDiscountedPrice(100, 20); // Example usage, should return 80