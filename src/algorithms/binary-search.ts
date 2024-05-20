function binarySearch(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + right / 2);
    const middleValue = array[middle];
    if (target === middleValue) return middle;
    if (target > middleValue) left = middle;
    if (target < middleValue) right = middle;
  }
  return -1;
}

//array must be sorted
//Big-O = O(log n)
console.log(binarySearch([-5, 2, 4, 6, 10], 2));
