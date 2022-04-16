import { generateMagicSquare } from './logic/generator.js';
import { isMagicSquare } from './logic/validator.js';

const square3x3 = generateMagicSquare(3);
console.log(square3x3);
console.log('Is it magic square?', isMagicSquare(square3x3) ? 'YES' : 'NO');

const square5x5 = generateMagicSquare(5);
console.log(square5x5);
console.log('Is it magic square?', isMagicSquare(square5x5) ? 'YES' : 'NO');

const square8x8 = generateMagicSquare(8);
console.log(square8x8);
console.log('Is it magic square?', isMagicSquare(square8x8) ? 'YES' : 'NO');

// 6, 10, 14, 18, 22... Need to implement logic to generate Magic Square with these sizes
