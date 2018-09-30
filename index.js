/********* CONST *********/
const hello = 'Hello World'
console.log(hello);
try {
hello = 'Hello World #2' //should throw an error const can only be assigned once
} catch(error){
  console.error(error.message);
}
console.log(hello);
console.log('\nThe End.');
/*************************/
