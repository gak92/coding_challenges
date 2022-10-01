var spiralOrder = function(matrix) {
  let top = 0;
  let bottom = matrix.length-1;
  let left = 0;
  let right = matrix[0].length-1;
  let i;
  let totalElement = (bottom+1) * (right+1);
  let count = 0;
  let res = [];
  
  console.log(top, left, bottom, right);    
  console.log("Count & Total Element: ", count, totalElement);
  
  while (count < totalElement)
  {
      for (i=left; i<=right && count < totalElement; i++) {
          res.push(matrix[top][i]);
          count += 1;
      }
      top += 1;

      for (i=top; i<=bottom && count < totalElement; i++) {
          res.push(matrix[i][right]);
          count += 1;
      }
      right -=1;
      
      console.log(right, left, bottom, count, totalElement);
      for (i=right; i>=left && count < totalElement; i--) {
          res.push(matrix[bottom][i]);
          count += 1;
      }
      bottom -=1;
      
      for (i=bottom; i>=top && count < totalElement; i--) {
          res.push(matrix[i][left]);
          count += 1;
      }
      left +=1;
  }
  
  // return res;
  console.log(res);
  // for (let i=0; i<res.length; i++) {
  //   console.log(res[i]);
  // }
};


// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

spiralOrder(matrix);
