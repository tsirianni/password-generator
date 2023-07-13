#!/usr/bin/env node

const getCharset = require("./get-charset");

/* Do not change the position of the flags */
const flags = ["--letters", "--uppercase", "--numbers", "--specials"];
const onlyFlags = ["--numbers-only", "--specials-only", "--letters-only"];

// Validate password length
const desiredPasswordLength = Number(process.argv[2]);

if (isNaN(desiredPasswordLength)) {
  console.error(
    "Invalid input received. First argument must be the password length and must be a number."
  );
  process.exit(1);
}

// validate received flags
const passwordPreferenceFlags = process.argv.slice(3, process.argv.length);
const argumentsCount = passwordPreferenceFlags.length;
let onlyArgumentsCount = 0;

passwordPreferenceFlags.forEach((flag) => {
  const acceptableFlags = [...onlyFlags, ...flags];

  if (!acceptableFlags.includes(flag)) {
    console.error(`Invalid input received. Invalid flag ${flag}`);
  }

  if (onlyFlags.includes(flag)) onlyArgumentsCount++;

  if (onlyFlags.includes(flag) && argumentsCount > 1) {
    console.error(
      "Invalid input received. Other values are not accepted when a flag of type -only is passed"
    );
    process.exit(1);
  }
});

if (onlyArgumentsCount > 1) {
  console.error(
    "Invalid input received. Only one flag of type -only can be passed at a time"
  );
  process.exit(1);
}

if (
  !passwordPreferenceFlags.includes(flags[0]) &&
  passwordPreferenceFlags.includes(flags[1])
) {
  console.error(
    "Invalid input received. In order to use the --uppercase flag, --letters must be passed"
  );
  process.exit(1);
}

const userPreferences = {
  useLetters: false,
  useUppercase: false,
  useNumbers: false,
  useSpecials: false,
};

if (onlyArgumentsCount) {
  const [numbersOnly, specialsOnly, lettersOnly] = onlyFlags;
  console.log("I arrived here");

  switch (process.argv[3]) {
    case numbersOnly:
      userPreferences.useNumbers = true;
      break;
    case specialsOnly:
      userPreferences.useSpecials = true;
      break;
    case lettersOnly:
      userPreferences.useLetters = true;
      break;
    default:
      console.error("Invalid input received. Invalid -only option");
  }
} else {
  const [lettersFlag, uppercaseFlag, numbersFlag, specialsFlag] = flags;

  userPreferences.useLetters = !!passwordPreferenceFlags.includes(lettersFlag);
  userPreferences.useNumbers = !!passwordPreferenceFlags.includes(numbersFlag);
  userPreferences.useSpecials =
    !!passwordPreferenceFlags.includes(specialsFlag);

  if (userPreferences.useLetters) {
    userPreferences.useUppercase =
      !!passwordPreferenceFlags.includes(uppercaseFlag);
  }
}

const charset = getCharset(userPreferences);

let password = "";

for (let i = 0; i < desiredPasswordLength; i++) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  password += charset.charAt(randomIndex);
}

console.log(`\n \u001b[37m Here is your password: \u001b[32;1m ${password}`);
