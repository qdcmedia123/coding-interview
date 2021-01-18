const last = <T>(arr:T[]): T => {
	return arr[arr.length-1];
}

const l = last([1,2,3]);
console.log(l);

const l2 = last<string>(['a','c']);
console.log(l2);

const l3 = last<string | number>([1,2, 'b']);

console.log(l3)

const makeArray = <X, Y>(x: X, y: Y): [X,Y] => {
	return [x,y];
}

const n1 = makeArray(5,6);
const s1 = makeArray('a', 'b');
const ns1 = makeArray<string | null, number>('a', 1);
const ns2 = makeArray<string| number| null , string>(null, 'f');


