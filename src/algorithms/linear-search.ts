//Big-O = O(n)
function linearSearch(array: number[], target: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
