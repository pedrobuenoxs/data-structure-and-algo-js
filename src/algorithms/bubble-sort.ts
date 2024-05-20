function bubbleSort(array: number[], target: number) {
  let swapped = false;
  for (let i = 1; i < array.length; i++) {
    const last = array[i - 1];
    const curr = array[i];

    if (curr < last) {
      array[i] = last;
      array[i - 1] = curr;
      swapped = true;
    }
  }
  if (swapped) bubbleSort(array, target);
  return array;
}

// console.log(bubbleSort([-5, 2, 10, 4, 6]));
