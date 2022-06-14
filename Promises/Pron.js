

const getData = (Callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        if (request.readyState === 4 && request.response === 200) {
            const data = JSON.parse(request.responseText)
           Callback(undefined, data) 
        }
        else if(request.readyState === 4){
            Callback( 'Cannot find data', undefined)
        }
    })

    request.open('GET', 'Callback/Games')
    request.send();
}

getData((err, data)=>{
    console.log('Call back fired')
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})