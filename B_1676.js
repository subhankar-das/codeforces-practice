// B. Equal Candies
var T = Number(readline());
while (T--) {
    var len = Number(readline());
    var arr = readline().split(' ').map(Number);
    var minNum = Math.min(...arr);
    var count = 0;
    for(var i=0; i<len; i++) {
        count +=  arr[i] - minNum;
    }
    print(count);
}