
const getTodos = (resource, Callback) =>{
    return new Promise((resolve, reject) => {
        const Request = new XMLHttpRequest();
        Request.addEventListener('readystatechange', () => {
            if (Request.readyState === 4 && Request.status === 200) {
    
                const data = JSON.parse(Request.responseText) 
                resolve(data)
              
            }
            else if(Request.readyState === 4){
                reject('error getting resource');
            }
            // console.log(Request, Request.readyState);
        })
    Request.open('GET', resource)
    Request.send();
    });
   
}
getTodos('Lisha.json').then(data=>{
    console.log('promised resolve:', data);
    return getTodos('Mario.json');
  }).then(data=>{
      console.log('Games resolved:', data);
      return getTodos('Lisha.json');
  }).then(data=>{
    console.log('data 2 resolved:', data)
  }).catch(err=>{
      console.log('promise rejected:', err);
  });
  










