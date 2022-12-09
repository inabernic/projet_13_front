import money from '../assets/icon-money.png';
import chat from "../assets/icon-chat.png";
import security from "../assets/icon-security.png";

/**
 *If the src string includes the word "money", returns the money image, if it includes the word "security", returns the security image, and if it includes the word "cat", returns the image Of the cat
 * @param {String} src -  The source of the image
 * @returns  -  the image that matches the src
 */



export function checkImage(src) {
  if (src.includes("money")) {
    return money;
  }
  if (src.includes("security")) {
    return security;
  }
  if (src.includes("chat")) {
    return chat;
  }
}

/**
 * If the string is not empty, Converts the first character of a string to uppercase and the rest to lowercase.
 * @param {String} str - String to convert
 * @returns {String} The first character of the string is converted to uppercase and the rest of the string is converted to lowercase.
 */
export function fromLowerToUpperCase(str) {
  if (str.length > 0) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }
}

/**
 *
It returns true if the email address is valid and false if it is not.
 * @param {String} email - The email address to test.
 * @returns {Boolean} A Boolean value.
 */
export function checkEmail(email) {
  const testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]{2,}[.][A-Z]{2,4}$/gim;
  return !!testEmail.test(email);
}

/**
 * It checks if the password is between 8 and 15 characters, contains at least one letter
 * lowercase, an uppercase letter and a number
 * @param {String} password - 
The password to test.
 * @returns {Boolean}
 */
export function checkPassword(password) {
  const testPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z\d$@!%*?&_]{8,15}$/gim;
  return !!testPassword.test(password);
}

/**
 * It takes four arguments and returns an object with four properties
 * @param {String} date - The date of the transaction
 * @param {String} description - The description of the operation
 * @param {number} amount - The amount of money that has been spent or received.
 * @param {number} balance - 
The account balance after the transaction.
 * @returns An object with date, description, amount, and balance properties.
 */
export function createData(date, description, amount, balance) {
  return {
    date,
    description,
    amount,
    balance,
  };
}