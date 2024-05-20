// pick a pivot element on the array
// --> pick first
// --> pick last
// --> pick random
// --> pick median

// virtualize two arrays. separate whats is smaller and whats is greater

// [-6, 20, 8, -2, 4]
// pick array[array.length -1 ] as pivot
// left [-6, -2,]
// right [20, 8]
// pivot [4]

// iterate again until left and right length is 1

type IQuickSort = (array: number[]) => number[];

const quickSort: IQuickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = array[array.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > pivot) right.push(array[i]);
    if (array[i] < pivot) left.push(array[i]);
  }
  const returnArray = [...quickSort(left), pivot, ...quickSort(right)];
  return returnArray;
};
console.log(quickSort([-6, 20, 8, -2, 4, 5, 3, -7, 8, 6, 4, -15]));

// Big O(n²)
