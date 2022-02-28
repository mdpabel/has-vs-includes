const nums = new Array();
const primeNums = new Array();

for (let i = 1; i <= 1000000; i++) {
  nums.push(i);
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

let i = 2;
let count = 1;
while (true) {
  if (isPrime(i)) {
    primeNums.push(i);
    count++;
  }
  if (count == 1000) {
    break;
  }
  i++;
}

module.exports = {
  primeNums,
  nums,
};
