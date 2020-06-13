"use strict";
const addFunc = (n1, n2) => {
    return n1 + n2;
};
addFunc(1, 2);
// const human: Human = {
//   name: 'Quill',
//   age: 38,
//   greeting(message: string) {
//     console.log(message)
//   },
// }
// console.log(human.greeting)
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const user = new Developer('Quill', 38, 3);
user;
