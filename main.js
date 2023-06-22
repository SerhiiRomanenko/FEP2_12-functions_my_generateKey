// Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let result = "";

  if (characters.length > 0 && length >= 1 && typeof length === "number") {

  for (let i = length; i > 0; i-- ) {
    result += characters[Math.floor(Math.random() * (characters.length - 0))];
  }
    return result;

  } else {
    return "Oops=( Wrong parameters";
  }
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i