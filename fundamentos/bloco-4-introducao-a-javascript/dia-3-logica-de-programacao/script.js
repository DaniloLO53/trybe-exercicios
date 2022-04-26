//  ******************************* EXERCÍCIOS

// ********************** EXERCÍCIO 1

// let fat = 1;

// for (let count = 1; count <= 10 ; count += 1){
//   fat *= count;
// }

// console.log(fat)

// ********************** EXERCÍCIO 2

// let word = "Danilo ";
// let newWord = "";

// for (let char = word.length - 1; char >= 0; char -= 1){
//   newWord += word[char];
// }

// console.log(newWord)


// ********************** EXERCÍCIO 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let greaterWord = "";
// let shorterWord = "";

// for (index in array){
//   if (array[index].length >= greaterWord.length){
//     greaterWord = array[index];
//   }

//   else if (array[index].length <= greaterWord.length){
//     shorterWord = array[index];
//   }
// }

// console.log(greaterWord);
// console.log(shorterWord)


// ********************** EXERCÍCIO 4

// var primes = [];

// for (let index = 1; index <= 50; index += 1){
//   var div = 0;
//   for (let mult = 1; mult <= index; mult += 1){
//     if (index % mult == 0){
//       div += 1;
//     }
//   }
//   if (div <= 2) {
//     primes.push(index);
//   }
// }
// console.log(primes[primes.length - 1])

// ************************************* BÔNUS


// ********************** EXERCÍCIO 1

// let n = 5;

// for (let index = 1; index <= n; index += 1){
//   let ast = "";
//   for (let count = 1; count <= n; count += 1){
//     ast += "*";
//   }
//   console.log(ast)
// }


// ********************** EXERCÍCIO 2

// let n = 5;

// for (let index = 1; index <= n; index += 1){
//   let ast = "";
//   for (let count = 1; count <= index; count += 1){
//     ast += "*";
//   }
//   console.log(ast)
// }

// ********************** EXERCÍCIO 3

// let n = 5;

// for (let index = 1; index <= n; index += 1){
//   let row = "";
//   for (let empty = 1; empty <= n - index; empty += 1){
//     row += " ";
//   }
//   for (let ast = 1; ast <= index; ast += 1){
//     row += "*";
//   }
//   console.log(row)
// }

// ********************** EXERCÍCIO 4

// let n = 3;

// for (let index = 1; index <= n; index += 2){
//   let row = "";
//   for (let empty = 1; empty <= (n - index) / 2; empty += 1){
//     row += " ";
//   }
//   for (let ast = 1; ast <= index; ast += 1){
//     row += "*";
//   }
//   for (let empty = 1; empty <= (n - index) / 2; empty += 1){
//     row += " ";
//   }
//   console.log(row)
// }



// ********************** EXERCÍCIO 5

let n = 7;

for (let index = 1; index <= n; index += 2){
  var row = "";
  for (let empty = 1; empty <= (n - index) / 2; empty += 1){
    row += " ";
  }

  row += "*";

  for (let empty2 = 0; empty2 <= index - 2; empty2 += 1){
    row += " ";
  }

  row += "*";

  // for (let empty = 1; empty <= (n - index) / 2; empty += 1){
  //   row += " ";
  // }

  
  console.log(row)
}

for(let char = 1; char <= n; char += 1){
  row += "*";
}

console.log("\n" + row)


// ********************** EXERCÍCIO 6