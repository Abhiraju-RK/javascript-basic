//Hoisting

function codeHoist(){
    a=10;
    // let b=50;
}
codeHoist();
console.log(a);// 10
// console.log(b);// reference error b not defined keyword didnt work inside te funtion

//Array push

const cars=['BMW','Audi','Mercedes'];
cars.push('Jaguar')
console.log(cars);

// const object edit

const person={
    name:'john',
    age:22,
}
person.name='Abhi';
console.log(person);

//scope -funtional scope & global scope 
//   1
const name='Abhi Learning js';
function nameChange(){
    const names='Spiderman, from marvel';
    console.log(names);
}
console.log(name);//Abhi Learning js
nameChange();//Spiderman, from marvel

//    2

const movies='superman, from DC'
function movieChnage(){
    const movies='spiderman, form marvel'
    if (true){
        const movies='thanos, is villan '//only true statement were display if its false it didnt dispaly output
        console.log(movies)
    }
    console.log(movies)
}
console.log(movies);
movieChnage();

// true or false function

function logName(){
    if (true){
        var qute='Welcome to beginner class'
    }
    console.log(qute);
}
logName();

function logNames(){
    if (false){
        console.log('Welcome to beginner class')
    }//didnt display
}
logNames();

//convert integer into string on console
45 + '' //type this in console page '45'
45 +'0'//'450'

45 - '5'// 40 its work as a substraction method

// and operator first argument will return if no first argument second will display

function greet(name){
    console.log(`hello ${name || 'welcome'}`)
}
greet()//hello welcome

function greet(name){
    console.log(`hello ${name || 'welcome'}`)
}
greet('abhi')//hello abhi

// differnce b/w == and ===

45 == '45' //== equality opertor compare values  op= true
45 === '45' // ===strict equality operator compare data type op = false

// undefined data type 
let result ;
console.log(result)

//coustom undifined  msg

let results ;
if (results == undefined){
    results='hello';       // hello
}
console.log(results);

let resultss = 20;
if (resultss == undefined){
    resultss='hello';   // 20
}
console.log(resultss);

//similaar to the custom undefined 

let similaar ;
similaar = similaar ?? 'wowww';  //  use ?? for simple 
console.log(similaar)

//find datatype of function

a=22;
console.log(typeof a)//number

b='abcd';
console.log(typeof b)//string

c=null;
console.log(typeof c)//null object

d=45.66;
console.log(typeof d)//number

e=true;
console.log(typeof e) //boolean

console.log({} instanceof Object)//true

console.log([] instanceof Array)//true

console.log({} instanceof Array)//false

//substring - to cut the string by portion 

let words="Hello World";
console.log(words.substring(0,6).toUpperCase())// op= HELLO

//find indexof and lastindexof 