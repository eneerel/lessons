// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 

let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
];
let x=0;
let y={}
function gender (){
 for( i=0; i<students.length ; i++){
    if(students[i].gender === 'male' ){
        x++;
    }
    y.emegtei=students.length-x;
    y.eregtei=x;
 }
  
 return y;
}
let huis = gender('students');
console.log(huis);

//  Сурагчдын насны дунджийг олох функц бичих 

function age (){
    let average=0;
    for(i=0; i <students.length; i++){
        let z = students[i].age;
        average += z;
       
    } 
    average = average / students.length;
    return average;
}
let nas = age ();
console.log(nas);

//  Сурагчидад овог нэмж оруулах 
    for(i=0; i < students.length; i++){
       let ovog=prompt(students[i].name , "ovog oruulna uu?")
       students[i].lastname=ovog;
    } 
    console.log(students);
 



// Ижилхэн настай сурагчдыг олж шинэ object дотор хийх




// Нохой нэртэй хоосон объект үүсгэ
// Нохойн объектыг консол дээр хэвлэ
// Нохойны объектын үүлдэр, нэр, өнгө, нас, хайр татсан шинж чанарыг нэмнэ үү. 
// Нохойн объектоос үүлдэр, нэр, хөл, өнгө, нас, хайр татсан шинж чанарын value - г аваарай
