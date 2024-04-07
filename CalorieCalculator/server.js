const http = require('http')
require('dotenv').config()
const port = process.env.PORT || 8080
const app = require('./app')


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
