// function chainedWords(arr) {
// 	var result = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		for (var j = i; j < arr.length; j++) {
// 			let lWordFIndex = arr[i][arr[i].length - 1];
// 			let fWordSIndex = arr[j][0];

// 			if (lWordFIndex.toLowerCase() === fWordSIndex.toLowerCase()) {
// 				result.push(arr[i]);
// 				result.push(arr[j]);
// 			}
// 		}
// 	}
// 	result = result.splice(0, arr.length);
// 	return result;
// }
// const word1 = ["aab", "bac", "aaa", "cda"];
// const chained1 = chainedWords(word1);

// console.log(chained1);
