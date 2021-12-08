var express = require('express')
var server = express()

var path = require('path')
server.use(express.static(path.join(__dirname, 'public')))

server.set('views', path.join(__dirname, 'view'))
server.engine('html', require('ejs').renderFile)
server.set('view engine', 'html')

server.listen(5555)