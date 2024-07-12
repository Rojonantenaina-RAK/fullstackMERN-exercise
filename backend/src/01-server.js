const http = require('http')

require('dotenv').config()

const port = process.env.PORT || 1337

const server = http.createServer( (req,res) => {
    res.end('Hello world')
})

server.listen(port)

console.log(`Server is listening on port ${port}`)