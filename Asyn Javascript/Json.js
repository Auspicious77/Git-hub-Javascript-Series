
const getTodos = (Callback) =>{
    const Request = new XMLHttpRequest();
    Request.addEventListener('readystatechange', () => {
        if (Request.readyState === 4 && Request.status === 200) {

            const data = JSON.parse(Request.responseText) 
           Callback(undefined, data);
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


