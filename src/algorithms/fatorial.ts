function fatorial(number: number) {
  if (!number) return undefined;
  let value = 1;

  for (let i = number; i > 0; i--) {
    value = value * i;
  }
  return value;
}

//Big-O = O(n)
fatorial(5);
