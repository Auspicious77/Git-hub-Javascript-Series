// async code means something that can stand out and finish it later

// console.log(1)
// console.log(2)
//   setTimeout(()=>{
//     console.log('Callback function fired')
//   }, 2000);
// console.log(3)
// console.log(4)

// http network request
// it make http request to get data from another server
// we make these requests to API endpoint
const getTodos = (Callback) =>{
    const Request = new XMLHttpRequest();
    Request.addEventListener('readystatechange', () => {
        if (Request.readyState === 4 && Request.status === 200) {
            // console.log(Request.responseText);   
           Callback(undefined, Request.responseText);
        }
        else if(Request.readyState === 4){
            Callback('could not fetch data', undefined);
        }
        // console.log(Request, Request.readyState);
    })

Request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
Request.send();
}



getTodos((err, data)=>{
console.log('Call back fired')
if (err) {
    console.log(err)
}
else {
    console.log(data)
}
});


