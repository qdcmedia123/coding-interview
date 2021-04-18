const IsLessThenAMinute = (currentI, nextI) => {
  const findDifferent = new Date(nextI) - new Date(currentI);
  const numOfSecounds = Math.floor(findDifferent / 1e3);
  return numOfSecounds / 60;
};
const sortByDateAndTime = (currentRow, nextRow) =>
  new Date(currentRow.time) - new Date(nextRow.time);

const findDuplicateTransactions = (transactions = []) => {
  let map = new Map();
  transactions.forEach((v) => {
    let k =
      v.sourceAccount +
      "-" +
      v.targetAccount +
      "-" +
      v.category +
      "-" +
      v.amount;
    if (map.has(k)) {
      map.get(k).push(v);
    } else {
      map.set(k, [v]);
    }
  });
  map = new Map(
    [...map.entries()].sort(
      (a, b) => new Date(a[1][0].time) - new Date(b[1][0].time)
    )
  );
  let result = [...map.values()];

  result = result
    .map((eachTransaction) => {
      eachTransaction.sort(sortByDateAndTime);
      const filterByDateAndTime = (currentRow, index) => {
        let diffMax;
        let diffMin;
        if (eachTransaction[index + 1]) {
          diffMax = IsLessThenAMinute(
            currentRow.time,
            eachTransaction[index + 1].time
          );
        }
        if (eachTransaction[index - 1]) {
          diffMin = IsLessThenAMinute(
            eachTransaction[index - 1].time,
            currentRow.time
          );
        }
        if ((diffMin > 0 && diffMin < 1) || (diffMax > 0 && diffMax < 1)) {
          return true;
        }
        return false;
      };
      eachTransaction = eachTransaction.filter(filterByDateAndTime);
      return eachTransaction;
    })
    .filter((eachTransaction) => !eachTransaction.length < 1);
  return result;
};
