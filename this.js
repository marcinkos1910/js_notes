// const teacher = 'Kyle';

// function otherClass() {
//     const teacher = 'Suzy';
//     console.log("Welcome");
// }

// function ask () {
//     const question = 'Why?';
//     console.log(question);
// }

// otherClass();
// ask();

// ---

// "use strict"    // type="module" - automatically evokes strict mode

// var teacher = 'Kyle';

// function otherClass() {
//     teacher = 'Suzy';
//     topic = 'React';
//     console.log("Welcome");
// }

// otherClass()
// console.log(teacher);
// console.log(topic);

// ---

// let teacher = 'Kyle';

// function otherClass() {
//     let teacher = 'Suzy';

//     function ask(question) {
//         console.log(teacher, question);
//     }
//     ask('Why?');
// }

// otherClass();

// ---

// let teacher = 'Kyle';

// function ask(question) {
//     console.log(this.teacher, question);
// }

// function otherClass() {
//     const myContext = {
//         teacher: 'Suzy'
//     }
//     ask.call(myContext, 'Why?');
// }

// otherClass();

// ---

//implicit binding

// function ask(question){
//     console.log(this.teacher, question);
// }
//
// const workshop = {
//     teacher: 'Kyle',
//     ask: ask
// }
//
// const workshop2 = {
//     teacher: 'Suzy',
//     ask
// }
//
// workshop.ask('what is implicit binding');
// workshop2.ask('How do I share a method?');

// ---
//explicit binding

// function ask(question){
//     console.log(this.teacher, question);
// }

// const workshop = {
//     teacher: "Kyle"
// }

// const workshop2 = {
//     teacher: "Suzy"
// }

// ask.call(workshop, "Can I explicitly set context?")
// ask.call(workshop2, "Can I explicitly set context?")

// ---
//hard binding

// const workshop = {
//     teacher: "Kyle",
//     ask(question) {
//         console.log(this.teacher, question);
//     }
// }

// setTimeout(workshop.ask, 10, "Lost this?");
// setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");

// ---
//new binding

// function ask(question) {
//     console.log(this.teacher, question);
// }

// const newEmptyObject = new ask("what is 'new' doing here?");

// ---
// default this

// var teacher = 'Kyle';

// function ask(question) {
//     console.log(this.teacher, question);
// }

// function askAgain(question) {
//     "use strict";
//     console.log(this.teacher, question);
// }

// ask("what's that non-strict mode default?")
// askAgain("what's that non-strict mode default?")


// ---
// const workshop = {
//     teacher: "Kyle",
//     ask: function ask(question) {
//         console.log(this.teacher, question);
//     }
// }

// new (workshop.ask.bind(workshop))("what deas this do?");

// ---
// ---
// Arrow function

// const workshop = {
//     teacher: "Kyle",
//     ask(question) {
//         setTimeout(() => {
//             console.log(this.teacher, question)
//         }, 100);        
//     }
// }

// ---

const workshop = {
    teacher: "Kyle",
    ask(question) {() => {
            console.log(this.teacher, question);
        };        
    }
}

workshop.ask("What happpend to this?");
workshop.ask.call(workshop, "What happpend to this?");