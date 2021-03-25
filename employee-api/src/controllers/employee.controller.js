/**
 * Arquivo: /controllers/employee.controller.js
 * Descrição: Arquivo responsável pela lógica do CRUD (API - Employee)
 * Data: 25/03/2021
 * Autor: Alexandre Munis <@AlexandreMunis>
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Employee':
exports.createEmployee = async(req, res) => {
  const { name, job_role, salary, birth, employee_registration } = req.body
  const { rows } = await db.query(
    'INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)',
    [name, job_role, salary, birth, employee_registration]
  )

  res.status(201).send({
    message: 'Employee added successfully!!',
    body: {
      employee: { name, job_role, salary, birth, employee_registration }
    }
  })
}

// ==> Método responsável por listar todos os 'Employees':
exports.listAllEmployees = async(req, res) => {
  const response = await db.query(
  'SELECT * FROM employee ORDER BY name ASC'
  )

  res.status(201).send(response.rows)
}

// ==> Método responsável por listar um determinador 'Employee' por ID:
exports.findEmployeeById = async(req, res) => {
  const employeeId = req.params.id
  const response = await db.query(
    'SELECT * FROM employee WHERE employee_id = $1',
    [employeeId]
  )

  res.status(200).send(response.rows)
}
