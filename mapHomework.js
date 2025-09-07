const numbers = [1, 5, 10, 15, 20]
const newNumbers = numbers.map(num => num + 10)
console.log(newNumbers) // [11, 15, 20, 25, 30]

const names = ["Alice", "Bob", "Charlie", "Diana"]
const nameInfo = names.map(name => ({
    name, length: name.length
}))
console.log(nameInfo)
// [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'Diana', length: 5 }
// ]

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 },
]

const productsWithFinalPrice = products.map(product => ({
    ...product,
    finalPrice: product.price - product.price * 0.15
}))
console.log(productsWithFinalPrice)
// [
//   { name: 'Laptop', price: 1000, finalPrice: 850 },
//   { name: 'Mouse', price: 50, finalPrice: 42.5 },
//   { name: 'Keyboard', price: 80, finalPrice: 68 }
// ]

const employees = [
    { name: "Alice", salary: 50000, experience: 3 },
    { name: "Bob", salary: 60000, experience: 5 },
    { name: "Charlie", salary: 45000, experience: 2 },
]

const employeesWithTotal = employees.map(emp => ({
    ...emp,
    totalSalary: emp.salary + (emp.salary * 0.05) * emp.experience
}))

console.log(employeesWithTotal)
// [
//   { name: 'Alice', salary: 50000, experience: 3, totalSalary: 57500 },
//   { name: 'Bob', salary: 60000, experience: 5, totalSalary: 75000 },
//   { name: 'Charlie', salary: 45000, experience: 2, totalSalary: 49500 }
// ]