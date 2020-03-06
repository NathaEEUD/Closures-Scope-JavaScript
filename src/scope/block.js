const fruits = () => {
  if (true) {
    var fruit1 = "Apple";
    let fruit2 = "Banana";
    const fruit3 = "Kiwi";

    console.log("fruit2::: ", fruit2);
    console.log("fruit3::: ", fruit3);
  }
  console.log("global fruit1::: ", fruit1);
  // fruit2 and fruit3 cannot be accessed
  // console.log("global fruit2::: ", fruit2)
  // console.log("global fruit3::: ", fruit3)
};
fruits();

let x = 1;
{
  let x = 2;
  console.log("local x:::: ", x);
}
console.log("global x:::: ", x);

var y = 1;
{
  var y = 2;
  console.log("local y:::: ", y);
}
console.log("global y:::: ", y);

const oneFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log("i:::: ", i);
    }, 1000);
  }
};
oneFunction();
