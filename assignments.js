/*
const country = 'USA';
const continent = 'North America';
const population = 331;
const language = 'English';
//concatenation strings//
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);
//Template literals//

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
*/
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightJohn ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
