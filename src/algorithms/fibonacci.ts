function fibonnaci(number: number) {
  const sequence = [0, 1];

  for (let i = 2; i < number; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

//Big-O = O(n)
fibonnaci(3);
