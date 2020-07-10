 /*           IMPORTS           */
const express =  require('express')

const routes  =  express.Router()

//routes
routes.get('/', (req, res)=>{
    res.render('login')
})

module.exports  = routes