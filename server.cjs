const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,'dist')))

app.use('/data', express.static(path.join(__dirname, 'data')))
app.listen(3000, ()=>console.log('server running 3000'))
