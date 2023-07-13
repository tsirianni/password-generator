"use strict";

const readline = require("node:readline");
const { askQuestion } = require("./ask-question");

/**

Asynchronously gathers password preferences from the user by prompting a series of questions using the Nodejs' readline interface.

@returns {Promise<object>} A promise that resolves with an object containing the password preferences.
*/
exports.gatherPasswordPreferences = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const preferences = {
    length: null,
    useLetters: null,
    useNumbers: null,
    useUppercase: null,
    useSpecials: null,
  };

  const color = "\u001b[36m";

  preferences.length = await askQuestion(
    rl,
    `${color} What is the desired password length? `,
    true
  );

  preferences.useLetters = await askQuestion(
    rl,
    `${color} Would you like to include letters in your password? [y/n] `
  );

  if (preferences.useLetters) {
    preferences.useUppercase = await askQuestion(
      rl,
      `${color} Would you like to include uppercase letters in your password? [y/n] `
    );
  }

  preferences.useNumbers = await askQuestion(
    rl,
    `${color} Would you like to include numbers in your password? [y/n] `
  );

  preferences.useSpecials = await askQuestion(
    rl,
    `${color} Would you like to include special characters in your password? [y/n] `
  );

  rl.close();
  return preferences;
};
