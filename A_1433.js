// A. Boring Apartments

var T = Number(readline());
// var T = 4;
var arr = [1, 11, 111, 1111,
    2, 22, 222, 2222,
    3, 33, 333, 3333,
    4, 44, 444, 4444,
    5, 55, 555, 5555,
    6, 66, 666, 6666,
    7, 77, 777, 7777,
    8, 88, 888, 8888,
    9, 99, 999, 9999,
]

while (T--) {
    var x = Number(readline());
    // var x = 777; 
    var count = 0;
    var indexOfElem = arr.indexOf(x);
    for (i = 0; i < 36; i++) {
        if (i > indexOfElem) {
            break;
        } else {
            count += arr[i].toString().length;
        }
    }
    print(count);
}