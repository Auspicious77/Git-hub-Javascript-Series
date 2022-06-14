// Promise Example

const getSomething = ()=>{
    return new Promise((resolve, reject)=>{
        // fetch something
        // resolve('some data');
        reject('some error')
    })
}

getSomething().then((data)=>{
    console.log(data)
}).catch(err => {
    console.log(err)
})

