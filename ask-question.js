"use strict";

/**

Asynchronously prompts a question to the user using the provided readline interface and returns the user's response.
Perfoms simple validation on user input.

@param {object} rlInterface - The Nodejs readline interface object used for input/output.
@param {string} question - The question to prompt the user.
@param {boolean} isPassLength - Specifies whether the input should be validated as a password length (in other words, if it is a number).
@returns {Promise<any>} A promise that resolves with the user's response.
*/
exports.askQuestion = function (rlInterface, question, isPassLength) {
  return new Promise((resolve) => {
    const acceptableInputs = ["y", "n"];
    const affirmativeInputs = acceptableInputs.slice(0, 1);

    rlInterface.question(question, (answer) => {
      // Validate password length
      if (isPassLength) {
        if (isNaN(Number(answer))) {
          console.error(
            "Invalid input received. The password length must be a number"
          );
          process.exit(1);
        }
      } else {
        if (!acceptableInputs.includes(answer)) {
          console.log(
            "Invalid input received. Please use one of the following: y/n"
          );
          process.exit(1);
        }
      }

      resolve(
        isPassLength ? Number(answer) : !!affirmativeInputs.includes(answer)
      );
    });
  });
};
