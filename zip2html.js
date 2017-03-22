var http = require('http')
var fs = require('fs')
var AdmZip = require('adm-zip')
var jv = require('junit-viewer/src/main.js')


var dir = "./assets/downloads";
var filename = 'output'
var url = 'http://localhost:8080/Archive.zip'
var tmpFilePath =  dir + filename + ".zip"




http.get(url, function(response) {
  if(response.statusCode !== 200) {
    console.log('error')
  } else {
    response.on('data', function (data) {
      fs.appendFileSync(tmpFilePath, data)
    });
    response.on('end', function() {

      try{
        var zip = new AdmZip(tmpFilePath)
        zip.extractAllTo("assets/extracted/" + filename)
      } catch(e) {
        console.log('Exception: ' + e)
      }
      fs.unlink(tmpFilePath)

      var parsedAndRenderedData = jv.junit_viewer("assets/extracted/", 'contracted')
      fs.writeFile('hello.html', parsedAndRenderedData)
    })
  }

});
