class Person {
  name: string

  constructor(initName: string) {
    this.name = initName
  }

  // greeting(this: { name: string }) {
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`)
  }
  // allow functionはthisが定義時に決まるので必要無い
  // greetingArrow = () => {
  //   console.log(`Hello! My name is ${this.name}`)
  // }
}
const quill = new Person('Quill')
quill.greeting()

const anotherQuill = {
  name: 'anotherQuill',
  greeting: quill.greeting,
}
anotherQuill.greeting()
