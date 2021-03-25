/**
 * Arquivo: routes/index.js
 * Descrição: Arquivo responavel pela chamada da api na aplicação no lado do Back-End
 * Data: 25/03/2021
 * Autor: Alexandre Munis <@AlexandreMunis>
 */

const express = require('express')

const router = express.Router()

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja Bem-Vindo(a) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  })
})

module.exports = router