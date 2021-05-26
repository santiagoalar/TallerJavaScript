
var fs  = require("fs");
var array = fs.readFileSync('baseDatos.txt').toString().split('\n');

//var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
var obj = JSON.parse(array);
//obj.name();
//console.log(obj.name)
console.log(obj.name);


