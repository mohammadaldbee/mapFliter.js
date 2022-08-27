        /*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
let x = [2, 5, 100];
let x1 = x.map(double)
function double(n) {
    return n * 2
}
console.log(x1)

// */
//  * Exercise 2 : 
//  * 
//  * Take an array of numbers and make them strings
//  *
//  * Test Case: 
//  *
//  * console.log(stringItUp([2, 5, 100]));
//  * 
//  * Result:
//  * ["2", "5", "100"]
// */

let x2 = [2, 5, 100];
let x3 = x.map(str)
function str(n) {
    return n.toString()
}
console.log(x3)


// */
//  * Exercise 3:  
//  * 
//  * Capitalize each of an array of names
//  *
//  * Test Case: 
//  *
//  * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
//  * 
//  * Result:
//  *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
// */

let x4 = ["john", "JACOB", "jinGleHeimer", "schmidt"];
let x5 = x4.map(Capital)
function Capital(n) {
    return n.charAt().toUpperCase() + n.slice(1, n.length).toLowerCase()
}
console.log(x5)



// * Exercise 4:  
//  * 
//  * Make an array of strings of the names
//  *
//  * Test Case: 
//  *
//  * console.log(namesOnly([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  *   ])); 
//  * 
//  * Result:
//  *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// */
// /*
let aa = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
let aa1 = aa.map(names1)
function names1(n) {
    return n.name
}
console.log(aa1)


// * Exercise 5:  
// * 
// * Make an array of strings of the names saying whether or not they can go to The Matrix
// *
// * Test Case: 
// *
// * console.log(makeStrings([
// *    {
// *       name: "Angelina Jolie",
// *       age: 80
// *   },
// *   {
// *       name: "Eric Jones",
// *       age: 2
// *   },
// *   {
// *       name: "Paris Hilton",
// *       age: 5
// *   },
// *   {
// *       name: "Kayne West",
// *       age: 16
// *   },
// *   {
// *       name: "Bob Ziroll",
// *       age: 100
// *   }
// * ]));  
// * 
// * Result:
// * 
// * ["Angelina Jolie can go to The Matrix", 
// * "Eric Jones is under age!!", 
// * "Paris Hilton is under age!!", 
// * "Kayne West is under age!!", 
// * "Bob Ziroll can go to The Matrix"]
// * 
// */

let x8 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
let x9 = x8.map(Matrix)
function Matrix(n) {
    if(n.age>18){
        return n.name +" can go to The Matrix"
    }else{
        return n.name +"is under age!!"
    }
}
console.log(x9)


// * Exercise 6:  
//  * 
//  * Make an array of the names in h1s, and the ages in h2s
//  *
//  * Test Case: 
//  *
//  * console.log(readyToPutInTheDOM([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  * ])); 
//  * 
//  * Result:
//  * 
//  * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
//  * "<h1>Eric Jones</h1><h2>2</h2>", 
//  * "<h1>Paris Hilton</h1><h2>5</h2>", 
//  * "<h1>Kayne West</h1><h2>16</h2>", 
//  * "<h1>Bob Ziroll</h1><h2>100</h2>"]
//  */

let x10 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
let x11 = x10.map(h1s)
function h1s(n) {
    return `<h1>${n.name}</h1><h2>${n.age}</h2>`
}
console.log(x11)


// * Exercise 7:
// * Write a function called doubleValues which accepts an array 
// and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Cases:
// *   Test Case 1:  doubleValues([1,2,3]) 
// *   Test Case 2:  doubleValues([1,-2,-3])  
// *
// * Result:
// * Test Case 1: [2,4,6] 
// * Test Case 2: [2,-4,-6]
// */


let x12 = [2,4,6]
let x13 = x12.map(doubleValues)
function doubleValues(n) {
    return n * 2
}
console.log(x13)



// * Exercise 8:
// * Write a function called valTimesIndex which accepts an array and 
// returns a new array with each value multiplied by the index it is currently at in the array.
// *
// *
// * Test Cases :
// *   Test Case 1:  valTimesIndex([1,2,3])  
// *   Test Case 2:  valTimesIndex([1,-2,-3]) 
// * 
// * Result
// * Test Case 1: [0,2,6]
// * Test Case 2: [0,-2,-6]

let x14 = [2,4,10]
let x15 = x14.map(valTimesIndex)
function valTimesIndex(n,index) {
    return n*index
}
console.log(x15)


// * Exercise 9:
// * Write a function called extractKey which accepts an array of objects and
// * some key and returns a new array with the value
// * of that key in each object.
// * 
// * Test Case:
// * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
// * 
// * Result:
// * ['Elie', 'Tim', 'Matt', 'Colt']


function extractKey(arr, key) {
    return arr.map(val => val[key]);
  }
  
 console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));


// * Exercise 10:
// * Write a function called extractFullName which accepts an array of objects
//  and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
// * 
// * Examples:
// * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
//  {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
// */


let z = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
 {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]
let z1 = z.map(names)
function names(n) {
    return n.first +" "+n.last
}
console.log(z1)



//Filter 10 - 15 you should use Array.prototype.filter
/*
10
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

let r = [1,8,6,4,5];
let r1 = r.filter(evenOnly);
function evenOnly(n){
    return n%2==0
}
console.log(r1)


/*
11
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

let f = [1,8,6,4,10,18];
let f1 = f.filter(multiFour);
function multiFour(n){
    return n%4 == 0
}
console.log(f1)


/*
12
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr2,q){

let arr1 = arr2.filter(multiFour);
function multiFour(n){
    return n.includes(q)?true:false
   }   return arr1
}
console.log(containChar(["hello","world"],"l"))
console.log(containChar(["hello","world"],"e"))



/*
13
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arr4){

let arr3 = arr4.filter(mult);
function mult(n,index){
if(n.length%2!==0 && n.indexOf(n[index])%2==0){
    return n
}
}
return arr3
}console.log(evenIndexOddLength(["alex","mercer","madrasa","rashdd","emad","hdala"]))


/*
14
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(persons,num){
    let map9=persons.filter(item => item.age > num);
  
    return map9;
  }
  console.log(olderThan([{ name: { first: 'ahmed', last: 'waleed' }, age: 67 }],56));


/*
15
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

function shorterThan(w,r){

    let w1 = w.filter(Four);
    function Four(n){
    if(n.length<r){
        return n
    }
    }
    return w1
    }console.log(shorterThan(["alex","mercer","madrasa","rashdd","emad","hdala"],6))




    function Max(arr){
        let max=arr[0];
        let max2=arr[1];
    
    
        for(i=2;i<arr.length;i++){
          if(arr[i]>max){
    
            max2=max;
            max=arr[i]
          }
    
            else if(arr[i]>max2&&arr[i]!=max){
              max2=arr[i];
    
            }
        }
    
        return max+" "+max2;
      }
      console.log("the largest two number in the array: "+Max([20,3,2,5,10,4,40]));