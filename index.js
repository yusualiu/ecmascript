//Template literals
let word1 = 'Yusuf';
let word2  = 'Aliu';

let fullName= `${word1}
${word2}
`
document.getElementById('test').innerText = `${fullName}`

Destructuring Objects
const personalInformation = {
  firstName: 'Yusuf',
  lastName: 'Aliu',
  email:'yusuf@zyl.com'
}

// const {firstName,lastName} = personalInformation;
const {firstName:fn,lastName:ln} = personalInformation;
console.log(`My name is ${fn} ${ln}`);

Destructuring Arrays

let list = ['Yusuf','FrontEnd','Tavia'];

let [firstName,skill,company] = ['Yusuf','FrontEnd','Tavia'];

console.log(firstName + ' is a '+skill );

Object literals
function addressMaker(city,state){
  // const newAddress = {
  //   newCity:city,
  //   newState:state,
  // };
  const newAddress = {city,state};
  console.log(newAddress.city);
}


addressMaker('Austin','Texas');

Object literals challenge

function addressMaker(address){
  const {city,state} = address;
  const newAddress = {
    city,
    state,
    country:'United State'
  };
  
  
  console.log(`I am from ${city}, ${state} in the ${newAddress.country}`);
}


addressMaker({city:'Austin',state:'Texas'});

For of loop used for any iterables.

let incomes = [69000,70000,85000];
total = 0;
for(const income of incomes){
  total +=income;
  //console.log(income);
}

console.log(total);

let fullName = 'Yusuf, servant of Allah';
for (const char of fullName) {
    console.log(char);
}

challenge
for of is  only designed to iterate not to update iterables

spread operator

let example1 = [1,2,34,5,7,9]
let example2 = [...example1];
example2.push(true);
console.log(example1)
console.log(example2)
it works on objects too but not fully supported

Rest operator
function add(...num){
  console.log(num)
}

add(3)
add(3,4,5,5,2)

Arrow functions

function add(...num){
  // let total = num.reduce(function(x,y){
  //   return x+y;
  // });

  let total = num.reduce((x,y)=>x+y);
  console.log(total);
}

add(3,4,5,5,2);

Default Parameters
function add(numArray = []){
  let total= 0;
  numArray.forEach((element)=>{
    total += element;
  });
  console.log(total);
}
add();

includes() instead of indexOf() not supported by ie

let numArray = [2,3,4,6,7,8];
console.log(numArray.includes(0))// false
console.log(numArray.includes(6))// true

// Let and Const

// if(false){
//   // var example = 5;
//   let example = 5;
// }
// console.log(example);
/*
var example;
if(false){
  example = 5;
}

*/

// const example = [];
// // example =5;// error
// example.push(2);//mutation is allowed for non primitive values
// console.log(example);

// import and export
// import { data } from '/example.js';

// let updatedData = data;

// updatedData.push(true);
// console.log(updatedData);

// padStart() and padEnd()

// let example = 'Yusuf';

// console.log(example.padStart(10,'-'))
// console.log(example.padEnd(10,'-'))

import { Animal } from "./animal.js";

let cat = new Animal('Fat',4);

Trailing commas
function add(param){
const obj = {
  name:'Yusuf',
}
console.log(obj.name);
}

add();

Async and Await

const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const apiUrl = 'https://api.github.com';

function getTop100Campers(){
 fetch(apiUrl)
 .then((response)=>response.json())
 .then((json) =>{
   console.log(json[0]);
 }).catch((error)=>{
   console.log('Failed');
 });
// console.log(apiUrl);

}

async function getTop100Campers(){
  const response = await fetch(apiUrl);
  const json = await response.json();
  console.log(json[0]);
}
getTop100Campers();

function resolveAfter3Seconds(){
  return new Promise(resolve =>{
      setTimeout(()=>{
        resolve('resolved');
      },5000);
  });
}

resolveAfter3Seconds().then((data)=>{
  console.log(data)
});

async function getAsyncData(){
  const result = await resolveAfter3Seconds();
  console.log(result);
}

// getAsyncData();

Sets
const exampleSet  = new Set([1,1,1,1,1,2,2,2,2]);
exampleSet.add([2]);
exampleSet.add(8);
exampleSet.add(3).add(true);
// console.log(exampleSet.delete(3));// returns true
// console.log(exampleSet.has(5));// returns false

for (const iterator of exampleSet) {
    console.log(iterator);
}

console.log(exampleSet);
console.log(exampleSet.size);