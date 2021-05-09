function findSum(n) {
	if (n === 0) return n;
	return n % 9 === 0 ? 9 : n % 9;
}

console.log(findSum(44566666666666666666666666666));
