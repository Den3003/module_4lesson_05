'use strict'

{
  const reverseString = (str) => {
    str = str.trim();
    let modifyString = '';

    for (let i = str.length - 1; i >= 0; i--) {
      modifyString += str[i];
    }
    return modifyString
  }

  console.log(reverseString('  Привет мир '));
}