// Fetch API
fetch('Mario.json').then(response => {
    console.log('Data resolved:', response);
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(err =>{
    console.log('Data rejected', err);
});


