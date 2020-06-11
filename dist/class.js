'use strict'
var Person = /** @class */ (function () {
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  Person.prototype.incrementAge = function () {
    this.age += 1
  }
  // greeting(this: { name: string }) {
  Person.prototype.greeting = function () {
    console.log(
      'Hello! My name is ' + this.name + '. I am ' + this.age + ' years old.',
    )
  }
  return Person
})()
var quill = new Person('Quill', 21)
quill.greeting()
// const anotherQuill = {
//   name: 'anotherQuill',
//   greeting: quill.greeting,
// }
// anotherQuill.greeting()
