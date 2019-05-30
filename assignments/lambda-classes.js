// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am grom ${this.location}.`)
    }
}

class Instructors extends Person {
    constructor(attributes) {
        super(attributes);

    }
}

class Students extends Person {
    constructor(attributes) {
        super(attributes);

    }
}

class ProjectManagers extends Instructors {
    constructor(attributes) {
        super(attributes);

    }
}

const george = new Person({name: 'George', age: 28, location: 'San Antonio'});
const oscar = new Person({name: 'Oscar', age: 23, location: 'Austin'});
const matt = new Person({name: 'Matt', age: 27, location: 'Del Rio'})

console.log(george);
console.log(oscar);
console.log(matt);