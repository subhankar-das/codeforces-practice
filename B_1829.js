// B. Blank Space

var T = Number(readline());

while(T--) {
    var len = Number(readline());
    var arr = readline().split('1').map(item => item.replace(/\s/g, '').length).sort((a,b)=>b-a);
    print(arr[0])
}