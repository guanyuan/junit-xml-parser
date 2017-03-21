var http = require('http')
var fs = require('fs')
var AdmZip = require('adm-zip')
var mkdirp = require('mkdirp');
var jv = require('junit-viewer/src/main.js')


var dir = "./assets/downloads";
var filename = 'output'
var url = 'http://localhost:8080/Archive.zip'
var tmpFilePath =  dir + filename + ".zip"

if (!fs.existsSync(dir)){
  mkdirp(dir, function (err) {
    console.log('mkdir finished')
    if(err) {
      console.log(err)
    }
  });
} else {
  console.log('no need to create new folder')
}



http.get(url, function(response) {
  response.on('data', function (data) {
    fs.appendFileSync(tmpFilePath, data)
  });
  response.on('end', function() {
    var zip = new AdmZip(tmpFilePath)
    zip.extractAllTo("assets/extracted/" + filename)
    fs.unlink(tmpFilePath)

    var parsedAndRenderedData = jv.junit_viewer("assets/extracted/")
    fs.writeFile('hello.html', parsedAndRenderedData)
  })
});