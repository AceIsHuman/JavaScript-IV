// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);

    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);

    }
}

// Person Class Objects

const george = new Person({name: 'George', age: 28, location: 'San Antonio'});
const oscar = new Person({name: 'Oscar', age: 23, location: 'Austin'});
const matt = new Person({name: 'Matt', age: 27, location: 'Del Rio'})

console.log(george);
console.log(oscar.speak());
console.log(matt.speak());

// Instuctor Class Objects

const danFrehner = new Instructor({name: `Dan Frehner`, age: 36, location: `California`, favLanguage: `Javascript`, specialty: `Playing Banjo`, catchPhrase: `Well, let's try it!`});
const danLevy = new Instructor({name: `Dan Levy`, age: 32, location: `California`, favLanguage: `HTML`, specialty: `Bananas`, catchPhras: `It's just a banana word!`});

console.log(danLevy.speak());
console.log(danFrehner.grade(george, `JavaScript III`));
console.log(danLevy.demo(`CSS Compilers`));