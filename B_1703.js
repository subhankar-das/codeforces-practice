// B. ICPC Balloons

var T = Number(readline());
while(T--) {
    var len = Number(readline());
    var str = readline();
    var unique = new Set(str);
    var size = unique.size;
    var res = (size*2) + (len-size);
    print(res)
}