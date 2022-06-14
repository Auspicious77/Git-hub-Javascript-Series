const Todos = async()=>{
    const response = await fetch('Mario.json');

    if (response.status!==200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    
  
    return data;
  }
  
  Todos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log('Error detected', err))

  
