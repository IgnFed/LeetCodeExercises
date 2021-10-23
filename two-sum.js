function twoSum(arr, target) {

  let i = 0, j = 1;

  while (i < arr.length - 1) {
    if (i != j && arr[i] + arr[j] === target) return [i, j];
    if (j == arr.length) {
      j = 0;
      i++;
    }
    j++;

  }
}

arr = [2, 5, 5, 11];

console.log(twoSum(arr, 10))
