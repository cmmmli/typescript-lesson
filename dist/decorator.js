"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-unused-vars */
function Logging(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
// function Logging(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }
function Component(template, selector) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (constructor) {
        return class extends constructor {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor(...args) {
                super();
                const montedElement = document.querySelector(selector);
                const instance = new constructor();
                if (montedElement) {
                    montedElement.innerHTML = template;
                    const el = montedElement.querySelector('h1');
                    if (el) {
                        el.textContent = instance.name;
                    }
                }
            }
        };
    };
}
// propertyDecorator
function propertyLogging(target, propertyKey) {
    console.log('propertyLogging');
    console.log(target);
    console.log(propertyKey);
}
// methodDecorator
function methodLogging(target, propertyKey, descriptor) {
    console.log('methodLogging');
    console.log(target);
    console.log(descriptor);
}
let User = class User {
    constructor(age) {
        this.age = age;
        this.name = 'Quill';
        console.log('User was created!');
    }
};
__decorate([
    propertyLogging
], User.prototype, "name", void 0);
User = __decorate([
    Component('<h1>{{ name }}</h1>', '#app'),
    Logging('Logging User')
], User);
const user1 = new User();
const user2 = new User();
const user3 = new User();
