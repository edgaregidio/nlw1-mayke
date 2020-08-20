const express = require('express')
const server = express()

const db = require('./database/db');

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
  return res.render('index.html', { title: "Seu marketplace de coleta de resíduos" })
})
server.get("/create-point", (req, res) => {
  return res.render('create-point.html')
})

server.get("/search", (req, res) => {

  // Consultar dados
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length

    // mostrar a pagina html com os dados do banco de dados
    return res.render('search-results.html', { places: rows, total: total })
  })
})
// Ligar o servidor
server.listen(3000)