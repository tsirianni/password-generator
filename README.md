# Zero-dependency journey

This is the second practice on my zero-depency journey (a better would be "Jouney to a more reasonable amount of depencies to manage in a given project", but it lacks marketing), where I take some study time to dive a bit deeper into what Nodejs has to offer and how I could decrease the amount of dependencies that I would normally include in a project, in this case...cli-related libs.

# Purpose

I have worked with libs such as prompt and yargs for cli interaction, and they are great. Without a doubt they are professional tools and my practice here in no way can replace all the functionalities they offer. However, there are those times when our needs aren't complex, yet we rush to search for a lib instead of taking the time to verify if it is needed and, if not, how difficult would it be to implement the feature without one. Nodejs has a lot to offer if you dig a little deeper, and I will admit, only recently have I heard of the readline core module. So, to exemplify what I meant from this paragraph, I have decided to build a simple password generator.

# About the password generator

It can be used in two ways, either with a npm script `npm run dynamic` or by running the executable `genPass` with the offered flags.

## Dynamically generating a password

Works just like eslint, when you are providing the preferences for your project, whether or not it uses typescript, esm or commonjs, etc. In here, the user is prompted to inform if the password should contain letters, uppercase, numbers and/or special characters and, of course, the desired password length. An example is provided below:

![dynamically generated password](https://github.com/tsirianni/random-images/blob/cd17bb5fec3af8de5277a998967164519c2b85dd/zero-dependency-journey/password-example-dynamic.png)

Some basic validation is provided. However, the chery of the cake here is that this whole interaction was created through the use of Node's core module `readline`, which I have recently discovered. Prior to this happy discovery, I was used to relying on the prompt module. Once again, I can't stress this enough, this is only for basic use cases and it does not replace all the functionalities that third-party modules provide, but it is really nice to know that, if possible, you can decrease your dependencies a little. Those who have experienced the tedious process of updating libs will know what I mean.

## genPas executable (with flags)

This is another way of generating a password using a single cli command with flags to specify the preferences. It uses `process.argv` to access the flags passed and perform basic validation and create the user's password. An example can be found below:

![genPass with flags](https://github.com/tsirianni/random-images/blob/cd17bb5fec3af8de5277a998967164519c2b85dd/zero-dependency-journey/password-example-genPass.png)

The acceptable flags are:

**--letters**: Specifies that the password should include lowercase letters.
**--uppercase**: Specifies that the password should include uppercase letters. Requires the --letters flag to be passed as well.
**--numbers**: Specifies that the password should include numbers.
**--specials**: Specifies that the password should include special characters.
**--numbers-only**: Specifies that the password should include only numbers.
**--specials-only**: Specifies that the password should include only special characters.
**--letters-only**: Specifies that the password should include only lowercase letters.

# Conclusion

If your needs are simple enough and all that you need is simple interaction with the user though stdin and stdout, Node's `process` and `readline` modules can do a lot for you. In here, I have not used three libs that I would normally use to create this functionality: prompt, yargs and chalk (to colorize the output). Now, this simple password generator can fully function with only what Nodejs offers out of the box, and that is AMAZING.

# License

This project is licensed under the MIT License. See the LICENSE file for details.
