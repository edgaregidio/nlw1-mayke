const express = require('express')
const server = express()

// Configurar a pasta public
server.use(express.static('public'))

// Configurar caminhos da aplicação
// Paga inicial
server.get("/", (req, res) => {
  return res.sendFile(__dirname + '/views/index.html')
})
server.get("/create-point", (req, res) => {
  return res.sendFile(__dirname + '/views/create-point.html')
})
server.get("/search-results", (req, res) => {
  return res.sendFile(__dirname + '/views/search-results.html')
})
// Ligar o servidor
server.listen(3000)