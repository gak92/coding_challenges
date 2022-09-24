function flip(arr, k) {
  for (let i = 0; i <= Math.floor(k/2); i++) {
    let temp = arr[i];
    arr[i] = arr[k-i];
    arr[k-i] = temp;
  }
  return arr;
}

function findMaxNumberIndex(arr, i) {
  let maxIndex = 0;
  let max = arr[0];
  for (let j=1; j <= i; j++) {
    if (arr[j] > max) {
      maxIndex = j;
      max = arr[j];
    }
  }
  return maxIndex;
}

function pancakeSort(arr) {
  for (let i=arr.length-1; i >= 0; i--) {
    let maxIndex = findMaxNumberIndex(arr, i);
    flip(arr, maxIndex);
    flip(arr, i);
  }

  return arr;
}

arr = [1, 5, 4, 3, 2, 6]

console.log("Original Array: ", arr);
console.log("Sorted Array: ", pancakeSort(arr));

console.log("Flipped array: ", flip(arr, 3));
console.log("Max Index: ", findMaxNumberIndex(arr, 5));
