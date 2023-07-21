// idea of javascript promise
const promise1 = (number) => new Promise((resolve, reject) => {
    if (number % 2 === 0) { resolve("success"); }
    else { reject("failure"); }
});

promise1(1234)
    .then(message => { console.log(message); })
    .catch(message => { console.log(message); });

promise1(4321)
    .then(message => { console.log(message); })
    .catch(message => { console.log(message); });



// promise all and race
const promise2 = new Promise((resolve, reject) => { resolve("task 2 complete"); });
const promise3 = new Promise((resolve, reject) => { resolve("task 3 complete"); });
const promise4 = new Promise((resolve, reject) => { resolve("task 4 complete"); });
Promise.all([promise2, promise3, promise4]).then(messages => {
    console.log(messages);
});


// promise race
let p1 = Promise.reject(111);
let p2 = Promise.resolve(222);
let p3 = new Promise((resolve, reject) => { setTimeout(resolve, 1000, 333); });

Promise.race([p3, p2, p1]).then(result => {
    console.log('winning:', result);
}).catch((result) => {
    console.log('Failed:', result);
});

Promise.race([p1, p2, p3]).then(result => {
    console.log('winning:', result);
}).catch((result) => {
    console.log('Failed:', result);
});
