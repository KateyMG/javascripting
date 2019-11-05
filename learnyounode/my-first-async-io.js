var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, function callback(err, data) {
  console.log(data.toString().split('\n').length - 1);
});