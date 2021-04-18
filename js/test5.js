"use strict";
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

const hashCode = (str) =>
	str
		.split("")
		.reduce(
			(prevHash, currVal) =>
				((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
			0
		);

const sortByTime = (trx, nextTrx) =>
	new Date(trx.time) - new Date(nextTrx.time);

const getMinutesFromDates = (startDate, endDate) => {
	const difference =
		new Date(endDate).getTime() - new Date(startDate).getTime();
	return difference / 60000;
};

const findDuplicateTransactions = (transactions = []) => {
	let map = new Map();
	transactions.forEach((item) => {
		const hash = hashCode(
			item.sourceAccount +
				item.targetAccount +
				item.category +
				item.amount
		);
		if (map.has(hash)) {
			map.get(hash).push(item);
		} else {
			map.set(hash, [item]);
		}
	});
	console.log(map);
	map = new Map(
		[...map.entries()].sort(
			(a, b) => new Date(a[1][0].time) - new Date(b[1][0].time)
		)
	);

	return;

	let result = [...map.values()];

	result = result
		.map((arrOfTrx) => {
			arrOfTrx.sort(sortByTime);

			const filterByTime = (trx, index) => {
				let diffMax;
				let diffMin;

				if (arrOfTrx[index + 1]) {
					diffMax = getMinutesFromDates(
						trx.time,
						arrOfTrx[index + 1].time
					);
				}
				if (arrOfTrx[index - 1]) {
					diffMin = getMinutesFromDates(
						arrOfTrx[index - 1].time,
						trx.time
					);
				}

				if (
					(diffMin > 0 && diffMin < 1) ||
					(diffMax > 0 && diffMax < 1)
				) {
					return true;
				}
				return false;
			};
			arrOfTrx = arrOfTrx.filter(filterByTime);

			return arrOfTrx;
		})
		.filter((arrOfTrx) => !arrOfTrx.length < 1);

	return result;
};

console.log(findDuplicateTransactions(transactions));
