
// Filter Method
// const scores = [10, 30, 15, 83, 70, 23, 90]

// const filter = scores.filter((score)=>{
//     return score > 20
// })

// console.log(filter)

const users = [
    {name: 'Elisha', premium: true},
    {name: 'Sade', premium: false},
    {name: 'David', premium: true},
    {name: 'Joseph', premium: true},
    {name: 'jane', premium: false},
]

const PremiumUsers = users.filter((item)=>{
  return item.premium;
})

console.log(PremiumUsers)


// Map Method
// const Prices = scores.map((price) => {
//     return price/2
// })
// console.log(Prices)

const products = [
    {name: 'Stout', price: 20},
    {name: 'Coca-cola', price: 30},
    {name: 'Fanta', price: 60},
    {name: 'Bigi-cola', price: 80},
    {name: '7up', price: 35},
]

// const newproduct = products.map((product) =>{
//     if (product.price > 30) {
//         return{name: product.name, price: product.price/2}
//     }
//     else {
//         return product;
//     }
// })
// console.log(newproduct)


// Reduce Method
// const Result = scores.reduce((acc, curr) => {
// if (curr>50){
//     acc++;
// }
// return acc;
// }, 0)

// console.log(Result)

const Numbers = [
    {Player: 'mario', score: 20},
    {Player: 'yeni', score: 30},
    {Player: 'joseph', score: 50},
    {Player: 'Bigi-cola', score: 80},
    {Player: 'yeni', score: 35},
];
const Result = Numbers.reduce((acc, curr) =>{
 if (curr.Player === 'yeni') {
     acc += curr.score;
 }
 return acc;
}, 0);

console.log(Result)

// sort method
let names = ['Elisha', 'Joseph', 'Paul', 'Yemi']
const name = names.sort()
console.log(name)

// reverse Method
// Opposite of sort

const Highest = Numbers.sort((a,b)=>{
  if (a.score>b.score) {
      return -1;
  }
  else if (b.score > a.score) {
    return 1;  
  } else {
      return 0;
  }
})

console.log(Highest)

// using multiple method in array
const Filter = products.filter(prod => prod.price > 30);

const promos = Filter.map(prod => 
   {return `the ${prod.name} is ${prod.price/2} pounds`
})

console.log(promos)