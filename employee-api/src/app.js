/**
 * Arquivo: app.js
 * Descrição: Arquivo responsável por fazer a conexão com o arquivo server.js
 * Data: 25/03/2021
 * Autor: Alexandre Munis <@AlexandreMunis>
 */

const express = require('express')
const cors = require('cors')

const app = express()

// ==> Rotas da API (Employee)
const index = require('./routes/index')
const employeeRoute = require('./routes/employee.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd+api+json' }))
app.use(cors())

app.use(index)
app.use('/api/', employeeRoute)

module.exports = app