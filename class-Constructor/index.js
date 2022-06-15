   function User(username, email){

    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in`)
        
    };
   }

   const userOne = new User('Auspicious', 'Auspicious@gmail.com');
   const userTwo = new User('Elisha', 'elisha@gmail.com');
//    const userThree = new Admin ('Akinkunmi', 'akinkunmi@gmail.com', 'Head of unit');

   console.log(userOne, userTwo)
   userOne.login();