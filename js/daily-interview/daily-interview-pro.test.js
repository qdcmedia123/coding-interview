const questions = require("./daily-interview-pro");
const addOneToNumber = questions.addOneToNumber;
const compareVesrion = questions.compareVesrion;
const findMedian = questions.findMedian;
/*

Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer. The most significant digit is at the front of the array and each element in the array contains only one digit. Furthermore, the integer does not have leading zeros, except in the case of the number '0'.*/
it("add one number at the ", () => {
	expect(addOneToNumber([1, 2])).toEqual([1, 3]);
	expect(addOneToNumber([1, 2, 3])).toEqual([1, 2, 4]);
	expect(addOneToNumber([1, 7, 8, 9])).toEqual([1, 7, 9, 0]);
	expect(addOneToNumber([9, 9, 9])).toEqual([1, 0, 0, 0]);
});

it("checking new version", () => {
	const compare = compareVesrion("1.1", "1.0.0");
	expect(compare.arr1).toEqual(true);
});

it("throw arr2 should be true", () => {
	const compare = compareVesrion("1.1.2", "1.1.3");
	expect(compare.arr2).toEqual(true);
});

it("compute the median", () => {
	const median = findMedian([5, 15, 10, 20, 3]);
	const median1 = findMedian([5, 10, 15]);
	expect(median1).toEqual([5, 7.5, 10]);
	expect(median).toEqual([5, 10, 10, 12.5, 10.6]);
});
