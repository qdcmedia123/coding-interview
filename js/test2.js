const expenses = [
   {
      "id":1,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-332,
      "category":"eating_out",
      "time":"2020-08-06T16:38:37.000"
   },
   {
      "id":2,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-149,
      "category":"other",
      "time":"2021-04-03T16:13:29.000"
   },
   {
      "id":3,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-403,
      "category":"other",
      "time":"2020-12-08T01:20:46.000"
   },
   {
      "id":4,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-11,
      "category":"eating_out",
      "time":"2020-10-19T19:12:22.000"
   },
   {
      "id":5,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-61,
      "category":"groceries",
      "time":"2020-06-16T15:44:09.000"
   },
   {
      "id":6,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-8,
      "category":"other",
      "time":"2020-08-20T09:56:17.000"
   },
   {
      "id":7,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-489,
      "category":"groceries",
      "time":"2020-04-17T09:44:24.000"
   },
   {
      "id":8,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-416,
      "category":"eating_out",
      "time":"2020-12-25T17:09:50.000"
   },
   {
      "id":9,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-98,
      "category":"eating_out",
      "time":"2020-06-07T21:26:18.000"
   },
   {
      "id":10,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-343,
      "category":"eating_out",
      "time":"2020-10-27T15:15:39.000"
   },
   {
      "id":11,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-144,
      "category":"groceries",
      "time":"2020-08-27T06:52:32.000"
   },
   {
      "id":12,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-49,
      "category":"groceries",
      "time":"2021-03-19T03:54:11.000"
   },
   {
      "id":13,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-362,
      "category":"other",
      "time":"2020-10-20T06:26:50.000"
   },
   {
      "id":14,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-157,
      "category":"eating_out",
      "time":"2021-03-28T15:30:27.000"
   },
   {
      "id":15,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-465,
      "category":"eating_out",
      "time":"2021-01-17T23:02:56.000"
   },
   {
      "id":16,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-423,
      "category":"other",
      "time":"2020-04-14T13:54:15.000"
   },
   {
      "id":17,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-92,
      "category":"eating_out",
      "time":"2020-11-01T06:20:28.000"
   },
   {
      "id":18,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-146,
      "category":"eating_out",
      "time":"2020-11-27T23:00:04.000"
   },
   {
      "id":19,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-107,
      "category":"other",
      "time":"2020-06-29T10:46:23.000"
   },
   {
      "id":20,
      "sourceAccount":"my_account",
      "targetAccount":"coffe_shop",
      "amount":-215,
      "category":"groceries",
      "time":"2021-02-28T06:55:01.000"
   }
];

//

const result = expenses.reduce(function (r, a) {
        r[a.category] = r[a.category] || [];
        r[a.category].push(a);
        return r;
    }, Object.create(null));

// Get the sum of each group by category 

const sumOfEachCategory = Object.keys(result).map((key) => {
      let getSum = {};
      if(key) {
             getSum[key] = result[key].reduce((a,b) => {
            return a + b.amount
     }, 0)
      }
      

    return getSum;
})

console.log(sumOfEachCategory)
//console.log(result);

