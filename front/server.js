var express = require('express')
var path = require('path')
var server = express()

server.use(express.static(path.join(__dirname, 'aplicacao')))
server.set('views', path.join(__dirname, 'aplicacao'))
server.engine('html', require('ejs').renderFile)
server.set('view engine', 'html')


server.listen(5555, () => {
    console.log('Porta: 5555')
})