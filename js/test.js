const data = [{name: 'hello', id: 34} ,{name: 'hello', id: 34}, {name: 'hello', id: 34}];
const allowed = ['id', 'name'];
const getNameOnly = data.map(function(item) {
	const filter = Object.keys(item).filter(key => allowed.includes(key))
	.reduce((acc, key) => {
		acc[key] = item[key];
		return acc;
	}, {});
	return filter;
})

console.log(getNameOnly)
