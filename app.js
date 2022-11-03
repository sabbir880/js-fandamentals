//************/ Start Array *********** //

const array = [ 1 ,2, 3 ,4 ,5 ,6];

// concat 
const contatArray =array.concat(7);
// console.log(contatArray);

// every 
const everyArray = array.every(x => x <7);
/*Sir aita Buji nai*/
// console.log(everyArray);

// filter 
const filterArray = array.filter( x => x % 2 == 0);
// console.log(filterArray)

// includes 
const includesArray = array.includes(4);
// console.log(includesArray)

// join 
const joinArray = array.join('-')
// console.log(joinArray)

// pop 
const popArray = array.pop();
// console.log(array) /*6*/

// push 
const pushArray = array.push(7);
// console.log(array) /*7*/

// reverse 
const reversArray = array.reverse();
// console.log(reversArray)
// shift 
const shiftArray = array.shift();
// console.log(array);

// some 
const someArray = array.some(n => n < 7);
/*Sir Aita kivabe kaj kortasa bujinai*/
// console.log(someArray) 

// unshift 
const unshiftArray = array.unshift(0);
// console.log(array);

// slice 
const sliceArray = array.slice(2 , 4);
// console.log(sliceArray) /*slice 2 & 3*/



const array2 = [3 , 5 ,6,6 ,8];

// find 
const findArray = array2.find( element=> element> 7);
// console.log(findArray) /*Output 8*/


// findIndex 
const findIndexArray2 = array2.findIndex(n => n === 6);
// console.log(findIndexArray2)


// forEach 
function singleNumber(number){
    console.log(number)
}

const forEachArray = array2.forEach(singleNumber)

// map 
const map1 = array2.map(n => n*2);
// console.log(map1)

// from 
// console.log(Array.from('EuropeionIt'))222222222222222222

const array3 = ['Java Scripr' , 'React','Node js'];

// fill 
const fillArray = array3.fill('React Js', 1);
// console.log(fillArray)

// isarray 
const isarray =Array.isArray(array3)
// console.log(isarray)

// Sort 
const sortArray = array3.sort()
/*no idea*/
console.log(sortArray);

// splice 
const month = [ 'Jan' , 'March', 'April'];
month.splice(1 , 0 , 'Feb')
console.log(month)


// spreed operator
const arr = [1, 2, 3];
const arr2 = [...arr];

// console.log(arr2)

//************/ End Array *********** //

/************** Objects Start *******************/
var object = { Name: 'Ariful',
    Roll: 10, 
    Pass:'true',
 };
//  values
       console.log(Object.values(object));
// keys
       console.log(Object.keys(object));
// entries 
       console.log(Object.entries(object));
// hasOwn 

       console.log(Object.hasOwn(object, "Name"));

// spreed operator 
const obj1 = { food: 'Cake', price: 42 };
const obj2 = { food: 'Biskit', price: 13 };

const clonedObj = { ...obj1 };
// { food: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { food: "baz", x: 42, y: 13 }

/************** Objects End *******************/


/************** loop start *******************/

// for loop 

for(let i = 0; i < 11;  i++){
    if(i % 2 == 0){
        console.log('This is even number :', i)
    }
    else{
        console.log('This is Odd Number :',i)
    }
}



// for of 
// array
const students = ['Arif', 'Sara', 'Shadin'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}


// for in 

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary =salaries[i];

    // display the values
    console.log(salary);
}
/************** Loop End *******************/




// https://github.com/sabbir880/js-fandamentals