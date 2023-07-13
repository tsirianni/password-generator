"use strict";

/**

Generates a character set based on the provided configuration options. It has a base charset containing all of the optinos below, and uses regex to exclude the unwanted elements (numbers, letters, etc.).

@param {Object} options - The configuration options for generating the character set.
@param {boolean} [options.useLetters=true] - Specifies whether to include letters in the character set.
@param {boolean} [options.useUppercase=true] - Specifies whether to include uppercase letters in the character set.
@param {boolean} [options.useNumbers=true] - Specifies whether to include numbers in the character set.
@param {boolean} [options.useSpecials=true] - Specifies whether to include special characters in the character set.
@returns {string} The generated character set.
*/
const getCharset = ({
  useLetters = true,
  useUppercase = true,
  useNumbers = true,
  useSpecials = true,
}) => {
  let charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  // Remove letters if unwanted
  charset = useLetters ? charset : charset.replace(/[A-Za-z]/g, "");

  // Remove uppercase letters if unwanted
  if (useLetters) {
    charset = useUppercase ? charset : charset.replace(/[A-Z]/g, "");
  }

  // Remove numbers if unwanted
  charset = useNumbers ? charset : charset.replace(/[0-9]/g, "");

  // Remove special characters if unwanted
  charset = useSpecials
    ? charset
    : charset.replace(/[!@#$%^\&\*\(\)_\+]+/g, "");

  return charset;
};

module.exports = getCharset;
