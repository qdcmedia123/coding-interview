const data = [{name: 'hello', id: 34} ,{name: 'hello', id: 34}, {name: 'hello', id: 34}];
const allowed = ['name'];

const getOnlyName = data.map(function(item) {
	const onlyName = Object.keys(item)
	            .filter(key => allowed.includes(key))
	            .reduce((acc, key) => {
	            	acc[key] = item[key];
	            	return acc;
	            }, {});
	return onlyName;
});

console.log(getOnlyName)