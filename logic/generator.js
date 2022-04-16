const square4n = (N) => {
  let square = new Array(N),
    count = 0,
    boolean = false;

  for (let i = 0; i < square.length; i++) {
    square[i] = new Array(N);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      square[i][j] = 0;
    }
  }

  for (let i = 0; i < N; i++) {
    if (i % 4 == 0 || i % 4 == 3) {
      boolean = true;
    } else {
      boolean = false;
    }

    for (let j = 0; j < N; j++) {
      count += 1;
      if (j % 4 == 0 || j % 4 == 3) {
        if (boolean) {
          square[i][j] = N * N - count + 1;
        } else {
          square[i][j] = count;
        }
      } else {
        if (boolean) {
          square[i][j] = count;
        } else {
          square[i][j] = N * N - count + 1;
        }
      }
    }
  }
  return square;
};

const square_odd = (N) => {
  let square = new Array(N),
    idxCol = parseInt((N + 1) / 2 - 1),
    idxLin = 0,
    idxLin2 = 0,
    idxCol2 = 0;

  for (let i = 0; i < square.length; i++) {
    square[i] = new Array(N);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      square[i][j] = 0;
    }
  }

  square[idxLin][idxCol] = 1;

  for (let i = 2; i < Math.pow(N, 2) + 1; i++) {
    if (idxCol + 1 >= N) {
      idxCol2 = 0;
    } else {
      idxCol2 = idxCol + 1;
    }

    if (idxLin - 1 < 0) {
      idxLin2 = N - 1;
    } else {
      idxLin2 = idxLin - 1;
    }

    if (square[idxLin2][idxCol2] > 0) {
      if (idxLin + 1 >= N) {
        idxLin2 = 0;
      } else {
        idxLin2 = idxLin + 1;
      }

      idxCol2 = idxCol;
    }

    square[idxLin2][idxCol2] = i;

    idxLin = idxLin2;
    idxCol = idxCol2;
  }
  return square;
};

const square4n1 = (N) => {
  return `Warning: Need to implement logic for square ${N}x${N}`;
};

export const generateMagicSquare = (N) => {
  let square;

  if (N == 0 || N == 1 || N == 2) {
    return `Error: Cannot generate a magic square ${N}x${N}`;
  }

  if (N % 2 == 0) {
    if (N % 4 == 0) {
      square = square4n(N);
    } else {
      square = square4n1(N);
    }
  } else {
    square = square_odd(N);
  }

  return square;
};
