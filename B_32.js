// 32B-Borze
const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();
// const str = '-..-.--';
const len = str.length;
let res = [];
let j=0;
while(j<len) {
    if(str[j]==='-' && str[j+1] === '.') {
        res.push('1');
        j+=2;
    }
    else if(str[j]==='-' && str[j+1] === '-') {
        res.push('2');
        j+=2
    }else {
        res.push('0');
        j+=1
    }
}
console.log(res.join(''))