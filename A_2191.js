// A. Array Coloring

var T = Number(readline());

while (T--) {
    var len = Number(readline());

    var arr = readline().split(' ').map(Number);

    var resArrWithB = new Array(len).fill(null);

    var val = 'B'
    for (var i = 0; i < len; i++) {
        var pos = arr[i] - 1;
        resArrWithB[pos] = val;
        if (val === 'B') { val = 'R' } else { val = 'B' }
    }
    var flag = true;

    for (var i = 0; i < len - 1; i++) {
        if (resArrWithB[i] === resArrWithB[i + 1]) {
            flag = false;
            print('NO')
            break;
        }
    }
    if (flag) {
        print('YES')
    }
}