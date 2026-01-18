// Solution 1 || B. Your Name
function findFreq(s) {
    var freq = {};
    s.split('').forEach(ch => {
        freq[ch] ? freq[ch]++ : freq[ch] = 1;
    })
    return freq;
}

var T = Number(readline());

while (T--) {
    var len = Number(readline());

    var str = readline().split(' ');
    var s1 = str[0];
    var s2 = str[1];

    var f1 = findFreq(s1);
    var f2 = findFreq(s2);
    var flag = true;

    for(var i=0; i<len; i++) {
        var ch = s2[i];
        if(f1[ch] !== f2[ch]) {
            print('NO');
            flag = false;
            break;
        }
    }
    if(flag) {
        print('YES')
    }
}

// Solution 2 || B. Your Name

 
var T = Number(readline());
 
while (T--) {
    var len = Number(readline());
 
    var str = readline().split(' ');
    var s1 = str[0];
    var s2 = str[1];
 
    var sorted1 = s1.split('').sort().join('');
    var sorted2 = s2.split('').sort().join('');
 
    print(sorted1 === sorted2 ? 'YES' : 'NO')
}