const isLessThenAMinute = (currentRow, nextRow) => {
	// Find the different between the time
	const diff = new Date(nextRow) - new Date(currentRow);
	// Number of secound
	const seounds = Math.floor(diff / 1e3);
	// Return the minutest
	return seounds / 60;
};

const sortByDateASC = (currentRow, nextRow) => {
	return new Date(currentRow.time) - new Date(nextRow.time);
};

const transactions = [
	{
		id: 3,
		sourceAccount: "A",
		targetAccount: "B",
		amount: 100,
		category: "eating_out",
		time: "2018-03-02T10:34:30.000Z",
	},
	{
		id: 1,
		sourceAccount: "A",
		targetAccount: "B",
		amount: 100,
		category: "eating_out",
		time: "2018-03-02T10:33:00.000Z",
	},
	{
		id: 6,
		sourceAccount: "A",
		targetAccount: "C",
		amount: 250,
		category: "other",
		time: "2018-03-02T10:33:05.000Z",
	},
	{
		id: 4,
		sourceAccount: "A",
		targetAccount: "B",
		amount: 100,
		category: "eating_out",
		time: "2018-03-02T10:36:00.000Z",
	},
	{
		id: 2,
		sourceAccount: "A",
		targetAccount: "B",
		amount: 100,
		category: "eating_out",
		time: "2018-03-02T10:33:50.000Z",
	},
	{
		id: 5,
		sourceAccount: "A",
		targetAccount: "C",
		amount: 250,
		category: "other",
		time: "2018-03-02T10:33:00.000Z",
	},
];

const findDupliTransLessThenAMin = (transactions = []) => {
	// Defining map variable
	let map = new Map();
	// Group the data by its attributes
	transactions.map((trns) => {
		let key =
			trns.sourceAccount +
			"-" +
			trns.targetAccount +
			"-" +
			trns.amount +
			"-" +
			trns.category;
		// If map has a key
		if (map.has(key)) {
			map.get(key).push(trns);
		} else {
			// Create new key and value array
			map.set(key, [trns]);
		}
	});
	// Sort the each key value first row by ASC
	map = new Map(
		[...map.entries()].sort(
			(a, b) => new Date(a[1][0].time) - new Date(b[1][0].time)
		)
	);
	// Get the values
	let result = [...map.values()];
	result = result
		.map((trx) => {
			// Sort each of the trx with ASC again
			trx.sort(sortByDateASC);
			// Create filter
			const filterByDateAndTime = (currentRow, i) => {
				let minDiff;
				let maxDiff;

				if (trx[i + 1]) {
					maxDiff = isLessThenAMinute(
						currentRow.time,
						trx[i + 1].time
					);
				}
				if (trx[i - 1]) {
					minDiff = isLessThenAMinute(
						trx[i - 1].time,
						currentRow.time
					);
				}

				if (
					(maxDiff > 0 && maxDiff < 1) ||
					(minDiff > 0 && minDiff < 1)
				) {
					return true;
				}
				return false;
			};
			trx = trx.filter(filterByDateAndTime);
			return trx;
		})
		.filter((trx) => !trx.length < 1);

	return result;
};

//console.log(findDupliTransLessThenAMin(transactions));
const number = 12;
// 6 + 3 + 3
