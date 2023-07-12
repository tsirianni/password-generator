"use strict";

const readline = require("node:readline");
const { askQuestion } = require("./ask-question");

exports.gatherPasswordPreferences = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const preferences = {
    length: null,
    useLetters: null,
    useNumbres: null,
    useUppercase: null,
    useSpecialCharacters: null,
  };

  preferences.length = await askQuestion(
    rl,
    "What is the desired password length? ",
    true
  );

  preferences.useLetters = await askQuestion(
    rl,
    "Would you like to include letters in your password? [y/n] "
  );

  preferences.useNumbres = await askQuestion(
    rl,
    "Would you like to include numbers in your password? [y/n] "
  );

  preferences.useUppercase = await askQuestion(
    rl,
    "Would you like to include uppercase letters in your password? [y/n] "
  );

  preferences.useSpecialCharacters = await askQuestion(
    rl,
    "Would you like to include special characters in your password? [y/n] "
  );

  rl.close();
  return preferences;
};