
//let js = 'boring';
//if (js === 'boring') alert('javascript is FUN!');
//console.log(42+20+8-10);

//let javascriptIsFun = true;
//console.log(javascriptIsFun);

//console.log(typeof true);
//console.log(typeof javascriptIsFun);
//console.log(typeof 'jonas');
//console.log(typeof 23);

//javascriptIsFun = 'Yes!';
//console.log(typeof javascriptIsFun);


//let year;
//console.log(year);
//console.log(typeof year);
//year = 1991
//console.log(year);
//console.log(typeof null);
//let age = 30;
//age =31;
//const birthYear = 1991;
//birthYear = 1990;
//var job = "programmer"
//job = 'teacher'
//lastName = 'schedtmann';
//console.log(lastName);
//math operators
//const now = 2037;
//const ageJohn = now - 1991;
//const ageSarah = now - 2018;
//console.log(ageJohn, ageSarah);

//console.log(ageJohn * 2, ageSarah / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3
//const firstName = 'jonas';
//const lastName = 'schmedmann';
//console.log(firstName + ' ' + lastName);
//assignment operators
//let x = 10 + 5; // 15
//console.log(x);
//x += 10; // x = x + 10 = 25
//x *= 4; // x = x * 4 = 100
//x ++; // x = x + 1 = 101
//x --; // x = x - 1 = 99
//x --;
//console.log(x);
//comparison operators
/*
const now = 2037;
const ageJohn = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x,y);
 const averageAge = (ageJohn + ageSarah) /2
 console.log(ageJohn, ageSarah, averageAge);
 */
/*
const firstName = "jonas";
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "i'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
const jonasNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`just a regular strings....`);
console.log('string with \n\
  multiple \n\
lines');
console.log(`string
  with multiple
  lines`);
  */
// const age = 15;


// if (age >= 18) {
// console.log('Sarah can start driving licence 🚘🚜');

// } else {
//   // note that else block is actually optional
//   const yearsLeft = 18 - age;
//   console.log (`Sarah is too young. Wait another ${yearsLeft} years :)`);

// }
// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20; // If birthYear is less than or equal to 2000, set century to 20
// } else {
//   century = 21; // Otherwise, set century to 21
// }

// console.log(century); // Print the century to the console

// Type conversion and coercion
// type conversion
// const inputYear = '1991';
// console.log(Number (inputYear), inputYear);
// console.log(Number (inputYear) + 18);

// console.log(Number ('jonas'));
// console.log(typeof NaN);
// console.log(String (23), 23);

// //type coercion
// console.log(' I am ' + 23 + 'years old');
// console.log('23' - '10' - '3');
// console.log('23' + '10' + '3');
// console.log(23 + 10 + 3);
// console.log('23' * '2');
// console.log(23 / 2);
// let n = '1' + 1; // 11
// n = n - 1; // here the string 11 is converted to a number and calculated
// console.log(n);

//Truthy and falsy values
// 5 falsy values; 0, null, undefined, NaN, ''
// console.log(Boolean (0));
// console.log(Boolean (undefined));
// console.log(Boolean ('jonas'));
// console.log(Boolean ({}));


// const money = 0;
// if (money) {
//   console.log("Don't spend it all");

// } else {
//   console.log('You should get a job!')
// };

// const money = 100;
// if (money) {
//   console.log("Don't spend it all");

// } else {
//   console.log('You should get a job!')
// };


// let height;
// if (height) {
//   console.log('YAY! Height is Defined')
// } else {
//   console.log('Height is Undefined')
// }
/*
let height = 123;
if (height) {
  console.log('YAY! Height is Defined')
} else {
  console.log('Height is Undefined')
};
*/
// Equality operators
// const age = 18;
// if (age === 18) console.log('You just become an adult :D (strict)');
// if (age == 18) console.log(' You just become an adult :D (loose)');


// const age = '18';
// if (age === 18) console.log('You just become an adult :D (strict)');
// if (age == 18) console.log(' You just become an adult :D (loose)');
// const age = '18';
// if (age == 18) console.log('You just become an adult :D (strict)');
// else {(' You just become an adult :D (loose)')};
// const age = 18;
// if (age == 18) console.log('You just become an adult :D (strict)');
// else {(' You just become an adult :D (loose)')};

// const age = '18';
// if (age === 18) console.log('You just become an adult :D (strict)');

//  if (age == 18) console.log(' You just become an adult :D (loose)');

 // note when writing equality operators avoid using the loose operator bcos it can bring alot bugs and confussion into ur code












/*
 const favourite = Number (prompt ("what's your favourite number?"));
 console.log(favourite);
 console.log(typeof favourite);

 if (favourite === 23) //{22 === 23 -> FALSE}
 console.log('cool ! 23 is an amazing number!');
 else if (favourite === 7)
  console.log('7 is also a cool number')
else if (favourite === 9)
  console.log('9 is also a cool number')

else (console.log ('Number is not 23 or 7 or 9'));

//the opposite != loose !== strict types
if (favourite !== 23) console.log('why not 23?');
*/
//Logical Operators

// const hasDriversLicense = true // A
// const hasGoodVision = true // B
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {console.log ('Sarah is able to drive!')}
// else {
//   console.log ('Someone else should drive....');
// }

// const isTired = true; // c
// console.log (hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');

// } else {
//   console.log("Someone else should drive......");
// }


// SWITCH STATEMENT USED IN PLACE OF IF ELSE

/*
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
console.log("plan course structure");
console.log('Go to coding meetup');

break;
case 'tuesday':
  console.log('prepare theory videos');
break;
case 'wednesday':
case 'thursday':
  console.log('write code example');
  break;
  case 'friday':
    console.log('Record videos');
break;
case 'saturday':
  case 'sunday':
  console.log('enjoy the weekend :D');
break;
default:
  console.log('Not a valid day!');

}


if (day === 'monday') {
  console.log('plan course structure');
  console.log('Go to coding meetup');

}
else if (day === 'tuesday')
{
  console.log('prepare theory videos');
}
else if (day === 'wednesday' || 'thursday'
){
  console.log ('write code example' );
}
else if (day === 'friday') {
  console.log('Record videos');
}
else {'Not a valid code'}

*/
//Statements and expressions
// 3 + 4
// 1991
// true && false && !false


// if (23 > 10) {
// const str = '23 is bigger';

// }

// const me = 'Jonas'; 

// console.log("i'm  ${2037 - 1991} years old ${me}")


// conditional (ternary) operators
const age = 23
// age >= 18 ? console.log(' I like to drink wine 🍷') :
// console.log('i like to drink water 💧');

// const drink = age >=18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';}
  else {
    drink2 = 'water 💧';
  }

console.log(drink2);
// tenary operators usage in template literal
console.log(`i like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
