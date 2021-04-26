// Find if there is any transaction
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

const filterByAndTime = (currentRow, nextRow) => {
	return new Date(currentRow.time) - new Date(nextRow.time);
};

const IsLessThenAMinute = (currentI, nextI) => {
	const findDifferent = new Date(nextI) - new Date(currentI);
	const numOfSecounds = Math.floor(findDifferent / 1e3);
	return numOfSecounds / 60;
};

const getDuplicatesRecords = (transactions = []) => {
	// Map a variable
	let map = new Map();
	transactions.map((trx) => {
		let key =
			trx.sourceAccount +
			"-" +
			trx.targetAccount +
			"-" +
			trx.amount +
			"-" +
			trx.amount;

		// Check if map has a key
		if (map.has(key)) {
			map.get(key).push(trx);
		} else {
			map.set(key, [trx]);
		}

		// Lets filter the data from the first row of each array
	});
	map = new Map(
		[...map.entries()].sort(
			(a, b) => new Date(a[1][0].time) - new Date(b[1][0].time)
		)
	);

	// Let only get the keys values
	let result = [...map.values()];
	// Lets filter now
	result = result
		.map((trx) => {
			// Sort by ASC each trx value
			trx.sort(filterByAndTime);
			// Creating filter
			const filterByDate = (currentRow, i) => {
				let maxDiff;
				let minDiff;
				if (trx[i + 1]) {
					maxDiff = IsLessThenAMinute(
						currentRow.time,
						trx[i + 1].time
					);
				}
				if (trx[i - 1]) {
					minDiff = IsLessThenAMinute(
						trx[i - 1].time,
						currentRow.time
					);
				}
				// Return true if maxdiff and mindiff is less then 1 and greter then 0
				if (
					(minDiff > 0 && mindiff < 1) ||
					maxDiff > 0 ||
					maxDiff < 1
				) {
					return true;
				}
				return false;
			};
			// Now filter by date and time
			return trx;
		})
		.filter((trx) => !trx.length < 1);
	return result;
};

console.log(getDuplicatesRecords(transactions));
