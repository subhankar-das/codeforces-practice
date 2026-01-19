// C. Advantage

var T = Number(readline());

while (T--) {
    var len = Number(readline());

    var arr = readline().split(' ').map(Number);
    var maxStrength = -Infinity;
    var secondMaxStrength = -Infinity;

    for (var x of arr) {
        if (x > maxStrength) {
            secondMaxStrength = maxStrength;
            maxStrength = x;
        } else if (x > secondMaxStrength) {
            secondMaxStrength = x;
        }
    }


    var resArr = [];
    for (var i = 0; i < len; i++) {
        var diff;
        if (arr[i] === maxStrength) {
            diff = arr[i] - secondMaxStrength;
        }
        else {
            diff = arr[i] - maxStrength;
        }
        resArr.push(diff);
    }
    print(resArr.join(' '))
}