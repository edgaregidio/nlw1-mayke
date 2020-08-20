// importando a dependencia do sqlite 3
const sqlite3 = require('sqlite3').verbose();

// criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// db.serialize(() => {

//   // com comandos SQL eu vou:
//   // 1 criar uma tabela
//   // db.run(`
//   //   CREATE TABLE IF NOT EXISTS places (
//   //     id INTEGER PRIMARY KEY AUTOINCREMENT,
//   //     name TEXT,
//   //     image TEXT,
//   //     address TEXT,
//   //     address2 TEXT,
//   //     state TEXT,
//   //     city TEXT,
//   //     items TEXT
//   //   );
//   // `)

//   // 2 inserir dados
//   // const query = `
//   //     INSERT INTO places (
//   //       name,
//   //       image,
//   //       address,
//   //       address2,
//   //       state,
//   //       city,
//   //       items
//   //     ) VALUES (
//   //       ?, ?, ?, ?, ?, ?, ?
//   //     );  
//   // `
//   // const values = [
//   //   "Papersider",
//   //   "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1461&q=80",
//   //   "Rua Gonzaga Jaime - Vila Redenção",
//   //   "Nº 321",
//   //   "Goiás",
//   //   "Goiânia",
//   //   "Resíduos Eletrônicos, Lâmpadas"
//   // ]

//   // function afterInsertDate(err) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }
//   //   console.log("Cadastrado com Sucesso")
//   //   console.log(this)
//   // }

//   // db.run(query, values, afterInsertDate)

//   // 3 consultar dados

//   // db.all(`SELECT * FROM places`, function(err, rows) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }
//   //   console.log("aqui estão seus registros")
//   //   console.log(rows)
//   // })

//   // 4 deletar dados da tabela

//   // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }
//   //   console.log("REGISTRO DELETEDO COM SUCESSO")
//   // })
// })