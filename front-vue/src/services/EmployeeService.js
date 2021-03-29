/*
* Descrição: arquivo responsável pelos métodos de requisições das Apís vi HTTP
*/

import Api from './Api';

export default {
  /* Método responsável por criar um novo(a) 'Employee'
  * (POST): localhost/3000/api/employees
  */
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees', employee);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },

  /* Método responsável por listar todos os 'Employees'
  * (GET): localhost/3000/api/employees
  */
  async getEmployees() {
    try {
      const response = await Api().get('/employees');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },

  /* Método responsável por listar por id um determinado 'Employee'
  * (GET): localhost/3000/api/employees/:id
  */
  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employees/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },

  /* Método responsável por atualizar um determinado 'Employee' por id
  * (PUT): localhost/3000/api/employees/:id
  */
  async updateEmployee(id) {
    try {
      const response = await Api().put(`/employees/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },

  /* Método responsável por excluir um determinado 'Employee' por id
  * (DELETE): localhost/3000/api/employees/:id
  */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`/employees/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },

};
