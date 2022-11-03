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



//************/ End Array *********** //