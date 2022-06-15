const Todos = [
    {game: " mario", BestPlayer: "Lola" },
    {game: " socker", BestPlayer: "messi" },
    {game: " tennis", BestPlayer: "Sahwn" },
    {game: "Basket Ball", BestPlayer: "James"}

]

// console.log(JSON.stringify(Todos))

localStorage.setItem('Todos', JSON.stringify(Todos))

const stored = localStorage.getItem('Todos')

console.log(JSON.parse(stored));