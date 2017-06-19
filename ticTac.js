const prompt = require('prompt')

// prompt.get('spot', function(err, result) {
//   console.log(result, '\n');
//   boardVisual[Number(result.spot)] = 'x';
//   console.log(boardVisual);
// })

var board = 
[[null, null, null],[null, null, null],[null, null, null]]

var boardVisual = '_|_|_ \n_|_|_\n | |'

var xValues = [];
var yValues = [];

// winningConditions = (board) => {
//   board.forEach((row, col) => {
//    row.forEach((thing) => {
       
//    }
//   }
// };

var winningConditions = function(board) {
  board.forEach(function(row){
    row.forEach(function(thing){
      console.log(thing === 'x');
    })
  })
}

winningConditions(board);
console.log(xValues, yValues);
var ar = boardVisual.split('');

ar[0] = 'x';

console.log(winningConditions(board));