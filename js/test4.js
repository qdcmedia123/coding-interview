// const removed = person.filter(
// 	(v, i, a) =>
// 		a.findIndex(
// 			(t) =>
// 				t.type === v.type &&
// 				t.licenseNum === v.licenseNum &&
// 				t.state === v.state
// 		) !== i
// );

// const getDuplicatedRecords = transactions.filter(
// 	(v, i, a) =>
// 		a.findIndex(
// 			(t) =>
// 				t.sourceAccount === v.sourceAccount &&
// 				t.targetAccount === v.targetAccount &&
// 				t.category === v.category &&
// 				t.amount === v.amount
// 		) !== i
// );

var person = [
	{ type: "LICENSE", licenseNum: "12345", state: "NV" },
	{ type: "LICENSE", licenseNum: "A7846", state: "CA" },
	{ type: "LICENSE", licenseNum: "12345", state: "OR" },
	{ type: "LICENSE", licenseNum: "10849", state: "CA" },
	{ type: "LICENSE", licenseNum: "B7037", state: "WA" },
	{ type: "LICENSE", licenseNum: "12345", state: "NM" },
	{ type: "LICENSE", licenseNum: "12345", state: "NM" },
	{ type: "LICENSE", licenseNum: "12345", state: "NV" },
	{ type: "LICENSE", licenseNum: "12345", state: "NV" },
	{ type: "LICENSE", licenseNum: "A7846", state: "CA" },
	{ type: "LICENSE", licenseNum: "A7846", state: "CA" },
];

var test = Object.values(
	person.reduce((c, v) => {
		let k = v.type + "-" + v.state + "-" + v.licenseNum;
		c[k] = c[k] || [];
		c[k].push(v);
		return c;
	}, {})
).reduce((c, v) => (v.length > 1 ? c.concat(v) : c), []);
