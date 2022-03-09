// // Duplicate array
// const data = [1, 2, 3]

// const result = data.map(item => item *2)
// console.log(result);

// const fn = (item, id, array) => {
//     return item * id;
// };

// const result = data.map(fn)
// console.log(result);

// // Make boolean from data
// const result = data.map(Boolean)
// console.log(result);

// Change from string to int
// const result = ['10', '10', '10'].map(parseInt);
// console.log(result)



const data = [
    {
        name: 'Pawel',
        age: 36,
        city: 'Wegierska Górka',
        hobbies: ['python', 'javascript', 'drugs']
    },
    {
        name: "Szymon",
        age: 30,
        city: "Czestochowa",
        hobbies: ["kebab", "multikebab"]
    },
    {
        name: 'Mirek',
        age: 31,
        city: 'Krakow',
        hobbies: ['cars', 'food', 'js']
    },
    {
        name: 'Dominika',
        age: 23,
        city: 'Cracow',
        hobbies: ['singing', 'sport', 'thriller books/films']
    },
    {
        name: "Monika",
        age: 34,
        city: "Kraków",
        hobbies: ['python', 'psychology', 'books']
    },
    {
        name: 'Lukasz',
        age: 32,
        city: 'Krakow',
        hobbies: ['computer games', 'books', 'js']
    },
    {
        name: 'Marcin',
        age: 33,
        city: 'Krakow',
        hobbies: ['no_hobbies']
    },
    {
        name: 'Maciek',
        age: 26,
        city: 'Kraków',
        hobbies: ['tenis', 'python', 'music']
    },
    {
        name: 'Oliver',
        age: 19,
        city: 'Krakow',
        hobbies: ['music prod', 'skateboard', 'technology']
    },
    {
        name: "Anita",
        age: 30,
        city: "Cracow",
        hobbies: ["graphic design", "skateboarding", "art"]
    },
    {
        name: 'Remik',
        age: 27,
        city: 'Krakow',
        hobbies: ['coding', 'games', 'kebabs']
    },
    {
        name: 'Przemek',
        age: 29,
        city: 'Krakow',
        hobbies: ['python', 'js', 'it']
    },
    {
        name: 'Andrzej',
        age: 30,
        city: 'Wrocław',
        hobbies: ['cooking', 'drinking', 'python']
    }
]

// Avarage age

// const result = data.map(person => person.age).reduce((acc, age) => acc + age) / data.length;
// console.log(result);

// const result = data.reduce((acc, person) => acc + person.age, 0) / data.length;
// console.log(result);

// const result = data.flatMap(person => person.hobbies);
// const result2 = result.reduce((acc, hobby) => acc + hobby.length, 0);
// console.log(result2 / result.length);


// // tbd
// const result = data.filter(person => person.city === 'Krakow' 
//     || person.city === 'Cracow'
//     || person.city === 'Krakow')
//     .sort((a, b) => a.age === b.age ? 0 : a.age > b.age ? 1 : -1)
//     .map(person => person.name);
// console.log(result);  

// // tbd
// const result = data.filter(person => person.hobbies.includes('js'))
//     .map(person => person.name)
//     .sort((a, b) => a.length > b.length ? 1 : -1);

// console.log(result); 

// // Negation of above
// const result = data.filter(person => !person.hobbies.includes('js'))
//     .map(person => person.name)
//     .sort((a, b) => a.length > b.length ? 1 : -1);

// console.log(result); 


// Return unique hobbies
// const result = new Set(data.reduce((acc, person) => [...acc, ...person.hobbies], []));
// console.log(result);


// // Returns true when someone is 19 years old
// const result = data.some(person => person.age === 19);
// console.log(result);


// Returns true if every person is below 40
// const result = data.every(person => person.age < 40);
// console.log(result);

