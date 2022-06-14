
// Async always return a promise regardless of what is inside
// await can be used instead of then method. it helps to block javascript from assigning variable to response 
const Todos = async()=>{
  const response = await fetch('Mario.json');
  const data = await response.json();

  return data;
}
console.log(1)
console.log(2)

Todos()
.then(data => console.log('resolved', data))

console.log(3)
console.log(4)




