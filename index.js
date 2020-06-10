const ig = require('./instagram');

(async () => {

await ig.initialize();

await ig.login('Vladimirbarshchuk', 'UbDK25zD');

debugger; 

})()