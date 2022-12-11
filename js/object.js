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
    // for(i=0; i < students.length; i++){
    //    let ovog=prompt(students[i].name , "ovog oruulna uu?")
    //    students[i].lastname=ovog;
    // } 
    // console.log(students);
 
    // Амьтадын дата үүсгэнэ үү. 

//     let animals = [
//     {type: "dog", sound: "woof"},
//      {type: "cow",sound: "moo"},
//      {type: "cat",sound: "meow"}
//     ];


//  // 1. Амьтан яаж дугардаг function бичнэ үү. (What does the fox say? "Ring-ding-ding-ding-dingeringeding!" гэх мэт)
//        let sound=1;
//        for(i=0; i<animals.length; i++){
//         let sound=prompt(animals[i].type, "yaj duugardag we?")
//         animals[i].sound=sound;
//        }
        
//         console.log(animals);
// suragcid
// 1. Ангийнхаа сурагчидын дата үүсгэ.
let suragcid=[
    {
    name: 'Goncig-Sumlai',
    birthOfYear: 1999,
    single: "False" ,
    hobby:"Mori"
},
    {
    name: 'Индра',
    birthOfYear: 1998,
    single: "False" ,
    hobby:"piano"
},
    {
    name: 'Хатнаа ',
    birthOfYear: 2000,
    single: "True" ,
    hobby:"art"
},
    {
    name: 'Тэмүүлэн',
    birthOfYear: 2004,
    single: "False" ,
    hobby:"music"
},
    {
    name: 'Намуун',
    birthOfYear: 2003,
    single: "True" ,
    hobby:"sing a song"
},
];
// 2. Сурагчидаас 20 - оос дээш насны сурагчидыг буцаах function бичэх.
let nas3 = (object) =>{
    for (let i = 0; i < object.length; i++){
        
        if(object[i].birthOfYear < 2000){
            age = 2022 - object[i].birthOfYear
            console.log(object[i].name + " " + age + " " + "nastai")
        }
    }
    }
    
    nas3(students);
    console.log(" ")
    
    let nas2 = (object) =>{
        for (let i = 0; i < object.length; i++){
            
                age = 2022 - object[i].birthOfYear
                console.log(object[i].name + " " + age + " " + "nastai")
        }
        }
        nas2(students);
    
    let marriage = (object) =>{
        for (let i = 0; i < object.length; i++){
        
            if(object[i].single == true){
                console.log(object[i].name + " " + "Gerlesen")
            }
        }
    }
    
    marriage(students);
    //animals
let animals = [{
    type: 'dog',
    sound: 'woof',
},
{ type: 'cow',
sound: 'moo',
},
{
    type: 'cat',
    sound: 'meow'
}
];
 let a = (amitan) => {
    let duu = ' ';
    for(i=0; i< amitan.length; i++){
         if(amitan[i].type === n){
             duu = amitan[i].sound;
            }
            else{
                duu = -1;
            }
        }
        return duu;
 }
//  let n = prompt("Ta amitni ner oruulna uu?");
let n = 'cat'
 let b = a(animals);
 console.log(b);

 // Suragchid
 let suragch = [{
    name: "Гончигсумлай", 
    birthOfYear: 1999, 
    hobby: "морь",
     single: false
 },
  { name: 'Дорж',
    birthOfYear: 2000,
    hobby: ' сагс тоглох',
    single: false,
},
{ name: 'Намуун',
    birthOfYear: 2000,
    hobby: 'шатар тоглох',
    single: true,
},
{ name: 'Дөлгөөн',
birthOfYear: 2004,
hobby: ' Mobile legend',
single: true,
}];
 
let x1 = (oyutan)=>{
    let nas = [];
    for(i=0; i<oyutan.length; i++){
        if(2022 - oyutan[i].birthOfYear >= 20){
            nas.push(oyutan[i]);
        } 
        
    }
    return nas;
}
let  age = x1(suragch);
console.log(age);

// single & douple
 let single = (student) =>{
    let  nameS = [];
    for(i=0; i<student.length; i++){
        if(student[i].single === true){
            nameS.push(student[i]);
        }
    }
    return nameS;
 }
 let s = single(suragch);
 console.log(s);

 //mern object
 const users = [
    {
        name:  'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
    {
        name:  'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ]
// 1bodlogo
    for(i=0; i<users.length; i++){
        console.log(users[i]);
    }

//2 bodlogo
let  e = (skill)=>{
    let manyskill =[];
    let max = 0;
    for(i=0; i<skill.length; i++){
        // console.log(skill[i].skills.length);

        manyskill.push(skill[i].skills);
        // console.log(skill[i].skills)
        if(max < manyskill[i].length){
            max = manyskill[i].length;
        }   
}
    for(j=0; j<skill.length; j++){
        // console.log(skill[j].name);
    let ner = [ ];
    if(max == skill[j].skills.length){
        ner.push(skill[j].name);
        // console.log(ner);
        return ner
    }
 }   
}

let urchadwar = e(users);
console.log(urchadwar);

// 3 bodlogo
let count = (point)=>{
    let arrTemp = [];
    for(i=0; i<point.length; i++){
        if(point[i].points >=50){
            arrTemp.push(point[i]);
        }
    }
    return arrTemp;
}
let onoo = count(users)
console.log(onoo);
//4bodlogo
function mern(swSkill){
    let skillName = [];
    for(i=0; i<swSkill.length; i++){
        if(swSkill[i].skills.includes('MongoDB')){
            skillName.push(swSkill[i].name);
        }
    }
    return skillName;
}
// let z = ['MongoDB', 'Express', 'React', 'Node'] ;
let Urchadvar = mern(users);
console.log(Urchadvar);

const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
console.log(arr)
//max-age 3hun
for(i=0; i<users.length; i++){
    let arrT = (a, b) =>(a>b ? -1:0);
        users[i].age.sort(arrT)
}
    console.log(users)


