//********************************************** */
//Arrow Function

//  Arrow functions provide a concise syntax for writing
// functions, especially useful for short, one-line operations.

// ES-5 function
function hello(name){
    console.log("Hello " + name )
}

hello("Rohit")


// ES-6 Function
const greet = (name) => console.log("Good Morning " + name)
const add = (a,b) => a+b

greet("Rohit")
console.log(add(3,5))

//************************************************** */
//Template Literals

// Template literals allow embedding expressions inside strings,providing a 
// cleaner and more readable way to concatenate strings

const name = "Rohit"
const greeting = `Hello ${name}`

console.log(greeting)

//*************************************************** */
// Destructuring Assignments
// Destructuring assignment simplifies the extraction of values
// from objects or arrays into individual variables.

// Extract values from array in individual variables
let arr = [1, 2, 3]
const [a, b, c] = arr
console.log(a)
console.log(b)
console.log(c)

// Extract values from object
const person = {first_name : "Rohit", age:24}
const {first_name, age} = person

console.log(person.first_name)
console.log(person.age)


//***************************************************** */
// Spread Operator

// The spread operator allows for the expansion of elements, making it handy 
// for creating new arrays or objects based on existing ones

const arr2 = [1, 2, 3, 4, 5]
const newArr = [...arr2, 6, 7]
console.log(newArr)


//Also use to combine arrays

combined = [...arr, ...newArr]
console.log(combined)


// *****************************************************************
// Rest Parameter
// The rest parameter allows functions to accept an indefinite number 
// of arguments as an array, simplifying parameter handling.

const sum = (...numbers) => {
    return numbers.reduce((acc, num) => {
        return acc + num
    }, 0)
}

console.log(sum(1, 2, 3))


// ***********************************************************

// Async Await
// Async/await is a syntax for handling asynchronous code more concisely, 
// providing a cleaner alternative to working with Promises.


const API = 'https://api.restful-api.dev/objects'

const fetchData = async () => {
    try {
        const response = await fetch(API)
        const data = await response.json
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

fetchData()

//******************************************************* */
// Map() and Set()

// Map and Set are new data structures introduced in ES6. 
// Map is an ordered collection of key-value pairs, and Set is a collection of unique values.

const numberMap = new Map().set('one', 1)
console.log(numberMap)

const unique_num = new Set([1, 2, 3, 3, 4, 4, 5, 6])
console.log(unique_num)


//************************************************************ */
// Default parameters provide values for function parameters
// if none are provided, improving flexibility and reducing
// the need for explicit checks.

function greetMessage(name="Guest"){
    return `Hello ${name}`
}

console.log(greetMessage("Rohit"))


//************************************************************** */
// Modules
// ES6 modules provide a clean and organized way to structure and import/export code, 
//improving maintainability and reusability

//Export the module
// export const myModule = () => {}

// //import module
// import {myModule} from './myModule'


// ************************************************************
// map Method

// The map method in JavaScript is used to create a new array by applying a 
// provided function to each element of an existing array.

const arr4 = [1, 2, 3, 4, 5, 6]

// multiply each element by 2
const new_arr4 = arr4.map((num) => num*2)

console.log(new_arr4)

//******************************************************** */
// filter method
// The filter method is used to create a new array containing only
// the elements that satisfy a specified condition.

const arr5 = [2, 4, 5, 6, 7, 8, 9]

const even = arr5.filter((num) => num%2==0)

console.log(even)

//************************************************************* */
// reduce method
//The reduce method is used to accumulate the elements of an array into a single value

const data = [4, 5, 7, 8, 3, 9]
const sum_data = data.reduce((acc, num) => acc + num, 0)
console.log(sum_data)

const multiplication = data.reduce((acc, num) => acc * num, 1)
console.log(multiplication)