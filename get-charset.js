"use strict";

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
