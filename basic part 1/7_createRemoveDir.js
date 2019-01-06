/**
 * Creating & Removing Directories 
 * 
 * NOTE: Do Not execute the whole code at once, If you do so then you cannot observe anything because directories will be created and removed in just one execution
 * 
 * First execute mkdir and rmdir for sync then execute the same for async 
 */

const fs = require('fs');

/* To Create a Directory using mkdirSync*/
fs.mkdirSync('Amit');

/* To Create a Directory using mkdir which is async method*/
fs.mkdir('Amit', () => {
    fs.writeFile('./Amit/Hello.txt', 'New file created within Amit directory', () => {});
});

/* To unlink(Remove files) */
fs.unlink('Hello.txt', () => {});

/**
 *  To Remove a Directory sync and async 
 * Note: Already removed directory cannot be removed
 * Also cannot remove a directory if there are some existing contents within, we need to first unlink all of them
 */

/* To Remove a Directory using rmdirSync*/
fs.rmdirSync('Amit');

/* To Remove a Directory using rmdir*/
fs.unlink('./Amit/Hello.txt', () => {
    fs.rmdir('Amit', () => {});
})