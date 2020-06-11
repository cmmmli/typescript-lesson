class Person {
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
  constructor(name: string, age: number, public subject: string) {
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
