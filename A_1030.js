// A. In Search of an Easy Problem
var n = readline();
var line = readline().split(' ').map(Number);
 
var res = line.filter(Boolean).length >= 1;
print(res ? 'HARD' : 'EASY')