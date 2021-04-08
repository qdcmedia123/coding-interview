// Below we have data for 20 months

const expenses = [
   {
      id: 1,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -332,
      category: "eating_out",
      time: "2020-08-06T16:38:37.000",
   },
   {
      id: 2,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -149,
      category: "other",
      time: "2021-04-03T16:13:29.000",
   },
   {
      id: 3,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -403,
      category: "other",
      time: "2020-12-08T01:20:46.000",
   },
   {
      id: 4,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -11,
      category: "eating_out",
      time: "2020-10-19T19:12:22.000",
   },
   {
      id: 5,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -61,
      category: "groceries",
      time: "2020-06-16T15:44:09.000",
   },
   {
      id: 6,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -8,
      category: "other",
      time: "2020-08-20T09:56:17.000",
   },
   {
      id: 7,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -489,
      category: "groceries",
      time: "2020-04-17T09:44:24.000",
   },
   {
      id: 8,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -416,
      category: "eating_out",
      time: "2020-12-25T17:09:50.000",
   },
   {
      id: 9,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -98,
      category: "eating_out",
      time: "2020-06-07T21:26:18.000",
   },
   {
      id: 10,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -343,
      category: "eating_out",
      time: "2020-10-27T15:15:39.000",
   },
   {
      id: 11,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -144,
      category: "groceries",
      time: "2020-08-27T06:52:32.000",
   },
   {
      id: 12,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -49,
      category: "groceries",
      time: "2021-03-19T03:54:11.000",
   },
   {
      id: 13,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -362,
      category: "other",
      time: "2020-10-20T06:26:50.000",
   },
   {
      id: 14,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -157,
      category: "eating_out",
      time: "2021-03-28T15:30:27.000",
   },
   {
      id: 15,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -465,
      category: "eating_out",
      time: "2021-01-17T23:02:56.000",
   },
   {
      id: 16,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -423,
      category: "other",
      time: "2020-04-14T13:54:15.000",
   },
   {
      id: 17,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -92,
      category: "eating_out",
      time: "2020-11-01T06:20:28.000",
   },
   {
      id: 18,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -146,
      category: "eating_out",
      time: "2020-11-27T23:00:04.000",
   },
   {
      id: 19,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -107,
      category: "other",
      time: "2020-06-29T10:46:23.000",
   },
   {
      id: 20,
      sourceAccount: "my_account",
      targetAccount: "coffe_shop",
      amount: -215,
      category: "groceries",
      time: "2021-02-28T06:55:01.000",
   },
];

const income = [
   {
      id: 1,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10486,
      category: "other",
      time: "2020-12-25T04:59:02.000",
   },
   {
      id: 2,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10766,
      category: "salary",
      time: "2021-03-26T09:19:03.000",
   },
   {
      id: 3,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10264,
      category: "salary",
      time: "2020-05-29T12:20:49.000",
   },
   {
      id: 4,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10150,
      category: "other",
      time: "2020-04-09T19:14:31.000",
   },
   {
      id: 5,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10567,
      category: "other",
      time: "2020-05-08T17:55:40.000",
   },
   {
      id: 6,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10942,
      category: "other",
      time: "2021-01-12T10:06:53.000",
   },
   {
      id: 7,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10246,
      category: "salary",
      time: "2020-11-19T23:39:21.000",
   },
   {
      id: 8,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 11040,
      category: "other",
      time: "2020-06-28T22:24:35.000",
   },
   {
      id: 9,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10689,
      category: "other",
      time: "2020-04-25T07:46:27.000",
   },
   {
      id: 10,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10443,
      category: "salary",
      time: "2021-02-22T07:25:22.000",
   },
   {
      id: 11,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10739,
      category: "salary",
      time: "2021-01-19T14:02:54.000",
   },
   {
      id: 12,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10229,
      category: "salary",
      time: "2020-12-27T22:03:49.000",
   },
   {
      id: 13,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10936,
      category: "other",
      time: "2020-06-24T17:25:03.000",
   },
   {
      id: 14,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10543,
      category: "other",
      time: "2021-02-07T22:27:24.000",
   },
   {
      id: 15,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10978,
      category: "salary",
      time: "2020-10-16T23:37:30.000",
   },
   {
      id: 16,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 11040,
      category: "other",
      time: "2020-06-06T13:57:52.000",
   },
   {
      id: 17,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10295,
      category: "other",
      time: "2020-07-28T15:40:19.000",
   },
   {
      id: 18,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10595,
      category: "other",
      time: "2021-03-01T14:30:43.000",
   },
   {
      id: 19,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10772,
      category: "other",
      time: "2020-06-23T21:09:03.000",
   },
   {
      id: 20,
      sourceAccount: "the_company",
      targetAccount: "my_account",
      amount: 10139,
      category: "other",
      time: "2021-02-13T03:35:44.000",
   },
];

// You have income and expensive
// Before moving to the real task lets practice
// I have a week time with me therefore I can practice as much as I can

// Following question might help you

/**
 * For Expensive
 **/
/*
// Get the row of max expensive 
// Sort the expensive by DESC ASC 
// Group the expensive by its category 
// Get the sum of Grouped Expensive
// Get the minimum expens

/**
 * For Income do the same things in above 
   // Get the cumulative account balance at the end of the month summed 
**/

/**
 * For income and expensive 
 // find the account balance reducing the amount for the specific month 
 // Get the secound largest and lowest salary from the income object 
 // 
**/

// Sort by DESC salary
const highestExpensive = expenses.sort((a, b) => {
   return a.amount - b.amount;
})[0];

// Sort by ASC by salary
const lowestExpensive = expenses.sort((a, b) => {
   return b.amount - a.amount;
})[0];

// Sort by DESC time
// Use opposit to sort by ASC
const latestExpensive = expenses.sort((a, b) => {
   return new Date(b.time) - new Date(a.time);
})[0];

console.log("df");

// Group the expensive by category
const groupByCategory = expenses.reduce(function (r, a) {
   r[a.category] = r[a.category] || [];
   r[a.category].push(a);
   return r;
}, Object.create(null));

// Group expensive by its category and SUM
const groupBuyCategorySUM = Object.keys(groupByCategory).map((key) => {
   let getSum = {};
   if (key) {
      getSum[key] = groupByCategory[key].reduce((a, b) => {
         return a + b.amount;
      }, 0);
   }
   return getSum;
});

// Get the expensive between

// 1. Group income by category same way as expenses 2020-08-06 - 2020-12-01
const startDate = new Date("2020-08-06");
const endingDate = new Date("2020-12-01");
const getExpensiveBettwen = expenses.filter((item) => {
   if (new Date(item.time) > startDate && new Date(item.time) < endingDate) {
      return item;
   }
});

/*
 *
 * Income
 *
 */

// Detuct the expensive from the same month from the income object
// You need to have expensive grouped and sum by the month
// You need to have income summed and grouped by month
