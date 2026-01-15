var T = Number(readline());
while (T--) {
    var len = Number(readline());
    var str = readline();

    var start = 0;
    var end = len - 1;
    var resLen = len;
    while (start <= end) {
        if ((str[start] === '0' && str[end] === '1') || (str[start] === '1' && str[end] === '0')) {
            resLen -= 2;
            start++;
            end--;
        }else {
            break;
        }
    }
    print(resLen)
}