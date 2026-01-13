// B. Queue at the School

// var line = '4 1'.split(' ');
var line = readline().split(' ');
var n = line[0]
var t = line[1];
// var queue = 'GGGB'.split('');
var queue = readline().split('');


while (t--) {
    var i = 0;
    while (i < n) {
        if (queue[i] === 'B' && queue[i + 1] === 'G') {
            queue[i] = 'G';
            queue[i + 1] = 'B';
            i += 2
        } else {
            i += 1
        }
    }
}
print(queue.join(''))
