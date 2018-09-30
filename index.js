/****************************/
/********* CONST #1 *********/
const hello = 'Hello World'
console.log(hello);
try {
hello = 'Hello World #2' //should throw an error const can only be assigned once
} catch(error){
  console.error(error.message);
}
console.log(hello);
console.log('\nThe End.');
/****************************/
/********* CONST #2 *********/
const array_1 = [1,2];
console.log(array_1);
try {
  array_1 = [1,2,3]; //should throw an error const can olny be assigned once
} catch (error) {
  console.error(error.message);
}
console.log(array_1);
try {
  array_1.push(3); //should not thow an error only assignment is protected for overwrites on const variables
} catch (error) {
  console.log(error.message);
}
console.log(array_1);
/****************************/
/********** LET #1 **********/
if (true){
  let message_1 = 'Hello World'
  console.log(message_1);
}
try {
  console.log(message_1);//should throw an error because message_1 scope is only inside if
} catch (error) {
  console.log(error.message);
}
/****************************/
/***** Interpolation #1 *****/
let value = 1;
const title = `Hello,
Value Is ${value}`
console.log(title);
/****************************/
/******** Classes #1 ********/
class Person {
    constructor (name) {
      this.name = name
    }

    getName () {
      return this.name
    }

    static salute(){
      console.log('Hello');
    }
}
const popeye = new Person('Popeye');
console.log(popeye.getName());
Person.salute();
/****************************/
/******** Promises #1 ********/
const delay = new Promise((resolve, reject) => {
  if(true){
    setTimeout(() => {
      resolve('Done.')
    }, 3000);
  } else {
    reject(error)
  }
})
delay.then((result) => { console.log(result, 'Also done.');
 })
/*****************************/
