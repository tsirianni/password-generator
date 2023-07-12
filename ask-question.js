"use strict";

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
