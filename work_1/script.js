let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let answer1 = prompt("Ввведите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");

let appData = {
  budjet: parseInt(money),
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.expenses[answer1] = answer2;

alert(appData.budjet/30);


console.log(appData);
