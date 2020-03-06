const helloWorld = () => {
  const hello = "Hello World!";
  console.log("local hello:::: ", hello);
};

helloWorld();
try {
  console.log("global hello:::: ", hello);
} catch (error) {
  console.log("global hello error:::: ", error);
}

var scope = "I am global";

const functionScope = () => {
  var scope = "I am just a local";
  const func = () => {
    return scope;
  };
  console.log("local scope:::: ", func());
};

functionScope();
// Lexical scope
console.log("global scope:::: ", scope);
