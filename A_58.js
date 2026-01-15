// A. Chat room

var s = readline();
var target = 'hello';
var j = 0;
for(var i=0; i<s.length; i++) {
    var c = s[i];
    if(c===target[j]) {
        j++;
    }
}
if(j==target.length) {
    print('YES')

}else {
    print('NO')
}