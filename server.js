const express = require('express')

const userRouter = require('./users/user-router.js')

const server = express()

server.use(express.json())
server.use('/api/users', userRouter)

server.get('/', (req, res) => {
    res.send('<h1>Node Server Testing Challenge</h1>')
})

module.exports = server