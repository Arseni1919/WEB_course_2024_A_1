// alert('Hello from JS file!');

// console.log('Hello from console!')
// console.error('this is ERROR!')
// console.warn('This is warning!')


// let age = 30;
// age += 1;
// console.log(age);

// const name = 'Jonh';
// console.log(name);
// const age = 30;
// console.log(age);
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);
// z = 3
// console.log(typeof z);

// let x = 10;
// x = x + 1;
// x += 1;
// x -= 1;
// x *= 20;
// x /= x;
// x %= 35;
// x **= 20;
// console.log(x);

// Strings
// const name = 'Israel Co.'
// console.log("Company's name is " + '"' + name + "'")
// console.log(`My company's name is "${name}".`)
// const x = 3;
// const y = 19;
// console.log(`The sum of x and y is equal to ${x + y}`)

// const s = 'Hello, World, My, Name, Is, ';
// console.log(s);
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 8));
// console.log(s.substring(0, 8).toLowerCase());
// console.log(s.substring(0, 8).toUpperCase());
// console.log(s.split(' '))

// Arrays
// const numbers = new Array(1, 2, 3, 4)
// const numbers = [1, 2, 3, 4]
// console.log(numbers)

// const numbers = [1, true, 'hello', 'hello', null, []]
// console.log(numbers)
// // numbers[7] = 10
// numbers.push('apple')
// numbers.unshift('orange')
// console.log(numbers)
// console.log(numbers.pop())
// console.log(numbers)
// console.log(Array.isArray(numbers))
// console.log(numbers.indexOf('qq'))

// Objects

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st.',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// person.middleName = 'AAAAA'
// console.log(person)
// person.firstName = 'Tal'
// console.log(person.firstName)
// console.log(person.middleName)
// console.log(person.age)
// console.log(person.address.state)
// console.log(person.hobbies[1])
//
// const {firstName, lastName, address} = person
//
// console.log(firstName)
// console.log(lastName)
// console.log(address)

// const todos = [
//     {
//         id: 1,
//         text: 'do homework',
//         isCompleted: true,
//     },
//         {
//         id: 2,
//         text: 'do dishes',
//         isCompleted: true,
//     },
//         {
//         id: 3,
//         text: 'do meeting',
//         isCompleted: false,
//     },
// ]

// console.log(todos)
// const todosJSON = JSON.stringify(todos)
// console.log(todosJSON)
//
// const todosBackToObject = JSON.parse(todosJSON)
// console.log(todosBackToObject)

// Loops

// for(let i=0; i < 10; i++){
//     console.log(`For loop number ${i}`)
// }
//
// let i = 0
// while(i < 10){
//     console.log(`While loop number ${i}`)
//     i++;
// }

// for(let i=0; i < todos.length; i++){
//     console.log(todos[i].text)
// }
//
// for (let todo of todos) {
//     console.log(todo.id)
// }
//
// todos.forEach(function (myItem) {
//     console.log(myItem.text)
// })
//
// const todoText = todos.map(function (todo) {
//     return todo.text
// })
// console.log(todoText)
//
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted;
// }).map(function (todo) {
//     return todo.text
// })
//
// console.log(todoCompleted)


// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 === 10)

// const x = 11
// const y = 11
// console.log(x > 5 || y > 10)  // python: or
// console.log(x > 5 && y > 10)  // python: and
//
// if (x > 5 && y > 10) {
//     console.log('Yuhuuu')
// }

// let x = 10
// let color = x > 10 ? 'red': 'blue'
// x = 100
// console.log(color)

// const color = 'red'
// switch (color) {
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')
//         break
//     default:
//         console.log('color is default')
//         break
// }

//Functions

// function addNumbers(num1=10, num2=1) {
//     console.log(num1)
//     console.log(num2)
//     return num1 + num2
// }

// Arrow functions

const addNumbers = (num1=1, num2=1) => {
    return num1 + num2
}

console.log(addNumbers(10, 20))

const printName = name => console.log(name)
const plusOneLong = (num1) => {
    return num1 + 1
}
const plusOne = num1 => num1 + 1


printName('Tal')

console.log(plusOne(100))

const todos = [
    {
        id: 1,
        text: 'do homework',
        isCompleted: true,
    },
        {
        id: 2,
        text: 'do dishes',
        isCompleted: true,
    },
        {
        id: 3,
        text: 'do meeting',
        isCompleted: false,
    },
]

todos.forEach(todo => console.log(todo.text))













