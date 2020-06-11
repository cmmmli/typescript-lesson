const hello = 'hello'
console.log(hello)

const person = {
  name: 'Jack',
  age: 21,
}
console.log(person.name)

// 配列
const fruits: string[] = ['Apple', 'Banana', 'Grape']
console.log(fruits)

// Tuple
const book: [string, number, boolean] = ['business', 1500, false]
console.log(book)

// Enum
// Enumの値は大文字にする
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}
const coffee: {
  hot: boolean
  size: CoffeeSize
} = {
  hot: true,
  size: CoffeeSize.TALL,
}
coffee.size = CoffeeSize.SHORT

// union
const unionType: number | string = 'hoge'
unionType.toUpperCase()
const unionTypeArray: (number | string)[] = ['hoge', 10]
console.log(unionType, unionTypeArray)

// Literal
const apple = 'apple'
console.log(apple)
// 疑似enum、代入は出来るけど参照は微妙
type ClothSize = 'small' | 'medium' | 'large' // type alias
const clothSize: ClothSize = 'large'
clothSize

// 関数に型をつける
// 引数には型推論効かない。返り値には効く
function add(num1: number, num2: number): number {
  return num1 + num2
}
add(1, 3)

function sayHello(): void {
  console.log('Hello')
}
sayHello()

// const anotherAdd: (n1: number, n2: number) => number = sayHello
const anotherAdd: (n1: number, n2: number) => number = add
anotherAdd
// allow function
const doubleNumber: (num: number) => number = (num) => num * 2
doubleNumber(3)

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num)
  console.log(doubleNum)
}
doubleAndHandle(2, (num) => {
  return num * 2
})

let anyInput: any
// let unknownInput: unknown
// 代入はどちらも同じ
anyInput = 'hoge'
anyInput = 21
// unknownInput = 'fuga'
// unknownInput = 21
const text: string = anyInput // anyは代入できてしまう
// const text: string = unknownInput // unknownはエラーが出る
text

// エラーを起こして途中で終了 or 無限ループのときneverが使える
function error(message: string): never {
  throw Error(message)
}
error
