"use strict";

const { gatherPasswordPreferences } = require("./gather-preferences");

const generatePassword = async () => {
  const passwordPreferences = await gatherPasswordPreferences();

  let charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  // Remove letters if unwanted
  charset = passwordPreferences.useLetters
    ? charset
    : charset.replace(/[A-Za-z]/g, "");

  // Remove uppercase letters if unwanted
  if (passwordPreferences.useLetters) {
    charset = passwordPreferences.useUppercase
      ? charset
      : charset.replace(/[A-Z]/g, "");
  }

  // Remove numbers if unwanted
  charset = passwordPreferences.useNumbres
    ? charset
    : charset.replace(/[0-9]/g, "");

  // Remove special characters if unwanted
  charset = passwordPreferences.useSpecialCharacters
    ? charset
    : charset.replace(/[!@#$%^\&\*\(\)_\+]+/g, "");

  let password = "";

  for (let i = 0; i < passwordPreferences.length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
};

module.exports = generatePassword;

generatePassword()
  .then((password) =>
    console.log(`\n \u001b[37m Here is your password: \u001b[32;1m ${password}`)
  )
  .catch((error) => console.error(error));
