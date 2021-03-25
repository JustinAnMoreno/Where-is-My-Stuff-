const bcrypt = require('bcrypt');

const SALT_ROUNDS = bcrypt.genSaltSync(10);

const password = 'supersecretpassword';

const hashedString = bcrypt.hashSync(password, SALT_ROUNDS);

console.log(hashedString)

const isMatch = bcrypt.compareSync('yourGuessHere', hashedString); //returns true or false and assigns value to isMatch

console.log(isMatch);