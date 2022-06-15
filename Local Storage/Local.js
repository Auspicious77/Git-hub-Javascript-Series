//store data in local storage

localStorage.setItem('name', 'Londa');
localStorage.setItem('age', 40);


//get data on local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

//updating data
localStorage.setItem('name', 'Mario');
localStorage.age = '40';

// removing item
// localStorage.clear()
