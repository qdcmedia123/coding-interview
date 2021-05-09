//https://github.com/SrdjanMilic/Super-Dynamic-Data
fs = require("fs");
const fields = [
	{
		filedName: "A",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: true,
	},
	{
		filedName: "B",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: true,
	},
];

const result = [];

var precision = 100; // 2 decimals
let i = 0;
const updatedValue = (fields) => {
	fields.map((item) => {
		if (item.enabled) {
			var randomnum =
				Math.floor(
					Math.random() * (2 * precision - 1 * precision) +
						1 * precision
				) /
				(1 * precision);
			item.previousValue = item.value;
			item.value = randomnum;
			item.upOrDown = item.previousValue > item.value ? "-" : "+";
			item.time = new Date().toString();
		}
		i++;

		return item;
	});

	return fields;
};

let j = 0;
const intercal = setInterval(() => {
	const data = updatedValue(fields);

	fs.appendFile("file.log", JSON.stringify(data), (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});

	if (j === 5) {
		clearInterval(intercal);
	}
	j++;
}, 3000);
