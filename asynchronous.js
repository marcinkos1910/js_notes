// // setTimeout - initialize function after defined time
// setTimeout(() => {
//     console.log('elo');
// }, 5000);

// const handleEvent = (evt) => {
//     console.log('it works', evt.target);
// };

// document.body.addEventListener("mouseover", handleEvent)

// const squareRef = document.querySelector('.square');

// // callback hell
// setInterval(() => {
//     setTimeout(() => {
//         squareRef.style.left = "300px";
//         setTimeout(() => {
//             squareRef.style.top = "300px";
//             setTimeout(() => {
//                 squareRef.style.left = "0px";
//                 setTimeout(() => {
//                     squareRef.style.top = "0px"
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000) 
// }, 8000)

// Promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolve Value")
//     }, 1000);

//     setTimeout(() => {
//         reject("Reject Value")
//     }, 1000);
// });

// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('finally teardown');
//     })

// fetch - 2015 ajax (XMLHTTPRequest)

// const result = fetch('http://api.nbp.pl/api/exchangerates/rates/A/usd?format=json');
// result
//     .then((response) => response.json())
//     .then((data) => new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 2000)
//     }))
//     .then((finalData) => console.log(finalData))
//     .catch((magic) => console.log(magic, "From catch"));


// // Custom fetch
// const myFetch = (url, {method = "GET", headers , body = null} = {}) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.open(method, url, true);
//         request.send(body);

//         // if (request.status === 200){
//         //     resolve(request.response);
//         // }
//         // reject(request.status);
//         request.onreadystatechange = (event) => {
//             if (request.readyState === 4){
//                 if (request.status === 200){
//                     resolve(request.response);
//                 }
//                 reject(request.status)
//             }    
//         }
//     })
// }

// const response = myFetch('http://api.nbp.pl/api/exchangerates/rates/A/usd?format=json');
// response
//     .then((data) => console.log(data))
//     .catch((data) => console.log(data));


// // Generators
// function* gen(){
//     console.log(1);
//     yield 11
//     console.log(2);
//     yield 22
//     console.log(3);
// }

// const g = gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function* nextPlayer(players){
//     let id = 0;

//     while (true){
//         yield players[id % players.length];
//         id++;
//     }
// }

// const p = ['ala', 'ola', 'ula'];
// const g = nextPlayer(p);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function* magic() {
//     let a = 10;
//     let b = yield a + 20;
//     yield b;
// }

// const g = magic()
// console.log(g.next());
// console.log(g.next(42));
// console.log(g.next());

// function* getData(url) {
//     const data = yield fetch(url);
//     console.log(data);
// }

// const u = 'http://api.nbp.pl/api/exchangerates/rates/A/usd?format=json'
// const fetchData = getData(u)
// fetchData
//     .next()
//     .value
//     .then((response) => response.json())
//     .then((data) => fetchData.next(data));


// async function getData2(url) {
//     const response = yield fetch(url);
//     const data = await
//     console.log(data);
// }

// const u = 'http://api.nbp.pl/api/exchangerates/rates/A/usd?format=json'
// const fetchData = getData(u)
