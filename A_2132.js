// A. Homework

var T = Number(readline());

while(T--) {
    var n = Number(readline());
    var a = readline();
    var arr = a.split('');

    var m = Number(readline());
    var b = readline();
    var seq = readline();

    for(var i=0; i<m; i++) {
        var ch = b[i];
        if(seq[i] === 'D') {
            arr.push(ch)
        }else {
            arr.unshift(ch)
        }
    }
    print(arr.join(''))
}