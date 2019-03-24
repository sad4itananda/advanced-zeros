module.exports = function getZerosCount(number, base) {
  let objOfPairs, result, prime = 2,
    pow = 1;

  const primeNumbers = (() => {
    let arr = [];
    next:
      for (let i = 2; i <= base; i++) {
        for (var j = 2; j < i; j++) {
          if (i % j == 0) continue next;
        }
        arr.push(i);
      }
    return arr;
  })();
  const getPairsPrimePow = (base, arr) => {
    let res = {},
      l = base;
    let findPrimeForBase = (base) => {
      for (let i = 0; i < l; i++) {
        if (base % arr[i] == 0) {
          res[arr[i]] in arr ? res[arr[i]]++ : res[arr[i]] = 1;
          base /= arr[i];
          if (base == 1) {
            return
          } else {
            return findPrimeForBase(base)
          };
        }
      }
    }
    findPrimeForBase(base, primeNumbers);
    return res;
  };

  objOfPairs = getPairsPrimePow(base, primeNumbers);

  for (key in objOfPairs) {
    prime = +key;
    pow = objOfPairs[key];
    let sum = 0;
    k = 1;
    while (number / Math.pow(prime, k) >= 1) {
      sum += Math.floor(number / Math.pow(prime, k));
      k++;
    };
    (result === undefined) && (result = Math.floor(sum / pow));
    (Math.floor(sum / pow) < result) && (result = Math.floor(sum / pow));
  };
  return result;
}