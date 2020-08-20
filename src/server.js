const express = require('express')
const server = express()

const db = require('./database/db');

// Configurar a pasta public
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

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
  return res.render('create-point.html', { saved: true })
})

server.post('/savepoint', (req, res) => {
  console.log(req.body)

  // inserir dados no banco de dados
  const query = `
      INSERT INTO places (
        name,
        image,
        address,
        address2,
        state,
        city,
        items
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?
      );  
  `
  const values = [
    req.body.name,
    req.body.image,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertDate(err) {
    if (err) {
      return console.log(err)
    }
    console.log("Cadastrado com Sucesso")
    console.log(this)
    return res.render('create-point.html', { saved: true })
  }

  db.run(query, values, afterInsertDate)
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