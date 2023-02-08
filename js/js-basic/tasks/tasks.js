// // conditionals
// // huwisagch  
// let a = 85;
// let b = 75;
// let c = 96;
// let d = 69;
// let sum = 0;
// if (a > 80){
//     sum = sum + a;
// } 
// if (b >80){
//     sum = sum+b;
// }
// if(c>80){
//     sum = sum+c;
// }
// if(d>80){
//     sum = sum+d;
// }
// console.log(sum);
// // // urjwer
// let a2 = 3;
// let b2 = 7;
// let c2 = 2;
// let d2 = 4;
// let urjwer = 1 ;
// if (a2<5){
//     urjwer = urjwer*a2;
// }
// if (b2<5){
//     urjwer = urjwer*b2;
// }
// if (c2<5){
//     urjwer = urjwer*c2;
// }
// if (d2<5){
//     urjwer = urjwer*d2;
// }
// console.log(urjwer)
// // //  assigment-1
// let i = 4 > 3; // true
// let iii = 4 < 3; // false
// let ii = 4 >= 3; //  true
// let iv = 4 <= 3;  // false
// let v = 4 == 4;  //  true
// let vi = 4 === 4; //  true
// let vii = 4 != 4;  // false
// let iix = 4 !== 4;  // false
// let ix = 4 != "4";  // false
// let x5 = 4 == "4";  //  true
// let xi = 4 === "4";  // false
// console.log( i , iii, ii ,iv , v , vi , vii, iix , ix  ,x5, xi );

// let one = 4 > 3 && 10 < 12; // true
// let two = 4 > 3 && 10 > 12; // true
// let three = 4 > 3 || 10 < 12; // true
// let four = 4 > 3 || 10 > 12;  // false
// let five = !(4 > 3);  // false
// let six = !(4 < 3); // true
// let eight = !(4 > 3 && 10 < 12);  // false
// let nine = !(4 > 3 && 10 > 12); // false
// let ten = !(4 === "4");  // true
// console.log( one, two ,three, four, five, six , eight, nine , ten)

// const q =["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай",  "Бальбийгомбо", "Баатар" ];
// const line =q.splice(8, 0, 'Naraa', 'Saraa')
// console.log(q);
// const queueLine = q.slice(0, 10);
// console.log(queueLine);

// Array of numbers
//1
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11],
  //2
  sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
console.log(sum);
//3 Hamgiin ih too
let max = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (max < arrayOfNumbers[i]) {
    max = arrayOfNumbers[i];
  }
}
console.log("Hamgiin ih utga:", max);
//4 Hamgiin baga too
let min = arrayOfNumbers[0];
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (min > arrayOfNumbers[i]) {
    min = arrayOfNumbers[i];
  }
}
console.log("Hamgiin baga utga:", min);
//5. Array - ийн эхэнд дурын 1 тоог нэм.
let firstElChange= arrayOfNumbers.unshift(7);
console.log("soligdson ehnii element:",arrayOfNumbers[0]);
// //Even and odd
let arr1 = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let even = 0;
let odd = 0;
for (let i = 0; i < arr1.length; i++) 
  console.log(arr1[i]);
  if (arr1[i] % 2 == 0) {
    even++;
  } else if (arr1[i] % 2 !== 0) {
    odd++;
  }
for (let i = 0; i < activities.length; i++) {
  let activitiesPercent = Math.floor((activities[i][1] / 24) * 100) + "%";
  activities[i].push(activitiesPercent);
}
console.log("тэгш тоо: ", even);
console.log("тэгш тоо: ", odd);
