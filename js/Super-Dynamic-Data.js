//https://github.com/SrdjanMilic/Super-Dynamic-Data
const fields = [
	{
		filedName: "A",
		value: 3,
		mutable: false,
		previousValue: 3,
	},
	{
		filedName: "B",
		value: 3,
		mutable: false,
		previousValue: 3,
	},
	{
		filedName: "C",
		value: 3,
		mutable: false,
		previousValue: 3,
	},
	{
		filedName: "D",
		value: 3,
		mutable: false,
		previousValue: 3,
	},
];

var precision = 100; // 2 decimals

const updatedValue = (fields) => {
	fields.map((item) => {
		var randomnum =
			Math.floor(
				Math.random() * (2 * precision - 1 * precision) + 1 * precision
			) /
			(1 * precision);
		item.previousValue = item.value;
		item.value = randomnum;
		item.upOrDown = item.previousValue > item.value ? "-" : "+";

		return item;
	});
	return fields;
};

// setInterval(() => {
// 	console.table(updatedValue(fields));
// }, 2000);
