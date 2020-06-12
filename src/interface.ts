// type addFunc = (num1: number, num2: number) => number
interface addFunc {
  (num1: number, num2: number): number
}
const addFunc: addFunc = (n1: number, n2: number) => {
  return n1 + n2
}
addFunc(1, 2)

interface Nameable {
  name: string
  nickName?: string // option
}

// type Human = {
//   name: string
//   age: number
// }
// interfaceはオブジェクトのみ
interface Human extends Nameable {
  age: number
  // greeting: (message: string) => void
  greeting(message: string): void
}

// const human: Human = {
//   name: 'Quill',
//   age: 38,
//   greeting(message: string) {
//     console.log(message)
//   },
// }
// console.log(human.greeting)

class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number,
  ) {}
  greeting(message: string) {
    console.log(message)
  }
}

const user: Human = new Developer('Quill', 38, 3)
user
