// const data = [
// 	'[{"filedName":"A","value":1.77,"mutable":false,"previousValue":3,"enabled":true,"change":-1.23,"upOrDown":"-","time":"2021-05-12T10:18:09.985Z"},{"filedName":"B","value":1.51,"mutable":false,"previousValue":3,"enabled":true,"change":-1.49,"upOrDown":"-","time":"2021-05-12T10:18:09.985Z"},{"filedName":"C","value":1.16,"mutable":false,"previousValue":3,"enabled":true,"change":-1.84,"upOrDown":"-","time":"2021-05-12T10:18:09.985Z"},{"filedName":"D","value":3,"mutable":false,"previousValue":3,"enabled":false}]',
// 	'[{"filedName":"A","value":1.78,"mutable":false,"previousValue":1.77,"enabled":true,"change":0.010000000000000009,"upOrDown":"+","time":"2021-05-12T10:18:11.998Z"},{"filedName":"B","value":1.27,"mutable":false,"previousValue":1.51,"enabled":true,"change":-0.24,"upOrDown":"-","time":"2021-05-12T10:18:11.998Z"},{"filedName":"C","value":1.39,"mutable":false,"previousValue":1.16,"enabled":true,"change":0.22999999999999998,"upOrDown":"+","time":"2021-05-12T10:18:11.998Z"},{"filedName":"D","value":3,"mutable":false,"previousValue":3,"enabled":false}]',
// ];

// const getFileByName = (data, filedName) => {
// 	const getAttrs = data.map((row) => {
// 		const parseRow = JSON.parse(row);
// 		const getRows = parseRow.filter((item) => {
// 			if (item.filedName === filedName) {
// 				return true;
// 			}
// 		});
// 		return getRows;
// 	});

// 	const getGraphData = getAttrs.map((item) => {
// 		return item[0];
// 	});
// 	return getGraphData;
// };

// // Get first index and its keys
// const filedNames = JSON.parse(data[0]).map((item) => {
// 	return item.filedName;
// });

// // Lets again map the data
// const getAllRecords = filedNames.map((fieldName) => {
// 	const result = {};
// 	const fieldRows = getFileByName(data, fieldName);
// 	result[fieldName] = fieldRows;
// 	return  result;
// });
// console.log(getAllRecords);
// //console.log(getFileByName(data, "A"));

// const data = [
// 	{
// 		A: [
// 			{
// 				filedName: "A",
// 				value: 1.77,
// 				mutable: false,
// 				previousValue: 3,
// 				enabled: true,
// 				change: -1.23,
// 				upOrDown: "-",
// 				time: "2021-05-13T13:54:59.201Z",
// 			},
// 			{
// 				filedName: "A",
// 				value: 1.57,
// 				mutable: false,
// 				previousValue: 1.77,
// 				enabled: true,
// 				change: -0.19999999999999996,
// 				upOrDown: "-",
// 				time: "2021-05-13T13:55:01.208Z",
// 			},
// 		],
// 	},
// 	{
// 		B: [
// 			{
// 				filedName: "B",
// 				value: 1.4,
// 				mutable: false,
// 				previousValue: 3,
// 				enabled: true,
// 				change: -1.6,
// 				upOrDown: "-",
// 				time: "2021-05-13T13:54:59.201Z",
// 			},
// 			{
// 				filedName: "B",
// 				value: 1.61,
// 				mutable: false,
// 				previousValue: 1.4,
// 				enabled: true,
// 				change: 0.2100000000000002,
// 				upOrDown: "+",
// 				time: "2021-05-13T13:55:01.208Z",
// 			},
// 		],
// 	},
// 	{
// 		C: [
// 			{
// 				filedName: "C",
// 				value: 1.42,
// 				mutable: false,
// 				previousValue: 3,
// 				enabled: true,
// 				change: -1.58,
// 				upOrDown: "-",
// 				time: "2021-05-13T13:54:59.201Z",
// 			},
// 			{
// 				filedName: "C",
// 				value: 1.55,
// 				mutable: false,
// 				previousValue: 1.42,
// 				enabled: true,
// 				change: 0.13000000000000012,
// 				upOrDown: "+",
// 				time: "2021-05-13T13:55:01.208Z",
// 			},
// 		],
// 	},
// 	{
// 		D: [
// 			{
// 				filedName: "D",
// 				value: 3,
// 				mutable: false,
// 				previousValue: 3,
// 				enabled: false,
// 			},
// 			{
// 				filedName: "D",
// 				value: 3,
// 				mutable: false,
// 				previousValue: 3,
// 				enabled: false,
// 			},
// 		],
// 	},
// ];

// for (let [, item] of Object.entries(data)) {
// 	for (let [key, value] of Object.entries(item)) {
// 		console.log(value);
// 	}
// }

const d = [
	{
		filedName: "D",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: false,
	},
	{
		filedName: "D",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: false,
	},
	{
		filedName: "D",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: false,
	},
];

console.log(typeof d);
