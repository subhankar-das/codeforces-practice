// B. Colourblindness

var T = Number(readline());

while (T--) {
    var n = Number(readline());
    var r1 = readline();
    var r2 = readline();

    if (r1 === r2) {
        print('YES')
    } else {
        r1 = r1.replace(/[G]/g, 'B');
        r2 = r2.replace(/[G]/g, 'B');
        if (r1 === r2) {
            print('YES')
        } else {
            print('NO')
        }
    }
}