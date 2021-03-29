const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
	const res = await fetch('https://randomuser.me/api');
	const data = await res.json(); // need await here as well this also returns promise

	const user = data.results[0];
	const newUser = {
		name: `${user.name.first} ${user.name.last}`,
		money: Math.floor(Math.random() * 1000000),
	};

	addData(newUser);
}

// Add new object to data array
function addData(obj) {
	data.push(obj);

	updateDOM();
}

// Update DOM // nothigns' passed in, use default 'data' data.
function updateDOM(providedData = data) {
	// Clear main div
	// we first need to clear innerHTML as 'addData' gets an item from 'data' in 'getRandomUser' func  asyncronously!!!
	// 'data' global var accumulates when forEach is executed!!!
	main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

	providedData.forEach((item) => {
		const element = document.createElement('div');
		element.classList.add('person');
		element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
		main.appendChild(element);
	});
}

// Format number as money
function formatMoney(number) {
	return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
