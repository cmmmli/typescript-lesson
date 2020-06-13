type Engineer = {
  name: string
  role: string
}
type Blogger = {
  name: string
  follower: number
}
// type EngineerBlogger = Engineer & Blogger
interface EngineerBlogger extends Engineer, Blogger {}

const quill2: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000,
}
console.log(quill2.name)
type NumberBoolean = number | boolean
type StringNumber = string | number
type Mix = NumberBoolean & StringNumber // => number

function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    x.toUpperCase()
  }
  return ''
}
toUpperCase('hi')

type NomadWorker = Engineer | Blogger
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name)
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role)
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower)
  }
}
describeProfile({ name: 'quill', role: 'web' })

class Dog {
  kind: 'dog' = 'dog'
  speak() {
    console.log('bow-wow')
  }
}
class Bird {
  kind: 'bird' = 'bird'
  speak() {
    console.log('tweet-tweet')
  }
  fly() {
    console.log('flutter')
  }
}
type Pet = Dog | Bird
function havePet(pet: Pet) {
  pet.speak()
  if (pet instanceof Bird) {
    pet.fly()
  }
}
havePet(new Bird())

// const input = <HTMLInputElement>document.getElementById('input')
const input = document.getElementById('input') as HTMLInputElement
if (input) {
  input.value = 'initial input value'
}

interface Designer {
  name: string
  [index: string]: string
}
const designer: Designer = {
  name: 'Quill',
  role: 'afa',
  fafa: 'fa',
}
designer.hoge = 'hoge'

interface DownloadedData {
  id: number
  user?: {
    name?: {
      first: string
      last: string
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1,
}
console.log(downloadedData.user?.name?.first)
const userData = downloadedData.user ?? 'no-user'
console.log(userData)
type id = DownloadedData['id']

function advancedFn(...args: [number, string, boolean?, ...number[]]) {
  console.log(args)
}
advancedFn(0, 'hi', true, 0, 0, 0)

// const milk = 'milk' as const
// const arrray = [10, 20] as const
const peter = {
  name: 'Peter',
  age: 38,
} as const

type PeterType = typeof peter
