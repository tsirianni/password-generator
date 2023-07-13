"use strict";

const { gatherPasswordPreferences } = require("./gather-preferences");
const getCharset = require("./get-charset");

const generatePassword = async () => {
  const passwordPreferences = await gatherPasswordPreferences();

  const charset = getCharset(passwordPreferences);

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
