/* eslint-disable @typescript-eslint/no-unused-vars */
function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

// function Logging(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }

function Component(template: string, selector: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <T extends { new (...args: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(...args: any[]) {
        super()
        const montedElement = document.querySelector(selector)
        const instance = new constructor()
        if (montedElement) {
          montedElement.innerHTML = template
          const el = montedElement.querySelector('h1')
          if (el) {
            el.textContent = instance.name
          }
        }
      }
    }
  }
}

// propertyDecorator
function propertyLogging(target: unknown, propertyKey: string) {
  console.log('propertyLogging')
  console.log(target)
  console.log(propertyKey)
}

// methodDecorator
function methodLogging(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('methodLogging')
  console.log(target)
  console.log(descriptor)
}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')
class User {
  @propertyLogging
  name = 'Quill'
  constructor(public age?: number) {
    console.log('User was created!')
  }
}
const user1 = new User()
const user2 = new User()
const user3 = new User()
