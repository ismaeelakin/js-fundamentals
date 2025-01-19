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
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
*/
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn)
// {`Mark's ${BMIMark} BMI is higher than john's ${BMIJohn} !`}
// else {console.log(`john's ${BMIJohn} BMI is higher than Mark's ${BMIMark}!`)};


// //Code challenage

// const scoreDolphins = (96+ 108+ 89) / 3;
// const scoreKoalas = (88+ 91+ 110) / 3;
// console.log (scoreDolphins, scoreKoalas);


// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins wins the trophy 🏆');
// } else  if ( scoreKoalas > scoreDolphins) {
//   console.log('Kaolas will win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log ('Both win the trophy!');
// }


// const scoreDolphins = (97+ 112+ 101) / 3;
// const scoreKoalas = (109+ 95+ 123) / 3;
// console.log (scoreDolphins, scoreKoalas);


// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins wins the trophy 🏆');
// } else  if ( scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Kaolas will win the trophy 🏆');
// }
//   else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy 🏆');
//   } else {
//     console.log('No one wins the trophy 🥹');
//   } 

// Code challenge
const bill = 40;
const tip = bill <= 300 && bill >= 50 ?  bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip} , and the total value ${bill + tip}`);
