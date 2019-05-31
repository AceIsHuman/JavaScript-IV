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

    addOrSubPoints(student) {
        if (Math.ceil(Math.random() * 10) > 5) {
            student.grade = student.grade + Math.ceil(Math.random() * 10);
            if (student.grade > 100) {
                student.grade = 100;
            }
        } else {
            student.grade = student.grade - Math.ceil(Math.random() * 10);
            if (student.grade < 0) {
                student.grade = 0;
            }
        } console.log(`${student.name}'s grade is now ${student.grade}`);
    } 
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }

    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} is ready for graduation!`);
        } else {
            console.log(`${this.name} requires more work to graduate.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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

// Student Class Objects

const ace = new Student({name: `Aciel Ochoa`, age: 24, location: `Texas`, previousBackground: `Retail`, className: `WebPT7`, favSubjects: [`HTML`, `CSS`, `JavaScript`], grade: 68});
const sofia = new Student({name: `Sofia Levin`, age: 26, location: `Texas`, previousBackground: `Front End`, className: `WebPT7`, favSubjects: [`HTML`, `CSS`, `JavaScript`], grade: 92});

console.log(ace.listsSubjects());
console.log(ace.PRAssignment(`JavaScript II`));
console.log(sofia.sprintChallenge(`Advanced CSS`));

// Project Manager Objects

const asa = new ProjectManager({name: `Asa Shalom`, age: 27, location: `Arizona`, favLanguage: `React`, specialty: `Vaping`, catchPhrase: `Write a book!`, gradClassName: `Web15`, favInstructor: `Dan Frehner`});
const ajBrush = new ProjectManager({name: `AJ Brush`, age: 27, location: `East Coast`, favLanguage: `C#`, specialty: `Skydiving`, catchPhrase: `Let's go!`, gradClassName: `Web17`, favInstructor: `Cam Pope`});

console.log(asa.standUp(`webpt_asa`));
console.log(ajBrush.debugsCode(ace, `Preprocessing II`));

console.log(asa.addOrSubPoints(ace));
console.log(ace.graduate());

console.log(ajBrush.addOrSubPoints(sofia));
console.log(sofia.graduate());