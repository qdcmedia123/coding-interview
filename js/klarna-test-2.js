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

// All the
//
const findDuplicateTransactions = (transaction) => {
	// Find the transaction with following dupulicates value
	// sourceAccount, targetAccount, category, amount
	// Since ID can be unique, lets remove it first
	const removeId = transaction.map((item) => {
		delete item.id;
		return item;
	});

	return removeId;
};

const start = new Date("2021-04-11T09:13:56.137Z");
const end = new Date();

function IsLessThenAMinute(currentI, nextI) {
	const startTime = new Date(currentI);
	const endTime = new Date(nextI);
	var findDifferent = end - start;
	if (findDifferent > 1e3) {
		const numOfSecounds = Math.floor(findDifferent / 1e3);
		if (numOfSecounds < 60) {
			return true;
		}
		return false;
	}
}

const getDuplicatedRecords = Object.values(
	transactions.reduce((c, v) => {
		let k =
			v.sourceAccount +
			"-" +
			v.targetAccount +
			"-" +
			v.category +
			"-" +
			v.amount;
		c[k] = c[k] || [];
		c[k].push(v);
		return c;
	}, {})
).reduce((c, v) => (v.length > 1 ? c.concat(v) : c), []);

const email = "sd";

console.log({ email });
