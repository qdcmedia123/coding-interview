const data = [{name: 'hello', id: 34} ,{name: 'hello', id: 34}, {name: 'hello', id: 34}];
const allowed = ['name'];

// Get the only name 
const onlyname = data.map(item => {
	const getOnlyNameAttrs = Object.keys(item)
	                   .filter(key => allowed.includes(key))
	                   .reduce((acc, key) => {
	                   	acc[key] = item[key];
	                   	return acc;
	                   }, {});
	return getOnlyNameAttrs;
})	

console.log(onlyname)