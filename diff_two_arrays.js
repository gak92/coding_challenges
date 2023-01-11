// Coding challenge: Diff two arrays 
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// You can return the array with its elements in any orderl. 

// input : 2 arrays
function difference(arr1, arr2)
  {
    let res = [];
    let len1 = arr1.length;
    let len2 = arr2.length;

    // let smallest = len1 < len2 ? arr1 : arr2;
    // let largest = len1 > len2 ? arr2 : arr1;
    let smallest = arr1;
    let largest = arr2;
    console.log(smallest, largest);
    // let i;

    for(let i=0; i<smallest.length; i++)
      {
        if(!largest.includes(smallest[i]))
        {
          res.push(smallest[i]);
        }
      }
    for(let i=0; i<largest.length; i++)
      {
        if(!smallest.includes(largest[i]) && !res.includes(largest[i]))
        {
          res.push(largest[i])
        }
      }
    return res;
  }


let a1 = [1, 2, 3, 4, 7, 10];
let a2 = [1,3,4,5];
let res = difference(a1, a2);
console.log("Result: ", res);

// get the length of the both arrays

// loop through the small array
// check in the other array

// if element not found then i push it in new array
