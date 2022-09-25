function isToeplitzMatrix(matrix) {
  for (let i=0; i<matrix.length; i++) 
  {
      for (let j=0; j<matrix[0].length; j++) 
      {
          if (i>0 && j>0 && matrix[i][j] !== matrix[i-1][j-1])
              return false;
      }
  }
  return true;
};

let matrix = [[1,2,3,4],
              [5,1,2,3],
              [9,5,1,2]];
console.log(isToeplitzMatrix(matrix));

matrix = [[1,2,3,4],
          [5,4,2,3],
          [9,5,1,2]];
console.log(isToeplitzMatrix(matrix));

