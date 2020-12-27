// JS Exchanging key and its value 
const raw = {
  item1: { key: 'sdfd', value:'sdfd' },
  item2: { key: 'sdfd', value:'sdfd' },
  item3: { key: 'sdfd', value:'sdfd' }
};

const allowed = ['item1', 'item3'];

const filter = Object.keys(raw).filter(item => allowed.includes(item)).reduce((acc, key) => {
	acc[key] = raw[key];
	return acc;
}, {});

console.log(filter)