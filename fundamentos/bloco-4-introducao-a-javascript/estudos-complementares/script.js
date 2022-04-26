let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index++){
//   for (secondIndex = 0; secondIndex < index; secondIndex += 1){
//     if(numbers[index] < numbers[secondIndex]){
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// for (let index = 1; index < numbers.length; index += 1){
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
//     if (numbers[index] > numbers[secondIndex]){
//       let position = numbers[secondIndex];
//       numbers[secondIndex] = numbers[index];
//       numbers[index] = position;
//       console.log(numbers)
//     }
//   }
// }

// console.log(numbers)

numbers.push(2);
new_numbers = [];

for (let index = 1; index < numbers.length; index += 1){
  new_numbers.push(numbers[index] * numbers[index - 1])
  console.log(new_numbers)
}

console.log(new_numbers)