let n = 159;
    //Function to get sum of digits
    function getSum(n) {
        let sum = 0;
        while (n > 0 || sum > 9) {
             if(n == 0) {
                n = sum;
                sum = 0;
             }
             sum = sum + n % 10;
             n = Math.floor(n / 10);
        }
        return sum;
    }

console.log(getSum(n))