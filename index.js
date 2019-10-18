require('dotenv').config()

const server = require('./server.js')

const port = process.env.PORT || 9999
server.listen(port, () => console.log(`Server Running On Port ${port}`))