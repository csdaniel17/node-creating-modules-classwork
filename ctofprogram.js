var convertCtoF = require('./ctofmodule');

var degreesC = process.argv[2];
var degreesF = convertCtoF(degreesC);
console.log(degreesF);
