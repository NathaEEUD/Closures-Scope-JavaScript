var hello = "Hello";
let world = "World";
const helloWorld = "Hello World!";

const oneFunction = () => {
  console.log("hello:::: ", hello);
  console.log("world:::: ", world);
  console.log("helloWorld:::: ", helloWorld);
};

oneFunction();

const secondFunction = () => {
  // Bad practice. Is a global variable due hoisting
  globalVar = "I am global";
};

secondFunction();
console.log("globalVar:::: ", globalVar);

const thirdFunction = () => {
  // Bad practice. globalVar is going to be a global variable
  let localVar = (globalVar = "I am Global");
};

thirdFunction();
console.log("globalVar:::: ", globalVar);
