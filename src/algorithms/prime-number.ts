function isPrime(n: number) {
  if (n < 2) {
    return false;
  }
  // for (let i = 2; i < n; i++) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    //optimized by square
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
//Big-O = O(n)
console.log(isPrime(13));
console.log(isPrime(27));
