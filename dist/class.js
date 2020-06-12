'use strict'
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static isAdult(age) {
    if (age > 17) return true
    return false
  }
  incrementAge() {
    this.age += 1
  }
  // greeting(this: { name: string }) {
  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`)
  }
}
Person.species = 'Homo sapiens'
const quill = new Person('Quill', 21)
quill.greeting()
// const anotherQuill = {
//   name: 'anotherQuill',
//   greeting: quill.greeting,
// }
// anotherQuill.greeting()
class Teacher extends Person {
  constructor(name, age, _subject) {
    super(name, age)
    this._subject = _subject
  }
  get subject() {
    if (!this._subject) {
      throw new Error('There is no subject.')
    }
    return this._subject
  }
  set subject(value) {
    this._subject = value
  }
  greeting() {
    console.log(
      `Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`,
    )
  }
}
const teacher = new Teacher('Quill', 38, 'Math')
teacher.greeting()
teacher.subject = 'Music'
console.log(teacher.subject)
console.log(Person.species)
console.log(Person.isAdult(20))
console.log(Teacher.species)
console.log(Teacher.isAdult(38))
