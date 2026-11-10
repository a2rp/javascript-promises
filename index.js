const promiseForNumber = (number) => new Promise((resolve, reject) => {
    if (!Number.isInteger(number)) {
        reject(new TypeError("Expected an integer"));
        return;
    }

    if (number % 2 === 0) {
        resolve(`${number} is even`);
    } else {
        reject(new Error(`${number} is odd`));
    }
});

promiseForNumber(1234)
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));

promiseForNumber(4321)
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));

const delayedValue = (value, milliseconds) => new Promise((resolve) => {
    setTimeout(resolve, milliseconds, value);
});

Promise.all([
    delayedValue("task 1 complete", 120),
    delayedValue("task 2 complete", 40),
    delayedValue("task 3 complete", 80),
])
    .then((results) => console.log("Promise.all results:", results))
    .catch((error) => console.error("A task failed:", error.message));

Promise.race([
    delayedValue("slow task finished", 250),
    delayedValue("fast task finished", 80),
])
    .then((winner) => console.log("First to finish:", winner))
    .catch((error) => console.error("Race rejected:", error.message));

const failAfter = (milliseconds) => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Fast task failed")), milliseconds);
});

Promise.race([
    delayedValue("later success", 250),
    failAfter(80),
])
    .then((winner) => console.log("First to finish:", winner))
    .catch((error) => console.error("First task settled with an error:", error.message));

async function showAsyncResult() {
    const result = await delayedValue("async/await result", 60);
    console.log(result);
}

showAsyncResult().catch((error) => console.error(error.message));
