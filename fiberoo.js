function fib(size) {
  const ret = [0, 1];
  for (let i = 1; i < size - 1; i++) {
    ret.push(ret[i] + ret[i - 1]);
  }
  return ret;
}

function numToStrings(numList) {
  return _.map(numList, (num) => `${num}`);
}

function numEvenNumbers(list) {
  return (_.filter(list, (num) => (num % 2 === 0))).length;
}

console.log(numToStrings(fib(10)));
console.log(numEvenNumbers(fib(50)));
