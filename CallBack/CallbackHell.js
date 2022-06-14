
const getTodos = (resource, Callback) =>{
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
Request.open('GET', resource)
Request.send();
}



getTodos('Mario.json', (err, data)=>{
console.log(data);
getTodos('Lisha.json', (err, data)=>{
    console.log(data)
})
getTodos('Games.json', (err, data)=>{
    console.log(data)
})


});


