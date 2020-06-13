"use strict";
var _a, _b, _c;
const quill2 = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000,
};
console.log(quill2.name);
function toUpperCase(x) {
    if (typeof x === 'string') {
        x.toUpperCase();
    }
    return '';
}
toUpperCase('hi');
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
describeProfile({ name: 'quill', role: 'web' });
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// const input = <HTMLInputElement>document.getElementById('input')
const input = document.getElementById('input');
if (input) {
    input.value = 'initial input value';
}
const designer = {
    name: 'Quill',
    role: 'afa',
    fafa: 'fa',
};
designer.hoge = 'hoge';
const downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
console.log(userData);
function advancedFn(...args) {
    console.log(args);
}
advancedFn(0, 'hi', true, 0, 0, 0);
// const milk = 'milk' as const
// const arrray = [10, 20] as const
const peter = {
    name: 'Peter',
    age: 38,
};
