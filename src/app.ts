import {Stack} from "./Stack";

console.log('code launched');

const notePad = new Stack<string>();

notePad.push('check1');
console.log('after push', notePad.size);
notePad.pop();
console.log('after pop', notePad.size);
notePad.push('check2');
console.log('after push', notePad.size);


