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
