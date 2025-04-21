    // Learning Javascript is fun!

    console.log("Hello  Javascript");

    //Variables

    let name = 'Muhyadiin';

    console.log('Hello' + name + '!');

    let  x = 10;
    let b = 17;
    let z = x + b;
    console.log(z);

    x = 'shaah';
    console.log('x is' + x + '!');


    let = b;
     b = 50;


    let personalName = 'Muhyadin Omar';

    if(personalName ==='Muhyadin Omar'){
        console.log('Hello , Mr.' + personalName);
    } else{
        console.log('Hello , Mrs.' + personalName)
    }

    let  day = 'Axad';
    if (day === 'Axad '){
        console.log('Today is not Axad, it is' + day);
    }else{
        console.log('Today is Axad');
    }

 let m = 10;
 if(m > 0){
console.log('m is greater than 0')
 }
 else if (m === 1){
    console.log ('m is one ')
 } else if (m === 2)
 {
    console.log('m is 2');
 } else{
    console.log('I do not know!')
 }
   
 let today = 'Khamiis';
 if ( today === 'Khamiis' || today === 'Jimce'){
    console.log('Happy Weekend!!')
 }else{
    console.log('Happy Learning!!!')
 }

 //prime Number 1 3 5 7 9 11 13 15 17 19 21 23 25 17

 let prime = 10;
 if (prime % 2 === 0 || prime % 3 === 0)
 {
    console.log(prime + ' is not prime number !!')
 }else{
    console.log('Wow ,'+ prime +'is a prime number!!');
 }


 let given = 75;

 if(given % 3 === 0 && given % 5 === 0){
   console.log('FizBaz');
 }else if(given % 3 === 0){
   console.log('Baz');
 }else if(given % 5 === 0){
   console.log('Fiz');
 }
 //Arrays

 let names = ['Maxamed Axmed' , 'Daahir Cali', 'Muuse Yuusuf', 'Nimco Xasan', 'Sabaad Nuur', 'Hoodo maxamuud'];

 console.log('Names Are',names);

 //loops
 // do while
 //for 

 let index = 0;

 while (index < names.length){
   let items =names[index]
   console.log('items:', items);

   index = index + 1;
 }
   

 /*let position = 0;

 do {
    const item = names[position];
    console.log('item', item);
    position += 1;
 }while(position < names.length);

 */

 let n = 4;
 let result = 1;
 while(n > 1){
   result  *= n; //120
   n -= 1; //1
 }

 function getFactorial (n){
 let result = 1;
 while(n > 1){
   result *= n; //120
   n -= 1;// 1
 }
 return result;
}

console.log(4 + 'Factorial is:' + getFactorial(4));

let students = ['Muhyadiin Omar', 'Cali Ayasiin ', 'Dakeeye Cumar','Safwaan Muuse'];
let grades  = [97 , 99, 66, 90];
let student ={studentName: 'Maxamed Muuse' , Grare: 90 };
let counter = 0;
while(counter < students.length){
   let student = students[counter];
   let grade = grades[counter];
   console.log(student + 'Has Grades:'  + grade);
   counter += 1;
}

let students1 = [
   {studentName:'Hayaan Daar',grade: 90},
   {studentName:'Nariin Aar',grade: 80},
   {studentName:'Suudi A=Xassan',grade: 70},
   {studentName:'Amran Axmed',grade: 98},
]

let counter1 = 0;
while(counter1 < students1.length ){
   let student = students1[counter1];

 console.log(student.studentName + ' Has Grade is ' + student.grade);
   counter1 += 1;
}
