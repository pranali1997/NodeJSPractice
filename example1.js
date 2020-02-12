var readline = require("readline-sync"); //let you have conversation with user

module.exports = {
  //*****************function of reading input from the user************************/
  inputRead() {
    let input = readline.question("enter input :"); //get the value from user
    return input;
  },

  //*******************************Leap Year***********************************************/
  leapYear(year) {
    try {
      if (year.length < 4 || year.length > 4) {
        //checks if year length is 4 and year is not null or undefined
        throw "invalid input"; //if year length is not 4 or year is undefined or null exception will throw to the catch block
      } else if (year != null) {
        // if year is a valid number
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
          return true; //if year is leap year, it will return true
        } else {
          return false; // if not it will return false
        }
      } else {
        false;
      }
    } catch (error) {
      return error;
    }
  }
};
