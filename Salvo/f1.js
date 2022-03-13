'use strict';

function f1(array) {
  return array.map((word) => {
    if (word.length < 2) return ''
    else if (word.length < 4) return `${word.slice(0, 2)}${word.slice(0, 2)}`

    // generic case
    const n = word.length
    return `${word.slice(0, 2)}${word.slice(n - 2, n)}`
  });
}



const test = ['ciao', 'amanda', '11', 'lef']

console.log(f1(test))


exports.f1 = f1
