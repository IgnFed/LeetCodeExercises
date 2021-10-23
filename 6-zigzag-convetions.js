function convert(str, rows) {
  const cantCols = Math.floor(str.length / rows);
  const arr = [[]];
  let idxRow = 0, idxCol = 0, strIdx = 0;
  console.log(cantCols)
  while (idxCol != cantCols && idxRow != rows) {

    if (idxCol > cantCols) {
      idxCol = 0;
      idxRow++;
    }

    arr[idxRow][idxCol] = str[strIdx];
    idxCol++;
    strIdx++;
  }

  return arr;
}


console.log(convert("PAYPALISHIRING", 4))
