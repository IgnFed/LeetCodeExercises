function findMedianSortedArrays(arr1, arr2) {
  let sum = 0;
  let sortedArray = arr1.concat(arr2).sort((a, b) => a - b)
  if (sortedArray.length % 2 === 0) sum = (sortedArray[(sortedArray.length / 2) - 1] + sortedArray[sortedArray.length / 2]) / 2;
  else sum = sortedArray[Math.floor(sortedArray.length / 2)];
  console.log(sortedArray)

  return sum;
}

const arr1 = [3];
const arr2 = [-2, -1];

console.log(findMedianSortedArrays(arr1, arr2));
