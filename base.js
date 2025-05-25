//variables aand datatype //

/*datatype in js 
string
number(include float)
Boolean(true or false)
undefined
null*/


/* 'var','let','const' is denote as variable it is must tag in all type of code */

/* 'const' means the value is constant it cannot change*/

var person="Abhi";
document.write(person,'<br>');
document.write(typeof (person),'<br>');//see the datatype//

var w;
document.write(typeof (w),'<br>')//undefined type//

var num=10.99;
document.write(typeof(num),'<br>');//number//

// const a=20;
// a=40;
// console.log(a);//print in console page it didnt run error occurs  //


//Assignment operator//
/*add and assign (X+=1) x+=1 similar to x=x+1
 sub and assign (X-=1)    ''
 div and assign(X/=1)     ''
 mul and assign(X*=1)     ''
 assign X=1;
 mod and assign(X%=1)     ''
*/

var x = 10;
var y = x *= 3;
console.log(y);

//to find cube //
document.write(10**3);

//Arithmetic operator //

/* addition (+)
substraction (-)
divistion (/)
multiply (*)
modulus (%)
increment (++)
decrement (--)
exponentiation (**)
*/

var dig=20;
dig++; //add 1 //
document.write(dig,'<br>');

var c=23;
var d=2;
document.write(c%d,'<br>');//to get remainder //

// Comparison operator //

/* equal to ==
identical ===
not equal to !=
greater than >
lessthan <
greater than equalto >=
lessthen and equalto <=
*/

var e=10;
var f='10';
document.write(e===f,'<br>')// === it check two datatypes are equal if both are not same it print false. both are same it print true //
// o/p false //

//logical operator//
/* && ( and operator)
|| ( or operator )
!! ( logical not operator )
*/

var g=20;
var h=40;
document.write(!!(g=100),'<br>');//it given opposite reslut //
//o/p true//


//if statement //

var z=20;
if (z>25){
    document.write("You are not correct ")
}else{
    document.write(" you are correct ")
}

//if else if stament //

var t=40;
var s=60;
if (t>s){
    document.write("Gud")
}else if(s>t){
    document.write('bad','<br>')
}else{
    document.write('ugly')
}

//switch case statement //  

var a='bad';
switch (a){
    case 'gud':
       document.write("Apple");
       break;
    case 'bad':
        document.write("ornage");
        break;
    case 'ugly':
        document.write("watermelon");
        break;
}


let day = 2;
switch(day) {
  case 1: document.write("Monday"); break;
  case 2: document.write("Tuesday"); break;
  default: document.write("Another day");
}


// for loop // 

for(var i=1;i<=5;i++){
    document.write('hello','<br>')
}
  

var j=10;
for (var w=1;w<=j;w++){
    document.write(w,'<br>')
}

//while loop//
var t=1;
while(t<=5){
    document.write('hello','<br>')
    t++;
}

//create and remove button //

var header=document.createElement('hii');

function create(){
    header.innerHTML="Gud to have you";
    document.body.appendChild(header);
}

function remove(){
    header.remove();
}

//get element by css selector//

var blow=document.querySelectorAll("h1");
blow[0].innerHTML="Hello";
blow[1].innerText="Guys";
blow[0].style.color="red";
blow[0].style.textDecoration="underline";

//message display// 

var hii=document.getElementsByName("textss")[0];//name value//
var helo=document.getElementById("head");//id name//
function message(){
    helo.innerHTML=hii.value;

}

//get element by tag name//

var ele=document.getElementsByTagName("p");
ele[0].innerHTML="Shubhamm";
ele[1].innerText="Very Shubham";

//get element by class name //

var dog=document.getElementsByClassName("myclass");
dog[0].style.color="blue";

//to print a random number//

var ran=Math.random();
var wand=ran*20;//get random number btween 20 its comes with decimal and whole number //
document.write(wand,'<br>')


//to print randum number btween 0 to 1

document.write(Math.random(),'<br>');


//decimal to whole number - ceil,round,floor - all are same

var dec=4.66;
document.write(Math.ceil(dec),'<br>');//o/p = 5//

    //round 

var rou=3.8;
document.write(Math.round(rou),'<br>');

    //  floor - gives the current whole number
 
var flo=2.7;
document.write(Math.floor(flo),'<br>');// op = 2 //

//min and max //

document.write(Math.min(10,30,40,69),'<br>');//gets small value

document.write(Math.max(10,30,70,300),'<br>');//gets high value


//find square root//

var roo=5;
document.write(Math.sqrt(roo),'<br>');


//slicing through index //

var cut="Learn Java Script";
document.write(cut.slice(4,8),'<br>');//it print 4 to 7 index number space also count 
//op = n ja

//to uppercase and lowercase //
var upp='hello';
document.write(upp.toUpperCase())//to full capital letter

var loe='HELLO';
document.write(loe.toLowerCase(),'<br>')// to small letter//

// alert message //

alert("welcome All");


//function method //

function bob(name) {
    return "hello, " + name + "!";
}
console.log(bob("Abhi"));
console.log(bob("Mrngg"));


function sum(a,b) {
    console.log(a+b);
}
sum(20,40);


function summ(a,b,c) {
    return a+b-c;
}
let results=summ(20,40,7);
console.log(results);

//button function //

function greet() {
    document.write("gud morng");
}

// Array //

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
fruits.push("Orange");//["Apple", "Banana", "Cherry","Orange"]
console.log(fruits);

//to find length of array //

let animal=["Dog","Cat","Lion","Tiger"];
let len=animal.length;//.length for find the length of list
animal.shift()//.shift for removing first item in list 
animal.pop()//.pop for remove last item in list
console.log(len);
console.log(animal);

//sort in array

let nums=[100,70,40,60];
nums.sort();//sort small to large order
console.log(nums);
console.log(nums[1]+nums[3]);//add two numbers in a list

//Array and for //

var animals=["lion","dog","cat","gorilla"];
for (var k=0; k<4; k++){
    console.log(animals[k],'<br>');
}


//DOM manupulate

function clickme() {
    document.getElementById("dom").innerHTML="TextChanged";
}

//CharAt - to print individual letters in a string 
var textx="Hello world";
console.log(textx.charAt(3));// op = l

// concat - to add two variable 

var text1="Hello";
var text2="Abhi";
console.log(text1.concat(text2));//op = HelloAbhi

//object oriented programming 

let orders = {
  name: "Alice",
  age: 30,
  salary:3000,
  greet: function() {
    return "This is " + this.name + " her salary is " + this.salary + " she is "+ this.age + " old";
  }
};

console.log(orders.greet()); 


