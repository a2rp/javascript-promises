# JavaScript Promises

A small, runnable JavaScript reference for promise fulfillment and rejection, `Promise.all`, `Promise.race`, and `async`/`await`.

## Features

- Fulfillment and rejection with `Error` objects
- Concurrent tasks with `Promise.all`, including input-order results
- Timed `Promise.race` examples for both fulfillment and rejection
- A concise `async`/`await` example
- Simple runnable JavaScript without a framework

## Run locally

```bash
node index.js
```

## What to observe

- `Promise.all` returns results in the same order as its input, even when tasks finish in a different order.
- `Promise.race` settles with whichever input settles first, whether it fulfills or rejects.
- `Promise.race` does not cancel the other tasks; their timers continue to run.

## Further practice

- Compare `Promise.all` with `Promise.allSettled` and `Promise.any`.
- Add cancellation with `AbortController` to a promise-based request.
- Change the task delays and predict the output before running the file.

## Links

- Portfolio: [https://www.ashishranjan.net/](https://www.ashishranjan.net/)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://www.patreon.com/a2rp](https://www.patreon.com/a2rp)
