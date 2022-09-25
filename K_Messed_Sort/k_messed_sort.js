function sortKMessedArray(arr, k) {

  let len = arr.length;

  for (let i=0; i<len; i++)
  {
    for (let j=i+1; j<len && j<=(i+k); j++)
    {
      if (arr[i] > arr[j])
      {
        console.log("Processing... ", i);
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
k = 2;

let sortedArray = sortKMessedArray(arr, k);
console.log(sortedArray);
