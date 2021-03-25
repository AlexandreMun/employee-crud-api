/**
 * Arquivo: /routes/employee.routes.js
 * Descrição: Arquivo responsável pelas rotas da API
 * Data: 25/03/2021
 * Autor: Alexandre Munis <@AlexandreMunis>
 */

const router = require('express-promise-router')()
const employeeController = require('../controllers/employee.controller')

// ==> Definindo as rotas do CRUD = 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees/
router.post('/employees', employeeController.createEmployee)

// ==> Rota responsável por listar todos os 'Colaborador(a)': (GET): localhost:3000/api/employees/
router.get('/employees', employeeController.listAllEmployees)

module.exports = router