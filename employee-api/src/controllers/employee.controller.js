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
    message: 'Employee Added Successfully!!',
    body: {
      employee: { name, job_role, salary, birth, employee_registration }
    }
  })
}

// ==> Método responsável por listar todos os 'Employees':
exports.listAllEmployees = async(req, res) => {
  const response = await db.query(
    `SELECT employee_id, name, job_role, salary, employee_registration, to_char(birth, 'yyyy-MM-dd') as birth FROM employee ORDER BY name asc`
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

// ==> Método responsável por atualizar um determinador 'Employee' por ID:
exports.updateEmployeeById = async(req, res) => {
  const employeeId = req.params.id
  const { name, job_role, salary, birth, employee_registration } = req.body

  const response = await db.query(
    'UPDATE employee SET name = $1, job_role = $2, salary = $3, birth = $4, employee_registration = $5 WHERE employee_id = $6',
    [name, job_role, salary, birth, employee_registration, employeeId]
  )

  res.status(200).send({
    message: 'Employee Updated Successfully!!'

  })
}

// ==> Método responsável por excluir/deletar um determinador 'Employee' por ID:
exports.deleteEmployeeById = async(req, res) => {
  const employeeId = req.params.id
  await db.query(
    'DELETE FROM employee WHERE employee_id = $1',
    [employeeId]
  )

  res.status(200).send({
    message: 'Employee Deleted Successfully!!'
  })
}