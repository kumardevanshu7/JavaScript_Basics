let bread1 = prompt("Which bread would you like to eat : ");
let veggie1 = prompt("Which veggies would you like to eat : ");
let sauce1 = prompt("Which suace would you like to eat : ");

function makeSandwich(bread, veggies, sauce) {
  let ans =
    "Your " +
    bread +
    " Bread with " +
    veggies +
    " and also have " +
    sauce +
    " in it. Is READY!";
  return ans;
}

let clearEatting = makeSandwich(bread1, veggie1, sauce1);
console.log(clearEatting);
