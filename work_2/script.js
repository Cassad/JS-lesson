document.addEventListener("DOMContentLoaded", function () {


  let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

  let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
  };
  //------------------while-----------------
  // let i = 0;
  // while ( i < 2){
  // 	let a = prompt("Введите обязательную статью расходов в этом месяце", '');
  // 	let b = prompt("Во сколько обойдется?", '');
  // 	if (a != '' && typeof a != null && typeof b != null &&
  // 			a.length < 20 && b != '') {
  // 			console.log('correct');
  // 			appData.expenses[a] = b;
  // 			appData.expenses[a] = b;
  // 	} else {
  // 			console.log('incorrect');
  // 			i = 0;
  // 	}	
  // 	i++;
  // }

  //--------------------do while------------------
  // let i = 0;
  // do{
  // 		let a = prompt("Введите обязательную статью расходов в этом месяце", '');
  // 		let b = prompt("Во сколько обойдется?", '');
  // 		if (a != '' && typeof a != null && typeof b != null &&
  // 				a.length < 20 && b != '') {
  // 				console.log('correct');
  // 				appData.expenses[a] = b;
  // 				appData.expenses[a] = b;
  // 		} else {
  // 				console.log('incorrect');
  // 				i = 0;
  // 		}	
  // 		i++;
  // }
  // while(i < 2);
  //--------------------------for-------------------

  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
    if (a != '' && typeof a != null && typeof b != null &&
      a.length < 20 && b != '') {
      console.log('correct');
      appData.expenses[a] = b;
      appData.expenses[a] = b;
    } else {
      console.log('incorrect');
      i = 0;
    }
  }
  console.log(appData);

  appData.moneyPerDay = appData.budget / 30;


  if (appData.moneyPerDay < 100) {
    console.log('У вас минимальный бюджет');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log('у вас средний бюджет');
  } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log('Ваш бюджет выше среднего');
  } else if (appData.moneyPerDay > 2000) {
    console.log('у вас высокий бюджет');
  }
});
