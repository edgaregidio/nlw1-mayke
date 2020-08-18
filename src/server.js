const express = require('express')
const server = express()

// Configurar a pasta public
server.use(express.static('public'))

// Utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Configurar caminhos da aplicação
// Paga inicial
server.get("/", (req, res) => {
  return res.render('index.html', {title: "Seu marketplace de coleta de resíduos"})
})
server.get("/create-point", (req, res) => {
  return res.render('create-point.html')
})
server.get("/search", (req, res) => {
  return res.render('search-results.html')
})
// Ligar o servidor
server.listen(3000)