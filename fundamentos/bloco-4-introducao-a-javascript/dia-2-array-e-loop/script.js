// *********************** Exercício 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(i in numbers){
//   console.log(numbers[i]);
// }

// *********************** Exercício 2
// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// for(i in numbers){
//   sum += numbers[i];
// }
// console.log(sum);

// *********************** Exercício 3

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let counter = 0;

// for(i in numbers){
//   sum += numbers[i];
//   counter++
// }

// console.log(sum / counter);

// *********************** Exercício 4

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let counter = 0;

// for(i in numbers){
//   sum += numbers[i];
//   counter++
// }

// avarage = sum / counter;

// if(avarage > 20){
//   console.log("Maior que 20");
// }

// else{
//   console.log("Menor que 20")
// }

// *********************** Exercício 5

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let currentValue = numbers[0];;

// for(i in numbers){
//   if(numbers[i] > currentValue){
//     currentValue = numbers[i];
//   }
// }

// console.log(currentValue);


// *********************** Exercício 6

// const numbers = [6, 10, 8, 20, 70, 8, 100, 2, 16, 202];
// let counter = 0;

// for(i in numbers){
//   if(numbers[i] % 2 != 0){
//     counter++;
//   }
// }

// if(counter == 0){
//   console.log("nenhum valor ímpar encontrado");
// }

// else{
//   console.log(counter)
// }


// *********************** Exercício 7

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let currentValue = numbers[0];

// for(i in numbers){
//   if(numbers[i] < currentValue){
//     currentValue = numbers[i];
//   }
// }

// console.log(currentValue);



// *********************** Exercício 8

// arr = [];

// for(let i = 1; i <= 25; i++){
//   arr.push(i);
// }
// console.log(arr);

// *********************** Exercício 9

arr = [];

for(let i = 1; i <= 25; i++){
  arr.push(i);
}

console.log(arr)

for(i in arr){
  console.log(arr[i] / 2);
}