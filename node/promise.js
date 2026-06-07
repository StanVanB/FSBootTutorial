console.log('Hello 1');

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello 2');
        resolve('success');
        // reject('error');
    }, 4000);
});

console.log('Hello 3');

pro.then((res) => {
    console.log('Res =>' + res);
}).catch( (err) => {
    console.log('Error =>' + err);
});

// async sync request
// asynchronous - these requests are non blocked
// synchronous - this request is blocked until the response is received