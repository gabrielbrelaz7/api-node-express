const port = 3004
const express = require('express')
const app = express()

const database = require('./database')

app.get('/test', (req, res, next) => {
    res.send(
        database.getTest()
    )
})


app.get('/test/:id', (req, res, next) => {
    res.send(
        database.getId(req.params.id)
    )
})


// app.get('/test/search', (req, res, next) => {
//     res.send(
//         database.getSearch('Gabriel Araujo')
//     )
// })  


app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})