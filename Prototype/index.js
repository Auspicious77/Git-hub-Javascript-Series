// _Proto_ points to the Array prototype where the method we can use is stored

// constructor function
function User(username, email){

    this.username = username;
    this.email = email;
}

function Admin (username, email, title){
   User.call(this, username, email, title)
   this.title = title
}
   User.prototype.login = function(){
    console.log(`${this.username} just logged in`);
    return this;
   };
   User.prototype.logout = function(){
    console.log(`${this.username} just logged out`);
    return this;
   };

   Admin.prototype = Object.create(User.prototype)
   Admin.prototype = function(){}

   const userOne = new User('Auspicious', 'Auspicious@gmail.com');
   const userTwo = new User('Elisha', 'elisha@gmail.com');
  const userThree = new Admin ('Akinkunmi', 'akinkunmi@gmail.com', 'Head of unit');

   console.log(userOne, userTwo, userThree);
   userOne.login().logout();
 