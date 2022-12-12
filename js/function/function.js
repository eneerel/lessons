// function hello (){
//  console.log("hello");
// }
// function say (name){
//     console.log( "sain baina uu?" + name)
// }
// function add ( a , b){
//     return a + b;
// }
// function sub ( a , b){
//     return a - b;
// }

// hello();
// say("Saraa");
// let c = add(5 , 5);
// console.log( "c =" , c);

  //functions zohioh
  //1. Өгөгдсөн 2 тооны ихийг олох функц бич.
  let x = function ihBaga(a, b) {
    if (a > b) {
      console.log(a, "их");
    } else {
      console.log(b, "их");
    }
  };
  x(4, 5);
  //2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
  let arr1 = [234, 345, 54, 8, 456, 6456];
  let duriinToo = function ogogdsonTooShalgah(randomNum) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === randomNum) {
        return i;
      }
    }
    return -1;
  };
  console.log("Тавтагдсан тоо index: ", duriinToo(8));
  //3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
  let arr2 = ["dfg", "ouhst", "h", "iyegr"];
  let duriinText = function ogogdsonTextShalgah(randomText) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i] === randomText) {
        return i;
      }
    }
    return -1;
  };
  console.log("Тавтагдсан текс тindex: ", duriinText("h"));
  //4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.
  function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log("тоон интервал дахь санамсаргүй тоо", randomNumBetween(1, 7));
  //5. Өгөгдсөн array - ийн дундажыг олох функц бич.
  
  let arrAverage = [243, 3456, 356, 5646, 67];
  
  function dundajOloh(arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      sum += arrays[i];
    }
    let dundaj2 = sum / arrays.length;
    return dundaj2;
  }
  let dundaj1 = dundajOloh(arrAverage);
  console.log(`${arrAverage}-н дундаж ${dundaj1}`);
  
  //6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
  
  let sum = 0;
  function niilberOloh(arrays) {
    for (let i = 0; i < arrays.length; i++) {
      sum += arrays[i];
    }
    return sum;
  }
  let niilber = niilberOloh(arrAverage);
  console.log(`${arrAverage}-н нийлбэр ${sum}`);
  
  //7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.
  
  function isPrime(n) {
    let Prime = fasle;
    for (let i = 2; i < n, i++; ) {
      n % 2 === 0;
    }
  }
  // 8 bodlogo
// function uppCase(c, v){
//   for(i=0; i<c.length; i++){
//       v =v + c[i].toUpperCase() + ' ';
//   }
//   return v;
// }
// let x = uppCase(['green', 'red', 'Hello'], ' ');
// console.log(x);
//9 bodlogo
function lowCase( c, d){
   for(i=0; i<c.length; i++){
       d = d + c[i].toLowerCase() + ' ';
      }
      return d;
}
let k =lowCase(['Gray', 'iroMan', 'SPIdERMan'], '') 
console.log(k);

//7 bodlogo anhni too oloh

function primeN(a){
  if(a===2){
      return 2;
  } else{
      for(let x=2; x<a; x++){
          if(a%x === 0){
              return false
          }
          return true;
      }
      }
  }
let b = primeN(67);
console.log(b);

// tegsh sondgoi too ologch
function evenOdd(a,  even){
  for(i=0; i<a.length; i++){
      if(a[i]%2 ===0){
           even = even + a[i]+ ' ';
          }
      }
      return even;
}

let c = evenOdd([2, 5, 4, 6, 7, 11, 22],  []);
console.log(c);

// sondgoi too
function Odd(a, odd){
  for(i=0; i<a.length; i++){
      if(a[i]%2 !==0){
            odd = odd + a[i]+ " ";
          }
      }
      return odd;
}

let o = Odd([2, 5, 4, 6, 7, 11, 22],  []);
console.log(o);


// array sorter
// function filterM(a){
//     let v = a.sort();
//     return v;
// }
// let s = filterM([4, 32, 2, 5, 8, -10, 20, 1, 0, -20]);
// console.log(s);

// array sorter
// const arr = [3, 1, 4, 1, 5, 9];
// const compareFn = (a, b) => (a > b ? -1 : 0);
// arr.sort(compareFn);
// console.log(arr)

// let arr1 =[4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
// let s = (a, b) => (a<b ? -1:0);
// arr1.sort(s);
// console.log(arr1)

// tip
function gonchig(n, sum){
  while(n>=5000 && n<=30000){
      sum = n+ n*0.15;
      return sum
  } return sum = n +n*0.2
}
let n1 = parseInt( prompt("Ta toogoo oruulna uu?"));
let j = gonchig(n1, 0);
console.log(j);
//nemegdel tulbur
function nemegdl(i, sum){
  while(i>=5000 && i<=30000){
      sum +=  i*0.15;
      return sum
  } return sum += i*0.2
}
let n2 = parseInt( prompt("Ta toogoo oruulna uu?"));
let f = nemegdl(n2, 0);
console.log(f);

// dundaj oloh

function aver(n, sum){
  while(n>=5000 && n<=30000){
      sum = (n+ n*0.15)/2;

      return sum
  } return sum = (n +n*0.2)/2
}
let n3 = parseInt( prompt("Ta toogoo oruulna uu?"));
let m = aver(n3, 0);
console.log(m);