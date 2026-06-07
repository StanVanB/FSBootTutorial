const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const customModule = require('./functions');
const emitter = new EventEmitter();

// console.log(__filename);
// console.log(__dirname);
let baseName = path.basename(__filename)
let extName = path.extname(__filename)
console.log('Base name: ' + baseName);
console.log('Extension name: ' + extName);

console.log(os.hostname());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
//try to use freemem and totalmem from the os module to get the amount of free memory in the system

// fs.readFile('./index.js', 'utf-8',  (err, data) => {
//     if (err) console.log('Error reading file: ' + err);
//     else console.log('File content: ' + data);
// })

emitter.on('error', () => {
    console.log('Error happened ');
});

emitter.emit('error');


console.log(customModule.name);
customModule.greet();

//explain about package.json and nodemon, node_modules, npm install, npm init, gitignore