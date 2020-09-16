var a = 'AGGTAB';
var b = 'GXTXAYB';


function lcs(a,b) {
	var aSub = a.substr(0, a.length -1);
	var bSub = b.substr(0, b.length -1);
	if(a.length === 0 || b.length === 0) {
		return'';
	} else if(a[a.length -1] === b[b.length -1]) {
		return lcs(aSub, bSub) + a[a.length -1]
	} else {
		var x = lcs(aSub, b);
		var y = lcs(a, bSub);
		return x.length > y.length ? x : y;
	}
}
console.log(lcs(a,b))