const fromcurrency = document.getElementById('fc');
const fromammount = document.getElementById('fa');
const tocurrency = document.getElementById('tc');
const toammount = document.getElementById('ta');

fromcurrency.addEventListener('change', calculate);
fromammount.addEventListener('input', calculate);
tocurrency.addEventListener('change', calculate);
toammount.addEventListener('input', calculate);


function calculate() {
	const from_currency = fromcurrency.value;
	const to_currency = tocurrency.value;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to_currency];
		toammount.value = (fromammount.value * rate).toFixed(2);
	})
}

calculate();