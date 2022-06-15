// classes
// A class is like a blueprint for an object (It describes how one should be made)

// blueprint = Properties  & functionality

//what new keyword does
// 1. It creates a new empty object {}
// 2. It binds the value of 'this' to the new empty object
// 3. It calls the constructor function to 'build the object

//subclass extends another class

class User {
    constructor(username, email) {
        this.username = username  
        this.email = email   
        this.score = 5
    }
login(){
    console.log(`${this.username} you just logged in`)
    return this
}
inScore(){
    this.score += 20;
    console.log(`${this.username} has just won ${this.score} points`)
    return this
}

}

class Admin extends User{
    constructor(username, email, title) {
      super(username, email) 
      this.title = title 
    }
    deleteUser(user){
        users = users.filter(i=>{
            return i.username !== user.username
        })

    }
}

const userOne = new User('Auspicious', 'Auspicious@gmail.com');
const userTwo = new User('Elisha', 'elisha@gmail.com');
const userThree = new Admin ('Akinkunmi', 'akinkunmi@gmail.com', 'Head of unit');


console.log(userOne, userTwo, userThree);
userOne.login().inScore().inScore()
userTwo.login().inScore().inScore()
userThree.login().inScore().inScore()

let users = [userOne, userTwo, userThree]
console.log(users)

userThree.deleteUser(userTwo)
console.log(users)

console.log(userThree)