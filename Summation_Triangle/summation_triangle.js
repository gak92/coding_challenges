function summationTriangle(n)
{
  let sum = 0;
  for(let j=0; j<=n; j++)
  {
    let a = [];
    for(let i=j; i<=n; i++)
    {
      a.push(2*j+i+1);
      sum += 2*j+i+1;
    }
    console.log(a);
  }
  console.log("Sum for n =", n , " : ", sum);
}

summationTriangle(2);
summationTriangle(3);
