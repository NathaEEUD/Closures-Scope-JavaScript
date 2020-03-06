const fruits = () => {
  var fruit = "Apple";
  console.log("local fruit:::: ", fruit);
};

fruits();
try {
  console.log("global fruit:::: ", fruit);
} catch (error) {
  console.log("global fruit error:::: ", error);
}

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // y cannot be re declared
  // let y = 2;

  console.log("local x:::: ", x);
  console.log("local y:::: ", y);
};

anotherFunction();
