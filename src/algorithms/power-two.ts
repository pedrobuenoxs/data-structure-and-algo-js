function isPowerOfTwo(number: number) {
  for (let i = number; i > 1; i = i / 2) {
    if (i % 2 !== 0) return false;
  }
  return true;
}
function isPowerOfTwoBitWise(number: number) {
  if (number < 1) return false;
  const aux = number & (number - 1);
  console.log(aux);
  return aux === 0;
}
