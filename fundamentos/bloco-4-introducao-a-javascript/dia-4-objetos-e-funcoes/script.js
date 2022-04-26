// // Para fixar - objetos

// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// }

// player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018]; //Não posso usar let

// console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");
// console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo " + player.bestInTheWorld.length + " vezes.")
// console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " de prata.")


// Para fixar - for / in e for / of

// Não da certo:
// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// }

// for (value of player) {
//   console.log(value)
// }

// Não dá certo: 
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (persons in names){
//   console.log("Olá " + names.person1)
// }

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (persons in names){
//   console.log("Olá " + names[persons])
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (key in car){
//   console.log(key, car[key])
// }

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// info.recorrente = "Sim";

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Chrsitimas on Bear Mountain, Dell's Four Color Comics",
//   nota: 'O último MacPatinhas',
//   recorrente: "Sim"
// };



// function boasVindas () {
//   console.log("Bem-vinda, " + info.personagem)
// }

// function imprimir () {
//   console.log(info)
// }

// function chaves() {
//   for (key in info){
//     console.log(key)
//   }
// }

// function valores() {
//   for (key in info){
//     console.log(info[key])
//   }
// }

// function juntar () {
//   let rows = "";
//   for (key in info){
//     rows += info[key];
//   }
//   console.log(rows)
// }

// juntar()
// // valores()
// // chaves()
// // imprimir()
// // boasVindas()

// ****************************************** BONUS 

// function palindromo (name) {
//   let reverse = name.split("");
//   let reverseName = "";
//   for ( let char = reverse.length - 1; char >= 0; char -= 1 ){
//     reverseName += reverse[char];
//   }

//   if ( reverseName === name) {
//     return true
//   }

//   else {
//     return false
//   }

// }

// console.log(palindromo("arara"))

// function maior (arr) {
//   let maior = 0;

//   for ( let index = 1; index < arr.length; index += 1 ) {
//     if ( arr[index] > arr[index - 1]) {
//       maior = index;
//     }
//   }

//   return maior
// }

// console.log(maior([2,9,5,3,1,10,11]))

// function menor (arr) {
//   let menor = 0;

//   for ( let index = 1; index < arr.length; index += 1 ) {
//     if ( arr[index] < arr[index - 1]) {
//       menor = index;
//     }
//   }

//   return menor;
// }

// console.log(menor([2,9,5,3,1,10,11]))

// function maior (arr) {
//   let maior = arr[0];
//   for (let index = 1; index < arr.length; index += 1){
//     if (arr[index].length > arr[index - 1].length) {
//       maior = arr[index];
//     }
//   }
//   return maior
// }

// console.log(maior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// function repete (arr) {
//   let most = arr[0];
//   let times = 0;
//   for (let index = 0; index < arr.length - 1; index += 1) {
//     let count = 0;
//     for (let index2 = index + 1; index2 < arr.length; index2 += 1) {
//       if (arr[index2] === arr[index]){
//         count += 1
//       }
//     }
//     if (count > times) {
//       times = count;
//       most = arr[index];
//     }
//   }

//   return most;
// }

// console.log(repete([2, 3, 2, 5, 8, 2, 3, 9, 3, 3, 5]))

// function soma (n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i += 1){
//     sum += i;
//   }

//   return sum;
// }

// console.log(soma(100))


function verifica (word, end) {
  let endWord = end.split("").reverse();
  let wordWord = word.split("").reverse();
  console.log(endWord);
  console.log(wordWord)
  let cond = true;
  for (i in endWord) {
    if ( wordWord[i] !== endWord[i] ){
      cond = false;
    }
  }

  return cond;
}

console.log(verifica("trybe", "be"))