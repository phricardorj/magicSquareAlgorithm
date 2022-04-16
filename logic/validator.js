const getColumArray = (array, column) =>
  array.flat().filter((e, i) => i % array.length === column);

const getSumDiagonals = (array) => {
  const diagonalArr_1 = [];
  array.forEach((el, index) => {
    diagonalArr_1.push(el[index]);
  });

  const diagonalArr_2 = [];
  const i = array[0].length - 1;
  array.forEach((el, index) => {
    diagonalArr_2.push(el[i - index]);
  });

  const diagonalSum = [];
  diagonalSum.push(diagonalArr_1.reduce((a, c) => a + c));
  diagonalSum.push(diagonalArr_2.reduce((a, c) => a + c));

  return diagonalSum;
};

export const isMagicSquare = (array) => {
  if (!Array.isArray(array)) {
    return `Error: The parameter is not an array`;
  }
  const sum = [];
  array.forEach((line, index) => {
    sum.push(line.reduce((a, c) => a + c));
    sum.push(getColumArray(array, index).reduce((a, c) => a + c));
  });
  getSumDiagonals(array).forEach((el) => {
    sum.push(el);
  });
  return sum.every((e) => e == sum[0]);
};
