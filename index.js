/*            IMPORTS            */
const express  = require('express')
const router   = require('./src/routes')
const nunjucks = require('nunjucks')

const server  = express()

//configs
server.use(router)
server.use(express.static('public'))
server.set('view engine', 'html')

nunjucks.configure('./src/views', {
    express:server,
    noCache:true
})

server.listen(8080, ()=>{
    console.log('Server is Running')
})


