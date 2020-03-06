a = 2;
console.log("a from hoisting:::: ", a);
var a;
console.log("a:::: ", a);

console.log(a);
var a;

nameOfDog("Crash from hoisting");
function nameOfDog(name) {
  console.log(name);
}
nameOfDog("Crash without hoisting");
