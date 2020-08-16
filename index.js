/*            IMPORTS            */
const express  = require('express')
const router   = require('./src/routes')
const nunjucks = require('nunjucks')

const server  = express()

//configs
server.set('view engine', 'njk')
server.use(express.static('src/public'))
server.use(router)

nunjucks.configure('./src/views', {
    express:server,
    noCache:true
})

server.listen(8080, ()=>{
    console.log('Server is Running') 
}) 


