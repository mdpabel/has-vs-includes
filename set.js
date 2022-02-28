const { nums, primeNums } = require("./fake-db");

const primeSet = new Set(primeNums);

console.time("includes");
nums.filter((user) => {
  return primeNums.includes(user);
});
console.timeEnd("includes");

console.time("set");
nums.filter((user) => {
  return primeSet.has(user);
});
console.timeEnd("set");
