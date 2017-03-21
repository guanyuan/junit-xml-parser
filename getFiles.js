var recursive = require('recursive-readdir');
var fileList = [];

recursive('tests', function (err, files) {
  // Files is an array of filename
  fileList = files
  console.log(files);
})

module.exports =  fileList
