// Raising Bacteria

const fs = require('fs');

const n = fs.readFileSync(0, 'utf8').trim();
const tot = Number(n);
// let tot = 343000816;
let count = 0;
while(tot !== 0) {
    if(tot%2 === 0) {
        // its even
        tot /= 2;
    }
    else {
        tot -=1;
        count++;
    }
}
console.log(count)
