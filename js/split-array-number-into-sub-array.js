
//https://ourcodeworld.com/articles/read/278/how-to-split-an-array-into-chunks-of-the-same-size-easily-in-javascript

Array.prototype.shuffle = function(){
  var i = this.length,
      j,
    tmp;
  while (i > 1) {
    j = Math.floor(Math.random()*i--);
    tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};

function groupPlayers(a,n){
  var result = [],
    remnants = a.shuffle().splice(-(a.length % n) || a.length); // the ones out in the cold
  for (var i = 0, len = a.length; i < len; i += len/n ) 
    result.push(a.slice(i,i + len/n));
  return remnants.reduce((res,e,i,a) => (res[res.length-1-i].push(e),res),result); // finding a home for remnants
}


var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
 result = groupPlayers(arr,3);
console.log(result);
