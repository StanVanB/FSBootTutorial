console.log('Hello 1');

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello 2');
        reject('success');
    }, 4000);
});

console.log('Hello 3');

pro.then((res) => {
    console.log('Res =>'+ res);
}).catch((err) => {
    console.log('Error =>'+ err);
});

// async sync request
// async - these requests are non-blocking, they will not wait for the previous request to complete before moving on to the next one. They allow other operations to continue while waiting for a response.
// sync - these requests are blocking, they will wait for the previous request to complete before moving on to the next one. They do not allow other operations to continue while waiting for a response.