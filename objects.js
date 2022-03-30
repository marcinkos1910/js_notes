const user1 = {
    name: 'Monika',
    score: 3,
    increment: function() {
        user1.score++
    }
}

console.log(user1);
user1.increment();
console.log(user1);

function userCreator(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    }
    return newUser
}

const user2 = userCreator('Monika', 3)
const user3 = userCreator('Przemek', 2)
user2.increment();
// console.log(user2);


const userFunctionStore = {
    increment: function(){
        this.score++;
    },
    login: function(){
        console.log("Logged in");
    }
}

function userCreator2 (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

// ---

function userCreator3(name, score){
    this.name = name;
    this.score = score;
}

userCreator3.prototype.increment = function () {
    this.score++;
}

const user7 = new userCreator3('Monika', 3);
console.log(user7);
user7.increment();
console.log(user7);


// map Array prototype custom implementation
// Array.prototype.map = function(cb){
//     const newArr = []
//     this.forEach((e, id, arr) => {
//         newArr.push(cb(e * 2, id, arr));
//     })
//     return newArr;
// }


// Syntatic sugar
class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    login() {
        console.log("Login");
    }
}

const user8 = new UserCreator("Dawid", 11)