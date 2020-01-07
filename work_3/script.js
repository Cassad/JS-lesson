document.addEventListener("DOMContentLoaded", function () {


	let money;
	let time;

	function start() {
		money = +prompt("Ваш бюджет на месяц?", '');
		time = prompt('Введите дату в формате YYYY-MM-DD', '');

		while (money == '' || money == null || isNaN(money)) {
			money = +prompt("Ваш бюджет на месяц?", '');
		}
	}
	// start();

	let appData = {
		budget: money,
		expenses: {},
		optionalExpenses: {},
		income: [],
		timeData: time,
		savings: true
	};

	function chooseExpenses() {
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
	}

	// chooseExpenses();


	function detectDayBudget() {
		appData.moneyPerDay = Math.round(appData.budget / 30);
	}

	// detectDayBudget();


	function detectLevel() {
		if (appData.moneyPerDay < 100) {
			console.log('У вас минимальный бюджет');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
			console.log('у вас средний бюджет');
		} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
			console.log('Ваш бюджет выше среднего');
		} else if (appData.moneyPerDay > 2000) {
			console.log('у вас высокий бюджет');
		}
	}
// detectLevel();



	function checkSavings() {
		if (appData.savings === true) {
			let save = +prompt('Какова сумма накоплений'),
				percent = +prompt('Под какой процент?');

			appData.monthIncome = save / 100 / 12 * percent;
			alert(`Доход в месяц с вашего депозита = ${appData.monthIncome}`);
		}
	}
	// checkSavings();

	function chooseOptExpenses(){
		for (let i = 1; i < 4; i++){
			let answer = prompt('Статья необязательных расходов');
			if (answer == '' || answer == null || !isNaN(answer)) {
				i--;
			} else {
				appData.optionalExpenses[i] = answer;
			}
		}

	}
	chooseOptExpenses();


	console.log(appData);
});
