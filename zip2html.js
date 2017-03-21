var http = require('http')
var fs = require('fs')
var AdmZip = require('adm-zip')


var filename = 'output'
var url = 'http://localhost:8080/Archive.zip'
var tmpFilePath = "./assets/download/" + filename + ".zip"

http.get(url, function(response) {
  response.on('data', function (data) {
    fs.appendFileSync(tmpFilePath, data)
  });
  response.on('end', function() {
    var zip = new AdmZip(tmpFilePath)
    zip.extractAllTo("assets/extracted/" + filename)
    fs.unlink(tmpFilePath)
  })
});