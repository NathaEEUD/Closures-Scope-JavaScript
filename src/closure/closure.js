const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log("Money Box saveCoins:::: ", saveCoins);
};

moneyBox(5);
moneyBox(10);

// With Closure
const moneyBoxClosure = () => {
  let saveCoins = 0;

  const countCoins = (coins) => {
    saveCoins += coins;
    console.log("Money Box Closure saveCoins:::: ", saveCoins);
  };

  return countCoins;
};

let myMoneyBox = moneyBoxClosure();

myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); //20
