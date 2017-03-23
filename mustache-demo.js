var Mustache = require('mustache'),
  fs = require('fs')


var template = templatesCache[fileName]
Mustache.parse(template)
return Mustache.render(template, data)


//mustache loader
// https://blog.serverdensity.com/the-journey-to-webpack/

webpackConfig = { test: /\.html$/, loader: "mustache"}

var template = require('./template.html');
var html = template({ foo: 'bar' });

