
let n = 159344999999999999999999;

// function getSum(n) {
//   let sum;
//   if(!sum) {
//   	return;
//   }
//    sum = n
//     .toString()
//     .split("")
//     .reduce((a, b) => {
//       return parseInt(a) + parseInt(b);
//     });

//   if (sum.toString().length > 1) {
//     return getSum(sum);
//   }

//   return sum
//     .toString()
//     .split("")
//     .reduce((a, b) => {
//       return parseInt(a) + parseInt(b);
//     });
// }








// function getSum(n) {
// 	// Set the sum value 0
// 	let sum = 0;

// 	// If n is greater then 0 and sum is greater then 9
// 	while(n > 0 || sum > 9) {
// 		if(n === 0) {
// 			n = sum
// 			sum = 0;
// 		}
// 		sum = sum + n % 10;
// 		n = Math.floor(n / 10)
// 	}
// 	return sum;

// }

function getSum(n)
{
    if (n == 0)
        return 0;
         
    return (n % 9 == 0) ? 9 : (n % 9);
}
 


console.log(getSum(n))
const used = process.memoryUsage().heapUsed / 1021 / 1024;
console.log(`The scripts uses approximately ${Math.round(used * 100) / 100} MB`);

