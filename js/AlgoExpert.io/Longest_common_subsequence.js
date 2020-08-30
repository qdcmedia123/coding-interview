//https://rosettacode.org/wiki/Longest_common_subsequence#JavaScript
function lcs(a, b) {
  var aSub = a.substr(0, a.length - 1);
  var bSub = b.substr(0, b.length - 1);
 
  if (a.length === 0 || b.length === 0) {
    return '';
  } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
    return lcs(aSub, bSub) + a.charAt(a.length - 1);
  } else {
    var x = lcs(a, bSub);
    var y = lcs(aSub, b);
    return (x.length > y.length) ? x : y;
  }
}


// ES6 recursive implementation
const longest = (xs, ys) => (xs.length > ys.length) ? xs : ys;
 
const lcs = (xx, yy) => {
  if (!xx.length || !yy.length) { return ''; }
 
  const [x, ...xs] = xx;
  const [y, ...ys] = yy;
 
  return (x === y) ? (x + lcs(xs, ys)) : longest(lcs(xx, ys), lcs(xs, yy));
};