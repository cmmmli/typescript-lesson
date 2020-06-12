class Person {
  static species = 'Homo sapiens'
  static isAdult(age: number) {
    if (age > 17) return true
    return false
  }
  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    this.age += 1
  }

  // greeting(this: { name: string }) {
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`)
  }
  // allow functionはthisが定義時に決まるので必要無い
  // greetingArrow = () => {
  //   console.log(`Hello! My name is ${this.name}`)
  // }
}
const quill = new Person('Quill', 21)
quill.greeting()

// const anotherQuill = {
//   name: 'anotherQuill',
//   greeting: quill.greeting,
// }
// anotherQuill.greeting()

class Teacher extends Person {
  get subject() {
    if (!this._subject) {
      throw new Error('There is no subject.')
    }
    return this._subject
  }
  set subject(value) {
    this._subject = value
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age)
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
